import { useState } from "react";
import { ArrowLeft, LockKeyhole, X } from "lucide-react";

function AbaCompra({ produto }) {
  const [pagamentoAberto, setPagamentoAberto] = useState(false);
  const preco = Number(produto?.preco) || 0;
  const precoFormatado = preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return (
    <aside className="w-full shrink-0 rounded-lg border border-zinc-700 bg-zinc-900 p-6 text-white shadow-lg lg:w-80">
      <div className="space-y-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Seu pedido
          </p>
          <h2 className="mt-1 text-2xl font-bold">Resumo da compra</h2>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between gap-4 text-zinc-300">
            <span>Produtos (1 item)</span>
            <span>{precoFormatado}</span>
          </div>
          <div className="flex justify-between gap-4 text-zinc-300">
            <span>Frete</span>
            <span className="text-yellow-400">A calcular</span>
          </div>
        </div>

        <hr className="border-zinc-700" />

        <div className="flex items-end justify-between gap-4">
          <span className="font-semibold">Total</span>
          <span className="text-2xl font-extrabold text-yellow-400">
            {precoFormatado}
          </span>
        </div>

        <div className="space-y-3">
          <button
            type="button"
            onClick={() => setPagamentoAberto(true)}
            className="w-full rounded-md bg-yellow-400 px-4 py-3 font-bold text-zinc-950 transition hover:bg-yellow-300"
          >
            Continuar para pagamento
          </button>
          <button className="flex w-full items-center justify-center gap-2 rounded-md border border-zinc-600 px-4 py-3 font-semibold text-zinc-200 transition hover:border-zinc-400 hover:text-white">
            <ArrowLeft size={18} />
            Voltar às compras
          </button>
        </div>

        <p className="flex items-center justify-center gap-2 text-center text-xs text-zinc-500">
          <LockKeyhole size={14} />
          Compra segura
        </p>
      </div>

      {pagamentoAberto ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="relative w-full max-w-md rounded-md bg-zinc-800 p-8 text-center text-white shadow-xl">
            <button
              type="button"
              aria-label="Fechar pagamento"
              onClick={() => setPagamentoAberto(false)}
              className="absolute right-3 top-3 rounded-md p-2 text-zinc-400 transition hover:text-white"
            >
              <X size={20} />
            </button>
            <h2 className="text-xl font-bold">Pagamento</h2>
            <div className="mx-auto mt-6 flex aspect-square w-48 items-center justify-center rounded-md bg-slate-500 text-sm text-zinc-950">
              {produto.QrCode}
              
              {"nao estar funcionando, acima"}
            </div>
          </div>
        </div>
      ) : null}
    </aside>
  );
}
export default AbaCompra;
