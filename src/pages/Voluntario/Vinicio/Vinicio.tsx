import HeaderVoluntario from '../../../components/HeaderVoluntario/HeaderVoluntario';
import Footer from '../../../components/Footer/Footer';
import CarrosselPacientes from '../../../components/NavbarVoluntario/NavbarVoluntario';
import {TriangleAlert } from "lucide-react";
import "./Vinicio.css";

function Vinicio() {
  return (
    <>
      <HeaderVoluntario />

      <main className="dashboard_container">
        <aside className="coluna_esquerda">
          <h1>Olá, Dentista do Bem!</h1>

          <section className="secao_encaminhados">
            <h2>Encaminhados</h2>

            <CarrosselPacientes />

          </section>
        </aside>

        <div className="coluna_direita">
          <section className="quadro_informativo">
            <div className="quadro_header">
              <h3>Próximas Consultas</h3>
              <div className="linha_separadora"></div>
            </div>

            <div className="tabela_dados">
              <div className="linha_cabecalho">
                <span>ID Consulta</span>
                <span>Nome</span>
                <span>Agendamento</span>
                <span style={{ textAlign: "right" }}>Detalhes</span>
              </div>

              <div className="linha_corpo">
                <div className="v-line"></div>
                <span>15666</span>
                <span>Carlos Vicente</span>
                <span>23/04/26 14:20</span>
                <span className="ver_mais">ver mais</span>
              </div>

              <div className="linha_corpo linha_destaque">
                <div className="v-line"></div>
                <span>15667</span>
                <span>Ana Maria Silva</span>
                <span>23/04/26 15:00</span>
                <span className="ver_mais">ver mais</span>
              </div>

              <div className="linha_corpo">
                <div className="v-line"></div>
                <span>15668</span>
                <span>Ricardo Oliveira</span>
                <span>24/04/26 09:00</span>
                <span className="ver_mais">ver mais</span>
              </div>

              <div className="linha_corpo linha_destaque">
                <div className="v-line"></div>
                <span>15669</span>
                <span>Sophia Ventura</span>
                <span>24/04/26 10:00</span>
                <span className="ver_mais">ver mais</span>
              </div>

              <div className="linha_corpo">
                <div className="v-line"></div>
                <span>15670</span>
                <span>João Mendes</span>
                <span>24/04/26 14:00</span>
                <span className="ver_mais">ver mais</span>
              </div>

              <div className="linha_corpo linha_destaque">
                <div className="v-line"></div>
                <span>15671</span>
                <span>Rebeca Lopes</span>
                <span>24/04/26 15:00</span>
                <span className="ver_mais">ver mais</span>
              </div>
            </div>

            <div className="quadro_acoes">
              <span><a href="/agenda">[ Ver agenda completa ]</a></span>
            </div>
          </section>

          <div className="grid_inferior">
            <section className="bloco_secundario">
              <h2>Alertas Recebidos</h2>
              <div className="caixa_vazia">Nenhum alerta recebido</div>
            </section>

            <section className="bloco_secundario">
              <h2>Turma do Bem</h2>
              <div className="menu_turma">
                <div className="item_menu">Reportar</div>
                <div className="item_menu">Conversar</div>
                <div className="item_menu">
                  Solicitar clínica parceira <TriangleAlert size={18} color="orange" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Vinicio;