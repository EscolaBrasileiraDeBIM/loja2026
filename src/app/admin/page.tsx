import AdminSidebar from './_components/AdminSidebar';

const stats = [
  { label: 'Total de Usuários', value: '3.842', sub: '↑ 124 essa semana', color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { label: 'Criadores Ativos', value: '187', sub: '12 aguardando validação', color: 'text-amber-600', bg: 'bg-amber-50' },
  { label: 'Cursos Publicados', value: '640', sub: '8 aguardando aprovação', color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { label: 'Receita (30 dias)', value: 'R$ 48.290', sub: 'Comissão líquida recolhida', color: 'text-red-600', bg: 'bg-red-50' },
];

const pendings = [
  { name: 'Marcos Figueiredo', type: 'Novo Criador', status: 'Aguardando Validação', date: '17/04/2026' },
  { name: 'Canvas Avançado — Revit', type: 'Novo Curso', status: 'Aguardando Aprovação', date: '17/04/2026' },
  { name: 'FamilyGen Pro v1.2', type: 'Nova Aplicação (Plugin)', status: 'Aguardando Aprovação', date: '16/04/2026' },
  { name: 'Ana Beatriz Lima', type: 'Novo Criador', status: 'Aguardando Validação', date: '16/04/2026' },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex font-sans text-slate-900">
      <AdminSidebar activePath="/admin" />

      <main className="flex-1 ml-64 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900">Visão Geral da Plataforma</h1>
          <p className="text-slate-500 text-sm mt-1">Informações gerais e itens que precisam da sua atenção.</p>
        </div>

        {/* Cards de Métricas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${s.bg} mb-4`}>
                <span className={`font-bold text-sm ${s.color}`}>#</span>
              </div>
              <p className="text-slate-500 text-sm mb-1">{s.label}</p>
              <p className={`text-3xl font-extrabold ${s.color}`}>{s.value}</p>
              <p className="text-slate-400 text-xs mt-1">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Tabela de Pendências */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="font-bold text-slate-900">🔔 Pendências para Revisão</h2>
            <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded-full">{pendings.length} itens</span>
          </div>
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50 text-slate-500 border-b border-slate-200">
                <th className="px-6 py-3 font-medium">Nome / Título</th>
                <th className="px-6 py-3 font-medium">Tipo</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Data</th>
                <th className="px-6 py-3 font-medium text-right">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {pendings.map((item, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900">{item.name}</td>
                  <td className="px-6 py-4 text-slate-500">{item.type}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-amber-50 text-amber-700 rounded text-xs font-semibold">
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-400">{item.date}</td>
                  <td className="px-6 py-4 text-right flex gap-3 justify-end">
                    <button className="px-3 py-1.5 bg-emerald-600 text-white rounded-lg text-xs font-semibold hover:bg-emerald-700 transition">
                      ✓ Aprovar
                    </button>
                    <button className="px-3 py-1.5 bg-red-50 text-red-600 rounded-lg text-xs font-semibold hover:bg-red-100 transition">
                      ✕ Rejeitar
                    </button>
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
