import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HeaderVoluntario from "../../components/HeaderVoluntario";
import Footer from "../../components/Footer";

const DIAS_MARCO = [
  "1","2","3","4*","5","6","7",
  "8","9*","10","11","12","13","14",
  "15","16","17*","18","19","20","21*",
  "22","23","24","25","26","27","28",
  "29","30","31","x","x","x","x",
];

const CONSULTAS = [
  { hora: "09:00", nome: "João Souza" },
  { hora: "10:30", nome: "Ana Almeida" },
  { hora: "14:00", nome: "Carlos Vicente" },
  { hora: "15:30", nome: "Maria Lima" },
];

const PACIENTE = {
  nome: "João Souza",
  id: "1234",
  cpf: "123.456.789-00",
  endereco: "Rua das F, 123 - SP",
  laudo: "Cárie e dor no dente",
  observacoes: "Necessário tratamento",
  antecedentes: "Histórico dentário",
};

export default function VAgenda() {
  const [selecionado, setSelecionado] = useState<string | null>(null);

  return (
    <div className="font-[Arial] text-[#010817] flex flex-col min-h-screen">
      <HeaderVoluntario />

      <main className="flex-1 px-4 py-4 md:px-6 [@media(min-width:992px)]:px-12 [@media(min-width:992px)]:py-8">
        <div className="flex flex-col gap-5 [@media(min-width:992px)]:flex-row [@media(min-width:992px)]:gap-6 [@media(min-width:992px)]:items-start">

          {/* ── CALENDÁRIO ── */}
          <section className="w-full [@media(min-width:992px)]:w-[55%] [@media(min-width:992px)]:flex-shrink-0">
            <div className="bg-[#fffdf5] rounded-[20px] p-5 [@media(min-width:992px)]:p-[35px] flex flex-col">

              {/* Header mês */}
              <div className="flex justify-between items-center mb-6 [@media(min-width:992px)]:mb-[30px]">
                <h2 className="text-[1.4rem] [@media(min-width:992px)]:text-[1.8rem] font-bold text-black">
                  Março 2026
                </h2>
                <div className="flex gap-1">
                  <button className="p-1 bg-transparent border-none cursor-pointer text-[#333] hover:text-black transition-colors">
                    <ChevronLeft />
                  </button>
                  <button className="p-1 bg-transparent border-none cursor-pointer text-[#333] hover:text-black transition-colors">
                    <ChevronRight />
                  </button>
                </div>
              </div>

              {/* Dias da semana */}
              <div className="grid grid-cols-7 mb-3 [@media(min-width:992px)]:mb-[15px]">
                {["DOM","SEG","TER","QUA","QUI","SEX","SÁB"].map((d) => (
                  <span
                    key={d}
                    className="text-center text-[#999] text-[0.75rem] [@media(min-width:992px)]:text-[0.9rem] font-medium py-2"
                  >
                    {d}
                  </span>
                ))}
              </div>

              {/* Grade dias */}
              <div className="grid grid-cols-7">
                {DIAS_MARCO.map((dia, i) => {
                  const isFora = dia === "x";
                  const isMarcado = dia.includes("*");
                  const numero = dia.replace("*", "");
                  const isAtivo = selecionado === numero && !isFora;

                  return (
                    <button
                      key={i}
                      onClick={() => !isFora && setSelecionado(numero)}
                      disabled={isFora}
                      className={`
                        relative flex items-center justify-center
                        aspect-square text-sm [@media(min-width:992px)]:text-[1.1rem]
                        border-t border-black/5
                        outline-none transition-all
                        ${isFora
                          ? "text-[#ccc] cursor-default bg-transparent border-none"
                          : isAtivo
                            ? "bg-[#f1c40f] rounded-xl font-bold cursor-pointer"
                            : "bg-transparent cursor-pointer hover:bg-[#fcebb6] hover:rounded-xl"
                        }
                      `}
                    >
                      {!isFora && numero}
                      {isMarcado && !isFora && (
                        <span className="absolute bottom-[15%] right-[15%] w-[16px] h-[16px] [@media(min-width:992px)]:w-[20px] [@media(min-width:992px)]:h-[20px] bg-[#f1c40f] rounded-full text-[0.6rem] [@media(min-width:992px)]:text-[0.7rem] flex items-center justify-center font-medium">
                          2
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

            </div>
          </section>

          {/* ASIDE DETALHES */}
          <aside className="w-full [@media(min-width:992px)]:w-[43%] flex flex-col gap-5">

            {/* Card info paciente */}
            <div className="bg-white border border-[#eee] rounded-[15px] p-5 [@media(min-width:992px)]:p-[30px] flex flex-col">
              <h3 className="text-[1.2rem] [@media(min-width:992px)]:text-[1.5rem] font-bold text-black mb-1">
                Informações do Paciente
              </h3>
              <p className="text-[0.85rem] text-[#999] border-b border-[#eee] pb-4 mb-5">
                Selecione uma consulta na lista abaixo ou no calendário
              </p>

              <div className="flex gap-5 mb-auto">
                <div className="w-2 shrink-0 bg-[#f1c40f] rounded-[10px]" />
                <div className="flex flex-col gap-2">
                  <p className="text-[1.1rem] [@media(min-width:992px)]:text-[1.4rem] font-bold mb-1">
                    {PACIENTE.nome}
                    <span className="text-[0.85rem] [@media(min-width:992px)]:text-[1rem] text-[#666] font-normal ml-2">
                      ID Consulta: {PACIENTE.id}
                    </span>
                  </p>
                  {[
                    ["CPF", PACIENTE.cpf],
                    ["Endereço", PACIENTE.endereco],
                    ["Laudo", PACIENTE.laudo],
                    ["Observações", PACIENTE.observacoes],
                    ["Antecedentes", PACIENTE.antecedentes],
                  ].map(([label, valor]) => (
                    <p key={label} className="text-[0.85rem] [@media(min-width:992px)]:text-[0.95rem] text-[#333]">
                      <span className="font-bold text-black">{label}: </span>
                      {valor}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 mt-5">
                <button className="bg-[#f1c40f] text-black font-bold px-6 py-3 rounded-[10px] cursor-pointer border-none hover:bg-[#e6b800] transition-colors text-sm [@media(min-width:992px)]:text-base">
                  Concluir
                </button>
                <button className="bg-[#f0f0f0] text-black font-semibold px-6 py-3 rounded-[10px] cursor-pointer border-none hover:bg-[#e4e4e4] transition-colors text-sm [@media(min-width:992px)]:text-base">
                  Remarcar
                </button>
              </div>

              <p className="text-[0.7rem] text-[#aaa] mt-3 pl-[33px]">
                Remarcações são permitidas somente com 7 dias de antecedência
              </p>
            </div>

            {/* Card lista horários */}
            <div className="bg-white border border-[#eee] rounded-[15px] p-5 [@media(min-width:992px)]:p-[25px]">
              <h3 className="text-[1rem] [@media(min-width:992px)]:text-[1.1rem] font-bold text-black mb-4">
                Próximas Consultas de Hoje
              </h3>
              <div className="flex flex-col gap-[10px]">
                {CONSULTAS.map((c) => (
                  <button
                    key={c.hora}
                    className="
                      w-full text-left px-4 py-3 rounded-[10px] text-[0.85rem] [@media(min-width:992px)]:text-[0.9rem]
                      bg-[#f9f9f9] border-none cursor-pointer
                      hover:bg-[#fff8e1] hover:border-l-4 hover:border-l-[#f1c40f] hover:font-semibold
                      transition-all
                    "
                  >
                    {c.hora} - {c.nome}
                  </button>
                ))}
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