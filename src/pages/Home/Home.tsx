import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import logo from "../../assets/logo.png";
import background from "../../assets/home-background.png";

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

          <a
            href="/sobre"
            className="
              inline-flex
              items-center
              justify-center
              bg-[#fd8b08]
              text-white
              px-8
              py-3
              rounded-full
              no-underline
              font-bold
              text-base
              transition-all
              duration-200
              hover:bg-[#b36103]
              max-[768px]:text-[0.9rem]
              max-[768px]:px-6
              max-[768px]:py-[0.7rem]
            "
          >
            Saiba mais sobre
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;