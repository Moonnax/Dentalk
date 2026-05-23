import { useState } from "react";
import { ChevronDown, Search, X } from "lucide-react";
import HeaderFuncionario from "../../components/HeaderFuncionario";
import Footer from "../../components/Footer";

export default function FacoesEscola() {
  const [busca, setBusca] = useState("");
  const [filtroData, setFiltroData] = useState("");
  const [filtroInfra, setFiltroInfra] = useState("");
  const [filtroStatus, setFiltroStatus] = useState("");

  const dados = [
    { instituicao: "Escola Estadual Anita Garibaldi", local: "São Paulo - Zona Sul", data: "15/10/2026", hora: "09:00", alunos: 95, coordenador: "Juliana Martins", contato: "(11) 91234-5678", infra: "Completa", status: "Pendente" },
    { instituicao: "Escola Municipal Paulo Freire", local: "Guarulhos - Centro", data: "18/10/2026", hora: "14:00", alunos: 140, coordenador: "Roberto Nunes", contato: "(11) 93456-7890", infra: "Pendente", status: "Pendente" },
    { instituicao: "Centro Educacional Horizonte", local: "Osasco - Zona Oeste", data: "15/04/2026", hora: "13:00", alunos: 180, coordenador: "Fernanda Lopes", contato: "(11) 99876-5432", infra: "Completa", status: "Confirmada" },
    { instituicao: "Projeto Jovem Futuro", local: "São Paulo - Zona Leste", data: "20/03/2026", hora: "09:30", alunos: 110, coordenador: "Carlos Eduardo", contato: "(11) 95555-2222", infra: "Completa", status: "Encerrada" },
  ];

  const temFiltro = !!filtroData || !!filtroInfra || !!filtroStatus;

  const filtrados = dados.filter((d) => {
    const matchBusca = !busca || d.instituicao.toLowerCase().includes(busca.toLowerCase()) || d.coordenador.toLowerCase().includes(busca.toLowerCase());
    const matchData = !filtroData || d.data === filtroData;
    const matchInfra = !filtroInfra || d.infra === filtroInfra;
    const matchStatus = !filtroStatus || d.status === filtroStatus;
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

  return (
    <div className="min-h-screen flex flex-col font-[Arial] text-[#010817]">

      <HeaderFuncionario />

      <main className="font-[Arial] text-[#010817] px-4 py-6 md:px-6 md:py-6 [@media(min-width:992px)]:mx-12 [@media(min-width:992px)]:my-[2rem] [@media(min-width:992px)]:px-0">

        <section className="flex flex-col [@media(min-width:992px)]:flex-row [@media(min-width:992px)]:justify-between gap-4 mb-[30px]">
          <div className="w-full">

            <div className="flex items-center gap-[15px] border border-[#eee] px-5 py-3 rounded-lg text-[#999] w-full [@media(min-width:992px)]:max-w-[600px] mb-5 bg-white">
              <Search size={18} />
              <input
                type="text"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Filtrar por instituição ou coordenador..."
                className="w-full bg-transparent outline-none text-[#333] placeholder-[#999] text-sm [@media(min-width:992px)]:text-base"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3">

              <div className="relative">
                <select
                  value={filtroData}
                  onChange={(e) => setFiltroData(e.target.value)}
                  className="appearance-none cursor-pointer rounded-lg border border-[#eee] bg-white pl-4 pr-10 py-2 text-sm [@media(min-width:992px)]:text-base text-[#010817] outline-none hover:border-[#c4d600]"
                >
                  <option value="">Data</option>
                  {[...new Set(dados.map((d) => d.data))].map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
                <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              <div className="relative">
                <select
                  value={filtroInfra}
                  onChange={(e) => setFiltroInfra(e.target.value)}
                  className="appearance-none cursor-pointer rounded-lg border border-[#eee] bg-white pl-4 pr-10 py-2 text-sm [@media(min-width:992px)]:text-base text-[#010817] outline-none hover:border-[#c4d600]"
                >
                  <option value="">Infra</option>
                  <option value="Completa">Completa</option>
                  <option value="Pendente">Pendente</option>
                </select>
                <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              <div className="relative">
                <select
                  value={filtroStatus}
                  onChange={(e) => setFiltroStatus(e.target.value)}
                  className="appearance-none cursor-pointer rounded-lg border border-[#eee] bg-white pl-4 pr-10 py-2 text-sm [@media(min-width:992px)]:text-base text-[#010817] outline-none hover:border-[#c4d600]"
                >
                  <option value="">Situação</option>
                  <option value="Pendente">Pendente</option>
                  <option value="Confirmada">Confirmada</option>
                  <option value="Encerrada">Encerrada</option>
                </select>
                <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {temFiltro && (
                <button
                  onClick={() => { setFiltroData(""); setFiltroInfra(""); setFiltroStatus(""); }}
                  className="flex items-center gap-2 border border-[#eee] px-4 py-2 rounded-lg text-sm text-[#999] bg-white hover:border-[#f1c40f] hover:text-[#555] transition-colors"
                >
                  <X size={14} />
                  Limpar filtros
                </button>
              )}

            </div>
          </div>
        </section>

        <section className="mb-[25px] flex flex-wrap gap-[15px]">
          {[
            { label: "Todas",     valor: "" },
            { label: "Pendente",  valor: "Pendente" },
            { label: "Confirmada", valor: "Confirmada" },
            { label: "Encerrada", valor: "Encerrada" },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => setFiltroStatus(item.valor)}
              className={`flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium transition hover:shadow-sm ${
                filtroStatus === item.valor
                  ? "border-[#f1c40f] bg-white text-black shadow-sm"
                  : "border-[#e0e0e0] bg-[#f2f2f2] text-[#333] hover:border-[#f1c40f] hover:bg-white hover:text-black"
              }`}
            >
              {item.label}
              <span className="rounded border border-[#ddd] px-2 py-1 text-xs font-bold text-black">
                {item.valor === "" ? dados.length : dados.filter((d) => d.status === item.valor).length}
              </span>
            </button>
          ))}
        </section>

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
                  <div
                    key={index}
                    className="flex items-center px-4 [@media(min-width:992px)]:px-6 py-4 border-b border-[#f5f5f5] hover:bg-[#fffdf5]"
                  >
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