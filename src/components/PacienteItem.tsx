import { FileText, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PacienteProps {
  nome: string;
  idade: number;
  cpf: string;
  data: string;
}

function PacienteItem({ nome, idade, cpf, data }: PacienteProps) {
  const navigate = useNavigate();

  const handleAgendar = () => {
    navigate("/agenda");
  };

  const botoes = [
    {
      icon: <FileText size={16} />,
      titulo: "Prontuário",
      onClick: () => navigate("/prontuarios"),
    },
    {
      icon: <Calendar size={16} />,
      titulo: "Agendar",
      onClick: handleAgendar,
    },
  ];

  return (
    <div className="flex items-center justify-between py-3 px-2 border-b border-[#e8e8e8] hover:bg-[#fdfdf5] transition-colors">
      <div className="flex flex-col gap-[2px]">
        <div className="flex items-baseline gap-1">
          <span className="text-[0.95rem] font-bold text-[#010817]">{nome},</span>
          <span className="text-[0.9rem] text-[#444]">{idade} anos</span>
        </div>
        <p className="text-[0.8rem] text-[#666]">CPF: {cpf}</p>
        <p className="text-[0.75rem] text-[#999]">último atendimento em: {data}</p>
      </div>

      <div className="flex items-center gap-2 shrink-0 ml-3">
        {botoes.map((b) => (
          <button
            key={b.titulo}
            title={b.titulo}
            onClick={b.onClick}
            className="h-8 w-8 rounded-full bg-[#f2f2f2] flex items-center justify-center text-[#010817] hover:bg-[#f1c40f] transition-colors"
          >
            {b.icon}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PacienteItem;