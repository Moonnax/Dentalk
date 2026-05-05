import "./HeaderFuncionario.css";

function HeaderFincionario() {
  return (
    <header>
      <div className="logo">
        <a href="/areaFuncionario">
          <h1>🦷 DenTalk</h1>
        </a>
      </div>

      <button id="menuToggle" className="menu-toggle">
        {/* ícone placeholder (lucide depois) */}
        <span>☰</span>
      </button>

      <nav id="nav">
        <ul className="menu">
          <li>
            <a className="menu-item active" href="/areaFuncionario">
              Início
            </a>
          </li>

          <li>
            <a className="menu-item" href="/cadastrof">
              Cadastro
            </a>
          </li>

          <li>
            <a className="menu-item" href="/triagemf">
              Triagem
            </a>
          </li>

          <li>
            <a className="menu-item" href="/monitoramento">
              Monitoramento
            </a>
          </li>

          <li>
            <a className="menu-item" href="/acoesescolaf">
              Ações Escola
            </a>
          </li>
        </ul>
      </nav>

      <a href="/monitoramento" className="bell-icon">
        🔔
      </a>

      <div className="menu-item" id="area-button-f">
        Funcionário
      </div>

      <a href="/" className="logout-icon">
        ⎋
      </a>
    </header>
  );
}

export default HeaderFincionario;