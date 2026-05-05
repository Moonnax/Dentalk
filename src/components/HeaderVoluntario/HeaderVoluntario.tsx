import { useState } from "react";
import { Link } from "react-router-dom";
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

      {/* GRUPO DIREITA */}
      <div className="header-right">

        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
        >
          <Menu size={24} />
        </button>

        <nav id="nav" className={open ? "active" : ""}>
          <ul className="menu">
            <li><Link className="menu-item active" to="/areaVoluntario">Início</Link></li>
            <li><Link className="menu-item" to="/meus-pacientes">Meus Pacientes</Link></li>
            <li><Link className="menu-item" to="/agenda">Agenda</Link></li>
            <li><Link className="menu-item" to="/atendimentos">Atendimentos</Link></li>
            <li><Link className="menu-item" to="/prontuarios">Prontuários</Link></li>
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

      </div>
    </header>
  );
}

export default HeaderVoluntario;