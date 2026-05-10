import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import HeaderVoluntario from "../../../components/HeaderVoluntario/HeaderVoluntario";
import Footer from "../../../components/Footer/Footer";
import './Vprontuarios.css';

export default function VProntuario() {
  const [busca, setBusca] = useState("");
  const [filtroUltimo, setFiltroUltimo] = useState("");
  const [filtroIdade, setFiltroIdade] = useState("");

  const pacientes = [
    { nome: "João Silva", cpf: "468.895.568-33", idade: "32 anos", ultimo: "23/08/25" },
    { nome: "Caroline Ferreira Pereira", cpf: "123.456.789-00", idade: "28 anos", ultimo: "20/08/25" },
    { nome: "Marcos Oliveira", cpf: "987.654.321-11", idade: "45 anos", ultimo: "15/08/25" },
    { nome: "Ana Beatriz Santos", cpf: "456.123.789-55", idade: "19 anos", ultimo: "10/08/25" },
    { nome: "Roberto Cavalcante", cpf: "333.222.111-99", idade: "50 anos", ultimo: "05/08/25" },
  ];

  const getIdadeFaixa = (idadeStr: string) => {
    const n = parseInt(idadeStr);
    if (n <= 20) return "Até 20";
    if (n <= 30) return "21-30";
    if (n <= 40) return "31-40";
    return "41+";
  };

  const filtrados = pacientes.filter((p) => {
    const termo = busca.toLowerCase();
    const matchBusca = !busca || p.nome.toLowerCase().includes(termo) || p.cpf.includes(busca);
    const matchUltimo = !filtroUltimo || p.ultimo === filtroUltimo;
    const matchIdade = !filtroIdade || getIdadeFaixa(p.idade) === filtroIdade;
    return matchBusca && matchUltimo && matchIdade;
  });

  return (
    <div className="page-container">
      <HeaderVoluntario />

      <main className="container_prontuarios">

        <section className="busca_prontuario">
          <div className="barra_pesquisa">
            <Search />
            <input
              type="text"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Pesquisar cpf ou nome..."
              className="w-full bg-transparent outline-none text-[#333] placeholder-[#999]"
            />
          </div>

          <div className="filtros_flex">
            <div className="filtro_item relative">
              <select value={filtroUltimo} onChange={(e) => setFiltroUltimo(e.target.value)}
                className="appearance-none w-full bg-transparent outline-none cursor-pointer pr-6 text-[#010817]">
                <option value="">Último Atendimento</option>
                {[...new Set(pacientes.map(p => p.ultimo))].map(d => <option key={d} value={d}>{d}</option>)}
              </select>
              <ChevronDown size={16} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            <div className="filtro_item relative">
              <select value={filtroIdade} onChange={(e) => setFiltroIdade(e.target.value)}
                className="appearance-none w-full bg-transparent outline-none cursor-pointer pr-6 text-[#010817]">
                <option value="">Idade</option>
                <option value="Até 20">Até 20 anos</option>
                <option value="21-30">21–30 anos</option>
                <option value="31-40">31–40 anos</option>
                <option value="41+">41+ anos</option>
              </select>
              <ChevronDown size={16} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </section>

<section className="lista_pacientes_secao">
  <div className="card_lista_prontuarios border border-[#eee] rounded-xl bg-white overflow-hidden">

    <div className="overflow-x-auto">
      <div className="min-w-[900px]">

        <div className="linha_prontuario header_prontuario flex items-center px-4 md:px-6 py-4 bg-[#fafafa] border-b border-[#eee]">
          <span className="col_paciente font-bold text-sm md:text-base">Paciente</span>
          <span className="col_cpf font-bold text-sm md:text-base">CPF</span>
          <span className="col_idade font-bold text-sm md:text-base">Idade</span>
          <span className="col_ultimo font-bold text-sm md:text-base">Último atendimento</span>
          <span className="col_situacao font-bold text-sm md:text-base text-right">Ação</span>
        </div>

        {filtrados.length > 0 ? filtrados.map((p, i) => (
          <div
            className="linha_prontuario flex items-center px-4 md:px-6 py-4 border-b border-[#f5f5f5] hover:bg-[#fffdf5]"
            key={i}
          >
            <span className="col_paciente text-sm md:text-base">{p.nome}</span>
            <span className="col_cpf text-sm md:text-base">{p.cpf}</span>
            <span className="col_idade text-sm md:text-base">{p.idade}</span>
            <span className="col_ultimo text-sm md:text-base">{p.ultimo}</span>

            <div className="col_situacao flex justify-end">
              <div className="btn_prontuario bg-[#c4d600] px-3 py-1 rounded text-xs font-bold hover:brightness-95 transition">
                Abrir Prontuário
              </div>
            </div>
          </div>
        )) : (
          <p style={{ textAlign: "center", color: "#999", padding: "2rem", fontSize: "0.9rem" }}>
            Nenhum resultado encontrado.
          </p>
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