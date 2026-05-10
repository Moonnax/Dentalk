import { Link } from "react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div
      className="font-[Arial,Helvetica,sans-serif] text-[#010817] flex flex-col min-h-screen"
      style={{
        backgroundImage: "url('/home-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
    <Header />
      <main
        className="
          flex-1 flex items-center min-h-screen
          pl-24
          max-[480px]:pl-0 max-[480px]:justify-center max-[480px]:text-center max-[480px]:py-12 max-[480px]:px-6
          min-[481px]:max-[991px]:pl-0 min-[481px]:max-[991px]:justify-center min-[481px]:max-[991px]:text-center min-[481px]:max-[991px]:py-12 min-[481px]:max-[991px]:px-6
        "
      >
        <div className="max-w-[32rem]">
          <img
            src="https://dentalk-33pn9op2d-moonnaxs-projects.vercel.app/logo.png"
          alt="logo Dentalk"
            className="mb-4 block w-96 max-[480px]:w-56 min-[481px]:max-[991px]:w-64"
          />

          <p className="text-[1.5625rem] text-white leading-[1.4] mb-8 max-[480px]:text-base min-[481px]:max-[991px]:text-base">
            Uma solução desenvolvida por estudantes, pensada para apoiar a ONG Turma do Bem a transformar vidas através da saúde bucal.
          </p>

          <Link
            to="/sobre"
            className="inline-block bg-[#fd8b08] text-white py-[0.8rem] px-8 rounded-[2rem] no-underline font-bold border-none hover:bg-[#b36103] hover:text-white max-[480px]:text-[0.9rem] max-[480px]:py-[0.7rem] max-[480px]:px-6"
          >
            Saiba mais sobre
          </Link>
        </div>
      </main>

      <div className="hidden min-[992px]:block">
  <Footer />
</div>
    </div>
  );
}

export default Home;