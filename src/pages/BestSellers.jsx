import pc from "/src/assets/pc.png";
import CardProduto from "../componentes/cardProduto";

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

  return (
    <section className="relative bg-[#0D0D0D] min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className=" left-0 top-20 bg-red-500 h-full">iuhiuhui</div>
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            futuro bar de tipo de eletronico......
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {produtos.map((produto) => (
            <CardProduto key={produto.id} produto={produto} />
          ))}
        </div>
        <div className="bg-red-500 h-full"></div>
      </div>
    </section>
  );
}

export default BestSellers;
