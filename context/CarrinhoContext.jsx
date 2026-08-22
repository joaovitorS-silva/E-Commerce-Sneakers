import { useState, useContext, createContext } from "react";

const CarrinhoContext = createContext();
export function CarrinhoProvider({ children }) {
  const [CarrinhoArray, setCarrinho] = useState([]);

  function AdicionarAoCarrinho(produto) {
    setCarrinho((estadoAnterior) => [...estadoAnterior, produto]);
  }
  return (
    <CarrinhoContext.Provider value={{ CarrinhoArray, AdicionarAoCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
}
export function useCarrinho() {
  return useContext(CarrinhoContext);
}
