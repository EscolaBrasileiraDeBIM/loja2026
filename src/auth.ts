import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

/**
 * CONFIGURAÇÃO NEXTAUTH v5 (Beta)
 * 
 * Provedores suportados:
 *  1. Google OAuth — login com conta Google
 *  2. Credentials — e-mail + senha (hash bcrypt no banco)
 *
 * Papéis (role) são lidos do banco e incluídos na sessão JWT
 * para que o middleware de proteção de rotas funcione corretamente.
 */

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),

  providers: [
    // ── GOOGLE OAUTH ───────────────────────────────────────────
    Google({
      clientId:     process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),

    // ── E-MAIL + SENHA (Credentials) ──────────────────────────
    Credentials({
      name: 'credentials',
      credentials: {
        email:    { label: 'E-mail',  type: 'email' },
        password: { label: 'Senha',   type: 'password' },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string },
        });

        if (!user || !user.passwordHash) return null;

        const senhaCorreta = await bcrypt.compare(
          credentials.password as string,
          user.passwordHash
        );

        if (!senhaCorreta) return null;

        // Bloqueia usuários com status não-ativo
        if (user.status !== 'ACTIVE') return null;

        return {
          id:    user.id,
          name:  user.name,
          email: user.email,
          role:  user.role,
        };
      },
    }),
  ],

  session: { strategy: 'jwt' },

  callbacks: {
    // ── Injeta o papel (role) e o id no token JWT ──────────────
    async jwt({ token, user }) {
      if (user) {
        token.id   = user.id;
        token.role = (user as any).role;
      }
      return token;
    },

    // ── Expõe o papel e o id na sessão do cliente ──────────────
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id   = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },

  pages: {
    signIn:  '/login',
    error:   '/login',
  },
});
