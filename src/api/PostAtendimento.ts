const API_URL = "http://localhost:8080/atendimento";

// ─── Type (espelha a tabela do banco) ─────────────────────────────────────────

export interface Atendimento {
  idConsulta: string;
  pacienteNome: string;
  data: string;
  horarioInicial: string;
  horarioFinal: string;
  procedimento: string;
  observacoes?: string;
  pacientePresente: string;
}

// ─── POST ─────────────────────────────────────────────────────────────────────

export async function postAtendimento(atendimento: Atendimento): Promise<void> {
  const resp = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(atendimento),
  });

  if (resp.ok) {
    alert("Atendimento registrado com sucesso!");
  } else {
    alert("Erro ao registrar atendimento. Tente novamente.");
  }
}