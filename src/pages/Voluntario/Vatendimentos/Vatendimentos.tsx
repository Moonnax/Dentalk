import HeaderVoluntario from "../../../components/HeaderVoluntario/HeaderVoluntario";
import Footer from "../../../components/Footer/Footer";
import { Upload } from "lucide-react";
import { Link } from "react-router-dom";

function Vatendimentos() {
  return (
    <div className="min-h-screen flex flex-col font-[Arial] text-[#010817]">

      <HeaderVoluntario />

      <main className="px-4 py-6 md:px-6 lg:px-12 flex flex-col gap-10">
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Registrar Atendimento
          </h2>
          <div className="h-[1px] bg-[#ccc] mb-6" />
          <div className="
            flex flex-col lg:flex-row gap-6
            bg-white border border-[#eee] rounded-xl p-5
          ">
            <div className="w-full lg:w-[30%] flex flex-col gap-4">
              <div>
                <span className="text-sm font-medium">*ID Consulta:</span>
                <div className="h-9 border border-[#bbb] rounded-lg mt-1" />
              </div>
              <div>
                <span className="text-sm font-medium">Paciente:</span>
                <div className="h-9 border border-[#bbb] rounded-lg mt-1" />
              </div>
              <div>
                <span className="text-sm font-medium">Data:</span>
                <div className="h-9 border border-[#bbb] rounded-lg mt-1" />
              </div>
              <div>
                <span className="text-sm font-medium">Anexo:</span>
                <div className="
                  h-[120px] border border-[#bbb] rounded-lg mt-1
                  flex flex-col items-center justify-center text-gray-500
                ">
                  <Upload />
                  <p className="text-sm">Faça o upload</p>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-5">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <span className="text-sm font-medium">*Procedimentos:</span>
                  <div className="h-[140px] border border-[#bbb] rounded-lg mt-1" />
                </div>
                <div className="w-full lg:w-[25%] flex flex-col gap-3">

                  <span className="text-sm font-medium">
                    *Paciente Presente?
                  </span>

                  <div className="flex justify-end items-center gap-2">
                    <span>Sim</span>
                    <div className="w-4 h-4 border border-black rounded-sm" />
                  </div>
                  <div className="flex justify-end items-center gap-2">
                    <span>Não</span>
                    <div className="w-4 h-4 border border-black rounded-sm" />
                  </div>
                </div>
              </div>
              <div>
                <span className="text-sm font-medium">Observações:</span>
                <div className="h-[100px] border border-[#bbb] rounded-lg mt-1" />
              </div>
              <div className="flex justify-end">
                <button className="bg-[#f1c40f] px-10 py-2 rounded-full font-bold">
                  Salvar
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Histórico</h2>
          <div className="h-[1px] bg-[#ccc] mb-6" />
          <div className="border border-[#eee] rounded-xl overflow-hidden bg-white">
            <div className="hidden md:flex bg-[#f9f9f9] font-bold text-sm border-b">

              <div className="w-[10%] p-3">ID</div>
              <div className="w-[20%] p-3">Paciente</div>
              <div className="w-[20%] p-3">Data</div>
              <div className="w-[10%] p-3">Presença</div>
              <div className="w-[20%] p-3">Procedimentos</div>
              <div className="w-[10%] p-3">Anexo</div>
              <div className="w-[10%] p-3 text-right">Ação</div>

            </div>
            {[
              ["1021", "Ana Beatriz Silva", "12/03/26 09h00", "Sim", "Limpeza e profilaxia", "Não"],
              ["1022", "Lucas Oliveira", "14/03/26 10h15", "Não", "Consulta inicial", "Não"],
              ["1023", "Mariana Costa", "15/03/26 13h00", "Sim", "Restauração dentária", "Sim"],
              ["1024", "João Pedro Santos", "18/03/26 08h30", "Sim", "Avaliação ortodôntica", "Não"],
              ["1025", "Beatriz Souza", "20/03/26 15h10", "Não", "Falta do paciente", "Não"],
              ["1026", "Enzo Lima", "22/03/26 11h00", "Sim", "Tratamento de cárie", "Sim"],
            ].map((item, i) => (
              <div
                key={i}
                className="
                  flex flex-col md:flex-row
                  border-b border-[#eee]
                  p-4 hover:bg-[#fffdf5]
                  gap-2 md:gap-0
                "
              >
                <div className="md:hidden flex flex-col gap-1 text-sm">

                  <p><strong>ID:</strong> {item[0]}</p>
                  <p><strong>Paciente:</strong> {item[1]}</p>
                  <p><strong>Data:</strong> {item[2]}</p>
                  <p><strong>Presença:</strong> {item[3]}</p>
                  <p><strong>Procedimentos:</strong> {item[4]}</p>
                  <p><strong>Anexo:</strong> {item[5]}</p>

                  <Link to="/detalhes" className="text-[#555] underline mt-1">
                    ver mais
                  </Link>

                </div>
                <div className="hidden md:flex w-full items-center">

                  <div className="w-[10%] text-sm">{item[0]}</div>
                  <div className="w-[20%] text-sm">{item[1]}</div>
                  <div className="w-[20%] text-sm">{item[2]}</div>
                  <div className="w-[10%] text-sm">{item[3]}</div>
                  <div className="w-[20%] text-sm">{item[4]}</div>
                  <div className="w-[10%] text-sm">{item[5]}</div>

                  <div className="w-[10%] text-right">
                    <Link to="/detalhes" className="text-sm underline text-[#555]">
                      ver mais
                    </Link>
                  </div>

                </div>

              </div>
            ))}

          </div>

        </section>

      </main>

      <div className="hidden [@media(min-width:992px)]:block">
        <Footer />
      </div>

    </div>
  );
}

export default Vatendimentos;