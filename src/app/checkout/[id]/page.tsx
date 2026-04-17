import Link from 'next/link';

// Produto mockado — em produção virá de um fetch por ID
const produto = {
  id: 'curso-revit-2026',
  titulo: 'Formação Completa em Revit 2026',
  criador: 'Ricardo Alves',
  tipo: 'Curso (Híbrido)',
  preco: 297.00,
  parcelas: 10,
};

export default function Checkout() {
  const precoParcela = (produto.preco / produto.parcelas).toFixed(2);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header simples */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">E</div>
          <span className="font-bold text-slate-700">EducaMarket</span>
        </Link>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Checkout Seguro — Processado por Ipag
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

        {/* Coluna esquerda — Formulário de Pagamento */}
        <div className="lg:col-span-3 space-y-6">
          <h1 className="text-xl font-bold text-slate-900">Finalizar Compra</h1>

          {/* Método de Pagamento */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-5">
            <h2 className="font-semibold text-slate-800">Escolha a forma de pagamento</h2>

            {/* Tabs Método */}
            <div className="flex rounded-lg border border-slate-200 overflow-hidden text-sm font-medium">
              {[
                { id: 'cartao', label: '💳 Cartão' },
                { id: 'pix', label: '📱 PIX' },
                { id: 'boleto', label: '🏦 Boleto' },
              ].map((m, i) => (
                <button
                  key={m.id}
                  type="button"
                  id={`metodo-${m.id}`}
                  className={`flex-1 py-3 transition ${
                    i === 0
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-slate-600 hover:bg-slate-50'
                  } ${i > 0 ? 'border-l border-slate-200' : ''}`}
                >
                  {m.label}
                </button>
              ))}
            </div>

            {/* Formulário de Cartão (default visível) */}
            <div id="form-cartao" className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Número do Cartão</label>
                <input
                  id="cartao-numero"
                  type="text"
                  inputMode="numeric"
                  placeholder="0000 0000 0000 0000"
                  maxLength={19}
                  className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition font-mono tracking-widest"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Nome no Cartão</label>
                <input
                  id="cartao-nome"
                  type="text"
                  placeholder="Igual ao impresso no cartão"
                  className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition uppercase"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Validade</label>
                  <input
                    id="cartao-validade"
                    type="text"
                    placeholder="MM/AA"
                    maxLength={5}
                    className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition font-mono"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">CVV</label>
                  <input
                    id="cartao-cvv"
                    type="text"
                    inputMode="numeric"
                    placeholder="123"
                    maxLength={4}
                    className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition font-mono"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Parcelamento</label>
                <select
                  id="cartao-parcelas"
                  className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                >
                  <option value="1">1x de R$ {produto.preco.toFixed(2)} (sem juros)</option>
                  {[2, 3, 6, 10].map((p) => (
                    <option key={p} value={p}>
                      {p}x de R$ {(produto.preco / p).toFixed(2)} (sem juros)
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Dados Pessoais */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-4">
            <h2 className="font-semibold text-slate-800">Dados do Comprador</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Nome Completo</label>
                <input id="comprador-nome" type="text" placeholder="Seu nome"
                  className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">CPF</label>
                <input id="comprador-cpf" type="text" placeholder="000.000.000-00"
                  className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition font-mono" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">E-mail</label>
              <input id="comprador-email" type="email" placeholder="para receber o acesso ao curso"
                className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" />
            </div>
          </div>

          {/* Botão Pagar */}
          <button
            id="checkout-pagar"
            type="submit"
            className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-base hover:bg-indigo-500 transition-all shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Pagar R$ {produto.preco.toFixed(2)} com Segurança
          </button>

          <p className="text-center text-xs text-slate-400">
            Pagamento processado com criptografia SSL pela{' '}
            <a href="https://ipag.com.br" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline">Ipag</a>.
            Acesso liberado automaticamente após confirmação.
          </p>
        </div>

        {/* Coluna direita — Resumo do pedido */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-4 sticky top-6">
            <h2 className="font-semibold text-slate-800">Resumo do Pedido</h2>

            {/* Item do pedido */}
            <div className="flex gap-4 items-start pb-4 border-b border-slate-100">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">📹</div>
              <div>
                <p className="font-semibold text-slate-900 text-sm leading-snug">{produto.titulo}</p>
                <p className="text-xs text-slate-500 mt-1">por {produto.criador}</p>
                <span className="inline-block mt-2 text-xs bg-indigo-50 text-indigo-600 font-medium px-2 py-0.5 rounded">{produto.tipo}</span>
              </div>
            </div>

            {/* Valores */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span>R$ {produto.preco.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Desconto</span>
                <span className="text-emerald-600">— R$ 0,00</span>
              </div>
              <div className="flex justify-between font-bold text-slate-900 text-base pt-2 border-t border-slate-100">
                <span>Total</span>
                <span>R$ {produto.preco.toFixed(2)}</span>
              </div>
              <p className="text-xs text-slate-400 text-right">ou 10x de R$ {precoParcela} sem juros</p>
            </div>

            {/* Selos de segurança */}
            <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Compra 100% Segura
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <svg className="w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Acesso Imediato
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
