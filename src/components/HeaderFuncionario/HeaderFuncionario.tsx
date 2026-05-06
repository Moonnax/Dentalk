import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, Bell, LogOut } from "lucide-react";
import "./HeaderFuncionario.css";

function HeaderFuncionario() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="logo">
        <Link to="/areaFuncionario">
          <h1>🦷 DenTalk</h1>
        </Link>
      </div>

      <button className="menu-toggle" onClick={() => setOpen(!open)}>
        <Menu size={24} />
      </button>

      <nav id="nav" className={open ? "active" : ""}>
        <ul className="menu">
          <li><NavLink to="/areaFuncionario" end className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>Início</NavLink></li>
          <li><NavLink to="/cadastrof" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>Cadastro</NavLink></li>
          <li><NavLink to="/triagemf" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>Triagem</NavLink></li>
          <li><NavLink to="/monitoramento" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>Monitoramento</NavLink></li>
          <li><NavLink to="/acoesescolaf" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>Ações Escola</NavLink></li>
        </ul>
      </nav>

      <Link to="/monitoramento" className="bell-icon">
        <Bell size={22} />
      </Link>

      <Link to="/areaFuncionario" className="menu-item" id="area-button-f">
        Funcionário
      </Link>

      <Link to="/" className="logout-icon">
        <LogOut size={22} />
      </Link>
    </header>
  );
}

export default HeaderFuncionario;