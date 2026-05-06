import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Menu, Bell, LogOut } from "lucide-react";
import "./HeaderVoluntario.css";


function HeaderVoluntario() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="logo">
        <Link to="/areaVoluntario">
          <h1>🦷 DenTalk</h1>
        </Link>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
      >
        <Menu size={24} />
      </button>

      <nav id="nav" className={open ? "active" : ""}>
        <ul className="menu">
          <li><NavLink to="/areaVoluntario" end className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>Início</NavLink></li>
          <li><NavLink to="/meus-pacientes" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>Meus Pacientes</NavLink></li>
          <li><NavLink to="/agenda" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>Agenda</NavLink></li>
          <li><NavLink to="/atendimentos" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>Atendimentos</NavLink></li>
          <li><NavLink to="/prontuarios" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>Prontuários</NavLink></li>
        </ul>
      </nav>

      <Link to="/agenda" className="bell-icon">
        <Bell size={22} />
      </Link>

      <Link to="/areaVoluntario" className="menu-item" id="area-button-v">
        Voluntário
      </Link>

      <Link to="/" className="logout-icon">
        <LogOut size={22} />
      </Link>
    </header>
  );
}

export default HeaderVoluntario;