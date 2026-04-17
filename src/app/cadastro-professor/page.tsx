import Link from 'next/link';

export default function CadastroProfessor() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center font-sans px-4 py-12">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="relative w-full max-w-lg">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">E</div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">EducaMarket</span>
          </Link>
          <div className="inline-flex items-center gap-2 mt-4 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm">
            Conta de Criador / Parceiro
          </div>
          <h1 className="text-white text-2xl font-bold mt-3">Torne-se um Criador</h1>
          <p className="text-slate-400 text-sm mt-2">Sua conta passará por validação manual antes de ser ativada.</p>
        </div>

        {/* Card */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-2xl">
          <form className="space-y-5" noValidate>
            {/* Grid 2 colunas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Nome</label>
                <input id="cadastro-criador-nome" type="text" placeholder="Seu primeiro nome"
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Sobrenome</label>
                <input id="cadastro-criador-sobrenome" type="text" placeholder="Sobrenome"
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition" />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">E-mail Profissional</label>
              <input id="cadastro-criador-email" type="email" placeholder="seu@empresa.com.br"
                className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition" />
            </div>

            {/* CPF/CNPJ */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">CPF ou CNPJ</label>
              <input id="cadastro-criador-documento" type="text" placeholder="Para emissão de notas e repasses (Ipag)"
                className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition" />
            </div>

            {/* Especialidade */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Área de Especialidade</label>
              <select id="cadastro-criador-especialidade"
                className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition">
                <option value="">Selecione sua área principal...</option>
                <option>BIM (Revit, ArchiCAD, etc.)</option>
                <option>CAD (AutoCAD, Civil 3D, SolidWorks)</option>
                <option>Renderização & Visualização 3D</option>
                <option>Programação & Automação (Dynamo, GH)</option>
                <option>Gestão de Projetos (PMBOK, BIM para Gestão)</option>
                <option>Desenvolvimento de Plugins / Software</option>
                <option>Templates & Assets Digitais</option>
                <option>Outra</option>
              </select>
            </div>

            {/* Tipo de Produto */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-3">O que pretende vender? (pode marcar mais de um)</label>
              <div className="space-y-2">
                {['Cursos Online Gravados', 'Cursos Online ao Vivo (G-Meet)', 'Plugins para Software', 'Apps para Desktop', 'Templates e Assets'].map((opt) => (
                  <label key={opt} className="flex items-center gap-3 text-sm text-slate-300 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-cyan-500 rounded" />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            {/* Senha */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Senha</label>
                <input id="cadastro-criador-senha" type="password" placeholder="••••••••"
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Confirmar Senha</label>
                <input id="cadastro-criador-senha-confirm" type="password" placeholder="••••••••"
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition" />
              </div>
            </div>

            {/* Info de validação */}
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg px-4 py-3 text-amber-300 text-xs">
              ⚠️ Sua conta de Criador precisará ser aprovada pelo time EducaMarket antes de você poder publicar produtos. Normalmente isso leva até 48 horas úteis.
            </div>

            {/* Termos */}
            <div className="flex items-start gap-3">
              <input id="cadastro-criador-termos" type="checkbox" className="mt-1 w-4 h-4 accent-cyan-500 rounded" />
              <label htmlFor="cadastro-criador-termos" className="text-slate-400 text-sm">
                Concordo com os{' '}
                <Link href="/termos" className="text-cyan-400 hover:underline">Termos para Criadores</Link>
                {' '}e autorizo o repasse automático via{' '}
                <Link href="/ipag" className="text-cyan-400 hover:underline">Ipag</Link>
              </label>
            </div>

            {/* Botão */}
            <button id="cadastro-criador-submit" type="submit"
              className="w-full bg-cyan-600 text-white py-3 rounded-lg font-semibold text-sm hover:bg-cyan-500 transition-all shadow-lg hover:shadow-cyan-500/20">
              Enviar Cadastro para Validação
            </button>
          </form>
        </div>

        <p className="text-center text-slate-500 text-sm mt-6">
          Já tem conta?{' '}
          <Link href="/login" className="text-indigo-400 hover:text-indigo-300 font-medium transition">Faça login</Link>
          {' '}· É Aluno?{' '}
          <Link href="/cadastro" className="text-indigo-400 hover:text-indigo-300 font-medium transition">Cadastre-se aqui</Link>
        </p>
      </div>
    </div>
  );
}
