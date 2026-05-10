import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="font-[Arial,Helvetica,sans-serif] text-[#010817] flex flex-col min-h-screen"
      style={{
        backgroundImage: "url('src/assets//home-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <header className="bg-[#010817] flex items-center h-14 min-[768px]:h-[5.5rem] min-[992px]:h-24 relative z-50">
        <div className="px-2 min-[992px]:px-6">
          <Link to="/" className="text-[#fd8b08] no-underline">
            <h1 className="text-[1.5rem] min-[768px]:text-[2.2rem] min-[992px]:text-[1.875rem] flex items-center gap-1 whitespace-nowrap bg-transparent font-bold">
              🦷 DenTalk
            </h1>
          </Link>
        </div>

        <button
          className="min-[992px]:hidden flex items-center bg-transparent border-none text-white ml-auto mr-2 cursor-pointer p-0"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7 min-[768px]:w-10 min-[768px]:h-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <nav
          style={{
            transition: "transform 0.3s ease, opacity 0.3s ease",
          }}
          className={[
            "min-[992px]:flex min-[992px]:justify-end min-[992px]:bg-[#010817] min-[992px]:ml-auto min-[992px]:mr-8 min-[992px]:static min-[992px]:w-auto min-[992px]:opacity-100 min-[992px]:pointer-events-auto min-[992px]:translate-y-0",
            "max-[991px]:block max-[991px]:absolute max-[991px]:right-0 max-[991px]:bg-[#010817] max-[991px]:mr-0",
            "max-[479px]:top-14 max-[479px]:w-full",
            "min-[480px]:max-[991px]:top-14 min-[480px]:max-[991px]:w-2/5 min-[480px]:max-[991px]:h-screen",
            "min-[768px]:max-[991px]:top-[5.5rem]",
            menuOpen
              ? "max-[991px]:opacity-100 max-[991px]:pointer-events-auto max-[991px]:translate-y-0"
              : "max-[991px]:opacity-0 max-[991px]:pointer-events-none max-[991px]:-translate-y-5",
          ].join(" ")}
        >
          <ul className="min-[992px]:flex min-[992px]:list-none min-[992px]:gap-[0.8rem] min-[992px]:items-center min-[992px]:text-center min-[992px]:ml-[12%] max-[991px]:flex max-[991px]:flex-col max-[991px]:items-center max-[991px]:p-0 max-[991px]:pb-4 list-none">

            <li className="max-[991px]:w-full max-[991px]:pt-4" style={{ order: -2 }}>
              <Link
                to="/areaVoluntario"
                className="font-[Arial,Helvetica,sans-serif] text-base font-bold no-underline inline-block py-2 px-2 bg-[#9ac93d] text-white rounded-[10%] max-[991px]:w-4/5 max-[991px]:mx-[10%] max-[991px]:rounded-lg max-[991px]:border-b-0 max-[991px]:text-center"
              >
                Login voluntário
              </Link>
            </li>

            <li className="max-[991px]:w-full" style={{ order: -1 }}>
              <Link
                to="/areaFuncionario"
                className="font-[Arial,Helvetica,sans-serif] text-base font-bold no-underline inline-block py-2 px-2 bg-[#fd8b08] text-white rounded-[10%] max-[991px]:w-4/5 max-[991px]:mx-[10%] max-[991px]:rounded-lg max-[991px]:border-b-0 max-[991px]:text-center"
              >
                Login funcionário
              </Link>
            </li>

            {[
              { label: "Home", href: "/" },
              { label: "Sobre", href: "/sobre" },
              { label: "FAQ", href: "/faq" },
              { label: "Contato", href: "/contato" },
              { label: "Quem Somos", href: "/quemSomos" },
              { label: "Turma Do Bem", href: "/TurmadoBem" },
              { label: "Missão", href: "/missao" },
              { label: "Nossos valores", href: "/nossosValores" },
            ].map(({ label, href }) => (
              <li key={label} className="max-[991px]:w-full">
                <Link
                  to={href}
                  className="font-[Arial,Helvetica,sans-serif] text-base font-bold no-underline bg-[#010817] text-[whitesmoke] inline-block py-2 px-2 hover:text-[#fd8b08] max-[991px]:w-full max-[991px]:text-right max-[991px]:pr-4 max-[991px]:border-b max-[991px]:border-[#fd8b08] min-[768px]:max-[991px]:pr-[2.3125rem] min-[768px]:max-[991px]:text-[0.938rem]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

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
            src="src/assets/logo.png"
            alt="Dentalk"
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

      <footer className="bg-[#010817] text-white text-center py-8 px-4 mt-auto max-[480px]:py-6">
        <h2 className="mb-[0.8rem] max-[480px]:text-xl max-[480px]:mb-0">DenTalk</h2>
        <p className="italic mb-4 max-[480px]:text-[0.9rem] max-[480px]:my-[0.4rem]">
          "Cada sorriso, uma história"
        </p>
        <p className="max-w-[30rem] mx-auto whitespace-nowrap max-[480px]:text-[0.8rem] max-[480px]:whitespace-normal max-[480px]:overflow-x-auto">
          Projeto institucional desenvolvido por alunos do Centro Universitário{" "}
          <a
            href="https://www.fiap.com.br/"
            target="_blank"
            rel="noreferrer"
            className="text-[#fd8b08] no-underline"
          >
            FIAP
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Home;