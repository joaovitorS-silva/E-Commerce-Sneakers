import fundoHome3 from "../assets/fundoHome3.webp";

function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-4 start-20 overflow-hidden rounded-lg bg-slate-200 p-3 text-center sm:bottom-6 sm:right-6 sm:p-4 md:bottom-10 md:right-10 md:p-6 md:max-w-xs sm:max-w-sm w-2/12">
        <h1 className="w-fit p-4">
          <span className="block font-extrabold">COM A TECNOLOGIA</span>
          <span className="block font-extrabold text-indigo-600">
            O FUTURO JA CHEGOU
          </span>
        </h1>
      </div>

      <img
        className="w-full bg-cover object-cover object-center"
        src={fundoHome3}
        alt="loja - home page"
      />
    </div>
  );
}

export default Home;
