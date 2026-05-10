import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#010817] h-14 min-[600px]:h-16 min-[768px]:h-[5.5rem] min-[992px]:h-24 flex items-center relative font-[Arial,Helvetica,sans-serif]">

      {/* LOGO */}
      <div className="px-2 min-[992px]:px-6">
        <Link to="/" className="text-[#fd8b08] no-underline">
          <h1 className="flex items-center gap-[0.3rem] whitespace-nowrap text-2xl min-[600px]:text-2xl min-[768px]:text-[2.2rem] min-[992px]:text-[1.875rem]">
            🦷 DenTalk
          </h1>
        </Link>
      </div>

      {/* BOTÃO MENU MOBILE/TABLET */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Abrir menu"
        className="
          flex items-center bg-transparent border-none text-white ml-auto cursor-pointer
          mr-2
          min-[600px]:mr-2
          min-[768px]:mr-8
          min-[992px]:hidden
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          className="
            w-7 h-7
            min-[600px]:w-8 min-[600px]:h-8
            min-[768px]:w-10 min-[768px]:h-10
          "
        >
          {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* NAV */}
      <nav
        className={`
          bg-[#010817]
          transition-all duration-300 ease-in-out

          /* DESKTOP */
          min-[992px]:flex
          min-[992px]:justify-end
          min-[992px]:ml-auto
          min-[992px]:mr-8
          min-[992px]:static
          min-[992px]:opacity-100
          min-[992px]:pointer-events-auto
          min-[992px]:translate-y-0

          /* MOBILE + TABLET */
          max-[991px]:absolute
          max-[991px]:right-0
          max-[991px]:z-50

          /* MOBILE */
          max-[599px]:top-14
          max-[599px]:w-full

          /* SMALL TABLET */
          min-[600px]:max-[767px]:top-16
          min-[600px]:max-[767px]:w-[40%]
          min-[600px]:max-[767px]:h-screen

          /* TABLET */
          min-[768px]:max-[991px]:top-[5.5rem]
          min-[768px]:max-[991px]:w-[30%]
          min-[768px]:max-[991px]:h-screen

          ${
            open
              ? "max-[991px]:opacity-100 max-[991px]:pointer-events-auto max-[991px]:translate-y-0"
              : "max-[991px]:opacity-0 max-[991px]:pointer-events-none max-[991px]:-translate-y-5"
          }
        `}
      >
        <Menu open={open} />
      </nav>
    </header>
  );
}

export default Header;