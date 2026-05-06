import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import logo from "../../assets/logo.png";
import background from "../../assets/home-background.png";
import SaibaMais from "../../components/SaibaMaisBotao/SaibaMaisBotao";

function Home() {
  return (
    <div
      className="
        bg-cover
        bg-center
        bg-fixed
        min-h-screen
        flex
        flex-col
      "
      style={{ backgroundImage: `url(${background})` }}
    >
      <Header />

      <main
        className="
          min-h-screen
          flex
          items-center
          pl-24
          max-[768px]:px-6
          max-[768px]:justify-center
          max-[768px]:text-center
        "
      >
        <div
          className="
            max-w-[32rem]
            flex
            flex-col
            items-start
            max-[768px]:items-center
          "
        >
          <img
            src={logo}
            alt="Dentalk"
            className="
              w-[24rem]
              mb-4
              max-[768px]:w-[14rem]
            "
          />

          <p
            className="
              text-[1.5625rem]
              text-white
              leading-[1.4]
              mb-8
              font-normal
              max-w-[32rem]
              max-[768px]:text-[1rem]
            "
          >
            Uma solução desenvolvida por estudantes, pensada para apoiar a ONG
            Turma do Bem a transformar vidas através da saúde bucal.
          </p>

          <SaibaMais
            href="/sobre"
            texto="Saiba mais sobre"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;