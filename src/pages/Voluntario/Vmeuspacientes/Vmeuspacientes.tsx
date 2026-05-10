import { useState } from "react";
import { Search } from "lucide-react";
import HeaderVoluntario from "../../../components/HeaderVoluntario/HeaderVoluntario";
import Footer from "../../../components/Footer/Footer";
import PacienteItem from "../../../components/PacienteItem/PacienteItem";
import "./VMeusPacientes.css";

export default function VMeusPacientes() {
  const [busca, setBusca] = useState("");

  const pacientes = [
    { nome: "Ana Beatriz Silva", idade: 8, cpf: "455.123.789-11", data: "15/03/26" },
    { nome: "Lucas Oliveira", idade: 12, cpf: "332.987.456-00", data: "10/02/26" },
    { nome: "Mariana Costa", idade: 7, cpf: "111.222.333-44", data: "01/03/26" },
    { nome: "João Pedro Santos", idade: 10, cpf: "222.333.444-55", data: "20/03/26" },
    { nome: "Beatriz Souza", idade: 9, cpf: "999.888.777-66", data: "05/03/26" },
    { nome: "Enzo Lima", idade: 11, cpf: "777.666.555-44", data: "18/03/26" },
    { nome: "Clara Mendes", idade: 13, cpf: "555.444.333-22", data: "12/03/26" },
    { nome: "Gustavo Rocha", idade: 6, cpf: "888.777.111-00", data: "22/02/26" },
    { nome: "Valentina Silva", idade: 7, cpf: "333.444.999-88", data: "14/03/26" },
    { nome: "Felipe Augusto", idade: 14, cpf: "121.232.343-45", data: "01/02/26" },
  ];

  const filtrados = pacientes.filter((p) => {
    const termo = busca.toLowerCase();
    return !busca || p.nome.toLowerCase().includes(termo) || p.cpf.includes(busca);
  });

  return (
    <>
      <HeaderVoluntario />

      <main className="dashboard_container">
        <div className="layout_grid_fixo">

          <section className="coluna_pacientes">
            <h1>Meus Pacientes</h1>

            <div className="simular_busca">
              <Search size={18} />
              <input
                type="text"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Pesquisar cpf ou nome..."
                className="w-full bg-transparent outline-none text-[#333] placeholder-[#999] text-sm"
              />
            </div>

            <div className="area_filtros">
              <button className="btn_filtro">Todos</button>
              <button className="btn_filtro">Aguardando Retorno</button>
              <button className="btn_filtro">Agendado</button>
            </div>

            <div className="tabela_pacientes_lista">
              {filtrados.length > 0 ? filtrados.map((p, i) => (
                <PacienteItem key={i} nome={p.nome} idade={p.idade} cpf={p.cpf} data={p.data} />
              )) : (
                <p style={{ color: "#999", padding: "1rem", fontSize: "0.9rem" }}>Nenhum resultado encontrado.</p>
              )}
            </div>
          </section>

          <aside className="coluna_encaminhados">
            <h1>Encaminhados</h1>

            {[
              { nome: "Enzo Gabriel", idade: "09", genero: "masculino", endereco: "Av. Paulista, 1000 - SP", laudo: "Limpeza e avaliação de canal." },
              { nome: "Sophia Martins", idade: "11", genero: "feminino", endereco: "Rua Augusta, 450 - SP", laudo: "Dor aguda no molar inferior." },
              { nome: "Thiago Ferreira", idade: "13", genero: "masculino", endereco: "Rua das Flores, 12 - Osasco", laudo: "Avaliação para aparelho ortodôntico." },
              { nome: "Larissa Manoela", idade: "06", genero: "feminino", endereco: "Al. Santos, 200 - SP", laudo: "Extração de dente de leite." },
              { nome: "Murilo Benício", idade: "10", genero: "masculino", endereco: "Rua Vergueiro, 900 - SP", laudo: "Tratamento de cáries múltiplas." },
            ].map((p) => (
              <div key={p.nome} className="card_encaminhado_p">
                <div className="borda_lateral"></div>
                <div className="conteudo_card_p">
                  <h3>{p.nome}</h3>
                  <p><strong>Idade:</strong> {p.idade} anos <strong className="genero"> gênero:</strong> {p.genero}</p>
                  <p><strong>Endereço:</strong> {p.endereco}</p>
                  <p><strong>Laudo:</strong> {p.laudo}</p>
                  <div className="botoes_card_p">
                    <button className="btn-amarelo-p">Aceitar e Agendar</button>
                    <button className="btn-cinza-p">Ver mais</button>
                  </div>
                </div>
              </div>
            ))}
          </aside>

        </div>
      </main>

      <Footer />
    </>
  );
}