import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Bell, LogOut } from "lucide-react";

function HeaderVoluntario() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-base font-medium whitespace-nowrap px-2 py-2 transition-colors ${
      isActive
        ? "text-[#fd8b08] border-b-2 border-[#fd8b08]"
        : "text-white hover:text-[#fd8b08]"
    }`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `py-3 px-4 text-base font-medium border-b border-gray-800 transition-colors ${
      isActive ? "text-[#fd8b08]" : "text-white hover:text-[#fd8b08]"
    }`;

  return (
    <>
      <header className="bg-[#010817] w-full" style={{ height: "96px" }}>
        <div className="flex items-center h-full w-full px-4 md:px-6">

          <Link to="/areaVoluntario" className="text-[#fd8b08] no-underline flex-shrink-0">
            <h1 className="text-3xl md:text-2xl [@media(min-width:992px)]:text-3xl flex items-center gap-1 whitespace-nowrap m-0">
              🦷 DenTalk
            </h1>
          </Link>

          {/*Desktop (992px+)*/}
          <nav className="hidden [@media(min-width:992px)]:flex ml-6 flex-1">
            <ul className="flex items-center gap-1 list-none m-0 p-0">
              <li><NavLink to="/areaVoluntario" end className={navLinkClass}>Início</NavLink></li>
              <li><NavLink to="/meus-pacientes" className={navLinkClass}>Meus Pacientes</NavLink></li>
              <li><NavLink to="/agenda" className={navLinkClass}>Agenda</NavLink></li>
              <li><NavLink to="/atendimentos" className={navLinkClass}>Atendimentos</NavLink></li>
              <li><NavLink to="/prontuarios" className={navLinkClass}>Prontuários</NavLink></li>
            </ul>
          </nav>

          {/* Direita Desktop (992px+)*/}
          <div className="hidden [@media(min-width:992px)]:flex items-center gap-3 ml-auto">
            <Link to="/agenda" className="text-white hover:text-[#fd8b08] transition-colors">
              <Bell size={22} />
            </Link>
            <Link
              to="/areaVoluntario"
              className="bg-[#9ac93d] text-white px-3 py-2 rounded-[10px] font-medium text-base no-underline cursor-default"
            >
              Voluntário
            </Link>
            <Link to="/" className="text-white hover:text-[#fd8b08] transition-colors">
              <LogOut size={22} />
            </Link>
          </div>

          {/* ── Mobile e Tablet (até 991px): badge + aburgue*/}
          <div className="flex [@media(min-width:992px)]:hidden items-center gap-3 ml-auto">
            <Link
              to="/areaVoluntario"
              className="bg-[#9ac93d] text-white px-3 py-1.5 rounded-[10px] font-medium text-sm no-underline cursor-default"
            >
              Voluntário
            </Link>
            <button
              className="text-white p-1"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile e Tablet (até 991px*/}
      {open && (
        <div
          className="[@media(min-width:992px)]:hidden bg-[#010817] w-full flex flex-col shadow-lg"
          style={{ zIndex: 50 }}
        >
          <NavLink to="/areaVoluntario" end onClick={() => setOpen(false)} className={mobileNavLinkClass}>
            Início
          </NavLink>
          <NavLink to="/meus-pacientes" onClick={() => setOpen(false)} className={mobileNavLinkClass}>
            Meus Pacientes
          </NavLink>
          <NavLink to="/agenda" onClick={() => setOpen(false)} className={mobileNavLinkClass}>
            Agenda
          </NavLink>
          <NavLink to="/atendimentos" onClick={() => setOpen(false)} className={mobileNavLinkClass}>
            Atendimentos
          </NavLink>
          <NavLink to="/prontuarios" onClick={() => setOpen(false)} className={mobileNavLinkClass}>
            Prontuários
          </NavLink>

          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="py-3 px-4 text-base font-medium text-white hover:text-[#fd8b08] transition-colors"
          >
            Sair
          </Link>
        </div>
      )}
    </>
  );
}

export default HeaderVoluntario;