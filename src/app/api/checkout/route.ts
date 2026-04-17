import { NextRequest, NextResponse } from 'next/server';
import { criarTransacaoComSplit } from '@/lib/ipag';

/**
 * ROTA DE CHECKOUT — POST /api/checkout
 *
 * Recebe os dados do formulário de compra, chama a Ipag e
 * retorna o resultado (aprovado, QR PIX, URL boleto ou erro).
 *
 * Regra de split: plataforma fica com 15%, criador recebe 85%.
 * O ID do criador na Ipag (recipientId) vem do banco de dados
 * buscado pelo produtoId enviado no body.
 */

// Comissão da plataforma EducaMarket
const COMISSAO_PLATAFORMA = 0.15;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      metodo,        // 'credit' | 'pix' | 'boleto'
      produtoId,     // ID do produto comprado
      valor,         // valor em centavos
      comprador,     // { nome, cpf, email }
      cartao,        // opcional, apenas para crédito
      pedidoId,      // ID único gerado pelo front-end (UUID)
    } = body;

    // --- Validação mínima ---
    if (!metodo || !produtoId || !valor || !comprador || !pedidoId) {
      return NextResponse.json(
        { error: 'Dados incompletos no body da requisição.' },
        { status: 400 }
      );
    }

    // --- Busca o recipientId do criador no banco (TODO: integrar Prisma) ---
    // Exemplo hardcoded para demonstração:
    const criadorRecipientId = process.env.IPAG_RECIPIENT_TEST ?? 'recipient_exemplo';
    const valorCriador = Math.round(valor * (1 - COMISSAO_PLATAFORMA));

    // --- Chama a Ipag com Split ---
    const resultado = await criarTransacaoComSplit(
      {
        metodo,
        valor,
        pedidoId,
        comprador,
        cartao,
      },
      [
        {
          recipientId: criadorRecipientId,
          amount: valorCriador,
        },
      ]
    );

    return NextResponse.json(resultado, { status: 200 });

  } catch (error) {
    console.error('[Checkout API] Erro:', error);
    return NextResponse.json({ error: 'Erro interno no servidor.' }, { status: 500 });
  }
}
