import { ChevronDown, Plus, Search } from "lucide-react";
import HeaderFuncionario from "../../components/HeaderFuncionario/HeaderFuncionario";
import Footer from "../../components/Footer/Footer";

export default function CadastroF() {
  const usuarios = [
    { nome: "Amanda Ribeiro Costa", idade: "24 anos", status: "Ativo", categoria: "Voluntário" },
    { nome: "Gabriel Henrique Souza", idade: "19 anos", status: "Encaminhado", categoria: "Beneficiário" },
    { nome: "Larissa Mendes Oliveira", idade: "33 anos", status: "Atendimento", categoria: "Beneficiário" },
    { nome: "Camila Rocha Alves", idade: "41 anos", status: "Finalizado", categoria: "Beneficiário" },
    { nome: "Eduardo Martins Ferreira", idade: "38 anos", status: "Ativo", categoria: "Voluntário" },
  ];

  return (
    <div>
      <HeaderFuncionario />

      <main className="font-[Arial] text-[#010817] px-4 py-6 md:px-6 md:py-6 [@media(min-width:992px)]:mx-12 [@media(min-width:992px)]:my-[2rem] [@media(min-width:992px)]:px-0">

        <section className="flex flex-col [@media(min-width:992px)]:flex-row [@media(min-width:992px)]:justify-between gap-4 mb-[30px]">

          <div className="w-full">

            <div className="flex items-center gap-[15px] border border-[#eee] px-5 py-3 rounded-lg text-[#999] w-full [@media(min-width:992px)]:max-w-[600px] mb-5 bg-white">
              <Search size={18} />
              <p className="text-sm [@media(min-width:992px)]:text-base">Pesquisar cpf ou nome...</p>
            </div>

            <div className="flex flex-wrap gap-3 mb-[20px]">
              <div className="flex items-center gap-6 border border-[#eee] px-4 py-2 rounded-lg cursor-pointer bg-white hover:border-[#c4d600]">
                <span className="text-sm [@media(min-width:992px)]:text-base">Categoria</span>
                <ChevronDown size={18} />
              </div>
              <div className="flex items-center gap-6 border border-[#eee] px-4 py-2 rounded-lg cursor-pointer bg-white hover:border-[#c4d600]">
                <span className="text-sm [@media(min-width:992px)]:text-base">Status</span>
                <ChevronDown size={18} />
              </div>
              <div className="flex items-center gap-6 border border-[#eee] px-4 py-2 rounded-lg cursor-pointer bg-white hover:border-[#c4d600]">
                <span className="text-sm [@media(min-width:992px)]:text-base">Idade</span>
                <ChevronDown size={18} />
              </div>
            </div>

          </div>

          <button className="
            flex items-center justify-center gap-[10px] rounded-lg bg-[var(--laranja)]
            px-6 text-[0.95rem] font-bold text-white hover:bg-[#e57d05] cursor-pointer
            h-[50px] w-full
            [@media(min-width:992px)]:w-auto [@media(min-width:992px)]:whitespace-nowrap [@media(min-width:992px)]:self-start
          ">
            <Plus size={18} /> Novo Cadastro
          </button>

        </section>

        <section className="mb-[25px] flex flex-wrap gap-[15px]">
          <button className="flex items-center gap-2 rounded-full border border-[#e0e0e0] bg-[#f2f2f2] px-5 py-2 text-sm font-medium text-[#333] transition hover:border-[#f1c40f] hover:bg-white hover:text-black hover:shadow-sm">
            Todos
            <span className="rounded border border-[#ddd] px-2 py-1 text-xs font-bold text-black">5</span>
          </button>
          <button className="flex items-center gap-2 rounded-full border border-[#e0e0e0] bg-[#f2f2f2] px-5 py-2 text-sm font-medium text-[#333] transition hover:border-[#f1c40f] hover:bg-white hover:text-black hover:shadow-sm">
            Voluntários
            <span className="rounded border border-[#ddd] px-2 py-1 text-xs font-bold text-black">2</span>
          </button>
          <button className="flex items-center gap-2 rounded-full border border-[#e0e0e0] bg-[#f2f2f2] px-5 py-2 text-sm font-medium text-[#333] transition hover:border-[#f1c40f] hover:bg-white hover:text-black hover:shadow-sm">
            Beneficiários
            <span className="rounded border border-[#ddd] px-2 py-1 text-xs font-bold text-black">3</span>
          </button>
        </section>

        <section>
          <div className="border border-[#eee] rounded-xl overflow-hidden flex flex-col">

            <div className="overflow-x-auto">
              <div className="min-w-[480px]">

                <div className="flex items-center px-4 [@media(min-width:992px)]:px-6 py-4 bg-[#fafafa] border-b-2 border-[#eee]">
                  <span className="w-[35%] [@media(min-width:992px)]:w-[30%] font-bold text-black text-sm [@media(min-width:992px)]:text-base">Nome</span>
                  <span className="w-[15%] [@media(min-width:992px)]:w-[20%] font-bold text-black text-sm [@media(min-width:992px)]:text-base">Idade</span>
                  <span className="w-[20%] font-bold text-black text-sm [@media(min-width:992px)]:text-base">Status</span>
                  <span className="w-[20%] font-bold text-black text-sm [@media(min-width:992px)]:text-base">Categoria</span>
                  <span className="w-[10%] font-bold text-black text-sm [@media(min-width:992px)]:text-base">Detalhes</span>
                </div>

                {usuarios.map((usuario, index) => (
                  <div
                    key={index}
                    className="flex items-center px-4 [@media(min-width:992px)]:px-6 py-4 border-b border-[#f5f5f5] hover:bg-[#fffdf5]"
                  >
                    <span className="w-[35%] [@media(min-width:992px)]:w-[30%] text-[#555] text-sm [@media(min-width:992px)]:text-base">{usuario.nome}</span>
                    <span className="w-[15%] [@media(min-width:992px)]:w-[20%] text-[#555] text-sm [@media(min-width:992px)]:text-base">{usuario.idade}</span>
                    <span className="w-[20%] text-[#555] text-sm [@media(min-width:992px)]:text-base">{usuario.status}</span>
                    <span className="w-[20%] text-[#555] text-sm [@media(min-width:992px)]:text-base">{usuario.categoria}</span>
                    <span className="w-[10%] flex justify-center">
                      <button className="text-blue-400 px-2 py-1 rounded text-sm font-bold hover:text-blue-700">
                        Abrir
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