import AdminSidebar from '../_components/AdminSidebar';

const usuarios = [
  { id: 1, nome: 'Carlos Eduardo Souza', email: 'carlos@email.com', tipo: 'Aluno', status: 'Ativo', cadastro: '10/03/2026', compras: 3 },
  { id: 2, nome: 'Fernanda Martins', email: 'fernanda@email.com', tipo: 'Aluno', status: 'Ativo', cadastro: '14/03/2026', compras: 1 },
  { id: 3, nome: 'Marcos Figueiredo', email: 'marcos@studio.com', tipo: 'Criador', status: 'Pendente', cadastro: '17/04/2026', compras: 0 },
  { id: 4, nome: 'Ana Beatriz Lima', email: 'ana@archlabs.com', tipo: 'Criador', status: 'Pendente', cadastro: '16/04/2026', compras: 0 },
  { id: 5, nome: 'Ricardo Alves', email: 'ricardo@bimtech.com', tipo: 'Criador', status: 'Ativo', cadastro: '02/02/2026', compras: 0 },
  { id: 6, nome: 'Juliana Pereira', email: 'juliana@email.com', tipo: 'Aluno', status: 'Bloqueado', cadastro: '05/01/2026', compras: 2 },
];

const statusBadge: Record<string, string> = {
  Ativo: 'bg-emerald-50 text-emerald-700',
  Pendente: 'bg-amber-50 text-amber-700',
  Bloqueado: 'bg-red-50 text-red-700',
};

const tipoBadge: Record<string, string> = {
  Aluno: 'bg-indigo-50 text-indigo-700',
  Criador: 'bg-blue-50 text-blue-700',
};

export default function AdminUsuarios() {
  return (
    <div className="min-h-screen bg-gray-100 flex font-sans text-slate-900">
      <AdminSidebar activePath="/admin/usuarios" />

      <main className="flex-1 ml-64 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Gestão de Usuários</h1>
            <p className="text-slate-500 text-sm mt-1">Visualize, filtre e gerencie todos os usuários da plataforma.</p>
          </div>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition">
            + Adicionar Usuário Manual
          </button>
        </div>

        {/* Filtros */}
        <div className="flex gap-4 mb-6 flex-wrap">
          <input
            type="text"
            placeholder="🔍  Buscar por nome ou e-mail..."
            className="flex-1 min-w-[250px] bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <select className="bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-red-500">
            <option>Todos os Tipos</option>
            <option>Aluno</option>
            <option>Criador</option>
          </select>
          <select className="bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-red-500">
            <option>Todos os Status</option>
            <option>Ativo</option>
            <option>Pendente</option>
            <option>Bloqueado</option>
          </select>
        </div>

        {/* Tabela */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50 text-slate-500 border-b border-slate-200">
                <th className="px-6 py-3 font-medium">Usuário</th>
                <th className="px-6 py-3 font-medium">Tipo</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Cadastro</th>
                <th className="px-6 py-3 font-medium">Compras</th>
                <th className="px-6 py-3 font-medium text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {usuarios.map((u) => (
                <tr key={u.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-medium text-slate-900">{u.nome}</p>
                    <p className="text-slate-400 text-xs">{u.email}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${tipoBadge[u.tipo]}`}>{u.tipo}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${statusBadge[u.status]}`}>{u.status}</span>
                  </td>
                  <td className="px-6 py-4 text-slate-500">{u.cadastro}</td>
                  <td className="px-6 py-4 text-slate-500">{u.compras}</td>
                  <td className="px-6 py-4 text-right flex gap-2 justify-end">
                    <button className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-xs font-semibold hover:bg-slate-200 transition">
                      Ver Perfil
                    </button>
                    {u.status === 'Bloqueado' ? (
                      <button className="px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg text-xs font-semibold hover:bg-emerald-100 transition">
                        Desbloquear
                      </button>
                    ) : (
                      <button className="px-3 py-1.5 bg-red-50 text-red-600 rounded-lg text-xs font-semibold hover:bg-red-100 transition">
                        Bloquear
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Paginação */}
          <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between text-sm text-slate-500">
            <span>Mostrando 6 de 3.842 usuários</span>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:bg-slate-50">← Anterior</button>
              <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:bg-slate-50">Próxima →</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
