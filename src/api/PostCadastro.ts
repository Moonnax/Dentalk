const API_URL = "https://vercel-java.onrender.com/cadastro";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Usuario {
  nome: string;
  dataNascimento: string;
  idade: string;
  status: string;
  categoria: string;
  cpf: string;
  email: string;
  telefone: string;
}

// ─── POST ─────────────────────────────────────────────────────────────────────

export async function enviarCadastro(usuario: Usuario): Promise<boolean> {
  const resp = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario),
  });

  if (resp.ok) {
    //alert("Mensagem enviada com sucesso!");
    return true;
  } else {
    alert("Erro ao enviar mensagem. Tente novamente.");
    return false;
  }
}