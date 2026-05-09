import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Bell, LogOut } from "lucide-react";

function HeaderFuncionario() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium whitespace-nowrap px-2 py-2 transition-colors ${
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
      {/* Header principal */}
      <header className="bg-[#010817] w-full" style={{ height: "96px" }}>
        <div className="flex items-center h-full w-full px-4 md:px-6">

          {/* Logo */}
          <Link
            to="/areaFuncionario"
            className="text-[#fd8b08] no-underline flex-shrink-0"
          >
            <h1 className="text-3xl md:text-2xl flex items-center gap-1 whitespace-nowrap m-0">
              🦷 DenTalk
            </h1>
          </Link>

          {/* Nav Desktop (992px+) */}
          <nav className="hidden lg:flex ml-6 flex-1">
            <ul className="flex items-center gap-1 list-none m-0 p-0">
              <li>
                <NavLink to="/areaFuncionario" end className={navLinkClass}>
                  Início
                </NavLink>
              </li>
              <li>
                <NavLink to="/cadastrof" className={navLinkClass}>
                  Cadastro
                </NavLink>
              </li>
              <li>
                <NavLink to="/triagemf" className={navLinkClass}>
                  Triagem
                </NavLink>
              </li>
              <li>
                <NavLink to="/monitoramento" className={navLinkClass}>
                  Monitoramento
                </NavLink>
              </li>
              <li>
                <NavLink to="/acoesescolaf" className={navLinkClass}>
                  Ações Escola
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Ações direita - Desktop */}
          <div className="hidden lg:flex items-center gap-3 ml-auto">
            <Link to="/monitoramento" className="text-white hover:text-[#fd8b08] transition-colors">
              <Bell size={22} />
            </Link>
            <Link
              to="/areaFuncionario"
              className="bg-[#fd8b08] text-white px-3 py-2 rounded-[10px] font-medium text-base no-underline hover:bg-[#e07a07] transition-colors"
            >
              Funcionário
            </Link>
            <Link to="/" className="text-white hover:text-[#fd8b08] transition-colors">
              <LogOut size={22} />
            </Link>
          </div>

          {/* Tablet (768px–991px): botão Funcionário + hamburger */}
          <div className="hidden md:flex lg:hidden items-center gap-3 ml-auto">
            <Link
              to="/areaFuncionario"
              className="bg-[#fd8b08] text-white px-3 py-1.5 rounded-[10px] font-medium text-sm no-underline"
            >
              Funcionário
            </Link>
            <button
              className="text-white p-1"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile (até 480px): só hamburger */}
          <div className="flex md:hidden items-center gap-2 ml-auto">
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

      {/* Menu dropdown mobile/tablet — fora do header para não causar gap */}
      {open && (
        <div
          className="lg:hidden bg-[#010817] w-full flex flex-col shadow-lg"
          style={{ zIndex: 50 }}
        >
          <NavLink
            to="/areaFuncionario"
            end
            onClick={() => setOpen(false)}
            className={mobileNavLinkClass}
          >
            Início
          </NavLink>
          <NavLink
            to="/cadastrof"
            onClick={() => setOpen(false)}
            className={mobileNavLinkClass}
          >
            Cadastro
          </NavLink>
          <NavLink
            to="/triagemf"
            onClick={() => setOpen(false)}
            className={mobileNavLinkClass}
          >
            Triagem
          </NavLink>
          <NavLink
            to="/monitoramento"
            onClick={() => setOpen(false)}
            className={mobileNavLinkClass}
          >
            Monitoramento
          </NavLink>
          <NavLink
            to="/acoesescolaf"
            onClick={() => setOpen(false)}
            className={mobileNavLinkClass}
          >
            Ações Escola
          </NavLink>

          {/* Só aparece no mobile: botão Funcionário + ícones */}
          <div className="md:hidden flex items-center gap-4 px-4 py-4 border-t border-gray-700">
            <Link to="/monitoramento" className="text-white" onClick={() => setOpen(false)}>
              <Bell size={20} />
            </Link>
            <Link
              to="/areaFuncionario"
              onClick={() => setOpen(false)}
              className="bg-[#fd8b08] text-white px-3 py-2 rounded-[10px] font-medium text-sm no-underline"
            >
              Funcionário
            </Link>
            <Link to="/" className="text-white ml-auto" onClick={() => setOpen(false)}>
              <LogOut size={20} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default HeaderFuncionario;