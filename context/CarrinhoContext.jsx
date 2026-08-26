import { useState, useContext, createContext } from "react";
import { ShoppingCart } from "lucide-react";
const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [CarrinhoArray, setCarrinho] = useState([]);
  function AdicionarAoCarrinho(produto) {
    const novoItem = { ...produto, quantidade: 1 };
    setCarrinho((estadoAnterior) => [...estadoAnterior, novoItem]);
  }

  function aumentarquantidade(id) {
    setCarrinho((estadoanterior) =>
      estadoanterior.map((item) =>
        item.id === id
          ? { ...item, quantidade: item.quantidade + 1 }
          : { ...item },
      ),
    );
  }
  function dimunuirquantidade(id) {
    setCarrinho((estadoAnterior) =>
      estadoAnterior.map((item) =>
        item.id === id
          ? { ...item, quantidade: item.quantidade - 1 }
          : item
      )
       .filter((item) => item.quantidade > 0
      )
      
    );
  }
  function removerCarrinho (id){
    setCarrinho((estadoAnterior)=>
    estadoAnterior.filter((item)=> item.id !== id)
    )
  }
  {"nao funcionando agora, talvez irei usar no futuro"}
  function valortotal(){
    const valortotal = CarrinhoArray.reduce((total,item) =>
    total + item.preco * item.quantidade,0
    )
  }
}
  function CarrinhoVerde(produto) {
    return CarrinhoArray.some(
      (itemDoCarrinho) => itemDoCarrinho.id === produto.id,
    ) ? (
      <ShoppingCart color="#4ade80" />
    ) : (
      <ShoppingCart
        onClick={(evento) => {
          evento.stopPropagation();
          AdicionarAoCarrinho(produto);
        }}
      />
    );
  }

  return (
    <CarrinhoContext.Provider
      value={{
        CarrinhoArray,
        CarrinhoVerde,
        AdicionarAoCarrinho,
        aumentarquantidade,
        dimunuirquantidade,
        removerCarrinho
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}
export function useCarrinho() {
  return useContext(CarrinhoContext);
}
