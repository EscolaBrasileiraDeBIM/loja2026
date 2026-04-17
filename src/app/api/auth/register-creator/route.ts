import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

/**
 * ROTA DE CADASTRO DE CRIADOR
 * POST /api/auth/register-creator
 *
 * Recebe: { name, email, password, cpfCnpj, especialidade, tiposProduto[] }
 * Cria o usuário com role CRIADOR e status PENDING_APPROVAL.
 * O admin deverá aprovar antes de o criador poder publicar produtos.
 */
export async function POST(request: NextRequest) {
  try {
    const {
      name,
      email,
      password,
      cpfCnpj,
      especialidade,
    } = await request.json();

    if (!name || !email || !password || !cpfCnpj) {
      return NextResponse.json(
        { error: 'Preencha todos os campos obrigatórios.' },
        { status: 400 }
      );
    }

    const existente = await prisma.user.findUnique({ where: { email } });
    if (existente) {
      return NextResponse.json(
        { error: 'Este e-mail já está cadastrado.' },
        { status: 409 }
      );
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
        cpfCnpj,
        especialidade,
        role:   'CRIADOR',
        status: 'PENDING_APPROVAL', // aguarda aprovação do admin
      },
      select: { id: true, name: true, email: true, role: true, status: true },
    });

    return NextResponse.json(
      {
        message: 'Cadastro enviado! Aguarde a aprovação da equipe EducaMarket (até 48h úteis).',
        user,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('[Register Creator API] Erro:', error);
    return NextResponse.json({ error: 'Erro interno.' }, { status: 500 });
  }
}
