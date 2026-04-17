import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

/**
 * ROTA DE CADASTRO DE ALUNO
 * POST /api/auth/register
 *
 * Recebe: { name, email, password }
 * Cria o usuário com role ALUNO e status ACTIVE.
 */
export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Preencha todos os campos obrigatórios.' },
        { status: 400 }
      );
    }

    // Verifica e-mail duplicado
    const existente = await prisma.user.findUnique({ where: { email } });
    if (existente) {
      return NextResponse.json(
        { error: 'Este e-mail já está cadastrado.' },
        { status: 409 }
      );
    }

    // Hash da senha (custo 12 = bom equilíbrio segurança/performance)
    const passwordHash = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
        role:   'ALUNO',
        status: 'ACTIVE',
      },
      select: { id: true, name: true, email: true, role: true },
    });

    return NextResponse.json(
      { message: 'Conta criada com sucesso!', user },
      { status: 201 }
    );
  } catch (error) {
    console.error('[Register API] Erro:', error);
    return NextResponse.json({ error: 'Erro interno.' }, { status: 500 });
  }
}
