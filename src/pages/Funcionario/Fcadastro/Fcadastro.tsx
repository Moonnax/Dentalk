import HeaderFincionario from "../../../components/HeaderFuncionario/HeaderFuncionario";
import Footer from "../../../components/Footer/Footer";
import "./Fcadastro.css";

function Fcadastro() {
  return (
    <>
      <HeaderFincionario />

      <main className="cadastro_container">
        <section className="filtros_cadastro">
          <div className="filtros_grupo">
            <div className="caixa_filtro">
              Categoria <span>⌄</span>
            </div>

            <div className="caixa_filtro">
              Status <span>⌄</span>
            </div>

            <div className="caixa_filtro">
              Idade <span>⌄</span>
            </div>

            <div className="simular_busca">
              🔍
              <span>Pesquisar cpf ou nome...</span>
            </div>
          </div>

          <a href="#" className="botao_laranja">
            ➕ Novo Cadastro
          </a>
        </section>

        <section className="contagem_abas">
          <div className="aba">
            Todos <span className="bolinha_todos">284</span>
          </div>

          <div className="aba">
            Voluntário{" "}
            <span className="bolinha_voluntario">100</span>
          </div>

          <div className="aba">
            Beneficiário{" "}
            <span className="bolinha_beneficiario">184</span>
          </div>
        </section>

        <section className="lista_usuarios">
          <div className="linha_cabecalho">
            <span className="col-nome-c">Nome</span>
            <span className="col-idade-c">idade</span>
            <span className="col-status-c">Status</span>
            <span className="col-categoria-c">Categoria</span>
            <span className="col-detalhes-c">Detalhes</span>
          </div>

          {/* LINHAS */}
          <div className="linha_usuario">
            <span className="col-nome-c">Rafael Souza Lima</span>
            <span className="col-idade-c">31 anos</span>
            <span className="col-status-c">Ativo</span>
            <span className="col-categoria-c">Funcionario</span>
            <a href="#" className="col-detalhes-c link_fake">
              ver mais
            </a>
          </div>

          <div className="linha_usuario destaque">
            <span className="col-nome-c">
              Mariana Costa Fernandes
            </span>
            <span className="col-idade-c">28 anos</span>
            <span className="col-status-c">Encaminhado</span>
            <span className="col-categoria-c">Beneficiário</span>
            <a href="#" className="col-detalhes-c link_fake">
              ver mais
            </a>
          </div>

          <div className="linha_usuario">
            <span className="col-nome-c">
              Bruno Henrique Alves
            </span>
            <span className="col-idade-c">39 anos</span>
            <span className="col-status-c">Atendimento</span>
            <span className="col-categoria-c">Beneficiário</span>
            <a href="#" className="col-detalhes-c link_fake">
              ver mais
            </a>
          </div>

          <div className="linha_usuario destaque">
            <span className="col-nome-c">
              Carla Mendes Ribeiro
            </span>
            <span className="col-idade-c">52 anos</span>
            <span className="col-status-c">Ativo</span>
            <span className="col-categoria-c">Funcionario</span>
            <a href="#" className="col-detalhes-c link_fake">
              ver mais
            </a>
          </div>

          <div className="linha_usuario">
            <span className="col-nome-c">
              Juliana Pereira Santos
            </span>
            <span className="col-idade-c">26 anos</span>
            <span className="col-status-c">Encaminhado</span>
            <span className="col-categoria-c">Beneficiário</span>
            <a href="#" className="col-detalhes-c link_fake">
              ver mais
            </a>
          </div>

          <div className="linha_usuario destaque">
            <span className="col-nome-c">
              Felipe Rocha Martins
            </span>
            <span className="col-idade-c">34 anos</span>
            <span className="col-status-c">Atendimento</span>
            <span className="col-categoria-c">Beneficiário</span>
            <a href="#" className="col-detalhes-c link_fake">
              ver mais
            </a>
          </div>

          <div className="linha_usuario">
            <span className="col-nome-c">
              Patricia Gomes Duarte
            </span>
            <span className="col-idade-c">47 anos</span>
            <span className="col-status-c">Ativo</span>
            <span className="col-categoria-c">Funcionario</span>
            <a href="#" className="col-detalhes-c link_fake">
              ver mais
            </a>
          </div>

          <div className="linha_usuario destaque">
            <span className="col-nome-c">
              Lucas Andrade Silva
            </span>
            <span className="col-idade-c">22 anos</span>
            <span className="col-status-c">Encaminhado</span>
            <span className="col-categoria-c">Beneficiário</span>
            <a href="#" className="col-detalhes-c link_fake">
              ver mais
            </a>
          </div>

          <div className="linha_usuario">
            <span className="col-nome-c">
              Fernanda Lopes Carvalho
            </span>
            <span className="col-idade-c">36 anos</span>
            <span className="col-status-c">Finalizado</span>
            <span className="col-categoria-c">Beneficiário</span>
            <a href="#" className="col-detalhes-c link_fake">
              ver mais
            </a>
          </div>

          <div className="linha_usuario destaque">
            <span className="col-nome-c">
              Thiago Barros Nogueira
            </span>
            <span className="col-idade-c">41 anos</span>
            <span className="col-status-c">Atendimento</span>
            <span className="col-categoria-c">Beneficiário</span>
            <a href="#" className="col-detalhes-c link_fake">
              ver mais
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Fcadastro;