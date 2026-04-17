import Link from 'next/link';

export default function Login() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center font-sans px-4">
      {/* Background grid decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
      
      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">E</div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">EducaMarket</span>
          </Link>
          <h1 className="text-white text-2xl font-bold mt-6">Bem-vindo de volta</h1>
          <p className="text-slate-400 text-sm mt-2">Entre na sua conta para continuar</p>
        </div>

        {/* Card */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-2xl">
          <form className="space-y-5" noValidate>
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">E-mail</label>
              <input
                id="login-email"
                type="email"
                autoComplete="email"
                placeholder="seu@email.com.br"
                className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              />
            </div>

            {/* Senha */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-slate-300">Senha</label>
                <Link href="/esqueci-senha" className="text-xs text-indigo-400 hover:text-indigo-300 transition">
                  Esqueci minha senha
                </Link>
              </div>
              <input
                id="login-password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              />
            </div>

            {/* Botão */}
            <button
              id="login-submit"
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold text-sm hover:bg-indigo-500 transition-all shadow-lg hover:shadow-indigo-500/20 mt-2"
            >
              Entrar na Plataforma
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-4">
              <div className="flex-1 h-px bg-slate-700" />
              <span className="text-slate-500 text-xs">ou</span>
              <div className="flex-1 h-px bg-slate-700" />
            </div>

            {/* Google OAuth (futuro) */}
            <button
              type="button"
              className="w-full bg-white text-slate-800 py-3 rounded-lg font-semibold text-sm hover:bg-slate-100 transition flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Entrar com Google
            </button>
          </form>
        </div>

        {/* Rodapé */}
        <p className="text-center text-slate-500 text-sm mt-6">
          Não tem conta?{' '}
          <Link href="/cadastro" className="text-indigo-400 hover:text-indigo-300 font-medium transition">
            Cadastre-se como Aluno
          </Link>
          {' '}ou{' '}
          <Link href="/cadastro-professor" className="text-cyan-400 hover:text-cyan-300 font-medium transition">
            como Criador
          </Link>
        </p>
      </div>
    </div>
  );
}
