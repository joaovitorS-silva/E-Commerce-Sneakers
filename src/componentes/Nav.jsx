import { ListSortAscending, Search, ShoppingCart, User } from "lucide-react";
function BarraNav() {
  return (
    <div className="flex items-center bg-loja-card w-5/5 rounded-sm p-6 my-0 gap-20">
      <h1 className="font-loja text-3xl text-loja-texto">NOMEDALOJA</h1>
      {/* catalogo */}
      <button className="flex gap-4 break-words w-[12%] font-loja text-loja-texto border rounded-full p-2 hover:bg-loja-destaque hover:text-loja-fundo">
        <ListSortAscending />
        Catalogo
      </button>
      <div className="flex gap-7 items-center">
        {/* mais vendidos */}
        <button className="text-loja-texto hover:text-loja-navtexto">
          Mais-Vendidos
        </button>
        {/* Oferta */}
        <button className="text-loja-texto hover:text-loja-navtexto">
          Oferta
        </button>
        {/* novidades */}
        <button className="text-loja-texto hover:text-loja-navtexto">
          Novidades
        </button>
      </div>
      <div className="flex items-center gap-14">
        {/* buscar */}
        <button className="text-loja-texto">
          <Search />
        </button>
        {/* carrinho */}
        <button className="flex items-center text-loja-texto gap-2">
          <ShoppingCart />
          CarT
        </button>
        {/* Login */}
        <button className="flex items-center text-loja-texto gap-2">
          <User />
          Log in
        </button>
      </div>
    </div>
  );
}
export default BarraNav;
