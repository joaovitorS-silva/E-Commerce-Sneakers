import {
  ListSortAscending,
  Search,
  ShoppingCart,
  User,
  ChevronRight,
  LogIn,
  X,
} from "lucide-react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
function BarraNav() {
  const [pesquisa, setpesquisa] = useState("");
  const [pesquisaAberta, setPesquisaAberta] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [catalogoON, setcatalogoOFF] = useState(false);
  const [logIn, setlogIn] = useState(false);
  const navigate = useNavigate();
  const bestClick = () => {
    navigate("/best");
  };
  function BackPage() {
    navigate(-1);
  }
  function CatalogoNAv() {
    navigate("/best");
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
      <div className="relative">
        <button
          onClick={() => setcatalogoOFF(!catalogoON)}
          className="flex gap-4  items-center font-loja text-loja-texto border rounded-full p-2 hover:bg-loja-destaque hover:text-loja-fundo"
        >
          <ListSortAscending />
          Catalogo
        </button>
        {catalogoON ? (
          <button
            onClick={() => CatalogoNAv()}
            className=" flex gap-16 absolute text-white left-0 z-50 mt-2 w-56 rounded-lg bg-loja-card p-4 hover:bg-zinc-600 shadow-lg top-full"
          >
            Smartphones <ChevronRight />
          </button>
        ) : null}
      </div>
      <div className="flex gap-3 items-center">
        {/* mais vendidos */}
        <button
          onClick={bestClick}
          className="text-loja-texto hover:text-loja-navtexto"
        >
          Mais-Vendidos
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
          onClick={() => setPesquisaAberta(!pesquisaAberta)}
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
        <button
          onClick={() => setlogIn(!logIn)}
          className="flex items-center text-loja-texto "
        >
          <User />
          Log in
        </button>
        <div>
          {logIn ? (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
              <div className="relative w-full max-w-md rounded-md bg-zinc-800 p-8 text-white shadow-xl">
                <button
                  type="button"
                  aria-label="Fechar login"
                  onClick={() => setlogIn(false)}
                  className="absolute right-3 top-3 rounded-md p-2 text-zinc-400 transition hover:text-white"
                >
                  <X size={20} />
                </button>

                <div className="mb-8 flex flex-col items-center gap-2 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-700">
                    <User size={24}  className="text-yellow-400" />
                  </div>
                  <h2 className="text-2xl font-bold">Entrar na conta</h2>
                  <p className="text-sm text-zinc-400">
                    Acesse para acompanhar seus pedidos
                  </p>
                </div>

                <form className="flex flex-col gap-4" action="">
                  <label className="flex flex-col gap-1.5 text-left">
                    <span className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                      Email
                    </span>
                    <input
                      type="email"
                      className="rounded-md border border-zinc-600 bg-zinc-900 p-3 text-white placeholder:text-zinc-500 outline-none transition focus:border-yellow-400"
                      placeholder="seu@email.com"
                    />
                  </label>

                  <label className="flex flex-col gap-1.5 text-left">
                    <span className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                      Senha
                    </span>
                    <input
                      type="password"
                      className="rounded-md border border-zinc-600 bg-zinc-900 p-3 text-white placeholder:text-zinc-500 outline-none transition focus:border-yellow-400"
                      placeholder="••••••••"
                    />
                  </label>

                  <button
                    type="submit"
                    className="mt-2 w-full rounded-md bg-yellow-400 px-4 py-3 font-bold text-zinc-950 transition hover:bg-yellow-300"
                  >
                    Entrar
                  </button>
                </form>

                <p className="mt-6 text-center text-sm text-zinc-400">
                  Não tem conta?
                  <button
                    type="button"
                    className="font-semibold text-yellow-400 hover:underline"
                  >
                    Cadastre-se
                  </button>
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
export default BarraNav;
