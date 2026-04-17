import { handlers } from '@/auth';

/**
 * ROTA DE AUTENTICAÇÃO NEXTAUTH
 * Rota: /api/auth/[...nextauth]
 *
 * Esta rota captura todos os endpoints do NextAuth automaticamente:
 *  GET  /api/auth/session
 *  POST /api/auth/signin
 *  POST /api/auth/signout
 *  GET  /api/auth/csrf
 *  GET  /api/auth/providers
 *  GET  /api/auth/callback/google
 *  etc.
 */
export const { GET, POST } = handlers;
