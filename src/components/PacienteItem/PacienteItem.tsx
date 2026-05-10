import { Plus, FileText, Calendar } from "lucide-react";

interface PacienteProps {
  nome: string;
  idade: number;
  cpf: string;
  data: string;
}

function PacienteItem({ nome, idade, cpf, data }: PacienteProps) {
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
        {[<Plus size={16} />, <FileText size={16} />, <Calendar size={16} />].map((icon, i) => (
          <button
            key={i}
            className="h-8 w-8 rounded-full bg-[#f2f2f2] flex items-center justify-center text-[#010817] hover:bg-[#f1c40f] transition-colors"
          >
            {icon}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PacienteItem;