import { useState } from "react";
import CardCarrinho from "../componentes/CardCarrinho";
import { useCarrinho } from "../../context/CarrinhoContext";
import { useNavigate } from "react-router-dom";

function Carrinho() {
  const navigate = useNavigate();
  const { CarrinhoArray, aumentarquantidade } = useCarrinho();
  function NavOfertas() {
    navigate("/best");
    ("");
  }

  function VERIFICAR_array() {
    return CarrinhoArray.length === 0 ? (
      <article className="bg-loja-card  p-10 flex-1 flex items-center justify-between  rounded-md m-11">
        <div className="flex flex-col">
          <h1 className="text-white">seu carrinho estar vazio</h1>
          <p className="text-gray-400">Aproveite e adicione no seu carrinho</p>
        </div>
        <button
          onClick={() => NavOfertas()}
          className="ml-auto  bg-yellow-300 w-auto p-3 rounded-md"
        >
          Ver ofertas
        </button>
      </article>
    ) : (
      CarrinhoArray.map((produto) => (
        <CardCarrinho key={produto.id} produto={produto}></CardCarrinho>
      ))
    );
  }
  return (
    <div>
      <div>{VERIFICAR_array()}</div>
    </div>
  );
}
export default Carrinho;
