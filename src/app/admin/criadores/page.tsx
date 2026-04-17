import AdminSidebar from '../_components/AdminSidebar';

const criadores = [
  {
    id: 1, nome: 'Ricardo Alves', email: 'ricardo@bimtech.com', especialidade: 'BIM / Revit',
    status: 'Ativo', cursos: 5, aplicacoes: 2, receita: 'R$ 14.780', desde: '02/02/2026',
    docs: true,
  },
  {
    id: 2, nome: 'Marcos Figueiredo', email: 'marcos@studio.com', especialidade: 'AutoCAD / Civil 3D',
    status: 'Pendente', cursos: 0, aplicacoes: 0, receita: '—', desde: '17/04/2026',
    docs: true,
  },
  {
    id: 3, nome: 'Ana Beatriz Lima', email: 'ana@archlabs.com', especialidade: 'Arquitetura / SketchUp',
    status: 'Pendente', cursos: 0, aplicacoes: 0, receita: '—', desde: '16/04/2026',
    docs: false,
  },
];

const statusBadge: Record<string, string> = {
  Ativo: 'bg-emerald-50 text-emerald-700',
  Pendente: 'bg-amber-50 text-amber-700',
  Suspenso: 'bg-red-50 text-red-700',
};

export default function AdminCriadores() {
  return (
    <div className="min-h-screen bg-gray-100 flex font-sans text-slate-900">
      <AdminSidebar activePath="/admin/criadores" />

      <main className="flex-1 ml-64 p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Validação de Criadores</h1>
            <p className="text-slate-500 text-sm mt-1">Aprove ou rejeite novos criadores e gerencie os ativos.</p>
          </div>
        </div>

        {/* Alertas de Pendência */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl px-6 py-4 mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            </svg>
            <span className="text-amber-800 font-medium text-sm">2 criadores aguardando validação manual.</span>
          </div>
          <button className="text-xs font-bold text-amber-700 hover:text-amber-900">Rever agora</button>
        </div>

        {/* Tabela de Criadores */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50 text-slate-500 border-b border-slate-200">
                <th className="px-6 py-3 font-medium">Criador</th>
                <th className="px-6 py-3 font-medium">Especialidade</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Cursos</th>
                <th className="px-6 py-3 font-medium">Aplicações</th>
                <th className="px-6 py-3 font-medium">Receita Total</th>
                <th className="px-6 py-3 font-medium">Docs Enviados</th>
                <th className="px-6 py-3 font-medium text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {criadores.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-medium text-slate-900">{c.nome}</p>
                    <p className="text-slate-400 text-xs">{c.email}</p>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{c.especialidade}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${statusBadge[c.status]}`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{c.cursos}</td>
                  <td className="px-6 py-4 text-slate-600">{c.aplicacoes}</td>
                  <td className="px-6 py-4 font-medium text-slate-900">{c.receita}</td>
                  <td className="px-6 py-4">
                    {c.docs ? (
                      <span className="text-emerald-600 font-medium text-xs">✓ Completos</span>
                    ) : (
                      <span className="text-red-500 font-medium text-xs">✕ Pendentes</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex gap-2 justify-end">
                      {c.status === 'Pendente' && (
                        <>
                          <button className="px-3 py-1.5 bg-emerald-600 text-white rounded-lg text-xs font-semibold hover:bg-emerald-700 transition">
                            ✓ Aprovar
                          </button>
                          <button className="px-3 py-1.5 bg-red-50 text-red-600 rounded-lg text-xs font-semibold hover:bg-red-100 transition">
                            ✕ Rejeitar
                          </button>
                        </>
                      )}
                      {c.status === 'Ativo' && (
                        <button className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-xs font-semibold hover:bg-slate-200 transition">
                          Suspender
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
