import { useState, useContext, createContext } from "react";
import { ShoppingCart } from "lucide-react";
const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [CarrinhoArray, setCarrinho] = useState([]);

  function AdicionarAoCarrinho(produto) {
    setCarrinho((estadoAnterior) => [...estadoAnterior, produto]);
  }

  function CarrinhoVerde(produto) {
    return CarrinhoArray.some(
      (itemDoCarrinho) => itemDoCarrinho.id === produto.id,
      console.log(produto.id,)
    ) ? (
      <ShoppingCart color="#4ade80" className=" absolute right-0 top-0 " />
   
    ) : (
      <ShoppingCart className="absolute right-0 top-0" onClick={()=> AdicionarAoCarrinho(produto)} />
    );
  }

  return (
    <CarrinhoContext.Provider value={{ CarrinhoArray,CarrinhoVerde, AdicionarAoCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
}
export function useCarrinho() {
  return useContext(CarrinhoContext);
}
