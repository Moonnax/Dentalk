import { Link } from "react-router-dom";

interface MenuProps {
  open: boolean;
}

function Menu({ open }: MenuProps) {
  return (
    <nav className={`nav ${open ? "active" : ""}`}>
      <ul className="menu">
        <li><Link className="menu-item" to="/">Home</Link></li>
        <li><Link className="menu-item" to="/sobre">Sobre</Link></li>
        <li><Link className="menu-item" to="/faq">FAQ</Link></li>
        <li><Link className="menu-item" to="/contato">Contato</Link></li>
        <li><Link className="menu-item" to="/quemSomos">Quem Somos</Link></li>
        <li><Link className="menu-item" to="/TurmadoBem">Turma Do Bem</Link></li>
        <li><Link className="menu-item" to="/missao">Missão</Link></li>
        <li><Link className="menu-item" to="/nossosValores">Nossos valores</Link></li>
        <li>
          <Link className="menu-item" id="area-button-v" to="/areaVoluntario">
            Login voluntário
          </Link>
        </li>
        <li>
          <Link className="menu-item" id="area-button-f" to="/areaFuncionario">
            Login funcionário
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;