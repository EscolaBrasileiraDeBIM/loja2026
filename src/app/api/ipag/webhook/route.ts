import { NextRequest, NextResponse } from 'next/server';
import { consultarTransacao } from '@/lib/ipag';

/**
 * WEBHOOK DA IPAG — Rota: POST /api/ipag/webhook
 *
 * A Ipag chama este endpoint automaticamente sempre que o status
 * de uma transação muda (ex: PIX pago, Boleto compensado, estorno).
 *
 * O que este webhook faz:
 * 1. Verifica a autenticidade do payload
 * 2. Lê o status recebido
 * 3. Se aprovado → libera o acesso do aluno ao produto comprado
 * 4. Se estornado → revoga o acesso
 *
 * TODO (Fase 2):
 * - Conectar ao banco de dados (PostgreSQL via Prisma) para salvar
 *   a transação e atualizar o acesso do aluno na tabela `enrollments`
 */

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();

    // Validação básica do payload
    if (!payload?.id || !payload?.status) {
      return NextResponse.json(
        { error: 'Payload inválido' },
        { status: 400 }
      );
    }

    const transacaoId: string = payload.id;
    const status: string      = payload.status;      // 'approved', 'canceled', etc.
    const pedidoId: string    = payload.orderId;     // ID do pedido na nossa plataforma

    console.log(`[IPAG Webhook] Transação ${transacaoId} | Status: ${status} | Pedido: ${pedidoId}`);

    // Consulta dupla para confirmar (evita payloads forjados)
    const confirmacao = await consultarTransacao(transacaoId);

    if (confirmacao.status === 'approved') {
      // TODO: Liberar acesso ao produto na tabela `enrollments`
      // await db.enrollment.upsert({ where: { orderId: pedidoId }, ... });
      console.log(`[IPAG Webhook] ✅ Acesso liberado para pedido ${pedidoId}`);
    }

    if (confirmacao.status === 'canceled' || confirmacao.status === 'refunded') {
      // TODO: Revogar acesso ao produto
      // await db.enrollment.update({ where: { orderId: pedidoId }, data: { active: false } });
      console.log(`[IPAG Webhook] ❌ Acesso revogado para pedido ${pedidoId}`);
    }

    return NextResponse.json({ received: true }, { status: 200 });

  } catch (error) {
    console.error('[IPAG Webhook] Erro ao processar:', error);
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}
