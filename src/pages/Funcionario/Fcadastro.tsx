import { useState } from "react";
import { ChevronDown, Plus, Search } from "lucide-react";
import HeaderFuncionario from "../../components/HeaderFuncionario/HeaderFuncionario";
import Footer from "../../components/Footer/Footer";

export default function CadastroF() {
  const [busca, setBusca] = useState("");
  const [filtroCategoria, setFiltroCategoria] = useState("");
  const [filtroStatus, setFiltroStatus] = useState("");
  const [filtroIdade, setFiltroIdade] = useState("");

  const usuarios = [
    { nome: "Amanda Ribeiro Costa", idade: "24 anos", status: "Ativo", categoria: "Voluntário" },
    { nome: "Gabriel Henrique Souza", idade: "19 anos", status: "Encaminhado", categoria: "Beneficiário" },
    { nome: "Larissa Mendes Oliveira", idade: "33 anos", status: "Atendimento", categoria: "Beneficiário" },
    { nome: "Camila Rocha Alves", idade: "41 anos", status: "Finalizado", categoria: "Beneficiário" },
    { nome: "Eduardo Martins Ferreira", idade: "38 anos", status: "Ativo", categoria: "Voluntário" },
  ];

  const getIdadeFaixa = (idadeStr: string) => {
    const n = parseInt(idadeStr);
    if (n <= 20) return "Até 20";
    if (n <= 30) return "21-30";
    if (n <= 40) return "31-40";
    return "41+";
  };

  const usuariosFiltrados = usuarios.filter((u) => {
    const termoBusca = busca.toLowerCase();
    const matchBusca = !busca || u.nome.toLowerCase().includes(termoBusca);
    const matchCategoria = !filtroCategoria || u.categoria === filtroCategoria;
    const matchStatus = !filtroStatus || u.status === filtroStatus;
    const matchIdade = !filtroIdade || getIdadeFaixa(u.idade) === filtroIdade;
    return matchBusca && matchCategoria && matchStatus && matchIdade;
  });

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
                placeholder="Pesquisar cpf ou nome..."
                className="w-full bg-transparent outline-none text-[#333] placeholder-[#999] text-sm [@media(min-width:992px)]:text-base"
              />
            </div>

            <div className="flex flex-wrap gap-3 mb-[20px]">
              <div className="relative">
                <select value={filtroCategoria} onChange={(e) => setFiltroCategoria(e.target.value)}
                  className="appearance-none border border-[#eee] px-4 py-2 pr-10 rounded-lg cursor-pointer bg-white hover:border-[#c4d600] outline-none text-sm text-[#010817]">
                  <option value="">Categoria</option>
                  <option value="Voluntário">Voluntário</option>
                  <option value="Beneficiário">Beneficiário</option>
                </select>
                <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              <div className="relative">
                <select value={filtroStatus} onChange={(e) => setFiltroStatus(e.target.value)}
                  className="appearance-none border border-[#eee] px-4 py-2 pr-10 rounded-lg cursor-pointer bg-white hover:border-[#c4d600] outline-none text-sm text-[#010817]">
                  <option value="">Status</option>
                  <option value="Ativo">Ativo</option>
                  <option value="Encaminhado">Encaminhado</option>
                  <option value="Atendimento">Atendimento</option>
                  <option value="Finalizado">Finalizado</option>
                </select>
                <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              <div className="relative">
                <select value={filtroIdade} onChange={(e) => setFiltroIdade(e.target.value)}
                  className="appearance-none border border-[#eee] px-4 py-2 pr-10 rounded-lg cursor-pointer bg-white hover:border-[#c4d600] outline-none text-sm text-[#010817]">
                  <option value="">Idade</option>
                  <option value="Até 20">Até 20 anos</option>
                  <option value="21-30">21–30 anos</option>
                  <option value="31-40">31–40 anos</option>
                  <option value="41+">41+ anos</option>
                </select>
                <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          <button className="flex items-center justify-center gap-[10px] rounded-lg bg-[var(--laranja)] px-6 text-[0.95rem] font-bold text-white hover:bg-[#e57d05] cursor-pointer h-[50px] w-full [@media(min-width:992px)]:w-auto [@media(min-width:992px)]:whitespace-nowrap [@media(min-width:992px)]:self-start">
            <Plus size={18} /> Novo Cadastro
          </button>
        </section>

        <section className="mb-[25px] flex flex-wrap gap-[15px]">
          {[
            { label: "Todos", count: usuarios.length, filtro: "" },
            { label: "Voluntários", count: usuarios.filter(u => u.categoria === "Voluntário").length, filtro: "Voluntário" },
            { label: "Beneficiários", count: usuarios.filter(u => u.categoria === "Beneficiário").length, filtro: "Beneficiário" },
          ].map((item) => (
            <button key={item.label}
              onClick={() => setFiltroCategoria(item.filtro)}
              className={`flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium transition hover:shadow-sm ${filtroCategoria === item.filtro ? "border-[#f1c40f] bg-white text-black shadow-sm" : "border-[#e0e0e0] bg-[#f2f2f2] text-[#333] hover:border-[#f1c40f] hover:bg-white hover:text-black"}`}>
              {item.label}
              <span className="rounded border border-[#ddd] px-2 py-1 text-xs font-bold text-black">{item.count}</span>
            </button>
          ))}
        </section>

        <section>
          <div className="border border-[#eee] rounded-xl overflow-hidden flex flex-col">
            <div className="overflow-x-auto">
              <div className="min-w-[480px]">
                <div className="flex items-center px-4 [@media(min-width:992px)]:px-6 py-4 bg-[#fafafa] border-b-2 border-[#eee]">
                  <span className="w-[35%] [@media(min-width:992px)]:w-[30%] font-bold text-black text-sm">Nome</span>
                  <span className="w-[15%] [@media(min-width:992px)]:w-[20%] font-bold text-black text-sm">Idade</span>
                  <span className="w-[20%] font-bold text-black text-sm">Status</span>
                  <span className="w-[20%] font-bold text-black text-sm">Categoria</span>
                  <span className="w-[10%] font-bold text-black text-sm">Detalhes</span>
                </div>

                {usuariosFiltrados.length > 0 ? usuariosFiltrados.map((usuario, index) => (
                  <div key={index} className="flex items-center px-4 [@media(min-width:992px)]:px-6 py-4 border-b border-[#f5f5f5] hover:bg-[#fffdf5]">
                    <span className="w-[35%] [@media(min-width:992px)]:w-[30%] text-[#555] text-sm">{usuario.nome}</span>
                    <span className="w-[15%] [@media(min-width:992px)]:w-[20%] text-[#555] text-sm">{usuario.idade}</span>
                    <span className="w-[20%] text-[#555] text-sm">{usuario.status}</span>
                    <span className="w-[20%] text-[#555] text-sm">{usuario.categoria}</span>
                    <span className="w-[10%] flex justify-center">
                      <button className="text-blue-400 px-2 py-1 rounded text-sm font-bold hover:text-blue-700">Abrir</button>
                    </span>
                  </div>
                )) : (
                  <p className="text-center text-[#999] py-8 text-sm">Nenhum resultado encontrado.</p>
                )}
              </div>
            </div>
          </div>
        </section>

      </main>
      <div className="hidden [@media(min-width:992px)]:block"><Footer /></div>
    </div>
  );
}