import { useEffect, createContext, useState, useContext } from "react";
const produtoContext = createContext();
export function ProdutoProvider({ children }) {
  const [produto, setproduto] = useState([]);
  const [carregando, setcarregando] = useState(true);
  const [error, setError] = useState(null);
  const [sucesso, setSuceeso] = useState(false);
  const UrlApi = "https://dummyjson.com/products/category/smartphones";
  useEffect(() => {
    async function buscarProdutos() {
      try {
        setcarregando(true);
        setError(null);
        const respostaAPI = await fetch(UrlApi);

        if (!respostaAPI.ok) {
          throw new Error("error ao buscar produtos");
        }

        const resultadoApi = await respostaAPI.json();
        const nomesUnicos = resultadoApi.products.map((item) => ({
          id: item.id,
          nome: item.title,
          preco: item.price,
          desconto: item.discountPercentage,
          marca: item.brand,
          imagem: item.thumbnail,
          precoOriginal: item.price / (1 - item.discountPercentage / 100),
          descricao: item.description,
          carroselImg: item.images,
          avaliacao: item.rating,
          QrCode: item.QrCode,
        }));
        setproduto(nomesUnicos);
        setSuceeso(true);
      } catch (erro) {
        console.log(erro);
        setError(erro.message);
      } finally {
        setcarregando(false);
      }
    }
    buscarProdutos();
  }, []);

  return (
    <produtoContext.Provider value={{ sucesso, error, carregando, produto }}>
      {children}
    </produtoContext.Provider>
  );
}
export function UseProduto() {
  return useContext(produtoContext);
}
