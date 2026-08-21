import produtos from "../pages/BestSellers";

function Carrinho({produtos}) {
function CarrinhoExibe (produto){
   return DataTransferItemList.length === 0 ?    <article className="bg-loja-card  p-10 flex-1 flex items-center justify-between  rounded-md m-11">
        <div className="flex flex-col">
          <h1 className="text-white">seu carrinho estar vazio</h1>
          <p className="text-gray-400">Aproveite e adicione no seu carrinho</p>
        </div>
        <button className="ml-auto  bg-yellow-300 w-auto p-3 rounded-md">
          Ver ofertas
        </button>
        <div key={produtos1.marca} produtos={produtos1.marca}></div>
      </article> :  <div className="flex pr-8 w-full gap-4 ">
      
      <div className="border-blue-400 bg-orange-500 mt-8 p-4 h-5/5 w-1/4"></div>
    </div>
}
  return (    
    <div>
        {CarrinhoExibe}
    </div>
  );
}
export default Carrinho;
