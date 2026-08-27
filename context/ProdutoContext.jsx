import { useEffect, createContext, useState, useContext } from "react";
const produtoContext = createContext();
export function ProdutoProvider({ children }) {
  const [produto, setproduto] = useState([]);
  const UrlApi = "https://dummyjson.com/products/category/smartphones";
  useEffect(() => {
    fetch(UrlApi)
      .then(function (respostaAPI) {
        return respostaAPI.json();
      })
      .then(function (resultadoApi) {
        const NomesUnicos = resultadoApi.products.map((item) => ({
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
        setproduto(NomesUnicos)
      });
  }, []);

  return <produtoContext.Provider value={{ produto }}>{children}</produtoContext.Provider>;
}
export function UseProduto() {
  return useContext(produtoContext);
}
