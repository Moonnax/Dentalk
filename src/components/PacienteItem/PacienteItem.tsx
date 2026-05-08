import { Plus, FileText, Calendar } from "lucide-react";

interface PacienteProps {
  nome: string;
  idade: number;
  cpf: string;
  data: string;
}

function PacienteItem({ nome, idade, cpf, data }: PacienteProps) {
  return (
    <div className="linha_paciente">
      <div className="info_paciente_bloco">
        <span className="p_nome">{nome},</span>
        <span className="p_idade"> {idade} anos</span>
        <p className="p_cpf">CPF: {cpf}</p>
        <p className="p_atendimento">último atendimento em: {data}</p>
      </div>

      <div className="acoes_paciente_bloco">
        <button className="btn_acao_circulo"><Plus /></button>
        <button className="btn_acao_circulo"><FileText /></button>
        <button className="btn_acao_circulo"><Calendar /></button>
      </div>
    </div>
  );
}

export default PacienteItem;