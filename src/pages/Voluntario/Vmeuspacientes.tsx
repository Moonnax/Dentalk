import { useState } from "react";
import { Search } from "lucide-react";
import HeaderVoluntario from "../../components/HeaderVoluntario/HeaderVoluntario";
import Footer from "../../components/Footer/Footer";
import PacienteItem from "../../components/PacienteItem/PacienteItem";

// ─── Tipos ────────────────────────────────────────────────────────────────────

type Status = "Todos" | "Aguardando Retorno" | "Agendado";

type Paciente = {
  nome: string;
  idade: number;
  cpf: string;
  data: string;
  status: "Aguardando Retorno" | "Agendado";
};

// ─── pacientes fixos ─────────────────────────────────────────────────────

const PACIENTES: Paciente[] = [
  { nome: "Ana Beatriz Silva",  idade: 8,  cpf: "455.123.789-11", data: "15/03/26", status: "Agendado"           },
  { nome: "Lucas Oliveira",     idade: 12, cpf: "332.987.456-00", data: "10/02/26", status: "Aguardando Retorno" },
  { nome: "Mariana Costa",      idade: 7,  cpf: "111.222.333-44", data: "01/03/26", status: "Agendado"           },
  { nome: "João Pedro Santos",  idade: 10, cpf: "222.333.444-55", data: "20/03/26", status: "Agendado"           },
  { nome: "Beatriz Souza",      idade: 9,  cpf: "999.888.777-66", data: "05/03/26", status: "Aguardando Retorno" },
  { nome: "Enzo Lima",          idade: 11, cpf: "777.666.555-44", data: "18/03/26", status: "Agendado"           },
  { nome: "Clara Mendes",       idade: 13, cpf: "555.444.333-22", data: "12/03/26", status: "Aguardando Retorno" },
  { nome: "Gustavo Rocha",      idade: 6,  cpf: "888.777.111-00", data: "22/02/26", status: "Aguardando Retorno" },
  { nome: "Valentina Silva",    idade: 7,  cpf: "333.444.999-88", data: "14/03/26", status: "Agendado"           },
  { nome: "Felipe Augusto",     idade: 14, cpf: "121.232.343-45", data: "01/02/26", status: "Aguardando Retorno" },
];

const ENCAMINHADOS = [
  { nome: "Enzo Gabriel",    idade: "09", genero: "masculino", endereco: "Av. Paulista, 1000 - SP",     laudo: "Limpeza e avaliação de canal." },
  { nome: "Sophia Martins",  idade: "11", genero: "feminino",  endereco: "Rua Augusta, 450 - SP",       laudo: "Dor aguda no molar inferior." },
  { nome: "Thiago Ferreira", idade: "13", genero: "masculino", endereco: "Rua das Flores, 12 - Osasco", laudo: "Avaliação para aparelho ortodôntico." },
  { nome: "Larissa Manoela", idade: "06", genero: "feminino",  endereco: "Al. Santos, 200 - SP",        laudo: "Extração de dente de leite." },
  { nome: "Murilo Benício",  idade: "10", genero: "masculino", endereco: "Rua Vergueiro, 900 - SP",     laudo: "Tratamento de cáries múltiplas." },
];

const FILTROS: Status[] = ["Todos", "Aguardando Retorno", "Agendado"];

// Cor do badge por status
const BADGE: Record<string, string> = {
  "Agendado":           "bg-[#c4d600] text-black",
  "Aguardando Retorno": "bg-yellow-100 text-yellow-800",
};


export default function VMeusPacientes() {
  const [busca, setBusca]           = useState("");
  const [filtroAtivo, setFiltroAtivo] = useState<Status>("Todos");

  // normaliza acentos para busca sem acento funcionar
  const norm = (s: string) =>
    s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  const filtrados = PACIENTES.filter((p) => {
    const matchBusca  = !busca || norm(p.nome).includes(norm(busca)) || p.cpf.includes(busca);
    const matchStatus = filtroAtivo === "Todos" || p.status === filtroAtivo;
    return matchBusca && matchStatus;
  });

  // Contadores para cada filtro
  const contagem: Record<Status, number> = {
    "Todos":              PACIENTES.length,
    "Agendado":           PACIENTES.filter((p) => p.status === "Agendado").length,
    "Aguardando Retorno": PACIENTES.filter((p) => p.status === "Aguardando Retorno").length,
  };

  return (
    <div className="min-h-screen flex flex-col font-[Arial] text-[#010817]">
      <HeaderVoluntario />

      <main className="
        font-[Arial] text-[#010817]
        px-4 py-4
        md:px-6 md:py-4
        [@media(min-width:992px)]:flex
        [@media(min-width:992px)]:flex-row
        [@media(min-width:992px)]:mx-12
        [@media(min-width:992px)]:my-4
        [@media(min-width:992px)]:px-0
      ">

        {/* ── Seção principal: Meus Pacientes ── */}
        <section className="
          w-full mb-6
          [@media(min-width:992px)]:flex-1
          [@media(min-width:992px)]:pr-10
          [@media(min-width:992px)]:mb-0
        ">
          <h1 className="pb-5 font-semibold text-[26px] md:text-[30px] [@media(min-width:992px)]:text-[34px]">
            Meus Pacientes
          </h1>

          {/* Busca */}
          <div className="flex items-center gap-2 bg-[#f2f2f2] rounded-lg px-3 py-2 mb-4">
            <Search size={18} className="text-[#999] shrink-0" />
            <input
              type="text"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Pesquisar cpf ou nome..."
              className="w-full bg-transparent outline-none text-[#333] placeholder-[#999] text-sm"
            />
            {busca && (
              <button
                onClick={() => setBusca("")}
                className="text-[#bbb] hover:text-[#555] text-lg leading-none"
              >
                ×
              </button>
            )}
          </div>

          {/* Filtros com contagem */}
          <div className="flex gap-2 flex-wrap mb-4">
            {FILTROS.map((f) => (
              <button
                key={f}
                onClick={() => setFiltroAtivo(f)}
                className={`px-3 py-1 rounded text-sm transition flex items-center gap-1.5 ${
                  filtroAtivo === f
                    ? "bg-[#010817] text-white"
                    : "bg-[#eee] text-[#010817] hover:bg-[#ddd]"
                }`}
              >
                {f}
                <span
                  className={`text-xs font-bold px-1.5 py-0.5 rounded-full leading-none ${
                    filtroAtivo === f
                      ? "bg-white text-[#010817]"
                      : "bg-[#d0d0d0] text-[#555]"
                  }`}
                >
                  {contagem[f]}
                </span>
              </button>
            ))}
          </div>

          {/* Lista de pacientes */}
          <div className="w-full rounded-[15px] bg-[#fdfdf5] p-4 [@media(min-width:992px)]:p-[25px]">
            <h3 className="text-[1.2rem] [@media(min-width:992px)]:text-[1.4rem] font-bold">
              Pacientes
              {filtroAtivo !== "Todos" && (
                <span className="ml-2 text-sm font-normal text-[#888]">
                  — {filtroAtivo}
                </span>
              )}
            </h3>
            <div className="my-[10px] mb-3 w-[150px] border-b-2 border-[#333]" />

            {filtrados.length > 0 ? (
              filtrados.map((p, i) => (
                <div key={i} className="flex items-center gap-2">
                  {/* PacienteItem original sem alteração */}
                  <div className="flex-1">
                    <PacienteItem
                      nome={p.nome}
                      idade={p.idade}
                      cpf={p.cpf}
                      data={p.data}
                    />
                  </div>
                  {/* Badge de status ao lado direito */}
                  <span
                    className={`shrink-0 text-[0.7rem] font-bold px-2 py-0.5 rounded-full whitespace-nowrap ${BADGE[p.status]}`}
                  >
                    {p.status}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-[#999] py-4 text-[0.9rem]">
                Nenhum paciente encontrado
                {filtroAtivo !== "Todos" ? ` com status "${filtroAtivo}"` : ""}.
              </p>
            )}
          </div>
        </section>

        {/* ── Aside: Encaminhados ── */}
        <aside className="
          w-full flex flex-col gap-4
          [@media(min-width:992px)]:w-[400px]
          [@media(min-width:992px)]:flex-shrink-0
          [@media(min-width:992px)]:border-l
          [@media(min-width:992px)]:border-[#ccc]
          [@media(min-width:992px)]:pl-10
        ">
          <h1 className="pb-1 font-semibold text-[26px] md:text-[30px] [@media(min-width:992px)]:text-[34px]">
            Encaminhados
          </h1>

          {ENCAMINHADOS.map((p) => (
            <div
              key={p.nome}
              className="flex rounded-xl border border-[#e0e0e0] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
            >
              <div className="w-[6px] rounded-l-xl bg-[#f1c40f] shrink-0" />
              <div className="flex flex-col gap-2 p-4 w-full">
                <h3 className="text-[1rem] font-bold">{p.nome}</h3>
                <p className="text-[0.85rem] text-[#444]">
                  <strong>Idade:</strong> {p.idade} anos{" "}
                  <strong>Gênero:</strong> {p.genero}
                </p>
                <p className="text-[0.85rem] text-[#444]">
                  <strong>Endereço:</strong> {p.endereco}
                </p>
                <p className="text-[0.85rem] text-[#444]">
                  <strong>Laudo:</strong> {p.laudo}
                </p>
                <div className="flex gap-2 mt-1 justify-end">
                  <button className="bg-[#f1c40f] border-none px-4 py-2 rounded-lg font-bold cursor-pointer text-[0.85rem] hover:bg-[#d4ac0d] transition-colors">
                    Aceitar e Agendar
                  </button>
                  <button className="bg-[#f2f2f2] border-none px-4 py-2 rounded-lg cursor-pointer text-[0.85rem] hover:bg-[#e0e0e0] transition-colors">
                    Ver mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </aside>

      </main>

      <div className="hidden [@media(min-width:992px)]:block">
        <Footer />
      </div>
    </div>
  );
}