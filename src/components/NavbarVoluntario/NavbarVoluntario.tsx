import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../HeaderVoluntario/HeaderVoluntario.css";
function CarrosselPacientes() {

  const listaPacientes = [
    { 
      nome: "Paulo Ribeiro Gomes", 
      cpf: "123.456.789-00", 
      end: "Rua das F, 123 - SP", 
      laudo: "Cárie profunda", 
      obs: "Tratamento urgente", 
      ant: "Histórico dental" 
    },
    { 
      nome: "Mariana Silva Torquato", 
      cpf: "987.654.321-11", 
      end: "Av. Paulista, 1000 - SP", 
      laudo: "Limpeza", 
      obs: "Rotina", 
      ant: "Nenhum" 
    },
    { 
      nome: "Pedro Rocha Menezes", 
      cpf: "456.789.123-22", 
      end: "Rua Augusta, 50 - SP", 
      laudo: "Canal", 
      obs: "Avaliação", 
      ant: "Sensibilidade" 
    }
  ];

  const [posicaoAtual, setPosicaoAtual] = useState(0);
  const paciente = listaPacientes[posicaoAtual];

  const proximo = () => {
    setPosicaoAtual((prev) =>
      prev + 1 >= listaPacientes.length ? 0 : prev + 1
    );
  };

  const voltar = () => {
    setPosicaoAtual((prev) =>
      prev - 1 < 0 ? listaPacientes.length - 1 : prev - 1
    );
  };

  return (
    <>
      <div className="card_paciente">
        <div className="borda_lateral"></div>

        <div className="conteudo_card">
          <h3>{paciente.nome}</h3>
          <p><strong>CPF:</strong> {paciente.cpf}</p>
          <p><strong>Endereço:</strong> {paciente.end}</p>
          <p><strong>Laudo:</strong> {paciente.laudo}</p>
          <p><strong>Observações:</strong> {paciente.obs}</p>
          <p><strong>Antecedentes:</strong> {paciente.ant}</p>

          <div className="botoes_card">
            <button className="btn-cinza">Remarcar</button>
            <button className="btn-amarelo">Agendar</button>
          </div>
        </div>
      </div>

      <div className="carrossel_nav">
        <button className="seta_nav" onClick={voltar}>
          <ChevronLeft size={24} />
        </button>

        <div className="indicadores">
          {listaPacientes.map((_, index) => (
            <div
              key={index}
              className={`ponto ${index === posicaoAtual ? "ativo" : ""}`}
              onClick={() => setPosicaoAtual(index)}
            ></div>
          ))}
        </div>

        <button className="seta_nav" onClick={proximo}>
          <ChevronRight size={24} />
        </button>
      </div>
    </>
  );
}

export default CarrosselPacientes;