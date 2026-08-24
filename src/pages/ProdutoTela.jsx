import { Star } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const UrlApi = "https://dummyjson.com/products";

function ProdutoTela() {
  const [searchParams] = useSearchParams();
  const [produto, setProduto] = useState(null);
  const [erro, setErro] = useState("");
  const id = searchParams.get("id");

  useEffect(() => {
    if (!id) {
      setErro("Produto não encontrado.");
      return;
    }

    fetch(`${UrlApi}/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Produto não encontrado.");
        }
        return response.json();
      })
      .then((dados) => setProduto(dados))
      .catch(() => setErro("Não foi possível carregar o produto."));
  }, [id]);

  if (erro) {
    return <p>{erro}</p>;
  }

  if (!produto) {
    return <p>Carregando produto...</p>;
  }

  return (
    <div>
      <div className="w-full bg-black">
        <button className="bg-yellow-500 text-black px-3 py-2 rounded-md">
          BestSeller
        </button>
        <img src={produto.thumbnail} alt={produto.title} />
        <p className="text-zinc-700">{produto.title}</p>
        <h1>{produto.description}</h1>
        <span>
          <Star /> {produto.rating}
        </span>
      </div>
    </div>
  );
}
export default ProdutoTela;
