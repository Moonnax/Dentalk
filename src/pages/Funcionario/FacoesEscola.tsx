import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import HeaderFuncionario from "../../components/HeaderFuncionario/HeaderFuncionario";
import Footer from "../../components/Footer/Footer";

export default function FacoesEscola() {
  const [busca, setBusca] = useState("");
  const [filtroData, setFiltroData] = useState("");
  const [filtroInfra, setFiltroInfra] = useState("");
  const [filtroStatus, setFiltroStatus] = useState("");

  const dados = [
    { instituicao: "Escola Estadual Anita Garibaldi", local: "São Paulo - Zona Sul", data: "15/10/2026", hora: "09:00", alunos: 95, coordenador: "Juliana Martins", contato: "(11) 91234-5678", infra: "Completa", status: "Aprovar" },
    { instituicao: "Escola Municipal Paulo Freire", local: "Guarulhos - Centro", data: "18/10/2026", hora: "14:00", alunos: 140, coordenador: "Roberto Nunes", contato: "(11) 93456-7890", infra: "Pendente", status: "Pendente" },
    { instituicao: "Centro Educacional Horizonte", local: "Osasco - Zona Oeste", data: "15/04/2026", hora: "13:00", alunos: 180, coordenador: "Fernanda Lopes", contato: "(11) 99876-5432", infra: "Completa", status: "Confirmada" },
    { instituicao: "Projeto Jovem Futuro", local: "São Paulo - Zona Leste", data: "20/03/2026", hora: "09:30", alunos: 110, coordenador: "Carlos Eduardo", contato: "(11) 95555-2222", infra: "Completa", status: "Concluída" },
  ];

  const filtrados = dados.filter((d) => {
    const matchBusca = !busca || d.instituicao.toLowerCase().includes(busca.toLowerCase()) || d.coordenador.toLowerCase().includes(busca.toLowerCase());
    const matchData = !filtroData || d.data === filtroData;
    const matchInfra = !filtroInfra || d.infra === filtroInfra;
    const matchStatus = !filtroStatus || d.status === filtroStatus;
    return matchBusca && matchData && matchInfra && matchStatus;
  });

  const statusStyle = (status: string) => {
    switch (status) {
      case "Aprovar": return "bg-[#c4d600] text-black";
      case "Pendente": return "bg-[#efe2b0] text-[#8b6b00]";
      case "Confirmada": return "bg-[#d9eef9] text-[#0b6b94]";
      case "Concluída": return "bg-[#ececec] text-[#555]";
      default: return "bg-gray-200";
    }
  };

  return (
    <div className="flex min-h-screen flex-col font-sans text-[#010817]">
      <HeaderFuncionario />

      <main className="flex-1 mx-[3rem] my-[2rem]">

        <section className="mb-[30px] flex items-start justify-between gap-5">
          <div className="w-full">
            <div className="flex items-center gap-[15px] border border-[#eee] px-5 py-3 rounded-lg text-[#999] max-w-[600px] mb-5 bg-white">
              <Search size={18} />
              <input
                type="text"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Filtrar por instituição ou coordenador..."
                className="w-full bg-transparent outline-none text-[#333] placeholder-[#999]"
              />
            </div>

            <div className="flex flex-wrap gap-[15px]">
              <div className="relative">
                <select value={filtroData} onChange={(e) => setFiltroData(e.target.value)}
                  className="appearance-none cursor-pointer rounded-lg border border-[#eee] bg-white px-4 py-2 pr-10 text-[#010817] outline-none hover:border-[#c4d600]">
                  <option value="">Data</option>
                  {[...new Set(dados.map(d => d.data))].map(d => <option key={d} value={d}>{d}</option>)}
                </select>
                <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              <div className="relative">
                <select value={filtroInfra} onChange={(e) => setFiltroInfra(e.target.value)}
                  className="appearance-none cursor-pointer rounded-lg border border-[#eee] bg-white px-4 py-2 pr-10 text-[#010817] outline-none hover:border-[#c4d600]">
                  <option value="">Infra</option>
                  <option value="Completa">Completa</option>
                  <option value="Pendente">Pendente</option>
                </select>
                <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              <div className="relative">
                <select value={filtroStatus} onChange={(e) => setFiltroStatus(e.target.value)}
                  className="appearance-none cursor-pointer rounded-lg border border-[#eee] bg-white px-4 py-2 pr-10 text-[#010817] outline-none hover:border-[#c4d600]">
                  <option value="">Situação</option>
                  <option value="Aprovar">Aprovar</option>
                  <option value="Pendente">Pendente</option>
                  <option value="Confirmada">Confirmada</option>
                  <option value="Concluída">Concluída</option>
                </select>
                <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-[25px] flex flex-wrap gap-[15px]">
          {[
            { label: "Todas", valor: "" },
            { label: "Concluídas", valor: "Concluída" },
            { label: "Aprovar", valor: "Aprovar" },
          ].map((item) => (
            <button key={item.label}
              onClick={() => setFiltroStatus(item.valor)}
              className={`flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium transition hover:shadow-sm ${filtroStatus === item.valor ? "border-[#f1c40f] bg-white text-black shadow-sm" : "border-[#e0e0e0] bg-[#f2f2f2] text-[#333] hover:border-[#f1c40f] hover:bg-white hover:text-black"}`}>
              {item.label}
              <span className="rounded border border-[#ddd] px-2 py-1 text-xs font-bold text-black">
                {item.valor === "" ? dados.length : dados.filter(d => d.status === item.valor).length}
              </span>
            </button>
          ))}
        </section>

        <section>
          <div className="flex flex-col overflow-hidden rounded-xl border border-[#eee] bg-white">
            <div className="flex border-b-2 border-[#eee] bg-[#fafafa] px-6 py-4 font-bold text-[#010817]">
              <span className="w-[30%]">Instituição</span>
              <span className="w-[15%]">Data</span>
              <span className="w-[10%]">Alunos</span>
              <span className="w-[20%]">Coordenador</span>
              <span className="w-[15%]">Infra</span>
              <span className="w-[10%] text-right">Situação</span>
            </div>

            {filtrados.length > 0 ? filtrados.map((item, index) => (
              <div key={index} className="flex items-center border-b border-[#eee] px-6 py-4 hover:bg-[#fffdf5]">
                <div className="w-[30%] flex flex-col">
                  <span className="text-[#000]">{item.instituicao}</span>
                  <span className="text-xs text-[#000]">{item.local}</span>
                </div>
                <div className="w-[15%] flex flex-col text-[#000]">
                  {item.data}
                  <span className="text-xs text-[#555]">{item.hora}</span>
                </div>
                <span className="w-[10%] text-[#000]">{item.alunos}</span>
                <div className="w-[20%] flex flex-col">
                  <span>{item.coordenador}</span>
                  <span className="text-xs text-[#000]">{item.contato}</span>
                </div>
                <span className="w-[15%] text-[#000]">{item.infra}</span>
                <div className="w-[10%] flex justify-end">
                  <span className={`px-3 py-1 rounded text-xs font-bold ${statusStyle(item.status)}`}>{item.status}</span>
                </div>
              </div>
            )) : (
              <p className="text-center text-[#999] py-8 text-sm">Nenhum resultado encontrado.</p>
            )}
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}