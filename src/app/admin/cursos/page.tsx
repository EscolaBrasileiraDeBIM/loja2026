import AdminSidebar from '../_components/AdminSidebar';

const produtos = [
  { id: 1, titulo: 'Formação Completa em Revit 2026', criador: 'Ricardo Alves', tipo: 'Curso (Híbrido)', status: 'Publicado', alunos: 84, preco: 'R$ 297,00', data: '02/02/2026' },
  { id: 2, titulo: 'Canvas Avançado — Revit para Arquitetos', criador: 'Ricardo Alves', tipo: 'Curso (Gravado)', status: 'Aguardando Aprovação', alunos: 0, preco: 'R$ 197,00', data: '17/04/2026' },
  { id: 3, titulo: 'AutoCAD 2D do Zero ao Avançado', criador: 'Pedro Santos', tipo: 'Curso (Gravado)', status: 'Publicado', alunos: 230, preco: 'R$ 147,00', data: '10/01/2026' },
  { id: 4, titulo: 'FamilyGen Pro v1.2', criador: 'Ricardo Alves', tipo: 'Aplicação (Plugin)', status: 'Aguardando Aprovação', alunos: 0, preco: 'R$ 89,90', data: '16/04/2026' },
  { id: 5, titulo: 'Template Arquitetura Premium', criador: 'Ana Beatriz Lima', tipo: 'Aplicação (Template)', status: 'Publicado', alunos: 320, preco: 'R$ 97,00', data: '01/03/2026' },
];

const statusBadge: Record<string, string> = {
  'Publicado': 'bg-emerald-50 text-emerald-700',
  'Aguardando Aprovação': 'bg-amber-50 text-amber-700',
  'Rejeitado': 'bg-red-50 text-red-700',
  'Despublicado': 'bg-slate-100 text-slate-500',
};

const tipoBadge: Record<string, string> = {
  'Curso (Híbrido)': 'bg-indigo-50 text-indigo-700',
  'Curso (Gravado)': 'bg-violet-50 text-violet-700',
  'Aplicação (Plugin)': 'bg-blue-50 text-blue-700',
  'Aplicação (Template)': 'bg-emerald-50 text-emerald-700',
};

export default function AdminCursos() {
  return (
    <div className="min-h-screen bg-gray-100 flex font-sans text-slate-900">
      <AdminSidebar activePath="/admin/cursos" />

      <main className="flex-1 ml-64 p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Cursos & Aplicações</h1>
            <p className="text-slate-500 text-sm mt-1">Revise e controle todos os produtos publicados ou pendentes de aprovação.</p>
          </div>
        </div>

        {/* Filtros */}
        <div className="flex gap-4 mb-6 flex-wrap">
          <input
            type="text"
            placeholder="🔍  Buscar por título ou criador..."
            className="flex-1 min-w-[260px] bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <select className="bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-red-500">
            <option>Todos os Tipos</option>
            <option>Curso</option>
            <option>Aplicação</option>
          </select>
          <select className="bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-red-500">
            <option>Todos os Status</option>
            <option>Publicado</option>
            <option>Aguardando Aprovação</option>
            <option>Rejeitado</option>
          </select>
        </div>

        {/* Tabela */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50 text-slate-500 border-b border-slate-200">
                <th className="px-6 py-3 font-medium">Produto</th>
                <th className="px-6 py-3 font-medium">Tipo</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Compras</th>
                <th className="px-6 py-3 font-medium">Preço</th>
                <th className="px-6 py-3 font-medium">Criado em</th>
                <th className="px-6 py-3 font-medium text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {produtos.map((p) => (
                <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-medium text-slate-900">{p.titulo}</p>
                    <p className="text-slate-400 text-xs">por {p.criador}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${tipoBadge[p.tipo] ?? 'bg-slate-100 text-slate-600'}`}>
                      {p.tipo}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${statusBadge[p.status] ?? ''}`}>
                      {p.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{p.alunos}</td>
                  <td className="px-6 py-4 font-medium text-slate-900">{p.preco}</td>
                  <td className="px-6 py-4 text-slate-400">{p.data}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex gap-2 justify-end">
                      <button className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-xs font-semibold hover:bg-slate-200 transition">
                        Visualizar
                      </button>
                      {p.status === 'Aguardando Aprovação' && (
                        <>
                          <button className="px-3 py-1.5 bg-emerald-600 text-white rounded-lg text-xs font-semibold hover:bg-emerald-700 transition">
                            ✓ Aprovar
                          </button>
                          <button className="px-3 py-1.5 bg-red-50 text-red-600 rounded-lg text-xs font-semibold hover:bg-red-100 transition">
                            ✕ Rejeitar
                          </button>
                        </>
                      )}
                      {p.status === 'Publicado' && (
                        <button className="px-3 py-1.5 bg-red-50 text-red-600 rounded-lg text-xs font-semibold hover:bg-red-100 transition">
                          Despublicar
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
