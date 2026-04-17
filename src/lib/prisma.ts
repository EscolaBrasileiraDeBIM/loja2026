import { PrismaClient } from '@prisma/client';

/**
 * CLIENTE PRISMA SINGLETON
 *
 * Em desenvolvimento, o Next.js faz hot-reload e criaria múltiplas
 * instâncias do PrismaClient. Este padrão singleton garante que
 * apenas uma instância seja criada em toda a aplicação.
 */

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development'
      ? ['query', 'error', 'warn']
      : ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
