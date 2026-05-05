import HeaderVoluntario from "../../../components/HeaderVoluntario/HeaderVoluntario";
import Footer from "../../../components/Footer/Footer";
import "./Vatendimentos.css";

function Vatendimentos() {
  return (
    <>
      <HeaderVoluntario />

      <main className="container_atendimentos">

        <section className="registro_atendimento">
          <h2 className="titulo_sessao">Registrar Atendimento</h2>
          <div className="divisor_linha"></div>

          <div className="box_registro_flex">
            <div className="col_inputs_fixos">

              <div className="campo_grupo">
                <span>*ID Consulta:</span>
                <div className="input_fake" tabIndex={0}></div>
              </div>

              <div className="campo_grupo">
                <span>Paciente:</span>
                <div className="input_fake" tabIndex={0}></div>
              </div>

              <div className="campo_grupo">
                <span>Data:</span>
                <div className="input_fake" tabIndex={0}></div>
              </div>

              <div className="campo_grupo">
                <span>Anexo:</span>
                <div className="upload_area_fake" tabIndex={0}>
                  <i className="fa-solid fa-upload"></i>
                  <p>Faça o upload</p>
                </div>
              </div>

            </div>

            <div className="col_textos_amplos">

              <div className="linha_superior_flex">

                <div className="flex_70">
                  <span>*Procedimentos:</span>
                  <div className="textarea_fake_alto" tabIndex={0}></div>
                </div>

                <div className="flex_25 checklist_container">
                  <span className="label_presenca">*Paciente Presente?</span>

                  <div className="opcao_check" tabIndex={0}>
                    <span>sim</span>
                    <div className="quadradinho_check"></div>
                  </div>

                  <div className="opcao_check" tabIndex={0}>
                    <span>não</span>
                    <div className="quadradinho_check"></div>
                  </div>
                </div>

              </div>

              <div className="linha_inferior_flex">
                <div className="flex_70">
                  <span>Observações:</span>
                  <div className="textarea_fake_baixo" tabIndex={0}></div>
                </div>
              </div>

              <div className="btn_wrapper">
                <div className="btn_acao_salvar" tabIndex={0}>
                  Salvar
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="historico_secao">
          <h2 className="titulo_sessao">Histórico</h2>
          <div className="divisor_linha"></div>

          <div className="tabela_responsiva_flex">

            <div className="linha_tabela header_tabela">
              <span className="celula">ID consulta</span>
              <span className="celula">Paciente</span>
              <span className="celula">Data</span>
              <span className="celula">Presença</span>
              <span className="celula">Procedimentos</span>
              <span className="celula">anexo</span>
              <span className="celula">detalhes</span>
            </div>

            {[
              ["1021","Ana Beatriz Silva","12/03/26 09h00-09h30","sim","Limpeza e profilaxia","não"],
              ["1022","Lucas Oliveira","14/03/26 10h15-10h45","não","Consulta inicial","não"],
              ["1023","Mariana Costa","15/03/26 13h00-13h40","sim","Restauração dentária","sim"],
              ["1024","João Pedro Santos","18/03/26 08h30-09h00","sim","Avaliação ortodôntica","não"],
              ["1025","Beatriz Souza","20/03/26 15h10-15h40","não","Falta do paciente","não"],
              ["1026","Enzo Lima","22/03/26 11h00-11h30","sim","Tratamento de cárie","sim"],
            ].map((item, index) => (
              <div className="linha_tabela" key={index}>
                <span className="celula">{item[0]}</span>
                <span className="celula">{item[1]}</span>
                <span className="celula">{item[2]}</span>
                <span className="celula">{item[3]}</span>
                <span className="celula">{item[4]}</span>
                <span className="celula">{item[5]}</span>
                <span className="celula link_detalhe">ver mais</span>
              </div>
            ))}

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default Vatendimentos;