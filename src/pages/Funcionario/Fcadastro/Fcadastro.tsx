import HeaderFincionario from "../../../components/HeaderFuncionario/HeaderFuncionario";
import Footer from "../../../components/Footer/Footer";
import "./Fcadastro.css";
import { Link } from "react-router-dom";
import { ChevronDown, Search, Plus } from "lucide-react";

function Fcadastro() {
  return (
    <>
      <HeaderFincionario />

      <main className="cadastro_container">

        <section className="filtros_cadastro">
          <div className="filtros_grupo">

            <div className="caixa_filtro">
              Categoria <ChevronDown size={16} />
            </div>

            <div className="caixa_filtro">
              Status <ChevronDown size={16} />
            </div>

            <div className="caixa_filtro">
              Idade <ChevronDown size={16} />
            </div>

            <div className="simular_busca">
              <Search size={16} />
              <span>Pesquisar cpf ou nome...</span>
            </div>

          </div>

          <button className="botao_laranja">
            <Plus size={16} />
            Novo Cadastro
          </button>
        </section>

        <section className="contagem_abas">

          <div className="aba">
            Todos <span className="bolinha_padrao">284</span>
          </div>

          <div className="aba">
            Voluntário <span className="bolinha_padrao">100</span>
          </div>

          <div className="aba">
            Beneficiário <span className="bolinha_padrao">184</span>
          </div>

        </section>

        <section className="lista_usuarios">

          <div className="linha_cabecalho">
            <span className="col-nome-c">Nome</span>
            <span className="col-idade-c">idade</span>
            <span className="col-status-c">Status</span>
            <span className="col-categoria-c">Categoria</span>
            <span className="col-detalhes-c">Detalhes</span>
          </div>

          <div className="linha_usuario">
            <span className="col-nome-c">Rafael Souza Lima</span>
            <span className="col-idade-c">31 anos</span>
            <span className="col-status-c">Ativo</span>
            <span className="col-categoria-c">Funcionario</span>
            <Link className="col-detalhes-c link_fake" to="#">ver mais</Link>
          </div>

          <div className="linha_usuario destaque">
            <span className="col-nome-c">Mariana Costa Fernandes</span>
            <span className="col-idade-c">28 anos</span>
            <span className="col-status-c">Encaminhado</span>
            <span className="col-categoria-c">Beneficiário</span>
            <Link className="col-detalhes-c link_fake" to="#">ver mais</Link>
          </div>

          <div className="linha_usuario">
            <span className="col-nome-c">Bruno Henrique Alves</span>
            <span className="col-idade-c">39 anos</span>
            <span className="col-status-c">Atendimento</span>
            <span className="col-categoria-c">Beneficiário</span>
            <Link className="col-detalhes-c link_fake" to="#">ver mais</Link>
          </div>

          <div className="linha_usuario destaque">
            <span className="col-nome-c">Carla Mendes Ribeiro</span>
            <span className="col-idade-c">52 anos</span>
            <span className="col-status-c">Ativo</span>
            <span className="col-categoria-c">Funcionario</span>
            <Link className="col-detalhes-c link_fake" to="#">ver mais</Link>
          </div>

          <div className="linha_usuario">
            <span className="col-nome-c">Juliana Pereira Santos</span>
            <span className="col-idade-c">26 anos</span>
            <span className="col-status-c">Encaminhado</span>
            <span className="col-categoria-c">Beneficiário</span>
            <Link className="col-detalhes-c link_fake" to="#">ver mais</Link>
          </div>

          <div className="linha_usuario destaque">
            <span className="col-nome-c">Felipe Rocha Martins</span>
            <span className="col-idade-c">34 anos</span>
            <span className="col-status-c">Atendimento</span>
            <span className="col-categoria-c">Beneficiário</span>
            <Link className="col-detalhes-c link_fake" to="#">ver mais</Link>
          </div>

          <div className="linha_usuario">
            <span className="col-nome-c">Patricia Gomes Duarte</span>
            <span className="col-idade-c">47 anos</span>
            <span className="col-status-c">Ativo</span>
            <span className="col-categoria-c">Funcionario</span>
            <Link className="col-detalhes-c link_fake" to="#">ver mais</Link>
          </div>

          <div className="linha_usuario destaque">
            <span className="col-nome-c">Lucas Andrade Silva</span>
            <span className="col-idade-c">22 anos</span>
            <span className="col-status-c">Encaminhado</span>
            <span className="col-categoria-c">Beneficiário</span>
            <Link className="col-detalhes-c link_fake" to="#">ver mais</Link>
          </div>

          <div className="linha_usuario">
            <span className="col-nome-c">Fernanda Lopes Carvalho</span>
            <span className="col-idade-c">36 anos</span>
            <span className="col-status-c">Finalizado</span>
            <span className="col-categoria-c">Beneficiário</span>
            <Link className="col-detalhes-c link_fake" to="#">ver mais</Link>
          </div>

          <div className="linha_usuario destaque">
            <span className="col-nome-c">Thiago Barros Nogueira</span>
            <span className="col-idade-c">41 anos</span>
            <span className="col-status-c">Atendimento</span>
            <span className="col-categoria-c">Beneficiário</span>
            <Link className="col-detalhes-c link_fake" to="#">ver mais</Link>
          </div>

        </section>
      </main>

      <Footer />
    </>
  );
}

export default Fcadastro;