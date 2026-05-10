import { Link, NavLink } from "react-router-dom";

interface MenuProps {
  open: boolean;
}

function Menu({ open }: MenuProps) {

  const desktopLink = ({ isActive }: { isActive: boolean }) =>
    `text-[1rem] font-semibold whitespace-nowrap px-3 py-2 transition-all duration-200 no-underline border-b-2 ${
      isActive
        ? "text-[#fd8b08] border-[#fd8b08]"
        : "text-white border-transparent hover:text-[#fd8b08] hover:border-[#fd8b08]"
    }`;

  const mobileLink = ({ isActive }: { isActive: boolean }) =>
    `block w-full text-right py-[0.9rem] px-6 text-[1rem] font-medium no-underline transition-all duration-200
     border-b border-[#ffffff10]
     ${isActive ? "text-[#fd8b08]" : "text-[#e0e0e0] hover:text-[#fd8b08] hover:bg-white/[0.03]"}`;

  return (
    <>
      {/* ══════════════════════════════════════
          DESKTOP 992px+
      ══════════════════════════════════════ */}
      <nav className="hidden [@media(min-width:992px)]:flex items-center ml-auto mr-8 w-full">
        <ul className="flex items-center gap-1 list-none m-0 p-0">
          <li><NavLink to="/" end className={desktopLink}>Home</NavLink></li>
          <li><NavLink to="/sobre" className={desktopLink}>Sobre</NavLink></li>
          <li><NavLink to="/faq" className={desktopLink}>FAQ</NavLink></li>
          <li><NavLink to="/contato" className={desktopLink}>Contato</NavLink></li>
          <li><NavLink to="/quemSomos" className={desktopLink}>Quem Somos</NavLink></li>
          <li><NavLink to="/Tdb" className={desktopLink}>Turma Do Bem</NavLink></li>
          <li><NavLink to="/missao" className={desktopLink}>Missão</NavLink></li>
          <li><NavLink to="/valores" className={desktopLink}>Valores</NavLink></li>
        </ul>

        <div className="flex items-center gap-3 ml-auto">
          <Link
            to="/areaVoluntario"
            className="hover:text-white bg-[#9ac93d] text-white px-4 py-2 rounded-[6px] text-[0.95rem] font-semibold no-underline transition-all duration-200 "
          >
            Login voluntário
          </Link>
          <Link
            to="/areaFuncionario"
            className="hover:text-white bg-[#fd8b08] text-white px-4 py-2 rounded-[6px] text-[0.95rem] font-semibold no-underline transition-all duration-200 "
          >
            Login funcionário
          </Link>
        </div>
      </nav>

      {/* ══════════════════════════════════════
          MOBILE e TABLET (até 991px)
          Drawer largura 100% em ambos
      ══════════════════════════════════════ */}
      <nav
        className={`
          [@media(min-width:992px)]:hidden
          absolute top-full left-0 right-0
          w-full z-50
          bg-[#010817]
          border-t border-[#fd8b08]/30
          shadow-[0_8px_32px_rgba(0,0,0,0.5)]
          transition-all duration-300 overflow-hidden
          ${open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none"
          }
        `}
      >
        <ul className="flex flex-col list-none m-0 p-0">

          {/* ── Botões de login ── */}
          <li className="px-5 pt-5 pb-3">
            <Link
              to="/areaVoluntario"
              className="flex items-center justify-center w-full bg-[#9ac93d] text-white py-3 rounded-lg font-semibold no-underline text-[1rem]"
            >
              Login voluntário
            </Link>
          </li>
          <li className="px-5 pb-5 border-b border-[#ffffff10]">
            <Link
              to="/areaFuncionario"
              className="flex items-center justify-center w-full bg-[#fd8b08] text-white py-3 rounded-lg font-semibold no-underline text-[1rem]"
            >
              Login funcionário
            </Link>
          </li>

          <li><NavLink to="/" end className={mobileLink}>Home</NavLink></li>
          <li><NavLink to="/sobre" className={mobileLink}>Sobre</NavLink></li>
          <li><NavLink to="/faq" className={mobileLink}>FAQ</NavLink></li>
          <li><NavLink to="/contato" className={mobileLink}>Contato</NavLink></li>
          <li><NavLink to="/quemSomos" className={mobileLink}>Quem Somos</NavLink></li>
          <li><NavLink to="/Tdb" className={mobileLink}>Turma Do Bem</NavLink></li>
          <li><NavLink to="/missao" className={mobileLink}>Missão</NavLink></li>
          <li>
            <NavLink to="/valores" className={({ isActive }) =>
              `block w-full text-right py-[0.9rem] px-6 text-[1rem] font-medium no-underline transition-all duration-200
               ${isActive ? "text-[#fd8b08]" : "text-[#e0e0e0] hover:text-[#fd8b08] hover:bg-white/[0.03]"}`
            }>
              Valores
            </NavLink>
          </li>

        </ul>

        <div className="px-6 py-4 border-t border-[#ffffff10]">
          <p className="text-[#ffffff40] text-xs text-right">🦷 DenTalk — Inclusão social através do sorriso</p>
        </div>

      </nav>
    </>
  );
}

export default Menu;