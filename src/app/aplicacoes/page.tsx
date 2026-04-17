import Link from "next/link";
import Image from "next/image";

export default function Aplicacoes() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      {/* Navbar (Foco no Aluno/Consumidor de Aplicações) */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-xl">
                E
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                EducaMarket
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium border-l border-slate-200 pl-6">
              <Link href="/" className="text-slate-500 hover:text-indigo-600 transition-colors">Cursos</Link>
              <Link href="/aplicacoes" className="text-indigo-600 font-semibold">Aplicações & Assets</Link>
            </nav>
          </div>
          
          <div className="hidden md:flex flex-1 max-w-sm mx-4">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="Buscar plugins, templates..." 
                className="w-full bg-slate-100 border-none rounded-full py-2 pl-4 pr-10 text-sm focus:ring-2 focus:ring-indigo-600 outline-none"
              />
              <svg className="absolute right-3 top-2.5 h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
              Entrar
            </Link>
            <Link href="/carrinho" className="text-slate-600 hover:text-indigo-600 transition-colors relative">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 mt-16 flex flex-col items-center justify-center pt-20 pb-16 px-4">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
              Marketplace de Ferramentas
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Plugins, templates e <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">ativos digitais</span> para o seu software.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Expanda os limites das ferramentas que você já usa na grande indústria. Encontre aplicativos Desktop, plugins, assets e templates validados pela nossa comunidade de especialistas.
            </p>

            <div className="flex gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold text-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/30">
                Ver Destaques
              </button>
            </div>
          </div>
          
          <div className="hidden md:grid grid-cols-2 gap-4 relative">
            <div className="space-y-4 pt-12">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-48 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 font-bold">P</div>
                <div><h3 className="font-bold">Plugins p/ CAD/BIM</h3><p className="text-sm text-slate-500">240+ disponíveis</p></div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-48 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center text-rose-600 font-bold">T</div>
                <div><h3 className="font-bold">Templates Oficiais</h3><p className="text-sm text-slate-500">1.200+ arquivos</p></div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-48 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold">D</div>
                <div><h3 className="font-bold">Apps Desktop</h3><p className="text-sm text-slate-500">85+ softwares</p></div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-48 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 font-bold">A</div>
                <div><h3 className="font-bold">Assets & Objetos</h3><p className="text-sm text-slate-500">10k+ modelos 3D/2D</p></div>
              </div>
            </div>
          </div>
        </div>

        {/* Vitrine de Aplicações */}
        <div className="mt-24 w-full max-w-7xl mx-auto text-left">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Adicionados Recentemente</h2>
            <div className="flex gap-2">
              <span className="px-4 py-1.5 bg-slate-900 text-white text-sm rounded-full cursor-pointer">Todos</span>
              <span className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 text-sm rounded-full cursor-pointer hover:bg-slate-50">Plugins</span>
              <span className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 text-sm rounded-full cursor-pointer hover:bg-slate-50">Assets</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all cursor-pointer">
                <div className="aspect-[4/3] bg-slate-100 relative w-full overflow-hidden flex items-center justify-center">
                  <svg className="w-16 h-16 text-slate-300 group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-xs font-semibold px-2 py-1 rounded shadow-sm z-20 text-indigo-600 border border-indigo-100">
                    {i % 2 === 0 ? 'PLUGIN' : 'TEMPLATE'}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors line-clamp-1">
                    AutoExporter Pro v2.{i}
                  </h3>
                  <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                    Automatize a exportação de dezenas de pranchas PDF no seu software base com apenas um clique.
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                    <span className="text-slate-900 font-bold text-lg">R$ 49,90</span>
                    <button className="text-indigo-600 bg-indigo-50 hover:bg-indigo-100 p-2 rounded-lg transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

    </div>
  );
}
