import { useState } from "react";
import CardCarrinho from "../componentes/CardCarrinho";
import { useCarrinho } from "../../context/CarrinhoContext";
import { useNavigate } from "react-router-dom";

function Carrinho() {
  const navigate = useNavigate();
  const { itensCarrinho } = useCarrinho();
  function navegarParaOfertas() {
    navigate("/best");
  }

  function verificarCarrinho() {
    return itensCarrinho.length === 0 ? (
      <article className="bg-loja-card  p-10 flex-1 flex items-center justify-between  rounded-md m-11">
        <div className="flex flex-col">
          <h1 className="text-white">seu carrinho estar vazio</h1>
          <p className="text-gray-400">Aproveite e adicione no seu carrinho</p>
        </div>
        <button
          onClick={navegarParaOfertas}
          className="ml-auto  bg-yellow-300 w-auto p-3 rounded-md"
        >
          Ver ofertas
        </button>
      </article>
    ) : (
      itensCarrinho.map((produto) => (
        <CardCarrinho key={produto.id} produto={produto}></CardCarrinho>
      ))
    );
  }
  return (
    <div>
      <div>{verificarCarrinho()}</div>
    </div>
  );
}
export default Carrinho;
