import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      {/* Navbar (Top Bar) */}
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
          
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <Link href="#cursos" className="hover:text-indigo-600 transition-colors">Cursos Online</Link>
            <Link href="#aovivo" className="hover:text-indigo-600 transition-colors">Aulas ao Vivo</Link>
            <Link href="#professores" className="hover:text-indigo-600 transition-colors">Para Professores</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link 
              href="/login" 
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
            >
              Entrar
            </Link>
            <Link 
              href="/cadastro" 
              className="text-sm font-medium bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition shadow-sm hover:shadow-md"
            >
              Começar Agora
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 mt-16 flex flex-col items-center justify-center pt-24 pb-16 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium mb-4">
            <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
            A plataforma para os melhores educadores
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            Venda seus cursos e <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              transforme vidas.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Hospede vídeos, PDFs e questionários. Crie aulas ao vivo integradas ao Google Meet. 
            Tudo em um único lugar, com pagamentos automáticos (PIX, Boleto e Cartão).
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold text-lg hover:bg-indigo-700 hover:scale-105 transition-all shadow-lg hover:shadow-indigo-500/30">
              Explorar Cursos
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-semibold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Ver Demonstração
            </button>
          </div>
        </div>

        {/* Cursos Em Destaque (Mock) */}
        <div className="mt-24 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <h2 className="text-2xl font-bold mb-8">Cursos em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all cursor-pointer">
                <div className="aspect-video bg-slate-100 relative w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent z-10"></div>
                  {/* Placeholder Div simulating an image */}
                  <div className="w-full h-full bg-slate-200 group-hover:scale-105 transition-transform duration-500"></div>
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-bold px-2 py-1 rounded z-20">
                    {i === 2 ? 'AO VIVO' : 'GRAVADO'}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-indigo-600 transition-colors">
                    Formação Completa em Design {i}
                  </h3>
                  <p className="text-slate-500 text-sm mb-4 line-clamp-2 flex-1">
                    Aprenda do zero as melhores técnicas de interface e experiência de usuário com os melhores professores do mercado.
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-indigo-600 font-bold text-lg">R$ 197,00</span>
                    <span className="text-slate-400 text-sm">12h de duração</span>
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
