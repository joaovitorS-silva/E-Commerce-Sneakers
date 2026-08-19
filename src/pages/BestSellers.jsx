import pc from "/src/assets/pc.png";
import CardProduto from "../componentes/cardProduto";
import { SquareCheckBig ,SquareDashed, SquareOff } from "lucide-react";
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
      id: 1,
      nome: "teclado",
      marca: "redragon",
      preco: 200.99,
      precoOriginal: 300.99,
      desconto: 10,
      imagem: pc,
    },
  ];
  const Marcas = ["apple", "samsung", "smeg", "asus"];
  const [marcarsSelecionada, setmarcarsSelecionadas] = useState([]);

  function OncheckBox(marca) {
    setmarcarsSelecionadas((estadoAnterior) =>
      estadoAnterior.includes(marca)
        ? estadoAnterior.filter((m) => m !== marca)
        : [...estadoAnterior, marca],
    );
  }

  return (
    <section className="  bg-[#0D0D0D] min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className=" flex ">
        <div className="w-64 shrink-0 p-6">
          <h1 className="text-4xl text-center ">BESTSELLERS</h1>
          <h2 className="text-white text-3xl mt-14">brand</h2>
          <ul className=" flex flex-col mt-7 gap-4 text-white">
            {Marcas.map((marca) => (
              <li key={marca} className="flex gap-3">
                <button type="button" onClick={() => OncheckBox(marca)}>
                  {marcarsSelecionada.includes(marca) ? (
                    <SquareOff />
                  ) : (
                    <SquareDashed />
                  )}
                </button>
                {marca}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 p-6">
          {produtos.map((produto) => (
            <CardProduto key={produto.id} produto={produto} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BestSellers;
