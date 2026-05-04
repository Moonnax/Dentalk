import HeaderFincionario from "../../../components/HeaderFuncionario/HeaderFuncionario";
import Footer from "../../../components/Footer/Footer";
import "./Finicio.css";

function Finicio() {
  return (
    <>
      <HeaderFincionario />

      <main className="dashboard_container">
        <aside className="coluna_esquerda">
          <h1>Olá, Funcionário do Bem!</h1>

          <div>
            <section className="card_funcionario">
              <div className="card_top">
                <div className="card_textos">
                  <h2>Aguardando encaminhamentos</h2>
                  <p className="card_descricao">
                    Encaminhe pacientes aprovados para os voluntários compatíveis
                  </p>
                </div>
                <span className="badge_gray">51</span>
              </div>

              <div className="card_acao">
                <a href="/triagemf">
                  <p className="card_button_acao">Ir para Fila</p>
                </a>
              </div>
            </section>

            <section className="card_funcionario">
              <div className="card_top">
                <div className="card_textos">
                  <h2>Ocorrências urgentes</h2>
                  <p className="card_descricao">
                    6 pedidos de consultório e 2 desligamentos
                  </p>
                </div>
                <span className="badge_red">8</span>
              </div>

              <div className="card_acao">
                <a href="/monitoramento">
                  <p className="card_button_acao">Responder agora</p>
                </a>
              </div>
            </section>

            <section className="card_funcionario">
              <div className="card_top">
                <div className="card_textos">
                  <h2>Novas solicitações</h2>
                  <div className="card_descricao">
                    <p>Facebook: 10</p>
                    <p>Instagram: 11</p>
                    <p>Whatsapp: 30</p>
                  </div>
                </div>
                <span className="badge_green">197</span>
              </div>

              <div className="card_acao">
                <a href="/triagemf">
                  <p className="card_button_acao">Ver solicitações</p>
                </a>
              </div>
            </section>
          </div>
        </aside>

        <div className="coluna_direita">
          <div className="publicar_aviso">
            <p>Publicar Aviso Geral para Voluntários</p>
          </div>

          <section className="quadro_informativo">
            <div className="quadro_header">
              <h3>Alertas de Prazo</h3>
              <div className="linha_separadora"></div>
            </div>

            <div className="tabela_dados">
              <div className="linha_cabecalho">
                <span>Paciente</span>
                <span>Dentista</span>
                <span>Atraso</span>
              </div>

              <div className="linha_corpo">
                <span>Fernando Pereira</span>
                <span>Dra. Leticia Silva</span>
                <span>13 dias sem início</span>
              </div>

              <div className="linha_corpo linha_destaque">
                <span>Carlos Vicente</span>
                <span>Dra. Sandra Monteiro</span>
                <span>15 dias sem início</span>
              </div>

              <div className="linha_corpo">
                <span>Isadora Gomes</span>
                <span>Dr. Carlos Henrique</span>
                <span>5 dias sem início</span>
              </div>

              <div className="linha_corpo linha_destaque">
                <span>Marcelo Muniz</span>
                <span>Dr. André Britto</span>
                <span>20 dias sem início</span>
              </div>
            </div>

            <div className="quadro_acoes">
              <span>
                <a href="#">[ Contatar Funcionário ]</a>
              </span>
              <span>
                <a href="#">[ Reencaminhar paciente ]</a>
              </span>
            </div>
          </section>

          <section className="quadro_informativo">
            <div className="quadro_header">
              <h3>Próximas Ações Escola</h3>
              <div className="linha_separadora"></div>
            </div>

            <div className="tabela_dados">
              <div className="linha_cabecalho">
                <span>Escola</span>
                <span>Data</span>
                <span>Status</span>
              </div>

              <div className="linha_corpo">
                <span>Escola Estadual Anita Garibaldi</span>
                <span>15/10 às 09h</span>
                <span>(Aprovado)</span>
              </div>

              <div className="linha_corpo">
                <span>Escola Municipal Paulo Freire</span>
                <span>18/10 às 14h</span>
                <span>(Pendente)</span>
              </div>
            </div>

            <div className="quadro_acoes">
              <span>
                <a href="#">[ Ver tudo ]</a>
              </span>
              <span>
                <a href="#">[ Nova Solicitação de ação ]</a>
              </span>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Finicio;