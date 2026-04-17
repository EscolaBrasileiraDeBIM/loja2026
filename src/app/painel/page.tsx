import Link from 'next/link';

export default function DashboardCriador() {
  return (
    <div className="min-h-screen bg-slate-50 flex font-sans text-slate-900">
      {/* Sidebar do Back-end / Painel */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col fixed h-full">
        <div className="p-6">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
            Painel do Criador
          </span>
        </div>
        <nav className="flex-1 px-4 space-y-2 mt-4 text-sm font-medium">
          <Link href="#" className="flex items-center gap-3 px-3 py-2 bg-indigo-600 rounded-lg text-white">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
            Meus Produtos
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-2 hover:bg-slate-800 rounded-lg text-slate-300">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            Novo Curso
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-2 hover:bg-slate-800 rounded-lg text-slate-300">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Nova Aplicação
          </Link>
          <hr className="border-slate-800 my-4" />
          <Link href="#" className="flex items-center gap-3 px-3 py-2 hover:bg-slate-800 rounded-lg text-slate-300">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Vendas (Ipag)
          </Link>
        </nav>
      </aside>

      {/* Conteúdo Principal */}
      <main className="flex-1 ml-64 p-8">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Gestão Unificada de Produtos</h1>
            <p className="text-slate-500 text-sm mt-1">Gerencie seus cursos e aplicações (plugins/assets) em um só lugar.</p>
          </div>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50">
              Adicionar Aplicação
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700">
              Criar Curso
            </button>
          </div>
        </header>

        {/* Tabela de Produtos */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-sm text-slate-500">
                <th className="px-6 py-4 font-medium">Nome do Produto</th>
                <th className="px-6 py-4 font-medium">Tipo</th>
                <th className="px-6 py-4 font-medium">Status / Vendas</th>
                <th className="px-6 py-4 font-medium">Preço (Ipag)</th>
                <th className="px-6 py-4 font-medium text-right">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {/* Produto 1: Curso */}
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="font-medium text-slate-900">Formação Completa em Revit 2026</div>
                  <div className="text-slate-500 text-xs">Módulo 3: Ao Vivo pelo G-Meet</div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded text-xs font-semibold">Curso (Híbrido)</span>
                </td>
                <td className="px-6 py-4 text-slate-600">84 alunos ativos</td>
                <td className="px-6 py-4 font-medium text-slate-900">R$ 297,00</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-indigo-600 hover:text-indigo-800 font-medium">Editar</button>
                </td>
              </tr>

              {/* Produto 2: Aplicação/Plugin */}
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="font-medium text-slate-900">Revit AutoExporter Pro</div>
                  <div className="text-slate-500 text-xs">Arquivo .exe (25MB)</div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-semibold">Aplicação (Desktop)</span>
                </td>
                <td className="px-6 py-4 text-slate-600">1.240 downloads</td>
                <td className="px-6 py-4 font-medium text-slate-900">R$ 49,90 <span className="text-slate-400 font-normal text-xs">/ licença</span></td>
                <td className="px-6 py-4 text-right">
                  <button className="text-indigo-600 hover:text-indigo-800 font-medium">Editar</button>
                </td>
              </tr>

              {/* Produto 3: Template/Asset */}
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="font-medium text-slate-900">Template Arquitetura Premium</div>
                  <div className="text-slate-500 text-xs">Arquivo .rte (10MB)</div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-xs font-semibold">Aplicação (Template)</span>
                </td>
                <td className="px-6 py-4 text-slate-600">320 downloads</td>
                <td className="px-6 py-4 font-medium text-slate-900">R$ 97,00</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-indigo-600 hover:text-indigo-800 font-medium">Editar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
