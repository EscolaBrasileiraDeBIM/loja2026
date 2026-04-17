import AdminSidebar from '../_components/AdminSidebar';

const roles = [
  {
    role: 'Super Admin',
    descricao: 'Acesso total à plataforma. Pode aprovar, bloquear e configurar tudo.',
    permissoes: ['Gerenciar Usuários', 'Validar Criadores', 'Aprovar Cursos', 'Ver Financeiro', 'Gerenciar Permissões', 'Configurações do Sistema'],
    cor: 'bg-red-100 text-red-700 border-red-200',
  },
  {
    role: 'Moderador',
    descricao: 'Pode revisar conteúdo e gerenciar usuários, mas não acessa o financeiro.',
    permissoes: ['Gerenciar Usuários', 'Validar Criadores', 'Aprovar Cursos'],
    cor: 'bg-indigo-100 text-indigo-700 border-indigo-200',
  },
  {
    role: 'Suporte',
    descricao: 'Acessa perfis e pode destravar acessos de alunos. Sem poder de bloqueio.',
    permissoes: ['Ver Perfis de Usuários'],
    cor: 'bg-slate-100 text-slate-700 border-slate-200',
  },
];

const allPermissoes = [
  'Gerenciar Usuários',
  'Validar Criadores',
  'Aprovar Cursos',
  'Ver Financeiro',
  'Gerenciar Permissões',
  'Configurações do Sistema',
  'Ver Perfis de Usuários',
];

export default function AdminPermissoes() {
  return (
    <div className="min-h-screen bg-gray-100 flex font-sans text-slate-900">
      <AdminSidebar activePath="/admin/permissoes" />

      <main className="flex-1 ml-64 p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Controle de Permissões</h1>
            <p className="text-slate-500 text-sm mt-1">Defina o que cada perfil interno da equipe pode fazer na plataforma.</p>
          </div>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition">
            + Novo Perfil
          </button>
        </div>

        {/* Cards de Roles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {roles.map((r) => (
            <div key={r.role} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className={`px-5 py-4 border-b ${r.cor} border-opacity-50`}>
                <h3 className="font-bold text-base">{r.role}</h3>
                <p className="text-xs mt-1 opacity-80">{r.descricao}</p>
              </div>
              <div className="px-5 py-4 space-y-2">
                {allPermissoes.map((p) => (
                  <div key={p} className="flex items-center justify-between text-sm">
                    <span className={r.permissoes.includes(p) ? 'text-slate-700' : 'text-slate-300 line-through'}>
                      {p}
                    </span>
                    <span>{r.permissoes.includes(p) ? '✅' : '—'}</span>
                  </div>
                ))}
              </div>
              <div className="px-5 py-3 border-t border-slate-100 flex justify-end">
                <button className="text-xs text-indigo-600 font-semibold hover:underline">Editar Permissões</button>
              </div>
            </div>
          ))}
        </div>

        {/* Tabela de Equipe interna */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100">
            <h2 className="font-bold text-slate-900">Equipe Interna com Acesso ao Admin</h2>
          </div>
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-gray-50 text-slate-500 border-b border-slate-200">
                <th className="px-6 py-3 font-medium">Membro</th>
                <th className="px-6 py-3 font-medium">Perfil</th>
                <th className="px-6 py-3 font-medium">Último Acesso</th>
                <th className="px-6 py-3 font-medium text-right">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <p className="font-medium text-slate-900">Você (João Gaspar)</p>
                  <p className="text-xs text-slate-400">superadmin@educamarket.com.br</p>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-red-50 text-red-700 rounded text-xs font-semibold">Super Admin</span>
                </td>
                <td className="px-6 py-4 text-slate-500">Agora</td>
                <td className="px-6 py-4 text-right">
                  <span className="text-slate-300 text-xs">Protegido</span>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <p className="font-medium text-slate-900">Maria Suporte</p>
                  <p className="text-xs text-slate-400">maria@educamarket.com.br</p>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-semibold">Suporte</span>
                </td>
                <td className="px-6 py-4 text-slate-500">Há 2 dias</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-indigo-600 text-xs font-semibold hover:underline">Alterar Perfil</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
