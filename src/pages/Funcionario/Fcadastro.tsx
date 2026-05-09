import { ChevronDown, Plus, Search } from "lucide-react";
import HeaderFuncionario from "../../components/HeaderFuncionario/HeaderFuncionario";
import Footer from "../../components/Footer/Footer";

export default function CadastroF() {
  const usuarios = [
    {
      nome: "Amanda Ribeiro Costa",
      idade: "24 anos",
      status: "Ativo",
      categoria: "Funcionário",
    },
    {
      nome: "Gabriel Henrique Souza",
      idade: "19 anos",
      status: "Encaminhado",
      categoria: "Beneficiário",
    },
    {
      nome: "Larissa Mendes Oliveira",
      idade: "33 anos",
      status: "Atendimento",
      categoria: "Beneficiário",
    },
    {
      nome: "Camila Rocha Alves",
      idade: "41 anos",
      status: "Finalizado",
      categoria: "Beneficiário",
    },
    {
      nome: "Eduardo Martins Ferreira",
      idade: "38 anos",
      status: "Ativo",
      categoria: "Funcionário",
    },
  ];

  return (
    <div className="page-container">
      <HeaderFuncionario />

      <main className="mx-12 my-[2rem] font-[Arial] text-[#010817]">

        <section className="flex justify-between gap-5 mb-[30px]">

          <div className="w-full">

            <div className="flex items-center gap-[15px] border border-[#eee] px-5 py-3 rounded-lg text-[#999] max-w-[600px] mb-5 bg-white">
              <Search size={18} />
              <p>Pesquisar cpf ou nome...</p>
            </div>

            <div className="flex flex-wrap gap-[15px] mb-[20px]">

              <div className="flex items-center gap-[40px] border border-[#eee] px-4 py-2 rounded-lg cursor-pointer bg-white hover:border-[#c4d600]">
                <span>Categoria</span>
                <ChevronDown size={18} />
              </div>

              <div className="flex items-center gap-[40px] border border-[#eee] px-4 py-2 rounded-lg cursor-pointer bg-white hover:border-[#c4d600]">
                <span>Status</span>
                <ChevronDown size={18} />
              </div>

              <div className="flex items-center gap-[40px] border border-[#eee] px-4 py-2 rounded-lg cursor-pointer bg-white hover:border-[#c4d600]">
                <span>Idade</span>
                <ChevronDown size={18} />
              </div>

            </div>

          </div>

          <button className="flex h-[50px] cursor-pointer items-center gap-[10px] whitespace-nowrap rounded-lg bg-[var(--laranja)] px-6 text-[0.95rem] font-bold text-white hover:bg-[#e57d05]">
            <Plus size={18} />Novo Cadastro
          </button>

        </section>

        <section className="flex gap-3 mb-[25px] flex-wrap">

          <button className="flex items-center gap-2 border border-[#eee] px-3 py-2 rounded-lg bg-white text-[#555] cursor-pointer">
            Todos
            <span className="px-2 py-1 rounded bg-[#f2f2f2] text-xs font-bold">284</span>
          </button>

          <button className="flex items-center gap-2 border border-[#eee] px-3 py-2 rounded-lg bg-white text-[#555] cursor-pointer">
            Voluntários
            <span className="px-2 py-1 rounded bg-[#c4d600] text-black text-xs font-bold">100</span>
          </button>

          <button className="flex items-center gap-2 border border-[#eee] px-3 py-2 rounded-lg bg-white text-[#555] cursor-pointer">
            Beneficiários
            <span className="px-2 py-1 rounded bg-[#dff3ff] text-[#006494] text-xs font-bold">184</span>
          </button>

        </section>

        <section>

          <div className="border border-[#eee] rounded-xl overflow-hidden flex flex-col">

            <div className="flex items-center px-6 py-4 bg-[#fafafa] border-b-2 border-[#eee]">

              <span className="w-[30%] font-bold text-black">Nome</span>
              <span className="w-[20%] font-bold text-black">Idade</span>
              <span className="w-[20%] font-bold text-black">Status</span>
              <span className="w-[20%] font-bold text-black">Categoria</span>
              <span className="w-[10%] font-bold text-black">Detalhes</span>

            </div>

            {usuarios.map((usuario, index) => (
              <div
                key={index}
                className="flex items-center px-6 py-4 border-b border-[#f5f5f5] hover:bg-[#fffdf5]"
              >

                <span className="w-[30%] text-[#555]">
                  {usuario.nome}
                </span>

                <span className="w-[20%] text-[#555]">
                  {usuario.idade}
                </span>

                <span className="w-[20%] text-[#555]">
                  {usuario.status}
                </span>

                <span className="w-[20%] text-[#555]">
                  {usuario.categoria}
                </span>

                <span className="w-[10%] flex justify-center">
                  <button className="text-blue-400 px-3 py-1 rounded text-sm font-bold hover:text-blue-700 mr-[115px]">
                    Abrir
                  </button>
                </span>

              </div>
            ))}

          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}