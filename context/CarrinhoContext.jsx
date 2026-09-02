import { useState, useContext, createContext } from "react";
import { ShoppingCart } from "lucide-react";
const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [itensCarrinho, setItensCarrinho] = useState([]);
  function adicionarAoCarrinho(produto) {
    const novoItem = { ...produto, quantidade: 1 };
    setItensCarrinho((estadoAnterior) => [...estadoAnterior, novoItem]);
    
  }

  function aumentarQuantidade(id) {
    setItensCarrinho((estadoAnterior) =>
      estadoAnterior.map((item) =>
        item.id === id
          ? { ...item, quantidade: item.quantidade + 1 }
          : { ...item },
      ),
    );
  }
  function diminuirQuantidade(id) {
    setItensCarrinho((estadoAnterior) =>
      estadoAnterior.map((item) =>
        item.id === id
          ? { ...item, quantidade: item.quantidade - 1 }
          : item
      )
       .filter((item) => item.quantidade > 0
      )
      
    );
  }
  function removerDoCarrinho(id) {
    setItensCarrinho((estadoAnterior) =>
    estadoAnterior.filter((item)=> item.id !== id)
    )
  }
  {"nao funcionando agora, talvez irei usar no futuro"}
  function valortotal(){
    const valorTotal = itensCarrinho.reduce((total,item) =>
    total + item.preco * item.quantidade,0
    )
    return valorTotal;
  }

  function indicadorCarrinho(produto) {
    return itensCarrinho.some(
      (itemDoCarrinho) => itemDoCarrinho.id === produto.id,
    ) ? (
      <ShoppingCart color="#4ade80" />
    ) : (
      <ShoppingCart
        onClick={(evento) => {
          evento.stopPropagation();
          adicionarAoCarrinho(produto);
        }}
      />
    );
  }

  return (
    <CarrinhoContext.Provider
      value={{
        itensCarrinho,
        adicionarAoCarrinho,
        aumentarQuantidade,
        diminuirQuantidade,
        removerDoCarrinho,
        valortotal,
        indicadorCarrinho,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}
export function useCarrinho() {
  return useContext(CarrinhoContext);
}
