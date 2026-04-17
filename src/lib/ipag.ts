/**
 * SERVIÇO DE INTEGRAÇÃO COM A API DA IPAG
 *
 * Documentação oficial: https://docs.ipag.com.br
 *
 * Este arquivo centraliza toda comunicação com a Ipag.
 * As credenciais devem ser configuradas como variáveis de ambiente
 * no arquivo .env.local:
 *
 *   IPAG_API_ID=seu_api_id_aqui
 *   IPAG_API_KEY=sua_api_key_aqui
 *   IPAG_URL=https://sandbox.ipag.com.br  (usar sandbox para testes)
 *
 * Em produção, substituir IPAG_URL por: https://api.ipag.com.br
 */

const IPAG_URL = process.env.IPAG_URL ?? 'https://sandbox.ipag.com.br';
const IPAG_API_ID = process.env.IPAG_API_ID ?? '';
const IPAG_API_KEY = process.env.IPAG_API_KEY ?? '';

// Header de autenticação Basic Auth (base64 de "api_id:api_key")
function getAuthHeader(): string {
  const credentials = Buffer.from(`${IPAG_API_ID}:${IPAG_API_KEY}`).toString('base64');
  return `Basic ${credentials}`;
}

// -------------------------------------------------------------------
// TIPOS
// -------------------------------------------------------------------

export type MetodoPagamento = 'credit' | 'pix' | 'boleto';

export interface DadosComprador {
  nome: string;
  cpf: string;        // somente dígitos: "01234567890"
  email: string;
  telefone?: string;
}

export interface DadosCartao {
  numero: string;     // somente dígitos
  titular: string;
  validade: string;   // formato: "MM/AA"
  cvv: string;
  parcelas: number;
}

export interface CriarTransacaoInput {
  metodo: MetodoPagamento;
  valor: number;         // em centavos (ex: R$ 297,00 → 29700)
  pedidoId: string;      // ID único do pedido na sua plataforma
  comprador: DadosComprador;
  cartao?: DadosCartao;  // obrigatório se metodo === 'credit'
}

export interface RespostaTransacao {
  transacaoId: string;
  status: 'approved' | 'pending' | 'declined' | 'error';
  pixQrCode?: string;    // retornado quando metodo === 'pix'
  pixChave?: string;
  boletoUrl?: string;    // retornado quando metodo === 'boleto'
  mensagem: string;
}

// -------------------------------------------------------------------
// CRIAR TRANSAÇÃO (endpoint principal de cobrança)
// -------------------------------------------------------------------

export async function criarTransacao(
  dados: CriarTransacaoInput
): Promise<RespostaTransacao> {
  const body: Record<string, unknown> = {
    amount:     dados.valor,
    callback_url: `${process.env.NEXT_PUBLIC_APP_URL}/api/ipag/webhook`,
    orderId:    dados.pedidoId,
    customer: {
      name:     dados.comprador.nome,
      cpf_cnpj: dados.comprador.cpf,
      email:    dados.comprador.email,
      phone:    dados.comprador.telefone ?? '',
    },
    payment: {
      type: dados.metodo,  // 'credit' | 'pix' | 'boleto'
    },
  };

  // Dados do cartão (apenas para crédito)
  if (dados.metodo === 'credit' && dados.cartao) {
    body.payment = {
      type:         'credit',
      installments: dados.cartao.parcelas,
      card: {
        number:       dados.cartao.numero.replace(/\s/g, ''),
        holder:       dados.cartao.titular,
        expiration:   dados.cartao.validade.replace('/', ''),
        cvv:          dados.cartao.cvv,
      },
    };
  }

  const response = await fetch(`${IPAG_URL}/service/payment`, {
    method:  'POST',
    headers: {
      'Authorization': getAuthHeader(),
      'Content-Type':  'application/json',
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  if (!response.ok) {
    return {
      transacaoId: '',
      status: 'error',
      mensagem: data?.message ?? 'Erro ao processar pagamento com a Ipag.',
    };
  }

  return {
    transacaoId: data.id ?? '',
    status:      data.status ?? 'error',
    pixQrCode:   data?.pix?.qrcode ?? undefined,
    pixChave:    data?.pix?.link ?? undefined,
    boletoUrl:   data?.boleto?.url ?? undefined,
    mensagem:    data.message ?? 'Transação processada.',
  };
}

// -------------------------------------------------------------------
// CONSULTAR STATUS DE TRANSAÇÃO
// -------------------------------------------------------------------

export async function consultarTransacao(transacaoId: string): Promise<{
  status: string;
  mensagem: string;
}> {
  const response = await fetch(`${IPAG_URL}/service/payment/${transacaoId}`, {
    method: 'GET',
    headers: { 'Authorization': getAuthHeader() },
  });

  const data = await response.json();
  return { status: data.status ?? 'unknown', mensagem: data.message ?? '' };
}

// -------------------------------------------------------------------
// SPLIT DE PAGAMENTO (repasse ao criador)
// Documentação: https://docs.ipag.com.br/#split-de-pagamentos
// -------------------------------------------------------------------

export interface SplitItem {
  recipientId: string;   // ID do criador cadastrado na Ipag
  amount:      number;   // valor em centavos que o criador irá receber
}

export async function criarTransacaoComSplit(
  dados: CriarTransacaoInput,
  splits: SplitItem[]
): Promise<RespostaTransacao> {
  // Monta o body base e injeta os splits
  const splitPayload = splits.map((s) => ({
    recipient_id: s.recipientId,
    amount:       s.amount,
  }));

  const body: Record<string, unknown> = {
    amount:       dados.valor,
    callback_url: `${process.env.NEXT_PUBLIC_APP_URL}/api/ipag/webhook`,
    orderId:      dados.pedidoId,
    splits:       splitPayload,   // <-- campo de split da Ipag
    customer: {
      name:     dados.comprador.nome,
      cpf_cnpj: dados.comprador.cpf,
      email:    dados.comprador.email,
    },
    payment: { type: dados.metodo },
  };

  const response = await fetch(`${IPAG_URL}/service/payment`, {
    method:  'POST',
    headers: {
      'Authorization': getAuthHeader(),
      'Content-Type':  'application/json',
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  return {
    transacaoId: data.id ?? '',
    status:      data.status ?? 'error',
    pixQrCode:   data?.pix?.qrcode,
    pixChave:    data?.pix?.link,
    boletoUrl:   data?.boleto?.url,
    mensagem:    data.message ?? '',
  };
}
