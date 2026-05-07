import "./CardUsuarioFuncionario.css";

interface CardUsuarioProps {
  nome: string;
  idade: string;
  status: string;
  categoria: string;
}

export default function CardUsuarioFuncionario({
  nome,
  idade,
  status,
  categoria,
}: CardUsuarioProps) {
  return (
    <div className="linha_usuario">

      <span className="col_nome">{nome}</span>

      <span className="col_idade">{idade}</span>

      <span className="col_status">
        <div
          className={`
            status_badge
            ${status === "Ativo" ? "status_ativo" : ""}
            ${status === "Encaminhado" ? "status_encaminhado" : ""}
            ${status === "Atendimento" ? "status_atendimento" : ""}
            ${status === "Finalizado" ? "status_finalizado" : ""}
          `}
        >
          {status}
        </div>
      </span>

      <span className="col_categoria">{categoria}</span>

      <div className="col_detalhes">
        <button className="btn_ver_mais">
          Ver Mais
        </button>
      </div>

    </div>
  );
}