import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      {/* Navbar (Foco no Aluno/Consumidor) */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-xl">
              E
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
              EducaMarket
            </span>
          </div>
          
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="O que você quer aprender hoje?" 
                className="w-full bg-slate-100 border-none rounded-full py-2 pl-4 pr-10 text-sm focus:ring-2 focus:ring-indigo-600 outline-none"
              />
              <svg className="absolute right-3 top-2.5 h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <Link href="#categorias" className="hover:text-indigo-600 transition-colors">Categorias</Link>
            <Link href="#aovivo" className="hover:text-indigo-600 transition-colors">Aulas ao Vivo</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
              Entrar
            </Link>
            <Link href="/cadastro" className="text-sm font-medium bg-indigo-600 text-white px-5 py-2.5 rounded-full hover:bg-indigo-700 transition shadow-sm hover:shadow-md">
              Cadastre-se
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section (Foco no Aluno) */}
      <main className="flex-1 mt-16 flex flex-col items-center justify-center pt-24 pb-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-sm font-medium mb-2">
            <span className="flex h-2 w-2 rounded-full bg-green-600 animate-pulse"></span>
            Aprenda no seu ritmo
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            As melhores habilidades, <br className="hidden md:block"/>
            ensinadas pelos <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">melhores especialistas.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mt-6">
            Acesse cursos online em vídeo, participe de aulas interativas ao vivo e obtenha materiais didáticos exclusivos para acelerar sua carreira.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold text-lg hover:bg-indigo-700 hover:scale-105 transition-all shadow-lg hover:shadow-indigo-500/30">
              Explorar Catálogo
            </button>
          </div>
        </div>

        {/* Trilha de Cursos */}
        <div className="mt-24 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Cursos mais populares</h2>
            <Link href="/cursos" className="text-indigo-600 font-semibold hover:underline">Ver todos →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all cursor-pointer">
                <div className="aspect-video bg-slate-100 relative w-full overflow-hidden">
                  <div className="w-full h-full bg-slate-200 group-hover:scale-105 transition-transform duration-500"></div>
                  {i % 2 === 0 && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] uppercase font-bold px-2 py-1 rounded shadow-sm z-20 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span> Ao Vivo
                    </span>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-xs font-semibold text-indigo-600 mb-2 drop-shadow-sm">PROGRAMAÇÃO & TI</span>
                  <h3 className="font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    Desenvolvimento Web Completo {i}
                  </h3>
                  <p className="text-slate-500 text-sm mb-4">Prof. Matheus Silva</p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                    <span className="text-slate-900 font-bold text-lg">R$ 197,00</span>
                    <div className="flex items-center text-amber-500 text-sm font-medium">
                      ★ 4.8 
                      <span className="text-slate-400 text-xs ml-1">(120)</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer minimalista indicando rota de professores */}
      <footer className="w-full border-t border-slate-200 bg-white py-12 mt-16 text-center">
        <p className="text-slate-600 mb-4">Você é um especialista em sua área?</p>
        <Link href="/professores" className="font-semibold text-indigo-600 hover:text-indigo-800 transition">
          Conheça nossa plataforma para Criadores de Conteúdo →
        </Link>
      </footer>
    </div>
  );
}
