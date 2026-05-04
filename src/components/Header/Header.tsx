import { useState } from "react";
import "./Header.css";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="logo">
        <a href="/">
          <h1>🦷 DenTalk</h1>
        </a>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      <nav className={`nav ${open ? "active" : ""}`}>
        <ul className="menu">
          <li><a className="menu-item" href="/">Home</a></li>
          <li><a className="menu-item" href="/sobre">Sobre</a></li>
          <li><a className="menu-item" href="/faq">FAQ</a></li>
          <li><a className="menu-item" href="/contato">Contato</a></li>
          <li><a className="menu-item" href="/quemSomos">Quem Somos</a></li>
          <li><a className="menu-item" href="/TurmadoBem">Turma Do Bem</a></li>
          <li><a className="menu-item" href="/missao">Missão</a></li>
          <li><a className="menu-item" href="/nossosValores">Nossos valores</a></li>
          <li>
            <a className="menu-item" id="area-button-v" href="/areaVoluntario">
              Login voluntário
            </a>
          </li>
          <li>
            <a className="menu-item" id="area-button-f" href="/areaFuncionario">
              Login funcionário
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;