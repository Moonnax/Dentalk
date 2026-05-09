import { ChevronDown, Search } from "lucide-react";
import HeaderFuncionario from "../../../components/HeaderFuncionario/HeaderFuncionario";
import Footer from "../../../components/Footer/Footer";

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

              {["Data", "Canal"].map((item) => (
                <div
                  key={item}
                  className="flex cursor-pointer items-center gap-[40px] rounded-lg border border-[#eee] bg-white px-4 py-2 text-[#010817] hover:border-[#c4d600]"
                >
                  <span>{item}</span>
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

          <div className="flex flex-col overflow-hidden rounded-xl border border-[#eee] bg-white">

            <div className="flex border-b-2 border-[#eee] bg-[#fafafa] px-6 py-4 font-bold text-[#010817]">

              <span className="w-[30%]">Instituição</span>
              <span className="w-[15%]">Data</span>
              <span className="w-[10%]">Alunos</span>
              <span className="w-[20%]">Coordenador</span>
              <span className="w-[15%]">Infra</span>
              <span className="w-[10%] text-right">Situação</span>

            </div>

            {dados.map((item, index) => (
              <div
                key={index}
                className="flex items-center border-b border-[#eee] px-6 py-4 hover:bg-[#fffdf5]"
              >

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
                  <span className={`px-3 py-1 rounded text-xs font-bold ${statusStyle(item.status)}`}>
                    {item.status}
                  </span>
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