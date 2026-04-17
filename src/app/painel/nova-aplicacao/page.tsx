import Link from 'next/link';

export default function NovaAplicacao() {
  return (
    <div className="min-h-screen bg-gray-100 flex font-sans text-slate-900">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col fixed h-full">
        <div className="p-6 border-b border-slate-800">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">Painel do Criador</span>
        </div>
        <nav className="flex-1 px-4 space-y-2 mt-4 text-sm font-medium">
          <Link href="/painel" className="flex items-center gap-3 px-3 py-2.5 text-slate-300 hover:bg-slate-800 hover:text-white rounded-lg transition">
            ← Meus Produtos
          </Link>
          <Link href="/painel/novo-curso" className="flex items-center gap-3 px-3 py-2.5 text-slate-300 hover:bg-slate-800 hover:text-white rounded-lg transition">
            📹 Novo Curso
          </Link>
          <Link href="/painel/nova-aplicacao" className="flex items-center gap-3 px-3 py-2.5 bg-indigo-600 text-white rounded-lg">
            📦 Nova Aplicação
          </Link>
        </nav>
      </aside>

      <main className="flex-1 ml-64 p-8 max-w-4xl">
        <div className="mb-8">
          <Link href="/painel" className="text-sm text-slate-500 hover:text-indigo-600 flex items-center gap-1 mb-4">
            ← Voltar ao Painel
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Publicar Nova Aplicação</h1>
          <p className="text-slate-500 text-sm mt-1">Adicione um plugin, app desktop, template ou biblioteca de assets para venda.</p>
        </div>

        <form className="space-y-8" noValidate>

          {/* SEÇÃO 1: Classificação */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-5">
            <h2 className="font-bold text-slate-800 text-base border-b border-slate-100 pb-3">1. Classificação da Aplicação</h2>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-3">Tipo de Aplicação *</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'plugin', label: 'Plugin', icon: '🔌', desc: 'Revit, AutoCAD, etc.' },
                  { id: 'app', label: 'App Desktop', icon: '🖥️', desc: 'Executável .exe/.app' },
                  { id: 'asset', label: 'Assets / Objetos', icon: '📦', desc: 'Modelos 3D e 2D' },
                  { id: 'template', label: 'Template', icon: '📄', desc: 'Arquivos de projeto' },
                ].map((tipo) => (
                  <label key={tipo.id} className="flex flex-col items-center gap-2 border-2 border-slate-200 rounded-xl p-4 cursor-pointer hover:border-indigo-400 transition text-center has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50">
                    <input type="radio" name="app-tipo" value={tipo.id} className="sr-only" />
                    <span className="text-2xl">{tipo.icon}</span>
                    <span className="font-semibold text-sm text-slate-800">{tipo.label}</span>
                    <span className="text-xs text-slate-400">{tipo.desc}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Software Compatível (se aplicável)</label>
              <div className="flex flex-wrap gap-2">
                {['Revit', 'AutoCAD', 'Civil 3D', 'ArchiCAD', 'SketchUp', 'Rhino', 'SolidWorks', 'Dynamo', 'Qualquer (App Standalone)'].map((sw) => (
                  <label key={sw} className="inline-flex items-center gap-2 px-3 py-1.5 border border-slate-200 rounded-full text-sm cursor-pointer hover:border-indigo-400 transition has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-700">
                    <input type="checkbox" className="sr-only" />
                    {sw}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* SEÇÃO 2: Detalhes do Produto */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-5">
            <h2 className="font-bold text-slate-800 text-base border-b border-slate-100 pb-3">2. Detalhes do Produto</h2>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Nome da Aplicação *</label>
              <input id="app-nome" type="text" placeholder="Ex: FamilyGen Pro v2.0"
                className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Descrição *</label>
              <textarea id="app-descricao" rows={4} placeholder="Explique o que a aplicação faz, como ela ajuda o profissional e quais os requisitos do sistema..."
                className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Versão *</label>
                <input id="app-versao" type="text" placeholder="Ex: 2.1.0"
                  className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Preço (R$) *</label>
                <input id="app-preco" type="number" placeholder="49.90"
                  className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Tipo de Licença</label>
                <select id="app-licenca" className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition">
                  <option>Vitalícia (Uso Permanente)</option>
                  <option>Assinatura Anual</option>
                  <option>Assinatura Mensal</option>
                  <option>Uso Único (Por Projeto)</option>
                </select>
              </div>
            </div>
          </div>

          {/* SEÇÃO 3: Arquivos */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-5">
            <h2 className="font-bold text-slate-800 text-base border-b border-slate-100 pb-3">3. Arquivos da Aplicação</h2>

            {/* Arquivo principal */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Arquivo Principal para Download * <span className="text-slate-400 font-normal">(após compra)</span></label>
              <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center cursor-pointer hover:border-indigo-400 hover:bg-indigo-50/30 transition group">
                <svg className="w-10 h-10 text-slate-300 mx-auto mb-3 group-hover:text-indigo-400 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <p className="text-sm text-slate-500"><span className="text-indigo-600 font-medium">Clique para selecionar</span> ou arraste o arquivo</p>
                <p className="text-xs text-slate-400 mt-1">.exe, .zip, .rvt, .rte, .dwg, .3dm, etc.</p>
                <input id="app-arquivo" type="file" className="hidden" />
              </div>
            </div>

            {/* Preview / Imagens */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Imagens de Preview (até 5)</label>
              <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center cursor-pointer hover:border-indigo-400 transition group">
                <p className="text-sm text-slate-500">Upload de screenshots ou demonstrações visuais</p>
                <input id="app-preview" type="file" multiple accept="image/*" className="hidden" />
              </div>
            </div>

            {/* Link de documentação */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Link para Documentação / Tutorial <span className="text-slate-400 font-normal">(opcional)</span></label>
              <input id="app-docs" type="url" placeholder="https://seu-site.com/docs ou link do YouTube"
                className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" />
            </div>
          </div>

          {/* Ações */}
          <div className="flex items-center justify-between pt-4">
            <button type="button" className="px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition">
              Salvar Rascunho
            </button>
            <button id="app-submit" type="submit" className="px-8 py-3 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition shadow-sm">
              Enviar para Aprovação →
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
