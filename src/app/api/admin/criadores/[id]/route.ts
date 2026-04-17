import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

/**
 * ROTA DE APROVAÇÃO/REJEIÇÃO DE CRIADOR (Admin)
 * PATCH /api/admin/criadores/[id]
 *
 * Body: { action: 'approve' | 'reject' | 'block' }
 * Atualiza o status do criador conforme a ação do admin.
 */
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { action } = await request.json();
    const { id } = params;

    const statusMap: Record<string, string> = {
      approve: 'ACTIVE',
      reject:  'BLOCKED',
      block:   'BLOCKED',
    };

    if (!statusMap[action]) {
      return NextResponse.json(
        { error: 'Ação inválida. Use: approve, reject ou block.' },
        { status: 400 }
      );
    }

    const user = await prisma.user.update({
      where: { id },
      data:  { status: statusMap[action] as any },
      select: { id: true, name: true, email: true, status: true, role: true },
    });

    const mensagens: Record<string, string> = {
      approve: `Criador ${user.name} aprovado com sucesso.`,
      reject:  `Criador ${user.name} rejeitado.`,
      block:   `Criador ${user.name} bloqueado.`,
    };

    return NextResponse.json({ message: mensagens[action], user });
  } catch (error) {
    console.error('[Admin Criadores API] Erro:', error);
    return NextResponse.json({ error: 'Erro interno.' }, { status: 500 });
  }
}

/**
 * GET /api/admin/criadores — lista todos os criadores
 */
export async function GET() {
  const criadores = await prisma.user.findMany({
    where:   { role: 'CRIADOR' },
    orderBy: { createdAt: 'desc' },
    select: {
      id: true, name: true, email: true,
      status: true, especialidade: true, createdAt: true,
      _count: { select: { products: true } },
    },
  });

  return NextResponse.json(criadores);
}
