import { Handbag, Plus, Minus } from "lucide-react";
import AbaCompra from "./AbaCompra";
function CardCarrinho({ produto }) {
  return (
    <div className="flex">
      <article className="m-4 flex w-full flex-col gap-8 rounded-md bg-loja-card p-5 text-white sm:m-8 sm:p-8 lg:m-11 lg:flex-row lg:items-start lg:p-10">
        <div className="min-w-0 flex-1">
          <div className="relative">
            <Handbag className=" absolute bottom-1 text-white" />
            <h1 className=" ml-9 text-3xl mb-8 text-white font-bold">
              produto e serviço
            </h1>
          </div>
          <span className="bg-zinc-800">
            vendido e entregue por <strong> KaBum!</strong>
          </span>
          <hr />

          <div className="flex flex-col gap-5 pt-6 sm:flex-row sm:items-center">
            <img
              src={produto.imagem}
              alt={produto.nome}
              className="w-32 shrink-0 self-center sm:w-1/5 sm:self-auto"
            />
            <p className="min-w-0 flex-1 break-words">{produto.descricao}</p>
            <div className="flex w-fit items-center gap-6 bg-zinc-800 px-7 py-3">
              <button className=" bg-zinc-800">
                <Minus className="text-red-600" />
              </button>
              <span>2</span>
              <button>
                <Plus className="text-yellow-500" />
              </button>
            </div>
            <div className="flex flex-col sm:min-w-32">
              <span className="text-zinc-400">preço à vista no PIX:</span>
              <span className="text-2xl font-extrabold text-yellow-500">
                {" "}
                R${produto.preco}
              </span>
            </div>
          </div>
        </div>
        <div>
          dasçkdjaskjd
          <AbaCompra produto={produto} />
        </div>
      </article>
    </div>
  );
}
export default CardCarrinho;
