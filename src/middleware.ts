import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * MIDDLEWARE DE AUTENTICAÇÃO E CONTROLE DE ACESSO POR PAPEL (ROLE)
 *
 * Este middleware roda em Edge Runtime antes de cada request.
 * Ele verifica o cookie de sessão e redireciona o usuário
 * para a rota correta caso não tenha permissão.
 *
 * Papéis (roles) suportados:
 *  - 'aluno'       → acessa /meus-cursos e /checkout/* 
 *  - 'criador'     → acessa /painel/* (após aprovação pelo admin)
 *  - 'super_admin' → acessa /admin/*
 *
 * TODO (Fase 2): Substituir o cookie manual pelo token JWT
 * emitido pelo NextAuth.js (ou Supabase Auth).
 */

// Rotas protegidas e os papéis que podem acessá-las
const protectedRoutes: Record<string, string[]> = {
  '/admin':        ['super_admin', 'moderador'],
  '/painel':       ['criador', 'super_admin'],
  '/meus-cursos':  ['aluno', 'criador', 'super_admin'],
  '/checkout':     ['aluno', 'criador'],
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ler o "papel" do usuário do cookie de sessão
  // Em produção, este cookie será um JWT assinado pelo servidor
  const sessionRole = request.cookies.get('session_role')?.value ?? null;

  // Descobrir qual grupo de rotas protegidas se aplica
  const matchedRoute = Object.keys(protectedRoutes).find((route) =>
    pathname.startsWith(route)
  );

  if (!matchedRoute) {
    // Rota pública — deixa passar
    return NextResponse.next();
  }

  // Sem sessão → redireciona para login
  if (!sessionRole) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Com sessão mas sem o papel correto → 403 (redireciona para home)
  const allowedRoles = protectedRoutes[matchedRoute];
  if (!allowedRoles.includes(sessionRole)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

// Aplica o middleware somente nessas rotas
export const config = {
  matcher: [
    '/admin/:path*',
    '/painel/:path*',
    '/meus-cursos/:path*',
    '/checkout/:path*',
  ],
};
