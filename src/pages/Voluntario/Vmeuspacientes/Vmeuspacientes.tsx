import { Search } from "lucide-react";
import HeaderVoluntario from "../../../components/HeaderVoluntario/HeaderVoluntario";
import Footer from "../../../components/Footer/Footer";
import PacienteItem from "../../../components/PacienteItem/PacienteItem";

import "./VMeusPacientes.css";

export default function VMeusPacientes() {
  return (
    <>
      <HeaderVoluntario />

      <main className="dashboard_container">
        <div className="layout_grid_fixo">

          <section className="coluna_pacientes">
            <h1>Meus Pacientes</h1>

            <div className="simular_busca">
              <Search size={18} />
              <span>Pesquisar cpf ou nome...</span>
            </div>

            <div className="area_filtros">
              <button className="btn_filtro">Todos</button>
              <button className="btn_filtro">Aguardando Retorno</button>
              <button className="btn_filtro">Agendado</button>
            </div>

            <div className="tabela_pacientes_lista">

              <PacienteItem
                nome="Ana Beatriz Silva"
                idade={8}
                cpf="455.123.789-11"
                data="15/03/26"
              />

              <PacienteItem
                nome="Lucas Oliveira"
                idade={12}
                cpf="332.987.456-00"
                data="10/02/26"
              />

              <PacienteItem
                nome="Mariana Costa"
                idade={7}
                cpf="111.222.333-44"
                data="01/03/26"
              />

              <PacienteItem
                nome="João Pedro Santos"
                idade={10}
                cpf="222.333.444-55"
                data="20/03/26"
              />

              <PacienteItem
                nome="Beatriz Souza"
                idade={9}
                cpf="999.888.777-66"
                data="05/03/26"
              />

              <PacienteItem
                nome="Enzo Lima"
                idade={11}
                cpf="777.666.555-44"
                data="18/03/26"
              />

              <PacienteItem
                nome="Clara Mendes"
                idade={13}
                cpf="555.444.333-22"
                data="12/03/26"
              />

              <PacienteItem
                nome="Gustavo Rocha"
                idade={6}
                cpf="888.777.111-00"
                data="22/02/26"
              />

              <PacienteItem
                nome="Valentina Silva"
                idade={7}
                cpf="333.444.999-88"
                data="14/03/26"
              />

              <PacienteItem
                nome="Felipe Augusto"
                idade={14}
                cpf="121.232.343-45"
                data="01/02/26"
              />

            </div>
          </section>

          <aside className="coluna_encaminhados">

            <h1>Encaminhados</h1>

            <div className="card_encaminhado_p">
              <div className="borda_lateral"></div>

              <div className="conteudo_card_p">
                <h3>Enzo Gabriel</h3>

                <p>
                  <strong>Idade:</strong> 09 anos
                  <strong className="genero"> gênero:</strong> masculino
                </p>

                <p>
                  <strong>Endereço:</strong> Av. Paulista, 1000 - SP
                </p>

                <p>
                  <strong>Laudo:</strong> Limpeza e avaliação de canal.
                </p>

                <div className="botoes_card_p">
                  <button className="btn-amarelo-p">
                    Aceitar e Agendar
                  </button>

                  <button className="btn-cinza-p">
                    Ver mais
                  </button>
                </div>
              </div>
            </div>

            <div className="card_encaminhado_p">
              <div className="borda_lateral"></div>

              <div className="conteudo_card_p">
                <h3>Sophia Martins</h3>

                <p>
                  <strong>Idade:</strong> 11 anos
                  <strong className="genero"> gênero:</strong> feminino
                </p>

                <p>
                  <strong>Endereço:</strong> Rua Augusta, 450 - SP
                </p>

                <p>
                  <strong>Laudo:</strong> Dor aguda no molar inferior.
                </p>

                <div className="botoes_card_p">
                  <button className="btn-amarelo-p">
                    Aceitar e Agendar
                  </button>

                  <button className="btn-cinza-p">
                    Ver mais
                  </button>
                </div>
              </div>
            </div>

            <div className="card_encaminhado_p">
              <div className="borda_lateral"></div>

              <div className="conteudo_card_p">
                <h3>Thiago Ferreira</h3>

                <p>
                  <strong>Idade:</strong> 13 anos
                  <strong className="genero"> gênero:</strong> masculino
                </p>

                <p>
                  <strong>Endereço:</strong> Rua das Flores, 12 - Osasco
                </p>

                <p>
                  <strong>Laudo:</strong> Avaliação para aparelho ortodôntico.
                </p>

                <div className="botoes_card_p">
                  <button className="btn-amarelo-p">
                    Aceitar e Agendar
                  </button>

                  <button className="btn-cinza-p">
                    Ver mais
                  </button>
                </div>
              </div>
            </div>

            <div className="card_encaminhado_p">
              <div className="borda_lateral"></div>

              <div className="conteudo_card_p">
                <h3>Larissa Manoela</h3>

                <p>
                  <strong>Idade:</strong> 06 anos
                  <strong className="genero"> gênero:</strong> feminino
                </p>

                <p>
                  <strong>Endereço:</strong> Al. Santos, 200 - SP
                </p>

                <p>
                  <strong>Laudo:</strong> Extração de dente de leite.
                </p>

                <div className="botoes_card_p">
                  <button className="btn-amarelo-p">
                    Aceitar e Agendar
                  </button>

                  <button className="btn-cinza-p">
                    Ver mais
                  </button>
                </div>
              </div>
            </div>

            <div className="card_encaminhado_p">
              <div className="borda_lateral"></div>

              <div className="conteudo_card_p">
                <h3>Murilo Benício</h3>

                <p>
                  <strong>Idade:</strong> 10 anos
                  <strong className="genero"> gênero:</strong> masculino
                </p>

                <p>
                  <strong>Endereço:</strong> Rua Vergueiro, 900 - SP
                </p>

                <p>
                  <strong>Laudo:</strong> Tratamento de cáries múltiplas.
                </p>

                <div className="botoes_card_p">
                  <button className="btn-amarelo-p">
                    Aceitar e Agendar
                  </button>

                  <button className="btn-cinza-p">
                    Ver mais
                  </button>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </main>

      <Footer />
    </>
  );
}