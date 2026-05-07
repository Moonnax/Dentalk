import {Search, ChevronDown } from "lucide-react";
import HeaderVoluntario from "../../../components/HeaderVoluntario/HeaderVoluntario";
import Footer from "../../../components/Footer/Footer";
import './Vprontuarios.css'

export default function VProntuario() {
  const pacientes = [
    {
      nome: "João Silva",
      cpf: "468.895.568-33",
      idade: "32 anos",
      ultimo: "23/08/25",
    },
    {
      nome: "Caroline Ferreira Pereira",
      cpf: "123.456.789-00",
      idade: "28 anos",
      ultimo: "20/08/25",
    },
    {
      nome: "Marcos Oliveira",
      cpf: "987.654.321-11",
      idade: "45 anos",
      ultimo: "15/08/25",
    },
    {
      nome: "Ana Beatriz Santos",
      cpf: "456.123.789-55",
      idade: "19 anos",
      ultimo: "10/08/25",
    },
    {
      nome: "Roberto Cavalcante",
      cpf: "333.222.111-99",
      idade: "50 anos",
      ultimo: "05/08/25",
    },
  ];

  return (
    <div className="page-container">

      <HeaderVoluntario />

      <main className="container_prontuarios">
        
        {/* BUSCA */}
        <section className="busca_prontuario">
          <div className="barra_pesquisa">
            <Search />
            <p>Pesquisar cpf ou nome...</p>
          </div>

          <div className="filtros_flex">
            <div className="filtro_item">
              <span>Último Atendimento</span>
              <ChevronDown />
            </div>
            <div className="filtro_item">
              <span>Idade</span>
              <ChevronDown />
            </div>
          </div>
        </section>

        {/* LISTA */}
        <section className="lista_pacientes_secao">
          <div className="card_lista_prontuarios">

            <div className="linha_prontuario header_prontuario">
              <span className="col_paciente">Paciente</span>
              <span className="col_cpf">CPF</span>
              <span className="col_idade">Idade</span>
              <span className="col_ultimo">Último atendimento</span>
              <span className="col_situacao">Situação</span>
            </div>

            {pacientes.map((p, i) => (
              <div className="linha_prontuario" key={i}>
                <span className="col_paciente">{p.nome}</span>
                <span className="col_cpf">{p.cpf}</span>
                <span className="col_idade">{p.idade}</span>
                <span className="col_ultimo">{p.ultimo}</span>

                <div className="col_situacao">
                  <div className="btn_prontuario">Abrir Prontuário</div>
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