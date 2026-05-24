const API_URL = "https://vercel-java.onrender.com/contato";

export interface Contato {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
}

// POST

export async function enviarContato(contato: Contato): Promise<boolean> {
  const resp = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contato),
  });

  if (resp.ok) {
    //alert("Mensagem enviada com sucesso!");
    return true;
  } else {
    alert("Erro ao enviar mensagem. Tente novamente.");
    return false;
  }
}
