import HeaderFuncionario from "../../../components/HeaderFuncionario/HeaderFuncionario";
import Footer from "../../../components/Footer/Footer";
import "./Fmonitoramento.css";

function Fmonitoramento() {
  return (
    <>
      <HeaderFuncionario />

      <main className="container_monitoramento">

        {/* ESQUERDA */}
        <section className="coluna_ocorrencias">
          <h2 className="titulo_sessao">Ocorrências</h2>

          <div className="tabs_filtros">
            <span className="tab_item active">Pendentes</span>
            <span className="tab_item">Respondidas</span>
          </div>

          <div className="lista_cards_scroll">

            <div className="card_ocorrencia active">
              <div className="avatar_p">👤</div>
              <div>
                <p><strong>Dr. Felipe Oliveira</strong></p>
                <p>Sair da Rede</p>
                <p className="previa">Preciso reencaminhar meus pacientes...</p>
              </div>
              <span className="status_dot vermelho"></span>
            </div>

            <div className="card_ocorrencia">
              <div className="avatar_p">👤</div>
              <div>
                <p><strong>Dra. Leticia Mendes</strong></p>
                <p>Reportando Agora</p>
                <p className="previa">Paciente apresentou quadro alérgico...</p>
              </div>
              <span className="status_dot amarelo"></span>
            </div>

            <div className="card_ocorrencia">
              <div className="avatar_p">👤</div>
              <div>
                <p><strong>Dr. Ricardo Santos</strong></p>
                <p>Locação de Consultório</p>
                <p className="previa">Cadeira disponível para uso...</p>
              </div>
            </div>

          </div>
        </section>

        {/* CHAT */}
        <section className="coluna_chat">

          <div className="header_chat">
            <div className="avatar_p">👤</div>
            <strong>Dr. Felipe Oliveira</strong>
          </div>

          <div className="area_mensagens_scroll">

            <div className="msg_recebida">
              <div className="avatar_p">👤</div>
              <div className="balao_texto">
                <p>Preciso sair da rede por questões pessoais.</p>
                <span>20 min atrás</span>
              </div>
            </div>

            <div className="msg_enviada">
              <div className="balao_texto">
                <p>Entendido! Você pode nos informar os pacientes ativos?</p>
                <span>22 min atrás</span>
              </div>
            </div>

            <div className="msg_recebida">
              <div className="avatar_p">👤</div>
              <div className="balao_texto">
                <p>Tenho 5 pacientes em tratamento.</p>
                <span>20 min atrás</span>
              </div>
            </div>

            <div className="acoes_rapidas_chat">
              <span className="btn_ghost">Confirmar recebimento</span>
              <span className="btn_ghost">Solicitar lista</span>
              <span className="btn_ghost">Encaminhar</span>
            </div>

          </div>

          <div className="footer_input_chat">
            <p className="campo_input">Digite sua resposta...</p>
            <div className="btn_enviar">Enviar</div>
          </div>

        </section>

        {/* DIREITA */}
        <section className="coluna_perfil_detalhe">

          <div className="card_perfil_topo">
            <div className="avatar_g">👤</div>
            <h3>Dr. Felipe Oliveira</h3>
            <p>Dentista Voluntário</p>
            <p>CRO/SP 65231</p>
          </div>

          <div>
            <p>📧 felipe.oliveira@email.com</p>
            <p>📞 (11) 96785-4321</p>
          </div>

          <div className="secao_pacientes_atuais">
            <h4>Atuais pacientes</h4>

            <div className="paciente_item">
              <div className="avatar_p">👤</div>
              <div>
                <p><strong>Ana Pereira</strong></p>
                <p>Tratamento de Cárie</p>
              </div>
            </div>

            <div className="paciente_item">
              <div className="avatar_p">👤</div>
              <div>
                <p><strong>João Almeida</strong></p>
                <p>Tratamento de Cárie</p>
              </div>
            </div>

            <div className="paciente_item">
              <div className="avatar_p">👤</div>
              <div>
                <p><strong>Mariana Silva</strong></p>
                <p>Tratamento de Cárie</p>
              </div>
            </div>

          </div>

          <div className="acoes_finais">
            <div className="btn_finalizar">Finalizar Ocorrência</div>
            <div className="btn_sec">Reencaminhar Paciente</div>
          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Fmonitoramento;