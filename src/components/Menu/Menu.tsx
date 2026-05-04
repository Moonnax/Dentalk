interface MenuProps {
  open: boolean;
}

function Menu({ open }: MenuProps) {
  return (
    <nav className={`nav ${open ? "active" : ""}`}>
      <ul className="menu">
        <li><a className="menu-item" href="/">Home</a></li>
        <li><a className="menu-item" href="/">Sobre</a></li>
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
  );
}

export default Menu;