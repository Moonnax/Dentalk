import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import HeaderFuncionario from "../../components/HeaderFuncionario/HeaderFuncionario";
import Footer from "../../components/Footer/Footer";

export default function TriagemF() {
  const [busca, setBusca] = useState("");
  const [filtroPrioridade, setFiltroPrioridade] = useState("");
  const [filtroRegiao, setFiltroRegiao] = useState("");
  const [filtroCanal, setFiltroCanal] = useState("");

  const solicitacoes = [
    { nome: "Rafael Souza Lima", regiao: "São Paulo - ZN", prioridade: "Média", canal: "Ação Esc." },
    { nome: "Mariana Costa Fernandes", regiao: "Rio de Janeiro - ZS", prioridade: "Baixa", canal: "Instagram" },
    { nome: "Bruno Henrique Alves", regiao: "Belo Horizonte - Centro", prioridade: "Alta", canal: "Site" },
    { nome: "Carla Mendes Ribeiro", regiao: "Curitiba - Batel", prioridade: "Alta", canal: "Ação Esc." },
    { nome: "Felipe Rocha Martins", regiao: "Porto Alegre - Sul", prioridade: "Média", canal: "WhatsApp" },
    { nome: "Juliana Pereira Santos", regiao: "Salvador - Centro", prioridade: "Baixa", canal: "Instagram" },
  ];

  const filtrados = solicitacoes.filter((s) => {
    const matchBusca = !busca || s.nome.toLowerCase().includes(busca.toLowerCase());
    const matchPrioridade = !filtroPrioridade || s.prioridade === filtroPrioridade;
    const matchRegiao = !filtroRegiao || s.regiao === filtroRegiao;
    const matchCanal = !filtroCanal || s.canal === filtroCanal;
    return matchBusca && matchPrioridade && matchRegiao && matchCanal;
  });

  const filtros = [
    { label: "Prioridade", value: filtroPrioridade, set: setFiltroPrioridade, options: ["Alta", "Média", "Baixa"] },
    { label: "Região", value: filtroRegiao, set: setFiltroRegiao, options: ["São Paulo - ZN", "Rio de Janeiro - ZS", "Belo Horizonte - Centro", "Curitiba - Batel", "Porto Alegre - Sul", "Salvador - Centro"] },
    { label: "Canal", value: filtroCanal, set: setFiltroCanal, options: ["Ação Esc.", "Instagram", "Site", "WhatsApp"] },
  ];

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
                placeholder="Filtrar solicitações..."
                className="w-full bg-transparent outline-none text-[#333] placeholder-[#999]"
              />
            </div>

            <div className="flex flex-wrap gap-[15px]">
              {filtros.map((f) => (
                <div key={f.label} className="relative">
                  <select value={f.value} onChange={(e) => f.set(e.target.value)}
                    className="appearance-none cursor-pointer rounded-lg border border-[#eee] bg-white px-4 py-2 pr-10 text-[#010817] outline-none transition hover:border-[#c4d600]">
                    <option value="">{f.label}</option>
                    {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                  <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-[25px] flex flex-wrap gap-[15px]">
          {[
            { label: "Solicitações", count: 197 },
            { label: "A encaminhar", count: 51 },
            { label: "Encaminhados", count: 821 },
            { label: "Rejeitados", count: 46 },
          ].map((item) => (
            <button key={item.label} className="flex items-center gap-2 rounded-full border border-[#e0e0e0] bg-[#f2f2f2] px-5 py-2 text-sm font-medium text-[#333] transition hover:border-[#f1c40f] hover:bg-white hover:text-black hover:shadow-sm">
              {item.label}
              <span className="rounded border border-[#ddd] px-2 py-1 text-xs font-bold text-black">{item.count}</span>
            </button>
          ))}
        </section>

        <section>
          <div className="flex flex-col overflow-hidden rounded-xl border border-[#eee] bg-white">
            <div className="flex border-b-2 border-[#eee] bg-[#fafafa] px-6 py-4 font-bold text-[#010817]">
              <span className="w-[25%]">Nome</span>
              <span className="w-[25%]">Região</span>
              <span className="w-[15%]">Prioridade</span>
              <span className="w-[15%]">Canal</span>
              <span className="w-[20%] text-right">Ações</span>
            </div>

            {filtrados.length > 0 ? filtrados.map((item, index) => (
              <div key={index} className="flex items-center border-b border-[#eee] px-6 py-4 transition hover:bg-[#fffdf5]">
                <span className="w-[25%] text-[#010817]">{item.nome}</span>
                <span className="w-[25%] text-[#010817]">{item.regiao}</span>
                <div className="w-[15%] flex justify-start">
                  <button className="flex items-center gap-1 rounded border border-[#ddd] bg-white px-2 py-1 text-xs text-[#010817] hover:border-[#c4d600] transition">
                    {item.prioridade} <ChevronDown size={14} />
                  </button>
                </div>
                <span className="w-[15%] text-[#010817]">{item.canal}</span>
                <div className="flex w-[20%] justify-end gap-2">
                  <button className="rounded bg-[#c4d600] px-3 py-2 text-xs font-bold text-black hover:bg-[#f1c40f] transition">Contato</button>
                  <button className="rounded bg-[#ffe5e5] px-3 py-2 text-xs font-bold text-[#b85b5b] hover:bg-[#ffd6d6] transition">Rejeitar</button>
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