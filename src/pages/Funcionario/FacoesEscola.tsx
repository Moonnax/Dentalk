import { useState } from "react";
import { ChevronDown } from "lucide-react";
import HeaderFuncionario from "../../components/HeaderFuncionario";
import Footer from "../../components/Footer";
import FiltrosBusca from "../../components/FiltrosBusca";

export default function FacoesEscola() {
  const [busca, setBusca]           = useState("");
  const [filtroData, setFiltroData] = useState("");
  const [filtroInfra, setFiltroInfra] = useState("");
  const [filtroStatus, setFiltroStatus] = useState("");

  const dados = [
    { instituicao: "Escola Estadual Anita Garibaldi", local: "São Paulo - Zona Sul",    data: "15/10/2026", hora: "09:00", alunos: 95,  coordenador: "Juliana Martins",  contato: "(11) 91234-5678", infra: "Completa", status: "Pendente"   },
    { instituicao: "Escola Municipal Paulo Freire",   local: "Guarulhos - Centro",       data: "18/10/2026", hora: "14:00", alunos: 140, coordenador: "Roberto Nunes",    contato: "(11) 93456-7890", infra: "Pendente",  status: "Pendente"   },
    { instituicao: "Centro Educacional Horizonte",    local: "Osasco - Zona Oeste",      data: "15/04/2026", hora: "13:00", alunos: 180, coordenador: "Fernanda Lopes",   contato: "(11) 99876-5432", infra: "Completa", status: "Confirmada" },
    { instituicao: "Projeto Jovem Futuro",            local: "São Paulo - Zona Leste",   data: "20/03/2026", hora: "09:30", alunos: 110, coordenador: "Carlos Eduardo",   contato: "(11) 95555-2222", infra: "Completa", status: "Encerrada"  },
  ];

  const temFiltro = !!filtroData || !!filtroInfra || !!filtroStatus;

  const filtrados = dados.filter((d) => {
    const matchBusca   = !busca       || d.instituicao.toLowerCase().includes(busca.toLowerCase()) || d.coordenador.toLowerCase().includes(busca.toLowerCase());
    const matchData    = !filtroData   || d.data   === filtroData;
    const matchInfra   = !filtroInfra  || d.infra  === filtroInfra;
    const matchStatus  = !filtroStatus || d.status === filtroStatus;
    return matchBusca && matchData && matchInfra && matchStatus;
  });

  const statusStyle = (status: string) => {
    switch (status) {
      case "Pendente":   return "bg-[#efe2b0] text-[#8b6b00]";
      case "Confirmada": return "bg-[#d9eef9] text-[#0b6b94]";
      case "Encerrada":  return "bg-[#ececec] text-[#555]";
      default: return "bg-gray-200";
    }
  };

  const datasUnicas = [...new Set(dados.map((d) => d.data))].sort();

  return (
    <div className="min-h-screen flex flex-col font-[Arial] text-[#010817]">
      <HeaderFuncionario />

      <main className="font-[Arial] text-[#010817] px-4 py-6 md:px-6 md:py-6 [@media(min-width:992px)]:mx-12 [@media(min-width:992px)]:my-[2rem] [@media(min-width:992px)]:px-0">

        <FiltrosBusca
          busca={busca}
          onBuscaChange={setBusca}
          placeholder="Filtrar por instituição ou coordenador..."

          filtrosSelect={[
            {
              placeholder: "Data",
              value: filtroData,
              onChange: setFiltroData,
              opcoes: datasUnicas.map((d) => ({ label: d, value: d })),
            },
            {
              placeholder: "Infra",
              value: filtroInfra,
              onChange: setFiltroInfra,
              opcoes: [
                { label: "Completa", value: "Completa" },
                { label: "Pendente", value: "Pendente" },
              ],
            },
            {
              placeholder: "Situação",
              value: filtroStatus,
              onChange: setFiltroStatus,
              opcoes: [
                { label: "Pendente",   value: "Pendente"   },
                { label: "Confirmada", value: "Confirmada" },
                { label: "Encerrada",  value: "Encerrada"  },
              ],
            },
          ]}

          tabs={[
            { label: "Todas",     contagem: dados.length },
            { label: "Pendente",  contagem: dados.filter((d) => d.status === "Pendente").length  },
            { label: "Confirmada",contagem: dados.filter((d) => d.status === "Confirmada").length },
            { label: "Encerrada", contagem: dados.filter((d) => d.status === "Encerrada").length  },
          ]}
          tabAtiva={filtroStatus === "" ? "Todas" : filtroStatus}
          onTabChange={(tab) => setFiltroStatus(tab === "Todas" ? "" : tab)}

          temFiltroAtivo={temFiltro}
          onLimparFiltros={() => { setFiltroData(""); setFiltroInfra(""); setFiltroStatus(""); }}
        />

        <section>
          <div className="border border-[#eee] rounded-xl overflow-hidden flex flex-col">
            <div className="overflow-x-auto">
              <div className="min-w-[980px]">

                <div className="flex items-center px-4 [@media(min-width:992px)]:px-6 py-4 bg-[#fafafa] border-b-2 border-[#eee]">
                  <span className="w-[30%] font-bold text-black text-sm [@media(min-width:992px)]:text-base">Instituição</span>
                  <span className="w-[15%] font-bold text-black text-sm [@media(min-width:992px)]:text-base">Data</span>
                  <span className="w-[10%] font-bold text-black text-sm [@media(min-width:992px)]:text-base">Alunos</span>
                  <span className="w-[20%] font-bold text-black text-sm [@media(min-width:992px)]:text-base">Coordenador</span>
                  <span className="w-[15%] font-bold text-black text-sm [@media(min-width:992px)]:text-base">Infra</span>
                  <span className="w-[10%] text-right font-bold text-black text-sm [@media(min-width:992px)]:text-base">Situação</span>
                </div>

                {filtrados.length > 0 ? filtrados.map((item, index) => (
                  <div key={index} className="flex items-center px-4 [@media(min-width:992px)]:px-6 py-4 border-b border-[#f5f5f5] hover:bg-[#fffdf5]">
                    <div className="w-[30%] flex flex-col">
                      <span className="text-[#000] text-sm [@media(min-width:992px)]:text-base">{item.instituicao}</span>
                      <span className="text-xs text-[#555]">{item.local}</span>
                    </div>
                    <div className="w-[15%] flex flex-col text-[#000] text-sm [@media(min-width:992px)]:text-base">
                      {item.data}
                      <span className="text-xs text-[#555]">{item.hora}</span>
                    </div>
                    <span className="w-[10%] text-[#000] text-sm [@media(min-width:992px)]:text-base">{item.alunos}</span>
                    <div className="w-[20%] flex flex-col">
                      <span className="text-sm [@media(min-width:992px)]:text-base">{item.coordenador}</span>
                      <span className="text-xs text-[#555]">{item.contato}</span>
                    </div>
                    <span className="w-[15%] text-[#000] text-sm [@media(min-width:992px)]:text-base">{item.infra}</span>
                    <div className="w-[10%] flex justify-end">
                      <span className={`px-3 py-1 rounded text-xs font-bold whitespace-nowrap ${statusStyle(item.status)}`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                )) : (
                  <p className="text-center text-[#999] py-8 text-sm">Nenhum resultado encontrado.</p>
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