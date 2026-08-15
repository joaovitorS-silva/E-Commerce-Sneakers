function CardProduto({ produto }) {
  return (
    <article className=" rounded-2xl bg-[#1E1E1E] p-4 text-white shadow-lg shadow-black/30 transition-transform duration-200 hover:-translate-y-1">
      <div className="relative overflow-hidden rounded-xl bg-[#2A2A2A]">
        <div className="absolute left-3 top-3 rounded-md bg-[#dfe31d] px-2 py-1 text-xs font-bold text-black">
          Sale {produto.desconto}%
        </div>

        <img
          className="h-56 w-full object-cover sm:h-72"
          src={produto.imagem}
          alt={produto.nome}
        />
      </div>

      <div className="mt-4 space-y-2">
        <p className="text-sm uppercase tracking-[0.2em] text-gray-300">
          {produto.marca}
        </p>
        <h3 className="text-xl font-semibold text-white">{produto.nome}</h3>

        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-white">
            R$ {produto.preco.toFixed(2)}
          </span>
          <span className="text-sm text-gray-400 line-through">
            R$ {produto.precoOriginal.toFixed(2)}
          </span>
        </div>
      </div>
    </article>
  );
}

export default CardProduto;
