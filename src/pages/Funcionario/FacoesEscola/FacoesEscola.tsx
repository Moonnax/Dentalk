import {
  ChevronDown,
  Search,
} from "lucide-react";

import HeaderFuncionario from "../../../components/HeaderFuncionario/HeaderFuncionario";
import Footer from "../../../components/Footer/Footer";

import "./FacoesEscola.css";

function FacoesEscola() {

  return (
    <div className="page-container">

      <HeaderFuncionario />

      <main className="container_acoes">

        {/* TOPO */}
        <section className="topo_acoes">

          <div className="lado_esquerdo_topo">

            <div className="barra_pesquisa">
              <Search size={18} />
              <p>Filtrar solicitações...</p>
            </div>

            <div className="filtros_flex">

              <div className="filtro_item">
                <span>Situação</span>
                <ChevronDown size={18} />
              </div>

              <div className="filtro_item">
                <span>Data</span>
                <ChevronDown size={18} />
              </div>

              <div className="filtro_item">
                <span>Canal</span>
                <ChevronDown size={18} />
              </div>

            </div>

          </div>

        </section>

        {/* ABAS */}
        <section className="contagem_abas">

          <div className="aba_item">
            Todas
            <span className="badge_todos">197</span>
          </div>

          <div className="aba_item">
            Concluídas
            <span className="badge_concluido">46</span>
          </div>

          <div className="aba_item">
            Aprovar
            <span className="badge_aprovar">15</span>
          </div>

        </section>

        {/* TABELA */}
        <section className="lista_acoes_secao">

          <div className="card_lista_acoes">

            {/* HEADER */}
            <div className="linha_acao header_acao">

              <span className="col_instituicao">
                Instituição
              </span>

              <span className="col_data">
                Data
              </span>

              <span className="col_alunos">
                Qtd. Alunos
              </span>

              <span className="col_coordenador">
                Coordenador
              </span>

              <span className="col_infra">
                Infraestrutura
              </span>

              <span className="col_situacao_header">
                Situação
              </span>

            </div>

            {/* LINHA */}
            <div className="linha_acao">

              <div className="col_instituicao">
                Instituto Vida Nova
                <span className="sub_info">
                  São Paulo - Zona Sul
                </span>
              </div>

              <div className="col_data">
                11/04/2026
                <span className="sub_info">
                  08:30
                </span>
              </div>

              <div className="col_alunos">
                95
              </div>

              <div className="col_coordenador">
                Juliana Martins
                <span className="sub_info">
                  (11) 91234-5678
                </span>
              </div>

              <div className="col_infra">
                Completa
              </div>

              <div className="col_situacao">
                <div className="status_badge status_aprovar">
                  Aprovar
                </div>
              </div>

            </div>

            {/* LINHA */}
            <div className="linha_acao">

              <div className="col_instituicao">
                Escola Caminho do Saber
                <span className="sub_info">
                  Guarulhos - Centro
                </span>
              </div>

              <div className="col_data">
                09/04/2026
                <span className="sub_info">
                  10:00
                </span>
              </div>

              <div className="col_alunos">
                140
              </div>

              <div className="col_coordenador">
                Roberto Nunes
                <span className="sub_info">
                  (11) 93456-7890
                </span>
              </div>

              <div className="col_infra">
                Pendente
              </div>

              <div className="col_situacao">
                <div className="status_badge status_pendente">
                  Pendente
                </div>
              </div>

            </div>

            {/* LINHA */}
            <div className="linha_acao">

              <div className="col_instituicao">
                Centro Educacional Horizonte
                <span className="sub_info">
                  Osasco - Zona Oeste
                </span>
              </div>

              <div className="col_data">
                15/04/2026
                <span className="sub_info">
                  13:00
                </span>
              </div>

              <div className="col_alunos">
                180
              </div>

              <div className="col_coordenador">
                Fernanda Lopes
                <span className="sub_info">
                  (11) 99876-5432
                </span>
              </div>

              <div className="col_infra">
                Completa
              </div>

              <div className="col_situacao">
                <div className="status_badge status_confirmada">
                  Confirmada
                </div>
              </div>

            </div>

            {/* LINHA */}
            <div className="linha_acao">

              <div className="col_instituicao">
                Projeto Jovem Futuro
                <span className="sub_info">
                  São Paulo - Zona Leste
                </span>
              </div>

              <div className="col_data">
                20/03/2026
                <span className="sub_info">
                  09:30
                </span>
              </div>

              <div className="col_alunos">
                110
              </div>

              <div className="col_coordenador">
                Carlos Eduardo
                <span className="sub_info">
                  (11) 95555-2222
                </span>
              </div>

              <div className="col_infra">
                Completa
              </div>

              <div className="col_situacao">
                <div className="status_badge status_concluida">
                  Concluída
                </div>
              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default FacoesEscola;