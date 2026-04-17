import Link from 'next/link';
import AdminSidebar from '../../painel/_components/PainelSidebar';

export default function NovoCurso() {
  return (
    <div className="min-h-screen bg-gray-100 flex font-sans text-slate-900">
      <PainelSidebarWrapper />

      <main className="flex-1 ml-64 p-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/painel" className="text-sm text-slate-500 hover:text-indigo-600 flex items-center gap-1 mb-4">
            ← Voltar ao Painel
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Criar Novo Curso</h1>
          <p className="text-slate-500 text-sm mt-1">Preencha as informações, adicione os módulos e envie para aprovação.</p>
        </div>

        {/* Formulário */}
        <form className="space-y-8" noValidate>

          {/* SEÇÃO 1: Informações Básicas */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-5">
            <h2 className="font-bold text-slate-800 text-base border-b border-slate-100 pb-3">1. Informações Básicas</h2>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Título do Curso *</label>
              <input id="curso-titulo" type="text" placeholder="Ex: Formação Completa em Revit 2026"
                className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Descrição Resumida (aparece na vitrine) *</label>
              <textarea id="curso-descricao" rows={3} placeholder="Descreva o que o aluno vai aprender em 2-3 frases..."
                className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Tipo de Curso *</label>
                <select id="curso-tipo" className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition">
                  <option value="gravado">Gravado (Vídeos + PDF + Quiz)</option>
                  <option value="ao-vivo">Ao Vivo (Google Meet + Material de Apoio)</option>
                  <option value="hibrido">Híbrido (Gravado + Sessões ao Vivo)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Nível *</label>
                <select id="curso-nivel" className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition">
                  <option>Iniciante</option>
                  <option>Intermediário</option>
                  <option>Avançado</option>
                  <option>Todos os níveis</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Preço (R$) *</label>
                <input id="curso-preco" type="number" placeholder="197.00"
                  className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Duração Total Estimada</label>
                <input id="curso-duracao" type="text" placeholder="Ex: 12h 30min"
                  className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" />
              </div>
            </div>

            {/* Imagem de Capa */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Imagem de Capa</label>
              <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center cursor-pointer hover:border-indigo-400 hover:bg-indigo-50/30 transition group">
                <svg className="w-10 h-10 text-slate-300 mx-auto mb-3 group-hover:text-indigo-400 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm text-slate-500">Arraste ou <span className="text-indigo-600 font-medium">clique para selecionar</span></p>
                <p className="text-xs text-slate-400 mt-1">PNG, JPG — 1280×720px recomendado</p>
                <input id="curso-imagem" type="file" accept="image/*" className="hidden" />
              </div>
            </div>
          </div>

          {/* SEÇÃO 2: Módulos e Aulas */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-5">
            <h2 className="font-bold text-slate-800 text-base border-b border-slate-100 pb-3">2. Módulos e Aulas</h2>

            {/* Módulo exemplo */}
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <div className="flex items-center justify-between bg-slate-50 px-5 py-3">
                <input type="text" defaultValue="Módulo 1: Introdução" className="font-medium text-slate-700 bg-transparent border-none outline-none text-sm flex-1" />
                <button type="button" className="text-red-400 hover:text-red-600 text-xs ml-4">Remover</button>
              </div>
              <div className="divide-y divide-slate-100">
                {['Aula 1.1 — Apresentação do curso', 'Aula 1.2 — Instalação do software'].map((aula, i) => (
                  <div key={i} className="flex items-center gap-4 px-5 py-3">
                    <svg className="w-4 h-4 text-slate-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <input type="text" defaultValue={aula} className="flex-1 text-sm text-slate-700 bg-transparent border-none outline-none" />
                    <span className="text-xs text-indigo-600 cursor-pointer hover:underline">Upload vídeo</span>
                    <span className="text-xs text-emerald-600 cursor-pointer hover:underline">+ Quiz</span>
                    <span className="text-xs text-slate-400 cursor-pointer hover:text-red-500">✕</span>
                  </div>
                ))}
                <div className="px-5 py-3">
                  <button type="button" className="text-indigo-600 text-sm font-medium hover:underline">+ Adicionar Aula</button>
                </div>
              </div>
            </div>

            <button type="button" className="w-full border-2 border-dashed border-slate-200 rounded-xl py-3 text-sm text-slate-500 hover:border-indigo-400 hover:text-indigo-600 transition font-medium">
              + Adicionar Módulo
            </button>
          </div>

          {/* SEÇÃO 3: Materiais de Apoio */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-5">
            <h2 className="font-bold text-slate-800 text-base border-b border-slate-100 pb-3">3. Materiais de Apoio (PDF, PPT, Arquivos)</h2>
            <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center cursor-pointer hover:border-indigo-400 hover:bg-indigo-50/30 transition group">
              <svg className="w-10 h-10 text-slate-300 mx-auto mb-3 group-hover:text-indigo-400 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-sm text-slate-500">Upload de PDF, PPT, XLSX, DWG e outros</p>
              <p className="text-xs text-slate-400 mt-1">Você pode associar cada arquivo a um módulo depois</p>
              <input id="curso-materiais" type="file" multiple className="hidden" />
            </div>
          </div>

          {/* Ações */}
          <div className="flex items-center justify-between pt-4">
            <button type="button" className="px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition">
              Salvar Rascunho
            </button>
            <button id="curso-submit" type="submit" className="px-8 py-3 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition shadow-sm">
              Enviar para Aprovação →
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

// Wrapper para evitar import circular — usa o sidebar do painel do criador
function PainelSidebarWrapper() {
  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col fixed h-full">
      <div className="p-6 border-b border-slate-800">
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">Painel do Criador</span>
      </div>
      <nav className="flex-1 px-4 space-y-2 mt-4 text-sm font-medium">
        <Link href="/painel" className="flex items-center gap-3 px-3 py-2.5 text-slate-300 hover:bg-slate-800 hover:text-white rounded-lg transition">
          ← Meus Produtos
        </Link>
        <Link href="/painel/novo-curso" className="flex items-center gap-3 px-3 py-2.5 bg-indigo-600 text-white rounded-lg">
          📹 Novo Curso
        </Link>
        <Link href="/painel/nova-aplicacao" className="flex items-center gap-3 px-3 py-2.5 text-slate-300 hover:bg-slate-800 hover:text-white rounded-lg transition">
          📦 Nova Aplicação
        </Link>
      </nav>
    </aside>
  );
}
