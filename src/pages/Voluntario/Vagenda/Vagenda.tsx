import { ChevronLeft, ChevronRight } from "lucide-react";
import HeaderVoluntario from "../../../components/HeaderVoluntario/HeaderVoluntario";
import Footer from '../../../components/Footer/Footer';

import "./Vagenda.css";

export default function VAgenda() {
  return (
    <>
      <HeaderVoluntario />
      <main className="dashboard_container">
        <div className="layout_grid_fixo">

          {/* tentando fazer um calendario */}
          <section className="coluna_calendario">
            <div className="card_calendario_full">

              <div className="header_calendario">
                <h2>Março 2026</h2>

                <div className="setas_nav">
                  <button>
                    <ChevronLeft />
                  </button>

                  <button>
                    <ChevronRight />
                  </button>
                </div>
              </div>

              <div className="grade_dias_semana">
                {["DOM","SEG","TER","QUA","QUI","SEX","SÁB"].map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>
              <div className="grade_calendario_corpo">
                {[
                  "1","2","3","4*","5","6","7",
                  "8","9*","10","11","12","13","14",
                  "15","16","17*","18","19","20","21*",
                  "22","23","24","25","26","27","28",
                  "29","30","31","x","x","x","x"
                ].map((dia, i) => {
                  const isFora = dia === "x";
                  const isMarcado = dia.includes("*");

                  return (
                    <button
                      key={i}
                      className={isFora ? "dia_fora" : "dia_clicavel"}
                    >
                      {!isFora && dia.replace("*", "")}

                      {isMarcado && !isFora && (
                        <span className="badge_notificacao">
                          2
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </section>
    
    
    <aside className="coluna_detalhes_agenda">

            <div className="card_info_paciente">
              <h3>Informações do Paciente</h3>

              <p className="instrucao_topo">
                Selecione uma consulta na lista abaixo ou no calendário
              </p>

              <div className="bloco_detalhe">
                <div className="barra_vertical"></div>

                <div className="conteudo_texto">
                  <p className="nome_destaque">
                    João Souza
                    <span className="id_consulta">
                      ID Consulta: 1234
                    </span>
                  </p>
                  <p><span className="label_item">CPF:</span> 123.456.789-00</p>
                  <p><span className="label_item">Endereço:</span> Rua das F, 123 - SP</p>
                  <p><span className="label_item">Laudo:</span> Cárie e dor no dente</p>
                  <p><span className="label_item">Observações:</span> Necessário tratamento</p>
                  <p><span className="label_item">Antecedentes:</span> Histórico dentário</p>
                </div>
              </div>

              <div className="acoes_agenda">
                <button className="btn_fake_amarelo">
                  Concluir
                </button>
                <button className="btn_fake_cinza">
                  Remarcar
                </button>
              </div>
              <p className="aviso_footer">
                Remarcações são permitidas somente com 7 dias de antecedência
              </p>
            </div>

            <div className="card_lista_horarios">
              <h3>Próximas Consultas de Hoje</h3>
              <div className="lista_vertical">
                <button className="slot_hora">
                  09:00 - João Souza
                </button>
                <button className="slot_hora">
                  10:30 - Ana Almeida
                </button>
                <button className="slot_hora">
                  14:00 - Carlos Vicente
                </button>
                <button className="slot_hora">
                  15:30 - Maria Lima
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </>
  );
}