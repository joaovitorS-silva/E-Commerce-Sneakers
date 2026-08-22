import CardProduto from "../componentes/cardProduto";
import {
  SquareCheckBig,
  SquareDashed,
  CircleX,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { useEffect, useState } from "react";

function BestSellers() {
  const [marcarsSelecionada, setmarcarsSelecionadas] = useState([]);
  const [PrecoMax, setPrecoMax] = useState(2000);
  const [botaoView, setbotaoView] = useState(true);
  const [ArrayMarcas, setArrayMarcas] = useState([]);
  const [produtos, setprodutos] = useState([]);

  const UrlApi = "https://dummyjson.com/products/category/smartphones";

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
          marcarsSelecionada.includes(produto.marca.toLowerCase())) &&
        PrecoMax >= produto.preco,
    );

    return ProdutosFiltrados.length === 0 ? (
      <p className="text-white text-xl col-span-full text-center">
        nenhum bagulho
      </p>
    ) : (
      ProdutosFiltrados.map((produto) => (
        <CardProduto key={produto.id} produto={produto} />
      ))
    );
  }

  function botaoViewOn() {
    return (
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          botaoView
            ? "mt-7 max-h-96 translate-y-0 opacity-100"
            : "mt-0 max-h-0 -translate-y-2 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 text-white">
          {ArrayMarcas.map((marca) => (
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
      </div>
    );
  }

  useEffect(() => {
    fetch(UrlApi)
      .then(function (respostaAPI) {
        return respostaAPI.json();
      })
      .then(function (resultadoApi) {
        const NomesCorrretos = resultadoApi.products.map((item) => ({
          id: item.id,
          nome: item.title,
          preco: item.price,
          desconto: item.discountPercentage,
          marca: item.brand,
          imagem: item.thumbnail,
          precoOriginal: item.price / (1 - item.discountPercentage / 100),
          descricao: item.description,
          carroselImg: item.images
          //lembra de pegar o rating (avalição do produto)
          //pegar o estoque tambem
        }));

        const MarcasBrutas = NomesCorrretos.map((produto) =>
          produto.marca.toLowerCase(),
        );
        const MarcasUnicas = [...new Set(MarcasBrutas)]; // esse tipo de lista "set" faz com que os nomes da listas nao se repitao
        setprodutos(NomesCorrretos);
        setArrayMarcas(MarcasUnicas);
      });
  }, []);

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
          <div className="flex flex-col">
            <h3 className="text-3xl mt-3 text-white  font-semibold">Price</h3>
            <h4 className="text-xs mt-5 text-gray-500">Intervalo de preço</h4>
            <input
              className="range-preco"
              type="range"
              min="0"
              max="9999"
              onChange={(e) => setPrecoMax(Number(e.target.value))}
            />{" "}
            <p className="text-white text-xs">{PrecoMax}</p>
            <div className="flex items-center">
              <h2 className=" text-white  border-white text-xl mt-14">brand</h2>
              <button
                /*transição */
                className={`ml-auto mt-14 rounded-full border p-1 text-white transition-transform duration-300 ${
                  botaoView ? "rotate-0" : "rotate-180"
                }`}
                onClick={() => setbotaoView(!botaoView)}
              >
                {botaoView === true ? <ChevronUp /> : <ChevronDown />}
              </button>
            </div>
          </div>
          {botaoViewOn()}
        </div>
        <div className="flex flex-1 flex-wrap content-start gap-6 p-6">
          {Onfilter()}
        </div>
      </div>
    </section>
  );
}
export default BestSellers;
