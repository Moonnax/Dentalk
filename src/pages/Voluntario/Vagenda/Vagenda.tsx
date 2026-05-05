import { Bell, LogOut, Menu, ChevronLeft, ChevronRight } from "lucide-react";
import HeaderVoluntario from "../../../components/HeaderVoluntario/HeaderVoluntario";
import Footer from '../../../components/Footer/Footer';

import "./Vagenda.css";

export default function VAgenda() {
  return (
    <>
      <HeaderVoluntario />
      <main className="dashboard_container">
        <div className="layout_grid_fixo">

          {/* CALENDÁRIO */}
          <section className="coluna_calendario">
            <div className="card_calendario_full">

              <div className="header_calendario">
                <h2>Março 2026</h2>
                <div className="setas_nav">
                  <a href="#"><ChevronLeft /></a>
                  <a href="#"><ChevronRight /></a>
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
                  "8","9*","10","11","12S","13","14",
                  "15","16","17*","18","19","20","21*",
                  "22","23","24","25","26","27","28",
                  "29","30","31","x","x","x","x"
                ].map((dia, i) => {
                  const isFora = dia === "x";
                  const isSelecionado = dia.includes("S");
                  const isMarcado = dia.includes("*");

                  return (
                    <div
                      key={i}
                      className={`${
                        isFora
                          ? "dia_fora"
                          : "dia_clicavel"
                      } ${isSelecionado ? "dia_selecionado" : ""}`}
                    >
                      {!isFora && dia.replace("*", "").replace("S", "")}

                      {isMarcado && !isFora && (
                        <span className="badge_notificacao">2</span>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          </section>

          {/* DETALHES */}
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
                    Carlos Vicente <span className="id_consulta">ID Consulta: 1234</span>
                  </p>

                  <p><span className="label_item">CPF:</span> 123.456.789-00</p>
                  <p><span className="label_item">Endereço:</span> Rua das F, 123 - SP</p>
                  <p><span className="label_item">Laudo:</span> Cárie e dor no dente</p>
                  <p><span className="label_item">Observações:</span> Necessário tratamento</p>
                  <p><span className="label_item">Antecedentes:</span> Histórico dentário</p>
                </div>
              </div>

              <div className="acoes_agenda">
                <p className="btn_fake_amarelo">Concluir</p>
                <p className="btn_fake_cinza">Remarcar</p>
              </div>

              <p className="aviso_footer">
                Remarcações são permitidas somente com 7 dias de antecedência
              </p>
            </div>

            <div className="card_lista_horarios">
              <h3>Próximas Consultas - Quinta-Feira</h3>

              <div className="lista_vertical">
                <div className="slot_hora">09:00 - João Souza</div>
                <div className="slot_hora">10:30 - Ana Almeida</div>
                <div className="slot_hora selecionado">14:00 - Carlos Vicente</div>
                <div className="slot_hora">15:30 - Maria Lima</div>
              </div>
            </div>

          </aside>

        </div>
      </main>

      <Footer />

    </>
  );
}