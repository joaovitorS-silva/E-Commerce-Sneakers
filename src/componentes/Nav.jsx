import { ListSortAscending, Search, ShoppingCart, User } from "lucide-react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
function BarraNav() {
  const [pesquisa, setpesquisa] = useState("");
  const [pesquisaAberta, setPesquisaAberta] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const bestClick = () => {
    navigate("/best");
  };
  function BackPage() {
    navigate(-1);
  }

  const navigateCarro = useNavigate();
  const NavCarrinho = () => {
    navigate("/carrinho");
  };
  function pesquisar(event) {
    const texto = event.target.value;
    setpesquisa(texto);

    setSearchParams({ busca: texto });
  }
  return (
    <div className=" border-red-800 flex items-center bg-loja-card w-full rounded-sm p-6 my-0 justify-between">
      <button
        className="font-loja text-3xl text-loja-texto"
        onClick={() => BackPage()}
      >
        NOMEDALOJA
      </button>
      {/* catalogo */}
      <button className="flex gap-4 break-words w-[12%] font-loja text-loja-texto border rounded-full p-2 hover:bg-loja-destaque hover:text-loja-fundo">
        <ListSortAscending />
        Catalogo
      </button>
      <div className="flex gap-3 items-center">
        {/* mais vendidos */}
        <button
          onClick={bestClick}
          className="text-loja-texto hover:text-loja-navtexto"
        >
          Mais-Vendidos
        </button>
        {/* novidades */}
        <button className="text-loja-texto hover:text-loja-navtexto">
          Novidades
        </button>
      </div>
      <div className="flex gap-5">
        {/* buscar */}
        {pesquisaAberta ? (
          <input
            type="text"
            placeholder="pesquise produtos"
            className="p-2 rounded-lg text-orange-700"
            value={pesquisa}
            onChange={pesquisar}
          />
        ) : null}
        <button
          onClick={() => setPesquisaAberta(true)}
          className="text-loja-texto transition-transform duration-150"
        >
          <Search />
        </button>
        {/* carrinho */}
        <button
          onClick={NavCarrinho}
          className="flex items-center text-loja-texto "
        >
          <ShoppingCart />
        </button>
        {/* Login */}
        <button className="flex items-center text-loja-texto ">
          <User />
          Log in
        </button>
      </div>
    </div>
  );
}
export default BarraNav;
