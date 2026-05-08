import {
  ChevronDown,
  Search,
} from "lucide-react";

import HeaderFuncionario from "../../../components/HeaderFuncionario/HeaderFuncionario";
import Footer from "../../../components/Footer/Footer";

import "./Ftriagem.css";

export default function TriagemF() {

  const solicitacoes = [
    {
      nome: "Rafael Souza Lima",
      regiao: "São Paulo - ZN",
      prioridade: "Média",
      canal: "Ação Esc.",
    },
    {
      nome: "Mariana Costa Fernandes",
      regiao: "Rio de Janeiro - ZS",
      prioridade: "Baixa",
      canal: "Instagram",
    },
    {
      nome: "Bruno Henrique Alves",
      regiao: "Belo Horizonte - Centro",
      prioridade: "Alta",
      canal: "Site",
    },
    {
      nome: "Carla Mendes Ribeiro",
      regiao: "Curitiba - Batel",
      prioridade: "Alta",
      canal: "Ação Esc.",
    },
    {
      nome: "Felipe Rocha Martins",
      regiao: "Porto Alegre - Sul",
      prioridade: "Média",
      canal: "WhatsApp",
    },
    {
      nome: "Juliana Pereira Santos",
      regiao: "Salvador - Centro",
      prioridade: "Baixa",
      canal: "Instagram",
    },
  ];

  return (
    <div className="page-container">

      <HeaderFuncionario />

      <main className="container_triagem">

        {/* TOPO */}
        <section className="topo_triagem">

          <div className="lado_esquerdo_topo">

            <div className="barra_pesquisa">
              <Search size={18} />
              <p>Filtrar solicitações...</p>
            </div>

            <div className="filtros_flex">

              <div className="filtro_item">
                <span>Prioridade</span>
                <ChevronDown size={18} />
              </div>

              <div className="filtro_item">
                <span>Região</span>
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
            Solicitações
            <span className="badge_solicitacoes">197</span>
          </div>

          <div className="aba_item">
            A encaminhar
            <span className="badge_encaminhar">51</span>
          </div>

          <div className="aba_item">
            Encaminhados
            <span className="badge_encaminhados">821</span>
          </div>

          <div className="aba_item">
            Rejeitados
            <span className="badge_rejeitados">46</span>
          </div>

        </section>

        {/* TABELA */}
        <section className="lista_triagem_secao">

          <div className="card_lista_triagem">

            <div className="linha_triagem header_triagem">

              <span className="col_nome">Nome</span>

              <span className="col_regiao">Região</span>

              <span className="col_prioridade">Prioridade</span>

              <span className="col_canal">Canal</span>

              <span className="col_acoes">Ações</span>

            </div>

            {solicitacoes.map((item, index) => (
              <div className="linha_triagem" key={index}>

                <span className="col_nome">{item.nome}</span>

                <span className="col_regiao">{item.regiao}</span>

                <div className="col_prioridade">
                  <div className="mini_filtro">
                    {item.prioridade}
                    <ChevronDown size={15} />
                  </div>
                </div>

                <span className="col_canal">{item.canal}</span>

                <div className="col_acoes">

                  <button className="btn_contato">
                    Contato
                  </button>

                  <button className="btn_rejeitar">
                    Rejeitar
                  </button>

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