import { Bell, LogOut, Menu, Plus, FileText, Calendar, Search } from "lucide-react";
import "./Vmeuspacientes.css"

export default function VMeusPacientes() {
  return (
    <>
      <header>
        <div className="logo">
          <a href="areaVoluntario.html">
            <h1>🦷 DenTalk</h1>
          </a>
        </div>

        <button className="menu-toggle">
          <Menu />
        </button>

        <nav id="nav">
          <ul className="menu">
            <li><a className="menu-item" href="../areaVoluntario.html">Início</a></li>
            <li><a className="menu-item active" href="#">Meus Pacientes</a></li>
            <li><a className="menu-item" href="#">Agenda</a></li>
            <li><a className="menu-item" href="#">Atendimentos</a></li>
            <li><a className="menu-item" href="#">Prontuários</a></li>
          </ul>
        </nav>

        <a href="#" className="bell-icon"><Bell /></a>
        <a href="#" className="menu-item" id="area-button-v">Voluntário</a>
        <a href="#" className="logout-icon"><LogOut /></a>
      </header>

      <main className="dashboard_container">
        <div className="layout_grid_fixo">
          
          {/* ESQUERDA */}
          <section className="coluna_pacientes">
            <h1>Meus Pacientes</h1>

            <div className="simular_busca">
              <Search />
              <span>Pesquisar cpf ou nome...</span>
            </div>

            <div className="area_filtros">
              <button className="btn_filtro ativo">Todos</button>
              <button className="btn_filtro">Aguardando Retorno</button>
              <button className="btn_filtro">Agendado</button>
            </div>

            <div className="tabela_pacientes_lista">

              {[
                { nome: "Ana Beatriz Silva", idade: 8, cpf: "455.123.789-11", data: "15/03/26" },
                { nome: "Lucas Oliveira", idade: 12, cpf: "332.987.456-00", data: "10/02/26" },
                { nome: "Mariana Costa", idade: 7, cpf: "111.222.333-44", data: "01/03/26" },
              ].map((p, i) => (
                <div className="linha_paciente" key={i}>
                  <div className="info_paciente_bloco">
                    <span className="p_nome">{p.nome},</span>
                    <span className="p_idade"> {p.idade} anos</span>
                    <p className="p_cpf">CPF: {p.cpf}</p>
                    <p className="p_atendimento">último atendimento em: {p.data}</p>
                  </div>

                  <div className="acoes_paciente_bloco">
                    <button className="btn_acao_circulo"><Plus /></button>
                    <button className="btn_acao_circulo"><FileText /></button>
                    <button className="btn_acao_circulo"><Calendar /></button>
                  </div>
                </div>
              ))}

            </div>
          </section>

          {/* DIREITA */}
          <aside className="coluna_encaminhados">
            <h1>Encaminhados</h1>

            {[
              { nome: "Enzo Gabriel", idade: 9, genero: "masculino", endereco: "Av. Paulista, 1000 - SP", laudo: "Limpeza e avaliação de canal." },
              { nome: "Sophia Martins", idade: 11, genero: "feminino", endereco: "Rua Augusta, 450 - SP", laudo: "Dor aguda no molar inferior." },
            ].map((p, i) => (
              <div className="card_encaminhado_p" key={i}>
                <div className="borda_lateral"></div>

                <div className="conteudo_card_p">
                  <h3>{p.nome}</h3>
                  <p><strong>Idade:</strong> {p.idade} anos &nbsp; <strong>gênero:</strong> {p.genero}</p>
                  <p><strong>Endereço:</strong> {p.endereco}</p>
                  <p><strong>Laudo:</strong> {p.laudo}</p>

                  <div className="botoes_card_p">
                    <button className="btn-amarelo-p">Aceitar e Agendar</button>
                    <button className="btn-cinza-p">Ver mais</button>
                  </div>
                </div>
              </div>
            ))}

          </aside>
        </div>
      </main>

      <footer className="footer">
        <h2 className="footer-logo">DenTalk</h2>
        <p className="footer-slogan">"Cada sorriso, uma história"</p>
        <p className="footer-info">
          Projeto institucional desenvolvido por alunos do Centro Universitário{" "}
          <a className="fiap-color" href="https://www.fiap.com.br/" target="_blank">
            FIAP
          </a>
        </p>
      </footer>
    </>
  );
}