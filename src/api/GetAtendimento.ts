const API_URL = "http://localhost:8080/atendimento";

export interface AtendimentoRecord {
  idConsulta: string;
  paciente: string;
  data: string;
  horarioInicio: string;
  horarioFim: string;
  procedimentos: string;
  pacientePresente: "sim" | "nao";
  observacoes?: string;
  anexoNome?: string;
}

export async function getAtendimentos(): Promise<AtendimentoRecord[]> {
  const resp = await fetch(API_URL);
  if (!resp.ok) {
    alert("Erro ao buscar atendimentos.");
    return [];
  }
  const data = await resp.json();

  // mapeia os campos do Java (camelCase da entidade) para o formato do front
  return data.map((a: any) => ({
    idConsulta:       String(a.idConsulta),
    paciente:         a.pacienteNome,
    data:             a.data,
    horarioInicio:    a.horarioInicial,
    horarioFim:       a.horarioFinal,
    procedimentos:    a.procedimento,
    pacientePresente: a.pacientePresente?.toLowerCase() as "sim" | "nao",
    observacoes:      a.observacoes,
  }));
}