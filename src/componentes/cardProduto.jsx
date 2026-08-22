import { ShoppingCart, Star, HeartPlus } from "lucide-react";
import { useCarrinho } from "../../context/CarrinhoContext";
function CardProduto({ produto }) {
  const { AdicionarAoCarrinho, CarrinhoVerde, CarrinhoArray} = useCarrinho();
  return (
    <article className="  rounded-2xl bg-[#1E1E1E] p-4 text-white shadow-2xl shadow-black/30 transition-transform duration-200 hover:-translate-y-2 ">
      {" "}
      {
        //hover:scale-105??? talvez
      }
      <div className="relative overflow-hidden rounded-xl bg-[#2A2A2A]">
        <div className="absolute left-3 top-3 rounded-md bg-[#dfe31d] px-2 py-1 text-xs font-bold text-black">
          Sale {produto.desconto}%
        </div>
      </div>
      <button className="mt-4 relative cursor-pointer space-y-2">
        <div>
          <Star/>
          {CarrinhoVerde(produto)}
          <HeartPlus className="absolute right-8 top-0" />
        </div>
        <img
          className="  h-56 w-full object-cover sm:h-72"
          src={produto.imagem}
          alt={produto.nome}
        />

        <h3 className="text-xl font-semibold text-white ">{produto.nome}</h3>

        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-white">
            R$ {produto.preco.toFixed(2)}
          </span>
          <span className="text-sm text-gray-400 line-through">
            R$ {produto.precoOriginal.toFixed(2)}
          </span>
        </div>
      </button>
    </article>
  );
}

export default CardProduto;
