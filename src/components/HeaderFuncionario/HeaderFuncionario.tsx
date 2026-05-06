import { useState } from "react";
import { Link } from "react-router-dom";
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

      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
      >
        <Menu size={24} />
      </button>

      <nav id="nav" className={open ? "active" : ""}>
        <ul className="menu">
          <li><Link className="menu-item active" to="/areaFuncionario">Início</Link></li>
          <li><Link className="menu-item" to="/cadastrof">Cadastro</Link></li>
          <li><Link className="menu-item" to="/triagemf">Triagem</Link></li>
          <li><Link className="menu-item" to="/monitoramento">Monitoramento</Link></li>
          <li><Link className="menu-item" to="/acoesescolaf">Ações Escola</Link></li>
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