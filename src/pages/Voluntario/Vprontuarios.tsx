import { ChevronDown, Search } from "lucide-react";
import HeaderVoluntario from "../../components/HeaderVoluntario/HeaderVoluntario";
import Footer from "../../components/Footer/Footer";

export default function Prontuario() {
  const pacientes = [
    { nome: "João Silva", cpf: "468.895.568-33", idade: "32 anos", ultimoAtendimento: "23/08/25" },
    { nome: "Caroline Ferreira Pereira", cpf: "123.456.789-00", idade: "28 anos", ultimoAtendimento: "20/08/25" },
    { nome: "Marcos Oliveira", cpf: "987.654.321-11", idade: "45 anos", ultimoAtendimento: "15/08/25" },
    { nome: "Ana Beatriz Santos", cpf: "456.123.789-55", idade: "19 anos", ultimoAtendimento: "10/08/25" },
    { nome: "Roberto Cavalcante", cpf: "333.222.111-99", idade: "50 anos", ultimoAtendimento: "05/08/25" },
  ];

  return (
    <div className="font-[Arial] text-[#010817] flex flex-col min-h-screen">
      <HeaderVoluntario />

      <main className="flex-1 mx-4 my-4 sm:mx-8 sm:my-6 [@media(min-width:992px)]:mx-12 [@media(min-width:992px)]:my-8">

        <section className="mb-[30px]">
          <div className="flex items-center gap-[15px] border border-[#eee] px-5 py-3 rounded-lg text-[#999] w-full [@media(min-width:992px)]:max-w-[600px] mb-5 bg-white">
            <Search size={18} />
            <p className="text-sm [@media(min-width:992px)]:text-base">Pesquisar cpf ou nome...</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-6 [@media(min-width:480px)]:gap-10 border border-[#eee] px-4 py-2 rounded-lg cursor-pointer bg-white hover:border-[#f1c40f]">
              <span className="text-sm [@media(min-width:992px)]:text-base">Último Atendimento</span>
              <ChevronDown size={18} />
            </div>
            <div className="flex items-center gap-6 [@media(min-width:480px)]:gap-10 border border-[#eee] px-4 py-2 rounded-lg cursor-pointer bg-white hover:border-[#f1c40f]">
              <span className="text-sm [@media(min-width:992px)]:text-base">Idade</span>
              <ChevronDown size={18} />
            </div>
          </div>
        </section>

        <section>
          {/* ── MOBILE: cards ── */}
          <div className="flex flex-col gap-3 [@media(min-width:992px)]:hidden">
            {pacientes.map((paciente, index) => (
              <div
                key={index}
                className="bg-white border border-[#eee] rounded-xl px-4 py-4 flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="font-bold text-[#010817] text-sm leading-snug">{paciente.nome}</span>
                </div>

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

                <button className="w-full bg-[#c4d600] text-black py-2 rounded-md text-sm font-bold hover:bg-[#f1c40f] transition-colors">
                  Abrir Prontuário
                </button>
              </div>
            ))}
          </div>

          {/* ── DESKTOP: tabela ── */}
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

                {pacientes.map((paciente, index) => (
                  <div
                    key={index}
                    className={`flex items-center px-6 py-[15px] border-b border-[#f5f5f5] transition-colors hover:bg-[#fffdf5] ${index % 2 === 1 ? "bg-[#fcfcfc]" : "bg-white"}`}
                  >
                    <span className="w-[30%] font-medium text-[#010817] text-base">{paciente.nome}</span>
                    <span className="w-[22%] text-[#555] text-base">{paciente.cpf}</span>
                    <span className="w-[10%] text-[#555] text-base">{paciente.idade}</span>
                    <span className="w-[18%] text-[#555] text-base">{paciente.ultimoAtendimento}</span>
                    <span className="w-[20%] flex justify-end">
                      <button className="bg-[#c4d600] text-black px-[18px] py-2 rounded-md text-[0.85rem] font-bold cursor-pointer whitespace-nowrap hover:bg-[#f1c40f] transition-colors">
                        Abrir Prontuário
                      </button>
                    </span>
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