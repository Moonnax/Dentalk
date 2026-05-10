import { ChevronDown, Search } from "lucide-react";
import HeaderFuncionario from "../../components/HeaderFuncionario/HeaderFuncionario";
import Footer from "../../components/Footer/Footer";

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
    <div>
      <HeaderFuncionario />

      <main className="font-[Arial] text-[#010817] px-4 py-6 md:px-6 md:py-6 [@media(min-width:992px)]:mx-12 [@media(min-width:992px)]:my-[2rem] [@media(min-width:992px)]:px-0">

        <section className="flex flex-col [@media(min-width:992px)]:flex-row [@media(min-width:992px)]:justify-between gap-4 mb-[30px]">

          <div className="w-full">

            <div className="flex items-center gap-[15px] border border-[#eee] px-5 py-3 rounded-lg text-[#999] w-full [@media(min-width:992px)]:max-w-[600px] mb-5 bg-white">
              <Search size={18} />
              <p className="text-sm [@media(min-width:992px)]:text-base">
                Filtrar solicitações...
              </p>
            </div>

            <div className="flex flex-wrap gap-3">

              {["Prioridade", "Região", "Canal"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-6 border border-[#eee] px-4 py-2 rounded-lg cursor-pointer bg-white hover:border-[#c4d600]"
                >
                  <span className="text-sm [@media(min-width:992px)]:text-base">
                    {item}
                  </span>

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

          <div className="border border-[#eee] rounded-xl overflow-hidden flex flex-col">

            <div className="overflow-x-auto">
              <div className="min-w-[850px]">

                <div className="flex items-center px-4 [@media(min-width:992px)]:px-6 py-4 bg-[#fafafa] border-b-2 border-[#eee]">

                  <span className="w-[25%] font-bold text-black text-sm [@media(min-width:992px)]:text-base">
                    Nome
                  </span>

                  <span className="w-[25%] font-bold text-black text-sm [@media(min-width:992px)]:text-base">
                    Região
                  </span>

                  <span className="w-[15%] font-bold text-black text-sm [@media(min-width:992px)]:text-base">
                    Prioridade
                  </span>

                  <span className="w-[15%] font-bold text-black text-sm [@media(min-width:992px)]:text-base">
                    Canal
                  </span>

                  <span className="w-[20%] text-right font-bold text-black text-sm [@media(min-width:992px)]:text-base">
                    Ações
                  </span>

                </div>

                {solicitacoes.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center px-4 [@media(min-width:992px)]:px-6 py-4 border-b border-[#f5f5f5] hover:bg-[#fffdf5]"
                  >

                    <span className="w-[25%] text-[#555] text-sm [@media(min-width:992px)]:text-base">
                      {item.nome}
                    </span>

                    <span className="w-[25%] text-[#555] text-sm [@media(min-width:992px)]:text-base">
                      {item.regiao}
                    </span>

                    <div className="w-[15%] flex justify-start">

                      <button className="flex items-center gap-1 rounded border border-[#ddd] bg-white px-2 py-1 text-xs text-[#010817] hover:border-[#c4d600] transition">
                        {item.prioridade}
                        <ChevronDown size={14} />
                      </button>

                    </div>

                    <span className="w-[15%] text-[#555] text-sm [@media(min-width:992px)]:text-base">
                      {item.canal}
                    </span>

                    <div className="flex w-[20%] justify-end gap-2">

                      <button className="rounded bg-[#c4d600] px-3 py-2 text-xs font-bold text-black hover:bg-[#f1c40f] transition whitespace-nowrap">
                        Contato
                      </button>

                      <button className="rounded bg-[#ffe5e5] px-3 py-2 text-xs font-bold text-[#b85b5b] hover:bg-[#ffd6d6] transition whitespace-nowrap">
                        Rejeitar
                      </button>

                    </div>

                  </div>
                ))}

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