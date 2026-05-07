import {
  ChevronDown,
  Plus,
  Search,
} from "lucide-react";

import HeaderFuncionario from "../../../components/HeaderFuncionario/HeaderFuncionario";
import Footer from "../../../components/Footer/Footer";

import CardUsuarioFuncionario from "../../../components/CardUsuarioFuncionario/CardUsuarioFuncionario";

import "./FCadastro.css";

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

      <main className="container_cadastro">

        {/* TOPO */}
        <section className="topo_cadastro">

          <div className="lado_esquerdo_topo">

            <div className="barra_pesquisa">
              <Search size={18} />
              <p>Pesquisar cpf ou nome...</p>
            </div>

            <div className="filtros_flex">

              <div className="filtro_item">
                <span>Categoria</span>
                <ChevronDown size={18} />
              </div>

              <div className="filtro_item">
                <span>Status</span>
                <ChevronDown size={18} />
              </div>

              <div className="filtro_item">
                <span>Idade</span>
                <ChevronDown size={18} />
              </div>

            </div>

          </div>

          <button className="btn_novo_cadastro">
            <Plus size={18} />
            Novo Cadastro
          </button>

        </section>

        {/* ABAS */}
        <section className="contagem_abas">

          <div className="aba_item">
            Todos
            <span className="badge_todos">284</span>
          </div>

          <div className="aba_item">
            Voluntários
            <span className="badge_voluntario">100</span>
          </div>

          <div className="aba_item">
            Beneficiários
            <span className="badge_beneficiario">184</span>
          </div>

        </section>

        {/* TABELA */}
        <section className="lista_usuarios_secao">

          <div className="card_lista_usuarios">

            <div className="linha_usuario header_usuario">

              <span className="col_nome">
                Nome
              </span>

              <span className="col_idade">
                Idade
              </span>

              <span className="col_status">
                Status
              </span>

              <span className="col_categoria">
                Categoria
              </span>

              <span className="col_detalhes">
                Detalhes
              </span>

            </div>

            {usuarios.map((usuario, index) => (
              <CardUsuarioFuncionario
                key={index}
                nome={usuario.nome}
                idade={usuario.idade}
                status={usuario.status}
                categoria={usuario.categoria}
              />
            ))}

          </div>

        </section>

      </main>

      <Footer />

    </div>

  );
}