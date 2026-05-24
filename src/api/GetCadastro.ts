const API_URL = "https://vercel-java.onrender.com/cadastro";

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

// calcula idade a partir do dataNascimento
function calcularIdade(dataNascimento: string): string {
  if (!dataNascimento) return "";
  const [ano, mes, dia] = dataNascimento.split("-").map(Number);
  const hoje = new Date();
  let idade = hoje.getFullYear() - ano;
  const mesDiff = hoje.getMonth() + 1 - mes;
  if (mesDiff < 0 || (mesDiff === 0 && hoje.getDate() < dia)) idade--;
  return `${idade} anos`;
}

// GET

export async function getCadastros(): Promise<Usuario[]> {
  const resp = await fetch(API_URL);

  if (!resp.ok) {
    alert("Erro ao buscar cadastros.");
    return [];
  }

  const data = await resp.json();

  return data
    .filter((u: any) => u.nome !== null)
    .map((u: any) => ({
      nome:           u.nome,
      dataNascimento: u.dataNascimento,
      idade:          calcularIdade(u.dataNascimento), // ← calcula na hora
      status:         u.status,
      categoria:      u.categoria,
      cpf:            u.cpf,
      email:          u.email,
      telefone:       u.telefone,
    }));
}