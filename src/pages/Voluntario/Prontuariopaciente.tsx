import { useNavigate, useParams, useLocation } from "react-router-dom";
import { ArrowLeft, User, FileText, ClipboardList, Pill, AlertCircle, Calendar } from "lucide-react";
import HeaderVoluntario from "../../components/HeaderVoluntario/HeaderVoluntario";
import Footer from "../../components/Footer/Footer";

type Paciente = {
  nome: string;
  cpf: string;
  idade: string;
  ultimoAtendimento: string;
  slug: string;
};

type Consulta = {
  data: string;
  profissional: string;
  especialidade: string;
  descricao: string;
};

type Medicamento = {
  nome: string;
  dose: string;
  frequencia: string;
  inicio: string;
};


const infos: Record<
  string,
  {
    alergias: string[];
    tipoSanguineo: string;
    condicoes: string[];
    consultas: Consulta[];
    medicamentos: Medicamento[];
  }
> = {
  "joao-silva": {
    alergias: ["Penicilina", "Dipirona"],
    tipoSanguineo: "O+",
    condicoes: ["Hipertensão", "Diabetes tipo 2"],
    consultas: [
      { data: "23/08/25", profissional: "Dr. Marcos Andrade", especialidade: "Clínica Geral", descricao: "Consulta de rotina. Pressão arterial controlada. Mantida medicação." },
      { data: "10/07/25", profissional: "Dra. Fernanda Lima", especialidade: "Endocrinologia", descricao: "Ajuste de insulina. Exames de glicemia dentro do esperado." },
    ],
    medicamentos: [
      { nome: "Metformina", dose: "850mg", frequencia: "2x ao dia", inicio: "01/03/24" },
      { nome: "Losartana", dose: "50mg", frequencia: "1x ao dia", inicio: "15/01/23" },
    ],
  },
  "caroline-ferreira-pereira": {
    alergias: [],
    tipoSanguineo: "A-",
    condicoes: ["Ansiedade", "Rinite alérgica"],
    consultas: [
      { data: "20/08/25", profissional: "Dra. Carla Souza", especialidade: "Psiquiatria", descricao: "Acompanhamento mensal. Quadro estável, sem alteração de medicação." },
    ],
    medicamentos: [
      { nome: "Escitalopram", dose: "10mg", frequencia: "1x ao dia", inicio: "05/06/25" },
    ],
  },
  "marcos-oliveira": {
    alergias: ["Sulfa"],
    tipoSanguineo: "B+",
    condicoes: ["Artrite reumatoide"],
    consultas: [
      { data: "15/08/25", profissional: "Dr. Paulo Neves", especialidade: "Reumatologia", descricao: "Avaliação de dores articulares. Solicitado exame de sangue de controle." },
    ],
    medicamentos: [
      { nome: "Metotrexato", dose: "15mg", frequencia: "1x por semana", inicio: "10/02/25" },
    ],
  },
  "ana-beatriz-santos": {
    alergias: [],
    tipoSanguineo: "AB+",
    condicoes: [],
    consultas: [
      { data: "10/08/25", profissional: "Dra. Juliana Costa", especialidade: "Clínica Geral", descricao: "Primeira consulta. Sem queixas relevantes. Solicitado check-up." },
    ],
    medicamentos: [],
  },
  "roberto-cavalcante": {
    alergias: ["Látex", "Amoxicilina"],
    tipoSanguineo: "O-",
    condicoes: ["Insuficiência renal crônica", "Hipertensão"],
    consultas: [
      { data: "05/08/25", profissional: "Dr. Ricardo Alves", especialidade: "Nefrologia", descricao: "Controle semestral. Creatinina levemente elevada. Ajuste de dieta recomendado." },
      { data: "22/06/25", profissional: "Dr. Ricardo Alves", especialidade: "Nefrologia", descricao: "Avaliação pós-exames. Função renal estabilizada." },
    ],
    medicamentos: [
      { nome: "Furosemida", dose: "40mg", frequencia: "1x ao dia", inicio: "20/11/22" },
      { nome: "Amlodipino", dose: "10mg", frequencia: "1x ao dia", inicio: "03/05/21" },
    ],
  },
};

export default function ProntuarioPaciente() {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();

  const paciente = location.state?.paciente as Paciente | undefined;

  const dados = infos[slug ?? ""];

  // isso é o fallback caso o usuário entre diretamente pela url sem antes passar via state
  const nomePaciente = paciente?.nome ?? slug?.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) ?? "Paciente";
  const cpf          = paciente?.cpf              ?? "—";
  const idade        = paciente?.idade            ?? "—";
  const ultimoAten   = paciente?.ultimoAtendimento ?? "—";

  if (!dados) {
    return (
      <div className="font-[Arial] text-[#010817] flex flex-col min-h-screen">
        <HeaderVoluntario />
        <main className="flex-1 flex flex-col items-center justify-center gap-4 px-6">
          <AlertCircle size={48} className="text-[#ccc]" />
          <p className="text-[#999] text-lg">Prontuário não encontrado.</p>
          <button
            onClick={() => navigate("/voluntario/prontuarios")}
            className="bg-[#c4d600] text-black px-5 py-2 rounded-md font-bold hover:bg-[#f1c40f] transition-colors"
          >
            Voltar à lista
          </button>
        </main>
      </div>
    );
  }

  return (
    <div className="font-[Arial] text-[#010817] flex flex-col min-h-screen bg-[#f9f9f9]">
      <HeaderVoluntario />

      <main className="flex-1 mx-4 my-4 sm:mx-8 sm:my-6 [@media(min-width:992px)]:mx-12 [@media(min-width:992px)]:my-8 max-w-[900px]">

        {/* ── botão de voltar ── */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-[#555] hover:text-[#010817] transition-colors mb-6 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Voltar à lista de pacientes
        </button>

        {/* ── cabeçalho do paciente ── */}
        <div className="bg-white border border-[#eee] rounded-xl px-6 py-5 mb-5 flex flex-col [@media(min-width:600px)]:flex-row [@media(min-width:600px)]:items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-[#f1f5c4] flex items-center justify-center shrink-0">
            <User size={28} className="text-[#8a9a00]" />
          </div>

          <div className="flex-1">
            <h1 className="text-xl font-bold text-[#010817] leading-tight">{nomePaciente}</h1>
            <div className="flex flex-wrap gap-x-6 gap-y-1 mt-1 text-sm text-[#666]">
              <span>CPF: {cpf}</span>
              <span>Idade: {idade}</span>
              <span>Tipo sanguíneo: <strong className="text-[#010817]">{dados.tipoSanguineo}</strong></span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-[#888] bg-[#fafafa] border border-[#eee] rounded-lg px-4 py-2 shrink-0">
            <Calendar size={14} />
            Último atendimento: <strong className="text-[#010817] ml-1">{ultimoAten}</strong>
          </div>
        </div>

        {/* ── infos ── */}
        <div className="grid grid-cols-1 [@media(min-width:600px)]:grid-cols-2 gap-5 mb-5">

          {/* alergias */}
          <div className="bg-white border border-[#eee] rounded-xl px-5 py-4">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle size={16} className="text-[#e74c3c]" />
              <h2 className="font-bold text-sm text-[#010817]">Alergias</h2>
            </div>
            {dados.alergias.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {dados.alergias.map((a) => (
                  <span key={a} className="bg-[#fdecea] text-[#c0392b] text-xs font-semibold px-3 py-1 rounded-full">
                    {a}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-[#bbb] text-sm">Nenhuma alergia registrada</p>
            )}
          </div>

          {/* condições */}
          <div className="bg-white border border-[#eee] rounded-xl px-5 py-4">
            <div className="flex items-center gap-2 mb-3">
              <ClipboardList size={16} className="text-[#8a9a00]" />
              <h2 className="font-bold text-sm text-[#010817]">Condições / Diagnósticos</h2>
            </div>
            {dados.condicoes.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {dados.condicoes.map((c) => (
                  <span key={c} className="bg-[#f5f8d6] text-[#6a7a00] text-xs font-semibold px-3 py-1 rounded-full">
                    {c}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-[#bbb] text-sm">Nenhuma condição registrada</p>
            )}
          </div>
        </div>

        {/* ── medicamentos ── */}
        <div className="bg-white border border-[#eee] rounded-xl px-5 py-4 mb-5">
          <div className="flex items-center gap-2 mb-4">
            <Pill size={16} className="text-[#8a9a00]" />
            <h2 className="font-bold text-sm text-[#010817]">Medicamentos em uso</h2>
          </div>

          {dados.medicamentos.length > 0 ? (
            <div className="flex flex-col divide-y divide-[#f5f5f5]">
              {/* Header — desktop only */}
              <div className="hidden [@media(min-width:600px)]:grid grid-cols-4 text-xs text-[#999] font-semibold pb-2 uppercase tracking-wide">
                <span>Medicamento</span>
                <span>Dose</span>
                <span>Frequência</span>
                <span>Início</span>
              </div>
              {dados.medicamentos.map((m, i) => (
                <div key={i} className="py-3 [@media(min-width:600px)]:grid grid-cols-4 flex flex-col gap-1 text-sm">
                  <span className="font-semibold text-[#010817]">{m.nome}</span>
                  <span className="text-[#555]">
                    <span className="[@media(min-width:600px)]:hidden text-[#999] text-xs">Dose: </span>
                    {m.dose}
                  </span>
                  <span className="text-[#555]">
                    <span className="[@media(min-width:600px)]:hidden text-[#999] text-xs">Frequência: </span>
                    {m.frequencia}
                  </span>
                  <span className="text-[#555]">
                    <span className="[@media(min-width:600px)]:hidden text-[#999] text-xs">Desde: </span>
                    {m.inicio}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-[#bbb] text-sm">Nenhum medicamento registrado</p>
          )}
        </div>

        {/* ── histórico de consultas ── */}
        <div className="bg-white border border-[#eee] rounded-xl px-5 py-4">
          <div className="flex items-center gap-2 mb-4">
            <FileText size={16} className="text-[#8a9a00]" />
            <h2 className="font-bold text-sm text-[#010817]">Histórico de Consultas</h2>
          </div>

          {dados.consultas.length > 0 ? (
            <div className="flex flex-col gap-3">
              {dados.consultas.map((c, i) => (
                <div key={i} className="border border-[#eee] rounded-lg px-4 py-3 hover:border-[#d4e200] transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-[#010817] text-sm">{c.profissional}</span>
                      <span className="bg-[#f5f8d6] text-[#6a7a00] text-xs font-semibold px-2 py-0.5 rounded-full">
                        {c.especialidade}
                      </span>
                    </div>
                    <span className="text-xs text-[#999] flex items-center gap-1">
                      <Calendar size={11} />
                      {c.data}
                    </span>
                  </div>
                  <p className="text-sm text-[#555] leading-relaxed">{c.descricao}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-[#bbb] text-sm">Nenhuma consulta registrada</p>
          )}
        </div>

      </main>

      <div className="hidden [@media(min-width:992px)]:block mt-8">
        <Footer />
      </div>
    </div>
  );
}