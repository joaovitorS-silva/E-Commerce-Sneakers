import pc from "/src/assets/pc.png";
import CardProduto from "../componentes/cardProduto";
import {
  SquareCheckBig,
  SquareDashed,
  CircleX,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

function BestSellers() {
  const produtos = [
    {
      id: 1,
      nome: "notebook",
      marca: "asus",
      preco: 967.86,
      precoOriginal: 1026.66,
      desconto: 15,
      imagem: pc,
    },
    {
      id: 2,
      nome: "iphone 13",
      marca: "apple",
      preco: 2005.86,
      precoOriginal: 2067.66,
      desconto: 5,
      imagem: pc,
    },
    {
      id: 3,
      nome: "teclado",
      marca: "redragon",
      preco: 200.99,
      precoOriginal: 300.99,
      desconto: 10,
      imagem: pc,
    },
    {
      id: 4,
      nome: "mouse",
      marca: "smeg",
      preco: 390.99,
      precoOriginal: 410.99,
      desconto: 10,
      imagem: pc,
    },
  ];
  const Marcas = ["apple", "samsung", "smeg", "asus", "redragon"];
  const [marcarsSelecionada, setmarcarsSelecionadas] = useState([]);
  const [PrecoMax, setPrecoMax] = useState(9999);
  const [botaoView, setbotaoView] = useState(true);
  function OncheckBox(marca) {
    setmarcarsSelecionadas((estadoAnterior) =>
      estadoAnterior.includes(marca)
        ? estadoAnterior.filter((m) => m !== marca)
        : [...estadoAnterior, marca],
    );
  }
  function Onfilter() {
    const ProdutosFiltrados = produtos.filter(
      (produto) =>
        (marcarsSelecionada.length === 0 ||
          marcarsSelecionada.includes(produto.marca)) &&
        PrecoMax >= produto.preco,
    );

    return ProdutosFiltrados.length === 0 ? (
      <p className="text-white text-xl col-span-full text-center">
        nenhum bagulho encontrdijasdoasijdoasijdaosijdoiado
      </p>
    ) : (
      ProdutosFiltrados.map((produto) => (
        <CardProduto key={produto.id} produto={produto} />
      ))
    );
  }
  function botaoViewOn() {
    return botaoView === true ? (
      <ul className=" flex flex-col mt-7 gap-4 text-white">
        {Marcas.map((marca) => (
          <li key={marca} className="flex gap-10">
            <button type="button" onClick={() => OncheckBox(marca)}>
              {marcarsSelecionada.includes(marca) ? (
                <SquareCheckBig />
              ) : (
                <SquareDashed />
              )}
            </button>
            {marca}
          </li>
        ))}
      </ul>
    ) : (
      ""
    );
  }

  return (
    <section className="  bg-[#0D0D0D] min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className=" flex ">
        <div className="w-64 shrink-0 p-6">
          <h1 className="text-4xl text-center">BESTSELLERS</h1>
          <ul className="flex flex-wrap gap-2 mt-4">
            {marcarsSelecionada.map((marca) => (
              <li
                key={marca}
                className="text-white p-2 border rounded-2xl flex items-center gap-2"
              >
                {marca}
                <button onClick={() => OncheckBox(marca)}>
                  <CircleX size={16} />
                </button>
              </li>
            ))}
          </ul>
          <input
            type="range"
            min="0"
            max="9999"
            onChange={(e) => setPrecoMax(Number(e.target.value))}
          />{" "}
          <p>{PrecoMax}</p>
          <div className="flex items-center">
            <h2 className=" text-white  border-white text-xl mt-14">brand</h2>
            <button
              className="ml-auto mt-14 p-1 rounded-full border text-white"
              onClick={() => setbotaoView(!botaoView)}
            >
              {botaoView === true ? <ChevronUp /> : <ChevronDown />}
            </button>
          </div>
          {botaoViewOn()}
        </div>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 p-6">
          {Onfilter()}
        </div>
      </div>
    </section>
  );
}

export default BestSellers;
