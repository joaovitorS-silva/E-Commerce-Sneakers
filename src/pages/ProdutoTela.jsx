import { Star } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { UseProduto } from "../../context/ProdutoContext";

function ProdutoTela() {
  const { produto } = UseProduto();
  const [searchParams] = useSearchParams();
  const [PosicaoImagem, setPosicaoImagem] = useState(0);
  const id = searchParams.get("id");
  const produtoselecionado = produto.find((item) => String(item.id) === id);

  if (!produtoselecionado) {
    return <p>Carregando produto...</p>;
  }

  function mudarIMagem() {
    setPosicaoImagem((posicaoatual) =>
      posicaoatual === produtoselecionado.carroselImg.length - 1
        ? 0
        : posicaoatual + 1,
    );
  }
  return (
    <div>
      <div className="w-full bg-black">
        <button className="bg-yellow-500 text-black px-3 py-2 rounded-md">
          BestSeller
        </button>
        <img
          src={produtoselecionado.carroselImg[PosicaoImagem]}
          alt={produtoselecionado.nome}
        />
        <button onClick={() => mudarIMagem()} className=" bg-white ">
          mudar imagem
        </button>
        <p className="text-zinc-700">{produtoselecionado.nome}</p>
        <h1>{produtoselecionado.descricao}</h1>
        <span>
          <Star /> {produtoselecionado.avaliacao}
        </span>
      </div>
    </div>
  );
}
export default ProdutoTela;
