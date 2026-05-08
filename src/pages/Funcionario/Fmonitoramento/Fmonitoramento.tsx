import { useState } from "react";

import HeaderFuncionario from "../../../components/HeaderFuncionario/HeaderFuncionario";
import Footer from "../../../components/Footer/Footer";

import "./Fmonitoramento.css";

function Fmonitoramento() {

  const [ativo, setAtivo] = useState(0);

  const ocorrencias = [
    {
      nome: "Dr. Felipe Oliveira",
      titulo: "Sair da Rede",
      previa: "Preciso reencaminhar meus pacientes...",
      status: "vermelho",
    },
    {
      nome: "Dra. Leticia Mendes",
      titulo: "Reportando Agora",
      previa: "Paciente apresentou quadro alérgico...",
      status: "amarelo",
    },
    {
      nome: "Dr. Ricardo Santos",
      titulo: "Locação de Consultório",
      previa: "Cadeira disponível para uso...",
      status: "",
    },
  ];

  return (

    <div className="page-container">

      <HeaderFuncionario />

      <main className="container_monitoramento">

        {/* OCORRÊNCIAS */}
        <section className="coluna_ocorrencias">

          <h2 className="titulo_sessao">
            Ocorrências
          </h2>

          <div className="tabs_filtros">

            <span className="tab_item active">
              Pendentes
            </span>

            <span className="tab_item">
              Respondidas
            </span>

          </div>

          <div className="lista_cards_scroll">

            {ocorrencias.map((item, index) => (

              <div
                key={index}
                className={`card_ocorrencia ${ativo === index ? "active" : ""}`}
                onClick={() => setAtivo(index)}
              >

                <div className="avatar_p">
                  👤
                </div>

                <div className="conteudo_card">

                  <p>
                    <strong>{item.nome}</strong>
                  </p>

                  <p>{item.titulo}</p>

                  <p className="previa">
                    {item.previa}
                  </p>

                </div>

                {item.status && (
                  <span className={`status_dot ${item.status}`}></span>
                )}

              </div>

            ))}

          </div>

        </section>

        {/* CHAT */}
        <section className="coluna_chat">

          <div className="header_chat">

            <div className="avatar_p">
              👤
            </div>

            <div>

              <strong>
                Dr. Felipe Oliveira
              </strong>

              <p className="online_status">
                online agora
              </p>

            </div>

          </div>

          <div className="area_mensagens_scroll">

            <div className="msg_recebida">

              <div className="avatar_p">
                👤
              </div>

              <div className="balao_texto">

                <p>
                  Preciso sair da rede por questões pessoais.
                </p>

                <span>
                  20 min atrás
                </span>

              </div>

            </div>

            <div className="msg_enviada">

              <div className="balao_texto">

                <p>
                  Entendido! Você pode nos informar os pacientes ativos?
                </p>

                <span>
                  22 min atrás
                </span>

              </div>

            </div>

            <div className="msg_recebida">

              <div className="avatar_p">
                👤
              </div>

              <div className="balao_texto">
                <p>Tenho 5 pacientes em tratamento.</p>
                <span>
                  20 min atrás
                </span>
              </div>
            </div>

            <div className="acoes_rapidas_chat">

              <button className="btn_ghost">
                Confirmar recebimento
              </button>
              <button className="btn_ghost">
                Solicitar lista
              </button>
              <button className="btn_ghost">
                Encaminhar
              </button>
            </div>
          </div>

          <div className="footer_input_chat">
            <input
              type="text"
              placeholder="Digite sua resposta..."
              className="campo_input"
            />

            <button className="btn_enviar">
              Enviar
            </button>

          </div>

        </section>

        {/* PERFIL */}
        <section className="coluna_perfil_detalhe">

          <div className="card_perfil_topo">

            <div className="avatar_g">
              👤
            </div>

            <h3>
              Dr. Felipe Oliveira
            </h3>

            <p>
              Dentista Voluntário
            </p>
            <p>
              CRO/SP 65231
            </p>
          </div>

          <div className="infos_contato">
            <p>📧 felipe.oliveira@email.com</p>
            <p>📞 (11) 96785-4321</p>
          </div>

          <div className="secao_pacientes_atuais">

            <h4>
              Atuais pacientes
            </h4>

            <div className="paciente_item">
              <div className="avatar_p">
                👤
              </div>
              <div>
                <p>
                  <strong>Ana Pereira</strong>
                </p>
                <p>
                  Tratamento de Cárie
                </p>
              </div>

            </div>

            <div className="paciente_item">
              <div className="avatar_p">👤</div>
              <div>
                <p><strong>João Almeida</strong></p>
                <p>Tratamento de Cárie</p>
              </div>
            </div>
          </div>

          <div className="acoes_finais">
            <button className="btn_finalizar">
              Finalizar Ocorrência
            </button>
            <button className="btn_sec">
              Reencaminhar Paciente
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>

  );
}

export default Fmonitoramento;