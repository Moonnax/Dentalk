import { ChevronDown, Search } from "lucide-react";
import HeaderFuncionario from "../../components/HeaderFuncionario/HeaderFuncionario";
import Footer from "../../components/Footer/Footer";

export default function FacoesEscola() {
  const dados = [
    {
      instituicao: "Escola Estadual Anita Garibaldi",
      local: "São Paulo - Zona Sul",
      data: "15/10/2026",
      hora: "09:00",
      alunos: 95,
      coordenador: "Juliana Martins",
      contato: "(11) 91234-5678",
      infra: "Completa",
      status: "Aprovar",
    },
    {
      instituicao: "Escola Municipal Paulo Freire",
      local: "Guarulhos - Centro",
      data: "18/10/2026",
      hora: "14:00",
      alunos: 140,
      coordenador: "Roberto Nunes",
      contato: "(11) 93456-7890",
      infra: "Pendente",
      status: "Pendente",
    },
    {
      instituicao: "Centro Educacional Horizonte",
      local: "Osasco - Zona Oeste",
      data: "15/04/2026",
      hora: "13:00",
      alunos: 180,
      coordenador: "Fernanda Lopes",
      contato: "(11) 99876-5432",
      infra: "Completa",
      status: "Confirmada",
    },
    {
      instituicao: "Projeto Jovem Futuro",
      local: "São Paulo - Zona Leste",
      data: "20/03/2026",
      hora: "09:30",
      alunos: 110,
      coordenador: "Carlos Eduardo",
      contato: "(11) 95555-2222",
      infra: "Completa",
      status: "Concluída",
    },
  ];

  const statusStyle = (status: string) => {
    switch (status) {
      case "Aprovar":
        return "bg-[#c4d600] text-black";

      case "Pendente":
        return "bg-[#efe2b0] text-[#8b6b00]";

      case "Confirmada":
        return "bg-[#d9eef9] text-[#0b6b94]";

      case "Concluída":
        return "bg-[#ececec] text-[#555]";

      default:
        return "bg-gray-200";
    }
  };

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

              {["Data", "Canal"].map((item) => (
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

          {[
            { label: "Todas", count: 197 },
            { label: "Concluídas", count: 46 },
            { label: "Aprovar", count: 15 },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 rounded-full border border-[#e0e0e0] bg-[#f2f2f2] px-5 py-2 text-sm font-medium text-[#333] transition hover:border-[#f1c40f] hover:bg-white hover:text-black hover:shadow-sm"
            >
              {item.label}

              <span className="rounded border border-[#ddd] px-2 py-1 text-xs font-bold text-black">
                {item.count}
              </span>
            </div>
          ))}

        </section>

        <section>

          <div className="border border-[#eee] rounded-xl overflow-hidden flex flex-col">

            <div className="overflow-x-auto">
              <div className="min-w-[980px]">

                <div className="flex items-center px-4 [@media(min-width:992px)]:px-6 py-4 bg-[#fafafa] border-b-2 border-[#eee]">

                  <span className="w-[30%] font-bold text-black text-sm [@media(min-width:992px)]:text-base">
                    Instituição
                  </span>

                  <span className="w-[15%] font-bold text-black text-sm [@media(min-width:992px)]:text-base">
                    Data
                  </span>

                  <span className="w-[10%] font-bold text-black text-sm [@media(min-width:992px)]:text-base">
                    Alunos
                  </span>

                  <span className="w-[20%] font-bold text-black text-sm [@media(min-width:992px)]:text-base">
                    Coordenador
                  </span>

                  <span className="w-[15%] font-bold text-black text-sm [@media(min-width:992px)]:text-base">
                    Infra
                  </span>

                  <span className="w-[10%] text-right font-bold text-black text-sm [@media(min-width:992px)]:text-base">
                    Situação
                  </span>

                </div>

                {dados.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center px-4 [@media(min-width:992px)]:px-6 py-4 border-b border-[#f5f5f5] hover:bg-[#fffdf5]"
                  >

                    <div className="w-[30%] flex flex-col">
                      <span className="text-[#000] text-sm [@media(min-width:992px)]:text-base">
                        {item.instituicao}
                      </span>

                      <span className="text-xs text-[#555]">
                        {item.local}
                      </span>
                    </div>

                    <div className="w-[15%] flex flex-col text-[#000] text-sm [@media(min-width:992px)]:text-base">
                      {item.data}

                      <span className="text-xs text-[#555]">
                        {item.hora}
                      </span>
                    </div>

                    <span className="w-[10%] text-[#000] text-sm [@media(min-width:992px)]:text-base">
                      {item.alunos}
                    </span>

                    <div className="w-[20%] flex flex-col">
                      <span className="text-sm [@media(min-width:992px)]:text-base">
                        {item.coordenador}
                      </span>

                      <span className="text-xs text-[#555]">
                        {item.contato}
                      </span>
                    </div>

                    <span className="w-[15%] text-[#000] text-sm [@media(min-width:992px)]:text-base">
                      {item.infra}
                    </span>

                    <div className="w-[10%] flex justify-end">
                      <span
                        className={`px-3 py-1 rounded text-xs font-bold whitespace-nowrap ${statusStyle(item.status)}`}
                      >
                        {item.status}
                      </span>
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