import Link from "next/link";

export default function Professores() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col font-sans text-white">
      {/* Navbar (Foco no Professor/Criador) */}
      <header className="w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white font-bold text-xl">
                E
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
                EducaMarket
              </span>
            </Link>
            <span className="ml-2 text-sm text-slate-400 font-medium px-2 py-0.5 rounded border border-slate-700 bg-slate-800">For Creators</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <Link href="#recursos" className="hover:text-indigo-400 transition-colors">Recursos</Link>
            <Link href="#precos" className="hover:text-indigo-400 transition-colors">Taxas</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Entrar
            </Link>
            <Link href="/cadastro-professor" className="text-sm font-medium bg-white text-slate-900 px-5 py-2.5 rounded-full hover:bg-slate-200 transition shadow-sm hover:shadow-md">
              Criar Conta Grátis
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section (Foco no Professor) */}
      <main className="flex-1 flex flex-col items-center pt-24 pb-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-2">
            <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
            Plataforma All-in-One para Educadores
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Transforme seu <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              conhecimento em um negócio
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mt-6">
            A infraestrutura completa para você hospedar e vender seus cursos e também suas <span className="font-bold text-white">Aplicações (Plugins, Apps Desktop, Assets e Templates)</span>. Receba pagamentos por PIX, Boleto e Cartão de Crédito via Ipag.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold text-lg hover:bg-indigo-500 transition-all shadow-lg hover:shadow-indigo-500/20">
              Começar a Ensinar Agora
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border border-slate-700 rounded-full font-semibold text-lg hover:bg-slate-800 transition-all">
              Falar com um Consultor
            </button>
          </div>
        </div>

        {/* Features da Plataforma para Profs */}
        <div className="mt-32 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Tudo o que você precisa para decolar</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Esqueça a dor de cabeça de configurar dezenas de ferramentas. Nossa plataforma entrega a experiência perfeita financeira e educacional.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl hover:bg-slate-800 transition-colors">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 text-indigo-400">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Hospedagem de Aulas Gravadas</h3>
              <p className="text-slate-400">Faça o upload de seus vídeos, arquivos em PDF, planilhas e apresentações em alta resolução sem se preocupar com limites (proteção anti-pirataria incluída).</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl hover:bg-slate-800 transition-colors">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 text-cyan-400">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Integração nativa com G-Meet</h3>
              <p className="text-slate-400">Crie cursos ao vivo e deixe que a plataforma gere automaticamente salas privadas do Google Meet para os alunos inscritos, tudo sincronizado com seu Google Calendar.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl hover:bg-slate-800 transition-colors">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 text-emerald-400">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Checkout Transparente (Ipag)</h3>
              <p className="text-slate-400">Os alunos pagam direto na plataforma por PIX, Boleto ou Cartão. Split de pagamento nativo e liberação imediata de acesso pós-pagamento.</p>
            </div>

            {/* Feature 4 (Novidade) */}
            <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl hover:bg-slate-800 transition-colors">
              <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 text-blue-400">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Venda de Aplicações</h3>
              <p className="text-slate-400">Vá além das aulas. Use a mesma plataforma e gestão para vender o download de seus Plugins de BIM/CAD, Apps para Desktop, Templates e Assets 3D.</p>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}
