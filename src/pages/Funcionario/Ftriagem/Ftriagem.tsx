import { ChevronDown, Search } from "lucide-react";
import HeaderFuncionario from "../../../components/HeaderFuncionario/HeaderFuncionario";
import Footer from "../../../components/Footer/Footer";

export default function TriagemF() {
  const solicitacoes = [
    { nome: "Rafael Souza Lima", regiao: "São Paulo - ZN", prioridade: "Média", canal: "Ação Esc." },
    { nome: "Mariana Costa Fernandes", regiao: "Rio de Janeiro - ZS", prioridade: "Baixa", canal: "Instagram" },
    { nome: "Bruno Henrique Alves", regiao: "Belo Horizonte - Centro", prioridade: "Alta", canal: "Site" },
    { nome: "Carla Mendes Ribeiro", regiao: "Curitiba - Batel", prioridade: "Alta", canal: "Ação Esc." },
    { nome: "Felipe Rocha Martins", regiao: "Porto Alegre - Sul", prioridade: "Média", canal: "WhatsApp" },
    { nome: "Juliana Pereira Santos", regiao: "Salvador - Centro", prioridade: "Baixa", canal: "Instagram" },
  ];



  return (
    <div className="flex min-h-screen flex-col font-sans text-[#010817]">

      <HeaderFuncionario />

      <main className="flex-1 mx-[3rem] my-[2rem]">

        <section className="mb-[30px] flex items-start justify-between gap-5">

          <div className="w-full">

            <div className="flex items-center gap-[15px] border border-[#eee] px-5 py-3 rounded-lg text-[#999] max-w-[600px] mb-5 bg-white">
              <Search size={18} />
              <p>Filtrar solicitações...</p>
            </div>

            <div className="flex flex-wrap gap-[15px]">

              {["Prioridade", "Região", "Canal"].map((item) => (
                <div
                  key={item}
                  className="flex cursor-pointer items-center gap-[40px] rounded-lg border border-[#eee] bg-white px-4 py-2 text-[#010817] transition hover:border-[#c4d600]"
                >
                  <span>{item}</span>
                  <ChevronDown size={18} />
                </div>
              ))}

            </div>

          </div>

        </section>
        <section className="mb-[25px] flex flex-wrap gap-[15px]">

          <button className="flex items-center gap-2 rounded-full border border-[#e0e0e0] bg-[#f2f2f2] px-5 py-2 text-sm font-medium text-[#333] transition hover:border-[#f1c40f] hover:bg-white hover:text-black hover:shadow-sm">
            Solicitações
            <span className="rounded border border-[#ddd] px-2 py-1 text-xs font-bold text-black">
              197
            </span>
          </button>

          <button className="flex items-center gap-2 rounded-full border border-[#e0e0e0] bg-[#f2f2f2] px-5 py-2 text-sm font-medium text-[#333] transition hover:border-[#f1c40f] hover:bg-white hover:text-black hover:shadow-sm">
            A encaminhar
            <span className="rounded border border-[#ddd] px-2 py-1 text-xs font-bold text-black">
              51
            </span>
          </button>

          <button className="flex items-center gap-2 rounded-full border border-[#e0e0e0] bg-[#f2f2f2] px-5 py-2 text-sm font-medium text-[#333] transition hover:border-[#f1c40f] hover:bg-white hover:shadow-sm">
            Encaminhados
            <span className="rounded border border-[#ddd] px-2 py-1 text-xs font-bold text-black">
              821
            </span>
          </button>

          <button className="flex items-center gap-2 rounded-full border border-[#e0e0e0] bg-[#f2f2f2] px-5 py-2 text-sm font-medium text-[#333] transition hover:border-[#f1c40f] hover:bg-white hover:text-black hover:shadow-sm">
            Rejeitados
            <span className="rounded border border-[#ddd] px-2 py-1 text-xs font-bold text-black">
              46
            </span>
          </button>

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

            {solicitacoes.map((item, index) => (
              <div
                key={index}
                className="flex items-center border-b border-[#eee] px-6 py-4 transition hover:bg-[#fffdf5]"
              >

                <span className="w-[25%] text-[#010817]">{item.nome}</span>
                <span className="w-[25%] text-[#010817]">{item.regiao}</span>

                <div className="w-[15%] flex justify-start">
                  <button className="flex items-center gap-1 rounded border border-[#ddd] bg-white px-2 py-1 text-xs text-[#010817] hover:border-[#c4d600] transition">
                    {item.prioridade}
                    <ChevronDown size={14} />
                  </button>
                </div>

                <span className="w-[15%] text-[#010817]">{item.canal}</span>

                <div className="flex w-[20%] justify-end gap-2">

                  <button className="rounded bg-[#c4d600] px-3 py-2 text-xs font-bold text-black hover:bg-[#f1c40f] transition">
                    Contato
                  </button>

                  <button className="rounded bg-[#ffe5e5] px-3 py-2 text-xs font-bold text-[#b85b5b] hover:bg-[#ffd6d6] transition">
                    Rejeitar
                  </button>

                </div>

              </div>
            ))}

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}