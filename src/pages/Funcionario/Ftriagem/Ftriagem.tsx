import HeaderFincionario from "../../../components/HeaderFuncionario/HeaderFuncionario";
import Footer from "../../../components/Footer/Footer";
import "./Ftriagem.css";

function Ftriagem() {
  return (
    <>
      <HeaderFincionario />

      <main className="cadastro_container">
        <section className="filtros_cadastro">
          <div className="filtros_grupo">
            <div className="caixa_filtro">
              Prioridade <span>⌄</span>
            </div>

            <div className="caixa_filtro">
              Região <span>⌄</span>
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
            Solicitações{" "}
            <span className="bolinha_solicitacoes">197</span>
          </div>

          <div className="aba">
            A encaminhar{" "}
            <span className="bolinha_aencaminhar">51</span>
          </div>

          <div className="aba">
            Encaminhados{" "}
            <span className="bolinha_encaminhados">821</span>
          </div>

          <div className="aba">
            Rejeitados{" "}
            <span className="bolinha_rejeitados">46</span>
          </div>
        </section>

        <section className="lista_usuarios">
            <div className="linha_cabecalho">
                <div className="col-nome-t">Nome</div>
                <div className="col-regiao-t">Região</div>
                <div className="col-prioridade-t">Prioridade</div>
                <div className="col-canal-t">Canal</div>
                <div className="col-acoes-t">Ações</div>
            </div>

          {/* LINHAS */}
          <div className="linha_usuario">
            <span className="col-nome-t">Rafael Souza Lima</span>
            <span className="col-regiao-t">São Paulo - ZN</span>
            <div className="col-prioridade-t">
              <div className="caixa_mini_filtro">
                Média <span>⌄</span>
              </div>
            </div>
            <span className="col-canal-t">Ação Esc.</span>
            <div className="col-acoes-t">
              <a href="#" className="btn-contato">
                Contato &gt;
              </a>
              <a href="#" className="btn-rejeitar">
                X Rejeitar
              </a>
            </div>
          </div>

          <div className="linha_usuario destaque">
            <span className="col-nome-t">
              Mariana Costa Fernandes
            </span>
            <span className="col-regiao-t">Rio de Janeiro - ZS</span>
            <div className="col-prioridade-t">
              <div className="caixa_mini_filtro">
                Baixa <span>⌄</span>
              </div>
            </div>
            <span className="col-canal-t">Instagram</span>
            <div className="col-acoes-t">
              <a href="#" className="btn-contato">
                Contato &gt;
              </a>
              <a href="#" className="btn-rejeitar">
                X Rejeitar
              </a>
            </div>
          </div>

          <div className="linha_usuario">
            <span className="col-nome-t">
              Bruno Henrique Alves
            </span>
            <span className="col-regiao-t">
              Belo Horizonte - Centro
            </span>
            <div className="col-prioridade-t">
              <div className="caixa_mini_filtro">
                Alta <span>⌄</span>
              </div>
            </div>
            <span className="col-canal-t">Site</span>
            <div className="col-acoes-t">
              <a href="#" className="btn-contato">
                Contato &gt;
              </a>
              <a href="#" className="btn-rejeitar">
                X Rejeitar
              </a>
            </div>
          </div>

          <div className="linha_usuario destaque">
            <span className="col-nome-t">
              Carla Mendes Ribeiro
            </span>
            <span className="col-regiao-t">Curitiba - Batel</span>
            <div className="col-prioridade-t">
              <div className="caixa_mini_filtro">
                Alta <span>⌄</span>
              </div>
            </div>
            <span className="col-canal-t">Ação Esc.</span>
            <div className="col-acoes-t">
              <a href="#" className="btn-contato">
                Contato &gt;
              </a>
              <a href="#" className="btn-rejeitar">
                X Rejeitar
              </a>
            </div>
          </div>

          <div className="linha_usuario">
            <span className="col-nome-t">
              Felipe Rocha Martins
            </span>
            <span className="col-regiao-t">
              Porto Alegre - Sul
            </span>
            <div className="col-prioridade-t">
              <div className="caixa_mini_filtro">
                Média <span>⌄</span>
              </div>
            </div>
            <span className="col-canal-t">WhatsApp</span>
            <div className="col-acoes-t">
              <a href="#" className="btn-contato">
                Contato &gt;
              </a>
              <a href="#" className="btn-rejeitar">
                X Rejeitar
              </a>
            </div>
          </div>

          <div className="linha_usuario destaque">
            <span className="col-nome-t">
              Juliana Pereira Santos
            </span>
            <span className="col-regiao-t">
              Salvador - Centro
            </span>
            <div className="col-prioridade-t">
              <div className="caixa_mini_filtro">
                Baixa <span>⌄</span>
              </div>
            </div>
            <span className="col-canal-t">Instagram</span>
            <div className="col-acoes-t">
              <a href="#" className="btn-contato">
                Contato &gt;
              </a>
              <a href="#" className="btn-rejeitar">
                X Rejeitar
              </a>
            </div>
          </div>

          <div className="linha_usuario">
            <span className="col-nome-t">
              Lucas Andrade Silva
            </span>
            <span className="col-regiao-t">
              Recife - Boa Viagem
            </span>
            <div className="col-prioridade-t">
              <div className="caixa_mini_filtro">
                Alta <span>⌄</span>
              </div>
            </div>
            <span className="col-canal-t">Site</span>
            <div className="col-acoes-t">
              <a href="#" className="btn-contato">
                Contato &gt;
              </a>
              <a href="#" className="btn-rejeitar">
                X Rejeitar
              </a>
            </div>
          </div>

          <div className="linha_usuario destaque">
            <span className="col-nome-t">
              Beatriz Oliveira Vaz
            </span>
            <span className="col-regiao-t">
              Manaus - Ponta Negra
            </span>
            <div className="col-prioridade-t">
              <div className="caixa_mini_filtro">
                Média <span>⌄</span>
              </div>
            </div>
            <span className="col-canal-t">Instagram</span>
            <div className="col-acoes-t">
              <a href="#" className="btn-contato">
                Contato &gt;
              </a>
              <a href="#" className="btn-rejeitar">
                X Rejeitar
              </a>
            </div>
          </div>

          <div className="linha_usuario">
            <span className="col-nome-t">
              Thiago Barros Nogueira
            </span>
            <span className="col-regiao-t">
              Fortaleza - Aldeota
            </span>
            <div className="col-prioridade-t">
              <div className="caixa_mini_filtro">
                Alta <span>⌄</span>
              </div>
            </div>
            <span className="col-canal-t">WhatsApp</span>
            <div className="col-acoes-t">
              <a href="#" className="btn-contato">
                Contato &gt;
              </a>
              <a href="#" className="btn-rejeitar">
                X Rejeitar
              </a>
            </div>
          </div>

          <div className="linha_usuario destaque">
            <span className="col-nome-t">
              Fernanda Lopes Carvalho
            </span>
            <span className="col-regiao-t">
              Brasília - Asa Sul
            </span>
            <div className="col-prioridade-t">
              <div className="caixa_mini_filtro">
                Baixa <span>⌄</span>
              </div>
            </div>
            <span className="col-canal-t">Site</span>
            <div className="col-acoes-t">
              <a href="#" className="btn-contato">
                Contato &gt;
              </a>
              <a href="#" className="btn-rejeitar">
                X Rejeitar
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Ftriagem;