import Nav from "./nav";
import CardProduto from "./cardProduto";
function Home() {
  return (
    <div>
      <Nav />

      <div className="flex  justify-center">
        <h1 className="text-5xl mt-20">
          <span className=" block font-extrabold">COM A TECNOLOGIA</span>
          <span className=" block font-extrabold text-indigo-600">
            O FUTURO JA CHEGOU
          </span>
        </h1>

      </div>
    </div>
  );
}

export default Home;
