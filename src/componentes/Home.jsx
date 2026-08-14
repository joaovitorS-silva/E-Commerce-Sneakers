import Nav from "./Nav";
import CardProduto from "./cardProduto";
import fundoHome3 from "../assets/fundoHome3.webp"
function Home() {
  return (
    <div className="overflow-hidden relative ">
      <div className=" overflow-hidden absolute start-20 left-4 sm:bottom-6 sm:right-6 md:bottom-10 md:right-10 bg-slate-200 rounded-lg p-3 sm:p-4 md:p-6 w-2/12 sm:max-w-sm md:max-w-xs text-center">
        <h1 className=" w-fit p-4">
          <span className=" block font-extrabold">COM A TECNOLOGIA</span>
          <span className=" block font-extrabold text-indigo-600">
            O FUTURO JA CHEGOU
          </span>
        </h1>
      </div>
      <img
        className="bg-cover w-full object-cover object-center"
        src= {fundoHome3}
        alt="loja - home page"
      />
    </div>
  );
};

export default Home;
