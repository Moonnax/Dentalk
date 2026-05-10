import { useState, useEffect, useRef } from "react";
import HeaderFuncionario from "../../components/HeaderFuncionario/HeaderFuncionario";
import Footer from "../../components/Footer/Footer";

// ── Types ──────────────────────────────────────────────────────────────────

type StatusOcorrencia = "vermelho" | "amarelo" | "";
type TabOcorrencia = "Pendentes" | "Respondidas";

interface Mensagem {
  de: "profissional" | "funcionario";
  texto: string;
  hora: string;
}

interface Paciente {
  nome: string;
  tratamento: string;
}

interface Ocorrencia {
  id: number;
  nome: string;
  cargo: string;
  crm: string;
  email: string;
  telefone: string;
  titulo: string;
  previa: string;
  status: StatusOcorrencia;
  tab: TabOcorrencia;
  online: boolean;
  pacientes: Paciente[];
  mensagens: Mensagem[];
}

interface RespostaRapida {
  label: string;
  mensagem: string;
}

// ── Sub-componentes ────────────────────────────────────────────────────────

interface AvatarProps {
  size?: "sm" | "lg";
}
function Avatar({ size = "sm" }: AvatarProps) {
  const dim = size === "lg" ? "h-20 w-20 text-2xl" : "h-10 w-10 text-base";
  return (
    <div className={`rounded-full bg-[#ddd] flex items-center justify-center shrink-0 ${dim}`}>
      👤
    </div>
  );
}

interface BadgeStatusProps {
  status: StatusOcorrencia;
}
function BadgeStatus({ status }: BadgeStatusProps) {
  const cor =
    status === "vermelho" ? "bg-red-500" :
    status === "amarelo"  ? "bg-orange-400" :
    "bg-transparent";
  return <span className={`h-2.5 w-2.5 rounded-full mt-2 shrink-0 ${cor}`} />;
}

interface BubbleProps {
  mensagem: Mensagem;
}
function Bubble({ mensagem }: BubbleProps) {
  const isPro = mensagem.de === "profissional";
  return (
    <div className={`flex gap-3 ${isPro ? "" : "justify-end"}`}>
      {isPro && <Avatar />}
      <div className={`p-3 rounded-lg max-w-[60%] ${isPro ? "bg-[#eee]" : "bg-[#7ba4a8] text-white"}`}>
        <p className="text-sm">{mensagem.texto}</p>
        <span className={`text-xs ${isPro ? "text-gray-500" : ""}`}>{mensagem.hora}</span>
      </div>
    </div>
  );
}

interface ModalReencaminharProps {
  nomeAtual: string;
  onConfirmar: (destino: string, motivo: string) => void;
  onFechar: () => void;
}
function ModalReencaminhar({ nomeAtual, onConfirmar, onFechar }: ModalReencaminharProps) {
  const [destino, setDestino] = useState("");
  const [motivo, setMotivo] = useState("");

  const funcionarios = [
    "Ana Coordenadora",
    "Carlos Supervisor",
    "Patrícia Gestora",
    "Rodrigo Triagem",
  ];

  const motivosProntos = [
    "Fora da minha área de atuação",
    "Requer atenção especializada",
    "Sobrecarga de ocorrências",
    "Solicitação do profissional",
  ];

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-[420px] p-6 flex flex-col gap-4">

        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">Reencaminhar ocorrência</h3>
          <button onClick={onFechar} className="text-gray-400 hover:text-gray-700 text-xl leading-none">✕</button>
        </div>

        <p className="text-sm text-gray-500">
          Ocorrência de <strong>{nomeAtual}</strong> será transferida para outro responsável.
        </p>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Encaminhar para</label>
          <select
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
            className="border border-[#ddd] rounded-lg px-3 py-2 text-sm outline-none focus:border-[#c4d600]"
          >
            <option value="">Selecione um responsável...</option>
            {funcionarios.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Motivo</label>
          <div className="flex flex-wrap gap-2 mb-2">
            {motivosProntos.map((m) => (
              <button
                key={m}
                onClick={() => setMotivo(m)}
                className={`text-xs px-2 py-1 rounded border transition ${
                  motivo === m
                    ? "bg-[#c4d600] border-[#c4d600] font-semibold"
                    : "bg-[#f3f3f3] border-[#ddd] hover:border-[#c4d600]"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
          <textarea
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
            rows={3}
            placeholder="Ou descreva o motivo..."
            className="border border-[#ddd] rounded-lg px-3 py-2 text-sm outline-none resize-none focus:border-[#c4d600]"
          />
        </div>

        <div className="flex gap-2 justify-end mt-1">
          <button
            onClick={onFechar}
            className="px-4 py-2 rounded-lg bg-[#f3f3f3] text-sm hover:bg-[#e8e8e8] transition"
          >
            Cancelar
          </button>
          <button
            onClick={() => { if (destino && motivo) onConfirmar(destino, motivo); }}
            disabled={!destino || !motivo}
            className="px-4 py-2 rounded-lg bg-[#c4d600] text-sm font-semibold hover:bg-[#afc000] transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Confirmar reencaminhamento
          </button>
        </div>

      </div>
    </div>
  );
}

// ── Dados ──────────────────────────────────────────────────────────────────

const respostasRapidas: RespostaRapida[] = [
  {
    label: "Confirmar",
    mensagem: "Recebemos sua solicitação e confirmamos o recebimento. Em breve entraremos em contato com os próximos passos.",
  },
  {
    label: "Solicitar lista",
    mensagem: "Para darmos continuidade, precisamos que você nos envie a lista completa de pacientes ativos, com nome e status do tratamento de cada um.",
  },
  {
    label: "Encaminhar",
    mensagem: "Sua ocorrência será encaminhada ao setor responsável. Você receberá um novo contato em breve para alinhar todos os detalhes.",
  },
];

const ocorrenciasIniciais: Ocorrencia[] = [
  {
    id: 0,
    nome: "Dr. Felipe Oliveira",
    cargo: "Dentista Voluntário",
    crm: "CRO/SP 65231",
    email: "felipe@email.com",
    telefone: "(11) 99999-9999",
    titulo: "Sair da Rede",
    previa: "Preciso reencaminhar meus pacientes...",
    status: "vermelho",
    tab: "Pendentes",
    online: true,
    pacientes: [
      { nome: "Ana Pereira", tratamento: "Tratamento de Cárie" },
      { nome: "João Almeida", tratamento: "Tratamento de Cárie" },
    ],
    mensagens: [
      { de: "profissional", texto: "Preciso sair da rede por questões pessoais.", hora: "20 min atrás" },
      { de: "funcionario", texto: "Entendido! Você pode nos informar os pacientes ativos?", hora: "22 min atrás" },
      { de: "profissional", texto: "Tenho 5 pacientes em tratamento.", hora: "20 min atrás" },
    ],
  },
  {
    id: 1,
    nome: "Dra. Leticia Mendes",
    cargo: "Médica Voluntária",
    crm: "CRM/SP 12345",
    email: "leticia@email.com",
    telefone: "(11) 98888-7777",
    titulo: "Reportando Agora",
    previa: "Paciente apresentou quadro alérgico...",
    status: "amarelo",
    tab: "Pendentes",
    online: true,
    pacientes: [
      { nome: "Maria Silva", tratamento: "Alergia Cutânea" },
    ],
    mensagens: [
      { de: "profissional", texto: "Paciente apresentou quadro alérgico grave.", hora: "5 min atrás" },
    ],
  },
  {
    id: 2,
    nome: "Dr. Ricardo Santos",
    cargo: "Odontologista",
    crm: "CRO/SP 44212",
    email: "ricardo@email.com",
    telefone: "(11) 97777-6666",
    titulo: "Locação de Consultório",
    previa: "Cadeira disponível para uso...",
    status: "",
    tab: "Respondidas",
    online: false,
    pacientes: [],
    mensagens: [
      { de: "profissional", texto: "Cadeira disponível para uso compartilhado.", hora: "1h atrás" },
      { de: "funcionario", texto: "Obrigado, vamos verificar a demanda.", hora: "55 min atrás" },
    ],
  },
];


export default function Fmonitoramento() {
  const [ocorrencias, setOcorrencias] = useState<Ocorrencia[]>(ocorrenciasIniciais);
  const [ativo, setAtivo] = useState<number>(0);
  const [tabAtiva, setTabAtiva] = useState<TabOcorrencia>("Pendentes");
  const [digitando, setDigitando] = useState<string>("");
  const [ocorrenciaFinalizada, setOcorrenciaFinalizada] = useState<boolean>(false);
  const [modalAberto, setModalAberto] = useState<boolean>(false);

  const chatRef = useRef<HTMLDivElement>(null);
  const ocorrenciaAtual = ocorrencias.find((o) => o.id === ativo) ?? ocorrencias[0];

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [ocorrenciaAtual.mensagens]);

  useEffect(() => {
    setOcorrenciaFinalizada(false);
    setModalAberto(false);
  }, [ativo]);

  const visiveis = ocorrencias.filter((o) => o.tab === tabAtiva);

  function enviarMensagem(texto: string) {
    const msg = texto.trim();
    if (!msg) return;
    const agora = new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
    const nova: Mensagem = { de: "funcionario", texto: msg, hora: agora };
    setOcorrencias((prev) =>
      prev.map((o) => o.id === ativo ? { ...o, mensagens: [...o.mensagens, nova] } : o)
    );
    setDigitando("");
  }

  function finalizarOcorrencia() {
    setOcorrencias((prev) =>
      prev.map((o) => o.id === ativo ? { ...o, tab: "Respondidas", status: "" } : o)
    );
    setOcorrenciaFinalizada(true);
    setTabAtiva("Respondidas");
  }

  function confirmarReencaminhamento(destino: string, motivo: string) {
    const agora = new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
    const msgSistema: Mensagem = {
      de: "funcionario",
      texto: `Ocorrência reencaminhada para ${destino}. Motivo: ${motivo}.`,
      hora: agora,
    };
    setOcorrencias((prev) =>
      prev.map((o) =>
        o.id === ativo
          ? { ...o, tab: "Respondidas", status: "", mensagens: [...o.mensagens, msgSistema] }
          : o
      )
    );
    setModalAberto(false);
    setOcorrenciaFinalizada(true);
    setTabAtiva("Respondidas");
  }

  return (
    <div className="flex min-h-screen flex-col font-sans text-[#010817]">
      <HeaderFuncionario />

      {modalAberto && (
        <ModalReencaminhar
          nomeAtual={ocorrenciaAtual.nome}
          onConfirmar={confirmarReencaminhamento}
          onFechar={() => setModalAberto(false)}
        />
      )}

      <main className="flex h-[calc(100vh-6rem)] bg-[#f4f7f6]">

        {/* ── Coluna Esquerda ── */}
        <section className="w-[25%] bg-white p-6 border-r border-[#ddd] flex flex-col">
          <h2 className="mb-3 text-[28px] font-semibold">Ocorrências</h2>

          <div className="flex gap-2 mb-5">
            {(["Pendentes", "Respondidas"] as TabOcorrencia[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setTabAtiva(tab)}
                className={`rounded px-3 py-1 text-sm transition ${
                  tabAtiva === tab ? "bg-[#010817] text-white" : "bg-[#eee] hover:bg-[#ddd]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3 overflow-y-auto flex-1">
            {visiveis.length === 0 && (
              <p className="text-sm text-gray-400 text-center mt-6">Nenhuma ocorrência.</p>
            )}
            {visiveis.map((item) => (
              <div
                key={item.id}
                onClick={() => setAtivo(item.id)}
                className={`flex gap-3 p-3 border-b border-[#eee] cursor-pointer rounded-lg transition hover:bg-[#fffdf5] ${
                  ativo === item.id ? "bg-[#f0f0f0]" : ""
                }`}
              >
                <Avatar />
                <div className="flex flex-col flex-1 min-w-0">
                  <strong className="text-sm truncate">{item.nome}</strong>
                  <span className="text-sm">{item.titulo}</span>
                  <span className="text-xs text-gray-500 truncate">{item.previa}</span>
                </div>
                <BadgeStatus status={item.status} />
              </div>
            ))}
          </div>
        </section>

        {/* ── Coluna Central: chat ── */}
        <section className="w-[50%] flex flex-col bg-white border-r border-[#ddd]">

          <div className="flex items-center gap-3 border-b border-[#eee] p-4 shrink-0">
            <Avatar />
            <div>
              <strong>{ocorrenciaAtual.nome}</strong>
              <p className={`text-xs ${ocorrenciaAtual.online ? "text-green-600" : "text-gray-400"}`}>
                {ocorrenciaAtual.online ? "online agora" : "offline"}
              </p>
            </div>
            {ocorrenciaFinalizada && (
              <span className="ml-auto text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                ✓ Ocorrência finalizada
              </span>
            )}
          </div>

          <div ref={chatRef} className="flex flex-col gap-6 flex-1 overflow-y-auto p-6">
            {ocorrenciaAtual.mensagens.map((msg, i) => (
              <Bubble key={i} mensagem={msg} />
            ))}

            <div className="flex gap-2 flex-wrap mt-2">
              {respostasRapidas.map((r) => (
                <button
                  key={r.label}
                  onClick={() => enviarMensagem(r.mensagem)}
                  title={r.mensagem}
                  className="bg-[#eee] px-3 py-1 rounded text-sm hover:bg-[#ddd] transition"
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-2 border-t border-[#ddd] p-3 shrink-0">
            <input
              value={digitando}
              onChange={(e) => setDigitando(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && enviarMensagem(digitando)}
              className="flex-1 rounded-lg bg-[#f3f3f3] p-3 outline-none text-sm"
              placeholder="Digite sua resposta..."
            />
            <button
              onClick={() => enviarMensagem(digitando)}
              className="bg-[#c4d600] px-4 rounded font-semibold hover:bg-[#afc000] transition"
            >
              Enviar
            </button>
          </div>
        </section>

        {/* ── Coluna Direita: perfil ── */}
        <section className="w-[25%] bg-white p-6 flex flex-col gap-5 overflow-y-auto">

          <div className="flex flex-col items-center text-center">
            <Avatar size="lg" />
            <h3 className="mt-2 font-semibold">{ocorrenciaAtual.nome}</h3>
            <p className="text-sm">{ocorrenciaAtual.cargo}</p>
            <p className="text-sm text-gray-500">{ocorrenciaAtual.crm}</p>
          </div>

          <div className="text-sm flex flex-col gap-1">
            <p>📧 {ocorrenciaAtual.email}</p>
            <p>📞 {ocorrenciaAtual.telefone}</p>
          </div>

          {ocorrenciaAtual.pacientes.length > 0 && (
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold">Pacientes atuais</h4>
              {ocorrenciaAtual.pacientes.map((p, i) => (
                <div key={i} className="flex gap-3 items-center">
                  <div className="h-10 w-10 rounded-full bg-[#ddd] shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">{p.nome}</p>
                    <p className="text-xs text-gray-500">{p.tratamento}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-auto flex flex-col gap-2">
            <button
              onClick={finalizarOcorrencia}
              disabled={ocorrenciaFinalizada}
              className="bg-[#c4d600] p-3 rounded font-semibold hover:bg-[#afc000] transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {ocorrenciaFinalizada ? "Finalizada ✓" : "Finalizar Ocorrência"}
            </button>
            <button
              onClick={() => setModalAberto(true)}
              disabled={ocorrenciaFinalizada}
              className="bg-[#f3f3f3] p-3 rounded border hover:bg-[#e8e8e8] transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Reencaminhar
            </button>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}