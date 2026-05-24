import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function CarrosselPacientes() {
  const listaPacientes = [
    {
      nome: "Paulo Ribeiro Gomes",
      cpf: "123.456.789-00",
      end: "Rua das Flores, 123 - SP",
      laudo: "Cárie profunda",
      obs: "Tratamento urgente",
      ant: "Histórico dental",
    },
    {
      nome: "Mariana Silva Torquato",
      cpf: "987.654.321-11",
      end: "Av. Paulista, 1000 - SP",
      laudo: "Limpeza",
      obs: "Rotina",
      ant: "Nenhum",
    },
    {
      nome: "Pedro Rocha Menezes",
      cpf: "456.789.123-22",
      end: "Rua Augusta, 50 - SP",
      laudo: "Canal",
      obs: "Avaliação",
      ant: "Sensibilidade",
    },
  ];

  const [posicaoAtual, setPosicaoAtual] = useState(0);
  const paciente = listaPacientes[posicaoAtual];

  const proximo = () =>
    setPosicaoAtual((prev) => (prev + 1 >= listaPacientes.length ? 0 : prev + 1));
  const voltar = () =>
    setPosicaoAtual((prev) => (prev - 1 < 0 ? listaPacientes.length - 1 : prev - 1));

  return (
    <>
      {/* Card do paciente */}
      <div className="flex rounded-xl border border-[#e0e0e0] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.03)] min-h-[340px] [@media(min-width:992px)]:min-h-[400px]">
        {/* Borda lateral amarela */}
        <div className="w-[6px] rounded-l-xl bg-[#f1c40f] flex-shrink-0" />

        <div className="flex flex-col w-full p-6">
          <h3 className="text-[1.1rem] font-bold mb-4">{paciente.nome}</h3>
          <p className="text-[0.9rem] text-[#444] mb-2"><strong>CPF:</strong> {paciente.cpf}</p>
          <p className="text-[0.9rem] text-[#444] mb-2"><strong>Endereço:</strong> {paciente.end}</p>
          <p className="text-[0.9rem] text-[#444] mb-2"><strong>Laudo:</strong> {paciente.laudo}</p>
          <p className="text-[0.9rem] text-[#444] mb-2"><strong>Observações:</strong> {paciente.obs}</p>
          <p className="text-[0.9rem] text-[#444] mb-2"><strong>Antecedentes:</strong> {paciente.ant}</p>

          <div className="mt-auto flex justify-end gap-3">
            <Link to="/agenda">
            <button className="bg-[#f1c40f] border-none px-4 py-2 rounded-lg font-bold cursor-pointer text-[0.85rem] hover:bg-[#d4ac0d] transition-colors">
                    Aceitar e agendar
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Navegação do carrossel */}
      <div className="flex items-center justify-center gap-5 mt-5">
        <button onClick={voltar} className="bg-none border-none cursor-pointer text-[#333] flex items-center hover:text-[#fd8b08] transition-colors">
          <ChevronLeft size={24} />
        </button>

        <div className="flex gap-[10px]">
          {listaPacientes.map((_, index) => (
            <div
              key={index}
              onClick={() => setPosicaoAtual(index)}
              className={`w-[40px] h-[40px] rounded-full cursor-pointer transition-colors ${
                index === posicaoAtual ? "bg-[#f1c40f]" : "bg-[#f9fbc7]"
              }`}
            />
          ))}
        </div>

        <button onClick={proximo} className="bg-none border-none cursor-pointer text-[#333] flex items-center hover:text-[#fd8b08] transition-colors">
          <ChevronRight size={24} />
        </button>
      </div>
    </>
  );
}

export default CarrosselPacientes;