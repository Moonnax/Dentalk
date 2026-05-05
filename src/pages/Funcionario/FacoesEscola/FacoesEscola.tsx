import HeaderFuncionario from "../../../components/HeaderFuncionario/HeaderFuncionario";
import Footer from "../../../components/Footer/Footer";
import "./FacoesEscola.css";

function FacoesEscola() {
  return (
    <>
      <HeaderFuncionario />

      <main className="cadastro_container">
        <section className="filtros_cadastro">
          <div className="filtros_grupo">
            <div className="caixa_filtro">
              Situação <span>⌄</span>
            </div>
            <div className="caixa_filtro">
              Data <span>⌄</span>
            </div>
            <div className="caixa_filtro">
              Canal <span>⌄</span>
            </div>

            <div className="simular_busca">
              🔍 <span>filtrar solicitações...</span>
            </div>
          </div>
        </section>

        <section className="contagem_abas">
          <div className="aba">
            Todas <span className="bolinha_numero gray">197</span>
          </div>
          <div className="aba">
            Concluídas <span className="bolinha_numero gray">46</span>
          </div>
          <div className="aba">
            Aprovar <span className="bolinha_numero gray">15</span>
          </div>
        </section>

        <section className="lista_usuarios">
          <div className="linha_cabecalho">
            <span className="col-instituicao">Instituição</span>
            <span className="col-data">Data</span>
            <span className="col-alunos">qtd. Alunos</span>
            <span className="col-coordenador">Coordenador</span>
            <span className="col-infra">Infraestrutura</span>
            <span className="col-situacao">Situação</span>
          </div>

          {/* LINHAS */}
          <div className="linha_usuario">
            <span className="col-instituicao">
              Instituto Vida Nova
              <span className="sub-info">São Paulo - Zona Sul</span>
            </span>
            <span className="col-data">
              11/04/2026
              <span className="sub-info">08:30</span>
            </span>
            <span className="col-alunos">95</span>
            <span className="col-coordenador">
              Juliana Martins
              <span className="sub-info">(11) 91234-5678</span>
            </span>
            <span className="col-infra">Completa</span>
            <div className="col-situacao">
              <a href="#" className="btn-aprovar">Aprovar</a>
            </div>
          </div>

          <div className="linha_usuario destaque">
            <span className="col-instituicao">
              Escola Caminho do Saber
              <span className="sub-info">Guarulhos - Centro</span>
            </span>
            <span className="col-data">
              09/04/2026
              <span className="sub-info">10:00</span>
            </span>
            <span className="col-alunos">140</span>
            <span className="col-coordenador">
              Roberto Nunes
              <span className="sub-info">(11) 93456-7890</span>
            </span>
            <span className="col-infra">Pendente</span>
            <div className="col-situacao">
              <div className="mini-caixa gray">Pendente</div>
            </div>
          </div>

          <div className="linha_usuario">
            <span className="col-instituicao">
              Centro Educacional Horizonte
              <span className="sub-info">Osasco - Zona Oeste</span>
            </span>
            <span className="col-data">
              15/04/2026
              <span className="sub-info">13:00</span>
            </span>
            <span className="col-alunos">180</span>
            <span className="col-coordenador">
              Fernanda Lopes
              <span className="sub-info">(11) 99876-5432</span>
            </span>
            <span className="col-infra">Completa</span>
            <div className="col-situacao">
              <div className="mini-caixa gray">Confirmada</div>
            </div>
          </div>

          <div className="linha_usuario destaque">
            <span className="col-instituicao">
              Projeto Jovem Futuro
              <span className="sub-info">São Paulo - Zona Leste</span>
            </span>
            <span className="col-data">
              20/03/2026
              <span className="sub-info">09:30</span>
            </span>
            <span className="col-alunos">110</span>
            <span className="col-coordenador">
              Carlos Eduardo
              <span className="sub-info">(11) 95555-2222</span>
            </span>
            <span className="col-infra">Completa</span>
            <div className="col-situacao">
              <div className="mini-caixa gray">Concluída</div>
            </div>
          </div>

          {/* você pode continuar adicionando os outros itens igual */}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default FacoesEscola;