import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HeaderVoluntario from "../../components/HeaderVoluntario";
import Footer from "../../components/Footer";

const DIAS_MARCO = [
  "1","2","3","4","5","6","7",
  "8","9","10","11","12","13","14",
  "15","16","17","18","19","20","21",
  "22","23","24","25","26","27","28",
  "29","30","31","x","x","x","x",
];

type Consulta = {
  hora: string;
  nome: string;
  dia: string;
  id: string;
  cpf: string;
  endereco: string;
  laudo: string;
  observacoes: string;
  antecedentes: string;
};

const CONSULTAS_INICIAIS: Consulta[] = [
  { hora: "09:00", nome: "João Souza",     dia: "4",  id: "1234", cpf: "123.456.789-00", endereco: "Rua das Flores, 123 - SP",    laudo: "Cárie e dor no dente",            observacoes: "Necessário tratamento urgente", antecedentes: "Histórico de cáries"         },
  { hora: "10:30", nome: "Ana Almeida",    dia: "4",  id: "1235", cpf: "987.654.321-00", endereco: "Av. Paulista, 450 - SP",      laudo: "Limpeza e avaliação de canal",    observacoes: "Paciente ansiosa",             antecedentes: "Sem antecedentes relevantes" },
  { hora: "14:00", nome: "Carlos Vicente", dia: "9",  id: "1236", cpf: "111.222.333-44", endereco: "Rua Augusta, 88 - SP",        laudo: "Extração de dente do siso",       observacoes: "Pós-op necessário",            antecedentes: "Alergia a dipirona"          },
  { hora: "15:30", nome: "Maria Lima",     dia: "17", id: "1237", cpf: "555.666.777-88", endereco: "Al. Santos, 200 - SP",        laudo: "Aparelho ortodôntico",            observacoes: "Retorno em 30 dias",           antecedentes: "Sem antecedentes"            },
  { hora: "11:00", nome: "Sophia Ventura", dia: "21", id: "1238", cpf: "999.888.777-66", endereco: "Rua Vergueiro, 900 - SP",     laudo: "Tratamento de cáries múltiplas", observacoes: "Criança, precisa de sedação", antecedentes: "Histórico de sensibilidade"  },
];

export default function VAgenda() {
  const [selecionado, setSelecionado]                 = useState<string | null>(null);
  const [consultaSelecionada, setConsultaSelecionada] = useState<Consulta | null>(null);

  const consultasDoDia = selecionado
    ? CONSULTAS_INICIAIS.filter((c) => c.dia === selecionado)
    : CONSULTAS_INICIAIS;

  return (
    <div className="font-[Arial] text-[#010817] flex flex-col min-h-screen">
      <HeaderVoluntario />

      <main className="flex-1 px-4 py-4 md:px-6 [@media(min-width:992px)]:px-12 [@media(min-width:992px)]:py-8">
        <div className="flex flex-col gap-5 [@media(min-width:992px)]:flex-row [@media(min-width:992px)]:gap-6 [@media(min-width:992px)]:items-start">

          {/* CALENDÁRIO */}
          <section className="w-full [@media(min-width:992px)]:w-[55%] [@media(min-width:992px)]:flex-shrink-0">
            <div className="bg-[#fffdf5] rounded-[20px] p-5 [@media(min-width:992px)]:p-[35px] flex flex-col">

              <div className="flex justify-between items-center mb-6 [@media(min-width:992px)]:mb-[30px]">
                <h2 className="text-[1.4rem] [@media(min-width:992px)]:text-[1.8rem] font-bold text-black">
                  Março 2026
                </h2>
                <div className="flex items-center gap-1">
                  <button className="p-1 bg-transparent border-none cursor-pointer text-[#333] hover:text-black transition-colors">
                    <ChevronLeft />
                  </button>
                  <button className="p-1 bg-transparent border-none cursor-pointer text-[#333] hover:text-black transition-colors">
                    <ChevronRight />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 mb-3 [@media(min-width:992px)]:mb-[15px]">
                {["DOM","SEG","TER","QUA","QUI","SEX","SÁB"].map((d) => (
                  <span key={d} className="text-center text-[#999] text-[0.75rem] [@media(min-width:992px)]:text-[0.9rem] font-medium py-2">
                    {d}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-7">
                {DIAS_MARCO.map((dia, i) => {
                  const isFora  = dia === "x";
                  const numero  = dia.replace("*", "");
                  const isAtivo = selecionado === numero && !isFora;
                  const count   = CONSULTAS_INICIAIS.filter((c) => c.dia === numero).length;

                  return (
                    <button
                      key={i}
                      onClick={() => { if (!isFora) setSelecionado(isAtivo ? null : numero); }}
                      disabled={isFora}
                      className={`
                        relative flex items-center justify-center
                        aspect-square text-sm [@media(min-width:992px)]:text-[1.1rem]
                        border-t border-black/5 outline-none transition-all
                        ${isFora
                          ? "text-[#ccc] cursor-default bg-transparent border-none"
                          : isAtivo
                            ? "bg-[#f1c40f] rounded-xl font-bold cursor-pointer"
                            : "bg-transparent cursor-pointer hover:bg-[#fcebb6] hover:rounded-xl"
                        }
                      `}
                    >
                      {!isFora && numero}
                      {count > 0 && !isFora && (
                        <span className="absolute bottom-[15%] right-[15%] w-[16px] h-[16px] [@media(min-width:992px)]:w-[20px] [@media(min-width:992px)]:h-[20px] bg-[#f1c40f] rounded-full text-[0.6rem] [@media(min-width:992px)]:text-[0.7rem] flex items-center justify-center font-medium">
                          {count}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

            </div>
          </section>

          {/* ASIDE */}
          <aside className="w-full [@media(min-width:992px)]:w-[43%] flex flex-col gap-5">

            {/* Card paciente */}
            <div className="bg-white border border-[#eee] rounded-[15px] p-5 [@media(min-width:992px)]:p-[30px] flex flex-col">
              <h3 className="text-[1.2rem] [@media(min-width:992px)]:text-[1.5rem] font-bold text-black mb-1">
                Informações do Paciente
              </h3>
              <p className="text-[0.85rem] text-[#999] border-b border-[#eee] pb-4 mb-5">
                {consultaSelecionada
                  ? `Consulta selecionada — ${consultaSelecionada.hora}, ${consultaSelecionada.dia} de março`
                  : "Selecione uma consulta na lista abaixo"}
              </p>

              {consultaSelecionada ? (
                <div className="flex gap-5">
                  <div className="w-2 shrink-0 bg-[#f1c40f] rounded-[10px]" />
                  <div className="flex flex-col gap-2">
                    <p className="text-[1.1rem] [@media(min-width:992px)]:text-[1.4rem] font-bold mb-1">
                      {consultaSelecionada.nome}
                      <span className="text-[0.85rem] [@media(min-width:992px)]:text-[1rem] text-[#666] font-normal ml-2">
                        ID: {consultaSelecionada.id}
                      </span>
                    </p>
                    {[
                      ["CPF",          consultaSelecionada.cpf],
                      ["Endereço",     consultaSelecionada.endereco],
                      ["Laudo",        consultaSelecionada.laudo],
                      ["Observações",  consultaSelecionada.observacoes],
                      ["Antecedentes", consultaSelecionada.antecedentes],
                    ].map(([label, valor]) => (
                      <p key={label} className="text-[0.85rem] [@media(min-width:992px)]:text-[0.95rem] text-[#333]">
                        <span className="font-bold text-black">{label}: </span>{valor}
                      </p>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-[120px] text-[#ccc] text-[0.9rem]">
                  Nenhuma consulta selecionada
                </div>
              )}
            </div>

            {/* Lista consultas */}
            <div className="bg-white border border-[#eee] rounded-[15px] p-5 [@media(min-width:992px)]:p-[25px]">
              <h3 className="text-[1rem] [@media(min-width:992px)]:text-[1.1rem] font-bold text-black mb-1">
                {selecionado ? `Consultas — ${selecionado} de março` : "Todas as Consultas"}
              </h3>
              {selecionado && (
                <button
                  onClick={() => { setSelecionado(null); setConsultaSelecionada(null); }}
                  className="text-[0.75rem] text-[#999] underline mb-3 bg-transparent border-none cursor-pointer hover:text-black"
                >
                  ver todas
                </button>
              )}
              <div className="flex flex-col gap-[10px] mt-2">
                {consultasDoDia.length > 0 ? (
                  [...consultasDoDia]
                    .sort((a, b) => Number(a.dia) - Number(b.dia) || a.hora.localeCompare(b.hora))
                    .map((c, i) => (
                      <button
                        key={i}
                        onClick={() => setConsultaSelecionada(c)}
                        className={`
                          w-full text-left px-4 py-3 rounded-[10px] text-[0.85rem] [@media(min-width:992px)]:text-[0.9rem]
                          border-none cursor-pointer transition-all
                          ${consultaSelecionada?.id === c.id
                            ? "bg-[#fff8e1] border-l-4 border-l-[#f1c40f] font-semibold"
                            : "bg-[#f9f9f9] hover:bg-[#fff8e1] hover:border-l-4 hover:border-l-[#f1c40f] hover:font-semibold"
                          }
                        `}
                      >
                        {!selecionado && <span className="text-[#aaa] mr-1">dia {c.dia} —</span>}
                        {c.hora} - {c.nome}
                      </button>
                    ))
                ) : (
                  <p className="text-[#aaa] text-[0.85rem]">Nenhuma consulta neste dia.</p>
                )}
              </div>
            </div>

          </aside>
        </div>
      </main>

      <div className="hidden [@media(min-width:992px)]:block">
        <Footer />
      </div>
    </div>
  );
}