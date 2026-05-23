import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import HeaderVoluntario from "../../components/HeaderVoluntario";
import Footer from "../../components/Footer";
import FiltrosBusca from "../../components/FiltrosBusca";

type Paciente = {
  nome: string;
  cpf: string;
  idade: string;
  ultimoAtendimento: string;
  slug: string;
};

const PACIENTES: Paciente[] = [
  { nome: "João Silva",                cpf: "468.895.568-33", idade: "32 anos", ultimoAtendimento: "23/08/25", slug: "joao-silva"                },
  { nome: "Caroline Ferreira Pereira", cpf: "123.456.789-00", idade: "28 anos", ultimoAtendimento: "20/08/25", slug: "caroline-ferreira-pereira" },
  { nome: "Marcos Oliveira",           cpf: "987.654.321-11", idade: "45 anos", ultimoAtendimento: "15/08/25", slug: "marcos-oliveira"            },
  { nome: "Ana Beatriz Santos",        cpf: "456.123.789-55", idade: "19 anos", ultimoAtendimento: "10/08/25", slug: "ana-beatriz-santos"         },
  { nome: "Roberto Cavalcante",        cpf: "333.222.111-99", idade: "50 anos", ultimoAtendimento: "05/08/25", slug: "roberto-cavalcante"         },
];

function getIdadeFaixa(idadeStr: string): string {
  const n = parseInt(idadeStr);
  if (n <= 20) return "Até 20";
  if (n <= 30) return "21-30";
  if (n <= 40) return "31-40";
  return "41+";
}

function norm(str: string): string {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

export default function Prontuario() {
  const location = useLocation();

  const [busca, setBusca]               = useState("");
  const [filtroUltimo, setFiltroUltimo] = useState("");
  const [filtroIdade, setFiltroIdade]   = useState("");

  useEffect(() => {
    const inicial = location.state?.buscaInicial as string | undefined;
    if (inicial) setBusca(inicial);
  }, [location.state]);

  const datas = [...new Set(PACIENTES.map((p) => p.ultimoAtendimento))].sort().reverse();

  const filtrados = PACIENTES.filter((p) => {
    const matchBusca  = !busca        || norm(p.nome).includes(norm(busca)) || p.cpf.includes(busca);
    const matchUltimo = !filtroUltimo || p.ultimoAtendimento === filtroUltimo;
    const matchIdade  = !filtroIdade  || getIdadeFaixa(p.idade) === filtroIdade;
    return matchBusca && matchUltimo && matchIdade;
  });

  const temFiltro = !!(filtroUltimo || filtroIdade);

  return (
    <div className="font-[Arial] text-[#010817] flex flex-col min-h-screen">
      <HeaderVoluntario />

      <main className="flex-1 mx-4 my-4 sm:mx-8 sm:my-6 [@media(min-width:992px)]:mx-12 [@media(min-width:992px)]:my-8">

        <FiltrosBusca
          busca={busca}
          onBuscaChange={setBusca}
          placeholder="Pesquisar cpf ou nome..."

          filtrosSelect={[
            {
              placeholder: "Último Atendimento",
              value: filtroUltimo,
              onChange: setFiltroUltimo,
              opcoes: datas.map((d) => ({ label: d, value: d })),
            },
            {
              placeholder: "Idade",
              value: filtroIdade,
              onChange: setFiltroIdade,
              opcoes: [
                { label: "Até 20 anos", value: "Até 20" },
                { label: "21–30 anos",  value: "21-30"  },
                { label: "31–40 anos",  value: "31-40"  },
                { label: "41+ anos",    value: "41+"    },
              ],
            },
          ]}

          temFiltroAtivo={temFiltro}
          onLimparFiltros={() => { setFiltroUltimo(""); setFiltroIdade(""); }}
        />

        {/* Resultados */}
        <section>

          {/* MOBILE: cards */}
          <div className="flex flex-col gap-3 [@media(min-width:992px)]:hidden">
            {filtrados.length > 0 ? filtrados.map((paciente, index) => (
              <div key={index} className="bg-white border border-[#eee] rounded-xl px-4 py-4 flex flex-col gap-3">
                <span className="font-bold text-[#010817] text-sm leading-snug">{paciente.nome}</span>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-[#555]">
                  <div>
                    <span className="text-xs text-[#999] block">CPF</span>
                    {paciente.cpf}
                  </div>
                  <div>
                    <span className="text-xs text-[#999] block">Idade</span>
                    {paciente.idade}
                  </div>
                  <div className="col-span-2">
                    <span className="text-xs text-[#999] block">Último atendimento</span>
                    {paciente.ultimoAtendimento}
                  </div>
                </div>
                <Link
                  to={`/voluntario/prontuarios/${paciente.slug}`}
                  state={{ paciente }}
                  className="w-full bg-[#c4d600] text-black py-2 rounded-md text-sm font-bold hover:bg-[#f1c40f] transition-colors text-center"
                >
                  Abrir Prontuário
                </Link>
              </div>
            )) : (
              <div className="bg-white border border-[#eee] rounded-xl px-4 py-4 flex flex-col gap-3">
                <span className="font-bold text-[#ccc] text-sm">Nenhum resultado encontrado</span>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-[#ddd]">
                  <div><span className="text-xs text-[#ddd] block">CPF</span>—</div>
                  <div><span className="text-xs text-[#ddd] block">Idade</span>—</div>
                  <div className="col-span-2"><span className="text-xs text-[#ddd] block">Último atendimento</span>—</div>
                </div>
              </div>
            )}
          </div>

          {/* DESKTOP: tabela */}
          <div className="hidden [@media(min-width:992px)]:block bg-white border border-[#eee] rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <div className="min-w-[480px]">
                <div className="flex items-center px-6 py-4 bg-[#fafafa] border-b-2 border-[#eee]">
                  <span className="w-[30%] font-bold text-black text-base">Paciente</span>
                  <span className="w-[22%] font-bold text-black text-base">CPF</span>
                  <span className="w-[10%] font-bold text-black text-base">Idade</span>
                  <span className="w-[18%] font-bold text-black text-base">Último atendimento</span>
                  <span className="w-[20%] font-bold text-black text-base text-right">Situação</span>
                </div>

                {filtrados.length > 0 ? filtrados.map((paciente, index) => (
                  <div
                    key={index}
                    className={`flex items-center px-6 py-[15px] border-b border-[#f5f5f5] transition-colors hover:bg-[#fffdf5] ${index % 2 === 1 ? "bg-[#fcfcfc]" : "bg-white"}`}
                  >
                    <span className="w-[30%] font-medium text-[#010817] text-base">{paciente.nome}</span>
                    <span className="w-[22%] text-[#555] text-base">{paciente.cpf}</span>
                    <span className="w-[10%] text-[#555] text-base">{paciente.idade}</span>
                    <span className="w-[18%] text-[#555] text-base">{paciente.ultimoAtendimento}</span>
                    <span className="w-[20%] flex justify-end">
                      <Link
                        to={`/voluntario/prontuarios/${paciente.slug}`}
                        state={{ paciente }}
                        className="bg-[#c4d600] text-black px-[18px] py-2 rounded-md text-[0.85rem] font-bold cursor-pointer whitespace-nowrap hover:bg-[#f1c40f] transition-colors"
                      >
                        Abrir Prontuário
                      </Link>
                    </span>
                  </div>
                )) : (
                  <div className="flex items-center px-6 py-8">
                    <span className="w-[30%] text-[#ccc] font-semibold text-base">Nenhum resultado encontrado</span>
                    <span className="w-[22%] text-[#ddd] text-base">—</span>
                    <span className="w-[10%] text-[#ddd] text-base">—</span>
                    <span className="w-[18%] text-[#ddd] text-base">—</span>
                    <span className="w-[20%]" />
                  </div>
                )}
              </div>
            </div>
          </div>

        </section>
      </main>

      <div className="hidden [@media(min-width:992px)]:block">
        <Footer />
      </div>
    </div>
  );
}