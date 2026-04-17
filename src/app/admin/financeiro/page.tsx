import AdminSidebar from '../_components/AdminSidebar';

const transacoes = [
  { id: 'TXN-0041', comprador: 'Carlos Eduardo Souza', produto: 'Formação Revit 2026', criador: 'Ricardo Alves', bruto: 'R$ 297,00', comissao: 'R$ 44,55', repasse: 'R$ 252,45', metodo: 'PIX', status: 'Pago', data: '17/04/2026' },
  { id: 'TXN-0040', comprador: 'Fernanda Martins', produto: 'AutoCAD 2D do Zero', criador: 'Pedro Santos', bruto: 'R$ 147,00', comissao: 'R$ 22,05', repasse: 'R$ 124,95', metodo: 'Cartão', status: 'Pago', data: '16/04/2026' },
  { id: 'TXN-0039', comprador: 'Rafael Gomes', produto: 'Template Arquitetura Premium', criador: 'Ana Beatriz Lima', bruto: 'R$ 97,00', comissao: 'R$ 14,55', repasse: 'R$ 82,45', metodo: 'Boleto', status: 'Pendente', data: '15/04/2026' },
  { id: 'TXN-0038', comprador: 'Lucas Henrique', produto: 'FamilyGen Pro v1.2', criador: 'Ricardo Alves', bruto: 'R$ 89,90', comissao: 'R$ 13,49', repasse: 'R$ 76,41', metodo: 'PIX', status: 'Estornado', data: '14/04/2026' },
];

const statusBadge: Record<string, string> = {
  Pago: 'bg-emerald-50 text-emerald-700',
  Pendente: 'bg-amber-50 text-amber-700',
  Estornado: 'bg-red-50 text-red-700',
};

export default function AdminFinanceiro() {
  return (
    <div className="min-h-screen bg-gray-100 flex font-sans text-slate-900">
      <AdminSidebar activePath="/admin/financeiro" />

      <main className="flex-1 ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900">Financeiro — Integração Ipag</h1>
          <p className="text-slate-500 text-sm mt-1">Acompanhe todas as transações, comissões da plataforma e repasses aos criadores.</p>
        </div>

        {/* Resumo Financeiro */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
            <p className="text-slate-500 text-sm mb-1">Volume Total (30 dias)</p>
            <p className="text-3xl font-extrabold text-slate-900">R$ 48.290</p>
            <p className="text-slate-400 text-xs mt-1">Via PIX, Cartão e Boleto</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
            <p className="text-slate-500 text-sm mb-1">Comissão da Plataforma (15%)</p>
            <p className="text-3xl font-extrabold text-red-600">R$ 7.244</p>
            <p className="text-slate-400 text-xs mt-1">Líquido já descontando estornos</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
            <p className="text-slate-500 text-sm mb-1">Repasse Criadores (85%)</p>
            <p className="text-3xl font-extrabold text-emerald-600">R$ 41.046</p>
            <p className="text-slate-400 text-xs mt-1">4 criadores ativos no período</p>
          </div>
        </div>

        {/* Tabela de Transações */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="font-bold text-slate-900">Últimas Transações (Ipag)</h2>
            <button className="text-xs text-indigo-600 font-semibold hover:underline">Exportar CSV</button>
          </div>
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50 text-slate-500 border-b border-slate-200">
                <th className="px-6 py-3 font-medium">ID</th>
                <th className="px-6 py-3 font-medium">Comprador</th>
                <th className="px-6 py-3 font-medium">Produto</th>
                <th className="px-6 py-3 font-medium">Valor Bruto</th>
                <th className="px-6 py-3 font-medium">Comissão (15%)</th>
                <th className="px-6 py-3 font-medium">Repasse</th>
                <th className="px-6 py-3 font-medium">Método</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Data</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {transacoes.map((t) => (
                <tr key={t.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 text-slate-400 font-mono text-xs">{t.id}</td>
                  <td className="px-6 py-4">
                    <p className="font-medium text-slate-900">{t.comprador}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-slate-700">{t.produto}</p>
                    <p className="text-slate-400 text-xs">por {t.criador}</p>
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-900">{t.bruto}</td>
                  <td className="px-6 py-4 text-red-600 font-medium">{t.comissao}</td>
                  <td className="px-6 py-4 text-emerald-700 font-medium">{t.repasse}</td>
                  <td className="px-6 py-4 text-slate-500">{t.metodo}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${statusBadge[t.status] ?? ''}`}>
                      {t.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-400">{t.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
