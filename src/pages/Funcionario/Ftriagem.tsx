import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import HeaderFuncionario from "../../components/HeaderFuncionario/HeaderFuncionario";
import Footer from "../../components/Footer/Footer";

type FiltroTab = "Solicitações" | "A encaminhar" | "Encaminhados" | "Rejeitados";

const solicitacoes = [
  { nome: "Rafael Souza Lima", regiao: "São Paulo - ZN", prioridade: "Média", canal: "Ação Esc.", tab: "Solicitações" as FiltroTab },
  { nome: "Mariana Costa Fernandes", regiao: "Rio de Janeiro - ZS", prioridade: "Baixa", canal: "Instagram", tab: "Solicitações" as FiltroTab },
  { nome: "Bruno Henrique Alves", regiao: "Belo Horizonte - Centro", prioridade: "Alta", canal: "Site", tab: "A encaminhar" as FiltroTab },
  { nome: "Carla Mendes Ribeiro", regiao: "Curitiba - Batel", prioridade: "Alta", canal: "Ação Esc.", tab: "Encaminhados" as FiltroTab },
  { nome: "Felipe Rocha Martins", regiao: "Porto Alegre - Sul", prioridade: "Média", canal: "WhatsApp", tab: "Rejeitados" as FiltroTab },
  { nome: "Juliana Pereira Santos", regiao: "Salvador - Centro", prioridade: "Baixa", canal: "Instagram", tab: "Solicitações" as FiltroTab },
];

export default function TriagemF() {
  const [busca, setBusca] = useState("");
  const [filtroPrioridade, setFiltroPrioridade] = useState("");
  const [filtroRegiao, setFiltroRegiao] = useState("");
  const [filtroCanal, setFiltroCanal] = useState("");
  const [tabAtiva, setTabAtiva] = useState<FiltroTab>("Solicitações");

  const filtrados = solicitacoes.filter((s) => {
    const matchTab = s.tab === tabAtiva;
    const matchBusca = !busca || s.nome.toLowerCase().includes(busca.toLowerCase());
    const matchPrioridade = !filtroPrioridade || s.prioridade === filtroPrioridade;
    const matchRegiao = !filtroRegiao || s.regiao === filtroRegiao;
    const matchCanal = !filtroCanal || s.canal === filtroCanal;
    return matchTab && matchBusca && matchPrioridade && matchRegiao && matchCanal;
  });

  const tabs: { label: FiltroTab; count: number }[] = [
    { label: "Solicitações", count: solicitacoes.filter((s) => s.tab === "Solicitações").length },
    { label: "A encaminhar", count: solicitacoes.filter((s) => s.tab === "A encaminhar").length },
    { label: "Encaminhados", count: solicitacoes.filter((s) => s.tab === "Encaminhados").length },
    { label: "Rejeitados", count: solicitacoes.filter((s) => s.tab === "Rejeitados").length },
  ];

  const filtros = [
    { label: "Prioridade", value: filtroPrioridade, set: setFiltroPrioridade, options: ["Alta", "Média", "Baixa"] },
    { label: "Região", value: filtroRegiao, set: setFiltroRegiao, options: ["São Paulo - ZN", "Rio de Janeiro - ZS", "Belo Horizonte - Centro", "Curitiba - Batel", "Porto Alegre - Sul", "Salvador - Centro"] },
    { label: "Canal", value: filtroCanal, set: setFiltroCanal, options: ["Ação Esc.", "Instagram", "Site", "WhatsApp"] },
  ];

  return (
    <div>
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
                placeholder="Filtrar solicitações..."
                className="w-full bg-transparent outline-none text-[#333] placeholder-[#999] text-sm [@media(min-width:992px)]:text-base"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              {filtros.map((f) => (
                <div key={f.label} className="relative">
                  <select
                    value={f.value}
                    onChange={(e) => f.set(e.target.value)}
                    className="appearance-none cursor-pointer rounded-lg border border-[#eee] bg-white pl-4 pr-10 py-2 text-sm [@media(min-width:992px)]:text-base text-[#010817] outline-none hover:border-[#c4d600]"
                  >
                    <option value="">{f.label}</option>
                    {f.options.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                  <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              ))}
            </div>

          </div>
        </section>

        <section className="mb-[25px] flex flex-wrap gap-[15px]">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setTabAtiva(tab.label)}
              className={`flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium transition hover:shadow-sm ${
                tabAtiva === tab.label
                  ? "border-[#f1c40f] bg-white text-black shadow-sm"
                  : "border-[#e0e0e0] bg-[#f2f2f2] text-[#333] hover:border-[#f1c40f] hover:bg-white hover:text-black"
              }`}
            >
              {tab.label}
              <span className="rounded border border-[#ddd] px-2 py-1 text-xs font-bold text-black">
                {tab.count}
              </span>
            </button>
          ))}
        </section>

        <section>
          <div className="border border-[#eee] rounded-xl overflow-hidden flex flex-col">
            <div className="overflow-x-auto">
              <div className="min-w-[850px]">

                <div className="flex items-center px-4 [@media(min-width:992px)]:px-6 py-4 bg-[#fafafa] border-b-2 border-[#eee]">
                  <span className="w-[25%] font-bold text-black text-sm [@media(min-width:992px)]:text-base">Nome</span>
                  <span className="w-[25%] font-bold text-black text-sm [@media(min-width:992px)]:text-base">Região</span>
                  <span className="w-[15%] font-bold text-black text-sm [@media(min-width:992px)]:text-base">Prioridade</span>
                  <span className="w-[15%] font-bold text-black text-sm [@media(min-width:992px)]:text-base">Canal</span>
                  <span className="w-[20%] text-right font-bold text-black text-sm [@media(min-width:992px)]:text-base">Ações</span>
                </div>

                {filtrados.length > 0 ? filtrados.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center px-4 [@media(min-width:992px)]:px-6 py-4 border-b border-[#f5f5f5] hover:bg-[#fffdf5]"
                  >
                    <span className="w-[25%] text-[#555] text-sm [@media(min-width:992px)]:text-base">{item.nome}</span>
                    <span className="w-[25%] text-[#555] text-sm [@media(min-width:992px)]:text-base">{item.regiao}</span>
                    <div className="w-[15%] flex justify-start">
                      <button className="flex items-center gap-1 rounded border border-[#ddd] bg-white px-2 py-1 text-xs text-[#010817] hover:border-[#c4d600] transition">
                        {item.prioridade}
                        <ChevronDown size={14} />
                      </button>
                    </div>
                    <span className="w-[15%] text-[#555] text-sm [@media(min-width:992px)]:text-base">{item.canal}</span>
                    <div className="flex w-[20%] justify-end gap-2">
                      <button className="rounded bg-[#c4d600] px-3 py-2 text-xs font-bold text-black hover:bg-[#f1c40f] transition whitespace-nowrap">Contato</button>
                      <button className="rounded bg-[#ffe5e5] px-3 py-2 text-xs font-bold text-[#b85b5b] hover:bg-[#ffd6d6] transition whitespace-nowrap">Rejeitar</button>
                    </div>
                  </div>
                )) : (
                  <p className="text-center text-[#999] py-8 text-sm">Nenhum resultado nesta categoria.</p>
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