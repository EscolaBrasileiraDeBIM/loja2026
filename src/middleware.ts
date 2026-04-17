import { auth } from '@/auth';
import { NextResponse } from 'next/server';

/**
 * MIDDLEWARE DE AUTENTICAÇÃO (NextAuth v5)
 *
 * Usa a sessão JWT do NextAuth para proteger rotas por papel (role).
 *
 * Papéis suportados:
 *  ALUNO        → /meus-cursos, /checkout
 *  CRIADOR      → /painel (apenas se status === ACTIVE)
 *  MODERADOR    → /admin
 *  SUPER_ADMIN  → /admin
 */
export default auth((req) => {
  const { pathname } = req.nextUrl;
  const role = (req.auth?.user as any)?.role as string | undefined;

  // Rotas do Admin → apenas SUPER_ADMIN e MODERADOR
  if (pathname.startsWith('/admin')) {
    if (!role || !['SUPER_ADMIN', 'MODERADOR'].includes(role)) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  // Painel do Criador → apenas CRIADOR e SUPER_ADMIN
  if (pathname.startsWith('/painel')) {
    if (!role || !['CRIADOR', 'SUPER_ADMIN'].includes(role)) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  // Área do Aluno → qualquer usuário autenticado
  if (pathname.startsWith('/meus-cursos') || pathname.startsWith('/checkout')) {
    if (!req.auth) {
      const loginUrl = new URL('/login', req.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    '/admin/:path*',
    '/painel/:path*',
    '/meus-cursos/:path*',
    '/checkout/:path*',
  ],
};
