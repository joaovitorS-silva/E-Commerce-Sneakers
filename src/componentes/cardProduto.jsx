import { ShoppingCart, Star, HeartPlus } from "lucide-react";
import { useCarrinho } from "../../context/CarrinhoContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function CardProduto({ produto }) {
  const { CarrinhoVerde } = useCarrinho();
  const navigate = useNavigate();
  function OnDetailClick(produto) {
    const query = new URLSearchParams();
    query.set("id", produto.id);
    navigate(`/produto?${query.toString()}`);
    console.log("funcinou????");
  }

  return (
    <article className="  rounded-2xl bg-[#1E1E1E] p-4 text-white shadow-2xl shadow-black/30 transition-transform duration-200 hover:-translate-y-2 ">
      <div className="relative overflow-hidden rounded-xl bg-[#2A2A2A]"></div>
      <button
        onClick={() => OnDetailClick(produto)}
        className="mt-4 block w-full cursor-pointer space-y-2 text-left"
      >
        <div className="relative flex items-center">
          <Star />
          <div className="absolute right-0 top-0 flex items-center gap-2">
            <HeartPlus />
            {CarrinhoVerde(produto)}
          </div>
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
