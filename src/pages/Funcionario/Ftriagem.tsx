import { useState } from "react";
import { ChevronDown, Search, X, Phone, UserCheck, AlertCircle, CheckCircle } from "lucide-react";
import HeaderFuncionario from "../../components/HeaderFuncionario/HeaderFuncionario";
import Footer from "../../components/Footer/Footer";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
type FiltroTab = "Solicitações" | "A encaminhar" | "Encaminhados" | "Rejeitados";
type Prioridade = "Alta" | "Média" | "Baixa";

interface Solicitacao {
  id: number;
  nome: string;
  regiao: string;
  prioridade: Prioridade;
  canal: string;
  tab: FiltroTab;
  telefone?: string;
  email?: string;
}

// ---------------------------------------------------------------------------
// Dados iniciais
// ---------------------------------------------------------------------------
const dadosIniciais: Solicitacao[] = [
  { id: 1, nome: "Rafael Souza Lima", regiao: "São Paulo - ZN", prioridade: "Média", canal: "Ação Esc.", tab: "Solicitações", telefone: "(11) 91234-5678", email: "rafael.lima@email.com" },
  { id: 2, nome: "Mariana Costa Fernandes", regiao: "Rio de Janeiro - ZS", prioridade: "Baixa", canal: "Instagram", tab: "Solicitações", telefone: "(21) 98765-4321", email: "mariana.fernandes@email.com" },
  { id: 3, nome: "Bruno Henrique Alves", regiao: "Belo Horizonte - Centro", prioridade: "Alta", canal: "Site", tab: "A encaminhar", telefone: "(31) 99887-6655", email: "bruno.alves@email.com" },
  { id: 4, nome: "Carla Mendes Ribeiro", regiao: "Curitiba - Batel", prioridade: "Alta", canal: "Ação Esc.", tab: "Encaminhados", telefone: "(41) 91122-3344", email: "carla.ribeiro@email.com" },
  { id: 5, nome: "Felipe Rocha Martins", regiao: "Porto Alegre - Sul", prioridade: "Média", canal: "WhatsApp", tab: "Rejeitados", telefone: "(51) 98833-2211", email: "felipe.martins@email.com" },
  { id: 6, nome: "Juliana Pereira Santos", regiao: "Salvador - Centro", prioridade: "Baixa", canal: "Instagram", tab: "Solicitações", telefone: "(71) 97755-6688", email: "juliana.santos@email.com" },
];

// ---------------------------------------------------------------------------
// Badge de prioridade
// ---------------------------------------------------------------------------
const prioridadeConfig: Record<Prioridade, { bg: string; text: string; border: string }> = {
  Alta: { bg: "#fff0f0", text: "#b85b5b", border: "#f5c0c0" },
  Média: { bg: "#fffbea", text: "#856d00", border: "#f5e49a" },
  Baixa: { bg: "#f0faf4", text: "#2e7d52", border: "#b3dfc7" },
};

// ---------------------------------------------------------------------------
// Modal de Contato
// ---------------------------------------------------------------------------
function ModalContato({ item, onClose, onEncaminhar }: { item: Solicitacao; onClose: () => void; onEncaminhar: () => void }) {
  return (
    <div
      style={{ position: "fixed", inset: 0, background: "rgba(1,8,23,0.45)", zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ background: "#fff", borderRadius: 16, padding: "2rem", width: "100%", maxWidth: 440, boxShadow: "0 20px 60px rgba(0,0,0,0.18)" }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#f0fef0", border: "1.5px solid #c4d600", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 15, color: "#5a6600" }}>
              {item.nome.split(" ").map((n) => n[0]).slice(0, 2).join("")}
            </div>
            <div>
              <p style={{ fontWeight: 700, fontSize: 15, margin: 0, color: "#010817" }}>{item.nome}</p>
              <p style={{ fontSize: 12, color: "#888", margin: 0 }}>{item.regiao}</p>
            </div>
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: "#aaa", padding: 4 }}>
            <X size={18} />
          </button>
        </div>

        {/* Info */}
        <div style={{ background: "#fafafa", borderRadius: 10, padding: "1rem", marginBottom: "1.25rem", display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
            <span style={{ color: "#888" }}>Canal</span>
            <span style={{ fontWeight: 600, color: "#010817" }}>{item.canal}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
            <span style={{ color: "#888" }}>Prioridade</span>
            <span style={{ ...prioridadeConfig[item.prioridade], fontWeight: 600, fontSize: 12, padding: "2px 10px", borderRadius: 20, border: `1px solid ${prioridadeConfig[item.prioridade].border}` }}>
              {item.prioridade}
            </span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
            <span style={{ color: "#888" }}>Telefone</span>
            <span style={{ fontWeight: 600, color: "#010817" }}>{item.telefone}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
            <span style={{ color: "#888" }}>E-mail</span>
            <span style={{ fontWeight: 600, color: "#010817" }}>{item.email}</span>
          </div>
        </div>

        {/* Ações */}
        <div style={{ display: "flex", gap: 10 }}>
          <a
            href={`tel:${item.telefone}`}
            style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "#f5f5f5", border: "1px solid #e5e5e5", borderRadius: 8, padding: "10px 0", fontSize: 13, fontWeight: 600, color: "#444", textDecoration: "none" }}
          >
            <Phone size={15} /> Ligar
          </a>
          <button
            onClick={onEncaminhar}
            style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "#c4d600", border: "none", borderRadius: 8, padding: "10px 0", fontSize: 13, fontWeight: 700, color: "#010817", cursor: "pointer" }}
          >
            <UserCheck size={15} /> Encaminhar
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Modal de Rejeição
// ---------------------------------------------------------------------------
function ModalRejeitar({ item, onClose, onConfirmar }: { item: Solicitacao; onClose: () => void; onConfirmar: (motivo: string) => void }) {
  const [motivo, setMotivo] = useState("");
  const motivos = ["Fora da área de atendimento", "Perfil não se enquadra", "Sem disponibilidade de vagas", "Documentação incompleta", "Outro"];

  return (
    <div
      style={{ position: "fixed", inset: 0, background: "rgba(1,8,23,0.45)", zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ background: "#fff", borderRadius: 16, padding: "2rem", width: "100%", maxWidth: 420, boxShadow: "0 20px 60px rgba(0,0,0,0.18)" }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: "1.25rem" }}>
          <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#fff0f0", border: "1.5px solid #f5c0c0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <AlertCircle size={18} color="#b85b5b" />
          </div>
          <div>
            <p style={{ fontWeight: 700, fontSize: 15, margin: 0, color: "#010817" }}>Rejeitar solicitação</p>
            <p style={{ fontSize: 13, color: "#888", margin: "2px 0 0" }}>
              {item.nome}
            </p>
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: "#aaa", padding: 4, marginLeft: "auto" }}>
            <X size={18} />
          </button>
        </div>

        <p style={{ fontSize: 13, color: "#555", marginBottom: "0.75rem" }}>Selecione o motivo da rejeição:</p>

        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: "1.25rem" }}>
          {motivos.map((m) => (
            <label key={m} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", padding: "8px 12px", borderRadius: 8, border: `1.5px solid ${motivo === m ? "#e74c3c" : "#eee"}`, background: motivo === m ? "#fff5f5" : "#fafafa", fontSize: 13, color: "#333" }}>
              <input type="radio" name="motivo" value={m} checked={motivo === m} onChange={() => setMotivo(m)} style={{ accentColor: "#e74c3c" }} />
              {m}
            </label>
          ))}
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={onClose} style={{ flex: 1, background: "#f5f5f5", border: "1px solid #e5e5e5", borderRadius: 8, padding: "10px 0", fontSize: 13, fontWeight: 600, color: "#555", cursor: "pointer" }}>
            Cancelar
          </button>
          <button
            onClick={() => motivo && onConfirmar(motivo)}
            disabled={!motivo}
            style={{ flex: 1, background: motivo ? "#b85b5b" : "#f0c0c0", border: "none", borderRadius: 8, padding: "10px 0", fontSize: 13, fontWeight: 700, color: "#fff", cursor: motivo ? "pointer" : "not-allowed", transition: "background 0.2s" }}
          >
            Confirmar rejeição
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Modal de Sucesso
// ---------------------------------------------------------------------------
function ModalSucesso({ mensagem, onClose }: { mensagem: string; onClose: () => void }) {
  return (
    <div
      style={{ position: "fixed", inset: 0, background: "rgba(1,8,23,0.35)", zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ background: "#fff", borderRadius: 16, padding: "2rem", width: "100%", maxWidth: 360, textAlign: "center", boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}
      >
        <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#f0fef4", border: "2px solid #c4d600", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" }}>
          <CheckCircle size={26} color="#5a6600" />
        </div>
        <p style={{ fontWeight: 700, fontSize: 16, color: "#010817", margin: "0 0 6px" }}>Sucesso!</p>
        <p style={{ fontSize: 13, color: "#777", margin: "0 0 1.5rem" }}>{mensagem}</p>
        <button onClick={onClose} style={{ background: "#c4d600", border: "none", borderRadius: 8, padding: "10px 24px", fontSize: 13, fontWeight: 700, color: "#010817", cursor: "pointer" }}>
          Ok
        </button>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Página principal
// ---------------------------------------------------------------------------
export default function TriagemF() {
  const [solicitacoes, setSolicitacoes] = useState<Solicitacao[]>(dadosIniciais);
  const [busca, setBusca] = useState("");
  const [filtroPrioridade, setFiltroPrioridade] = useState("");
  const [filtroRegiao, setFiltroRegiao] = useState("");
  const [filtroCanal, setFiltroCanal] = useState("");
  const [tabAtiva, setTabAtiva] = useState<FiltroTab>("Solicitações");

  // Modais
  const [modalContato, setModalContato] = useState<Solicitacao | null>(null);
  const [modalRejeitar, setModalRejeitar] = useState<Solicitacao | null>(null);
  const [modalSucesso, setModalSucesso] = useState<string | null>(null);

  const temFiltro = !!filtroPrioridade || !!filtroCanal || !!filtroRegiao;

  const filtrados = solicitacoes.filter((s) => {
    const matchTab = s.tab === tabAtiva;
    const matchBusca = !busca || s.nome.toLowerCase().includes(busca.toLowerCase());
    const matchPrioridade = !filtroPrioridade || s.prioridade === filtroPrioridade;
    // Compara só a cidade (antes do " - ")
    const matchRegiao = !filtroRegiao || s.regiao.split(" - ")[0].trim() === filtroRegiao;
    const matchCanal = !filtroCanal || s.canal === filtroCanal;
    return matchTab && matchBusca && matchPrioridade && matchRegiao && matchCanal;
  });

  const tabs: FiltroTab[] = [
    "Solicitações",
    "A encaminhar",
    "Encaminhados",
    "Rejeitados",
  ];

  // Cidades únicas (parte antes do " - ")
  const cidadesUnicas = Array.from(
    new Set(solicitacoes.map((s) => s.regiao.split(" - ")[0].trim()))
  ).sort();

  // Mover item para outra aba
  const moverTab = (id: number, novaTab: FiltroTab) => {
    setSolicitacoes((prev) => prev.map((s) => s.id === id ? { ...s, tab: novaTab } : s));
  };

  // Alterar prioridade
  const alterarPrioridade = (id: number, novaPrioridade: Prioridade) => {
    setSolicitacoes((prev) => prev.map((s) => s.id === id ? { ...s, prioridade: novaPrioridade } : s));
  };

  // Encaminhar
  const handleEncaminhar = (item: Solicitacao) => {
    moverTab(item.id, "Encaminhados");
    setModalContato(null);
    setModalSucesso(`${item.nome} foi encaminhado(a) com sucesso.`);
  };

  // Rejeitar
  const handleRejeitar = (item: Solicitacao, _motivo: string) => {
    moverTab(item.id, "Rejeitados");
    setModalRejeitar(null);
    setModalSucesso(`Solicitação de ${item.nome} foi rejeitada.`);
  };

  // Botão de ação primária varia por aba
  const getBotaoPrimario = (item: Solicitacao) => {
    if (item.tab === "Solicitações") {
      return (
        <button
          onClick={() => { moverTab(item.id, "A encaminhar"); setModalSucesso(`${item.nome} movido para "A encaminhar".`); }}
          className="rounded bg-[#c4d600] px-3 py-2 text-xs font-bold text-black hover:bg-[#f1c40f] transition whitespace-nowrap"
        >
          A encaminhar
        </button>
      );
    }
    if (item.tab === "A encaminhar") {
      return (
        <button
          onClick={() => setModalContato(item)}
          className="rounded bg-[#c4d600] px-3 py-2 text-xs font-bold text-black hover:bg-[#f1c40f] transition whitespace-nowrap"
        >
          Contato
        </button>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen flex flex-col font-[Arial] text-[#010817]">

      <HeaderFuncionario />

      {/* Modais */}
      {modalContato && (
        <ModalContato
          item={modalContato}
          onClose={() => setModalContato(null)}
          onEncaminhar={() => handleEncaminhar(modalContato)}
        />
      )}
      {modalRejeitar && (
        <ModalRejeitar
          item={modalRejeitar}
          onClose={() => setModalRejeitar(null)}
          onConfirmar={(motivo) => handleRejeitar(modalRejeitar, motivo)}
        />
      )}
      {modalSucesso && (
        <ModalSucesso mensagem={modalSucesso} onClose={() => setModalSucesso(null)} />
      )}

      <main className="font-[Arial] text-[#010817] px-4 py-6 md:px-6 md:py-6 [@media(min-width:992px)]:mx-12 [@media(min-width:992px)]:my-[2rem] [@media(min-width:992px)]:px-0">

        {/* Busca + Filtros */}
        <section className="flex flex-col [@media(min-width:992px)]:flex-row [@media(min-width:992px)]:justify-between gap-4 mb-[30px]">
          <div className="w-full">

            <div className="flex items-center gap-[15px] border border-[#eee] px-5 py-3 rounded-lg text-[#999] w-full [@media(min-width:992px)]:max-w-[600px] mb-5 bg-white">
              <Search size={18} />
              <input
                type="text"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Filtrar solicitações..."
                className="w-full bg-transparent outline-none text-[#333] placeholder-[#999] text-sm [@media(min-width:992px)]:text-base"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Filtro Região (por cidade) */}
              <div className="relative">
                <select
                  value={filtroRegiao}
                  onChange={(e) => setFiltroRegiao(e.target.value)}
                  className="appearance-none cursor-pointer rounded-lg border border-[#eee] bg-white pl-4 pr-10 py-2 text-sm [@media(min-width:992px)]:text-base text-[#010817] outline-none hover:border-[#c4d600]"
                >
                  <option value="">Região</option>
                  {cidadesUnicas.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Filtro Prioridade */}
              <div className="relative">
                <select
                  value={filtroPrioridade}
                  onChange={(e) => setFiltroPrioridade(e.target.value)}
                  className="appearance-none cursor-pointer rounded-lg border border-[#eee] bg-white pl-4 pr-10 py-2 text-sm [@media(min-width:992px)]:text-base text-[#010817] outline-none hover:border-[#c4d600]"
                >
                  <option value="">Prioridade</option>
                  {(["Alta", "Média", "Baixa"] as Prioridade[]).map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
                <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Filtro Canal */}
              <div className="relative">
                <select
                  value={filtroCanal}
                  onChange={(e) => setFiltroCanal(e.target.value)}
                  className="appearance-none cursor-pointer rounded-lg border border-[#eee] bg-white pl-4 pr-10 py-2 text-sm [@media(min-width:992px)]:text-base text-[#010817] outline-none hover:border-[#c4d600]"
                >
                  <option value="">Canal</option>
                  {["Ação Esc.", "Instagram", "Site", "WhatsApp"].map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
                <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Limpar filtros — só aparece quando há filtro ativo */}
              {temFiltro && (
                <button
                  onClick={() => { setFiltroPrioridade(""); setFiltroCanal(""); setFiltroRegiao(""); }}
                  className="flex items-center gap-2 border border-[#eee] px-4 py-2 rounded-lg text-sm text-[#999] bg-white hover:border-[#f1c40f] hover:text-[#555] transition-colors"
                >
                  <X size={14} />
                  Limpar filtros
                </button>
              )}
            </div>

          </div>
        </section>

        {/* Tabs */}
        <section className="mb-[25px] flex flex-wrap gap-[15px]">
          {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setTabAtiva(tab)}
            className={`flex items-center rounded-full border px-5 py-2 text-sm font-medium transition hover:shadow-sm ${
              tabAtiva === tab
                ? "border-[#f1c40f] bg-white text-black shadow-sm"
                : "border-[#e0e0e0] bg-[#f2f2f2] text-[#333] hover:border-[#f1c40f] hover:bg-white hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
        </section>

        {/* Tabela */}
        <section>
          <div className="border border-[#eee] rounded-xl overflow-hidden flex flex-col">
            <div className="overflow-x-auto">
              <div className="min-w-[850px]">

                <div className="flex items-center px-4 [@media(min-width:992px)]:px-6 py-4 bg-[#fafafa] border-b-2 border-[#eee]">
                  <span className="w-[25%] font-bold text-black text-sm [@media(min-width:992px)]:text-base">Nome</span>
                  <span className="w-[20%] font-bold text-black text-sm [@media(min-width:992px)]:text-base">Região</span>
                  <span className="w-[15%] font-bold text-black text-sm [@media(min-width:992px)]:text-base">Prioridade</span>
                  <span className="w-[15%] font-bold text-black text-sm [@media(min-width:992px)]:text-base">Canal</span>
                  <span className="w-[25%] text-right font-bold text-black text-sm [@media(min-width:992px)]:text-base">Ações</span>
                </div>

                {filtrados.length > 0 ? filtrados.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center px-4 [@media(min-width:992px)]:px-6 py-4 border-b border-[#f5f5f5] hover:bg-[#fffdf5]"
                  >
                    <span className="w-[25%] text-[#555] text-sm [@media(min-width:992px)]:text-base">{item.nome}</span>
                    <span className="w-[20%] text-[#555] text-sm [@media(min-width:992px)]:text-base">{item.regiao}</span>

                    {/* Prioridade — dropdown inline */}
                    <div className="w-[15%] flex justify-start">
                      <div className="relative">
                        <select
                          value={item.prioridade}
                          onChange={(e) => alterarPrioridade(item.id, e.target.value as Prioridade)}
                          style={{
                            appearance: "none",
                            cursor: "pointer",
                            borderRadius: 20,
                            border: `1px solid ${prioridadeConfig[item.prioridade].border}`,
                            background: prioridadeConfig[item.prioridade].bg,
                            color: prioridadeConfig[item.prioridade].text,
                            paddingLeft: 10,
                            paddingRight: 24,
                            paddingTop: 4,
                            paddingBottom: 4,
                            fontSize: 12,
                            fontWeight: 600,
                            outline: "none",
                          }}
                        >
                          {(["Alta", "Média", "Baixa"] as Prioridade[]).map((p) => (
                            <option key={p} value={p}>{p}</option>
                          ))}
                        </select>
                        <ChevronDown
                          size={12}
                          style={{
                            position: "absolute",
                            right: 6,
                            top: "50%",
                            transform: "translateY(-50%)",
                            pointerEvents: "none",
                            color: prioridadeConfig[item.prioridade].text,
                          }}
                        />
                      </div>
                    </div>

                    <span className="w-[15%] text-[#555] text-sm [@media(min-width:992px)]:text-base">{item.canal}</span>

                    {/* Ações */}
                    <div className="flex w-[25%] justify-end gap-2">
                      {getBotaoPrimario(item)}

                      {/* Rejeitar só aparece nas abas que fazem sentido */}
                      {(item.tab === "Solicitações" || item.tab === "A encaminhar") && (
                        <button
                          onClick={() => setModalRejeitar(item)}
                          className="rounded bg-[#ffe5e5] px-3 py-2 text-xs font-bold text-[#b85b5b] hover:bg-[#ffd6d6] transition whitespace-nowrap"
                        >
                          Rejeitar
                        </button>
                      )}

                      {/* Ver detalhes para Encaminhados e Rejeitados */}
                      {(item.tab === "Encaminhados" || item.tab === "Rejeitados") && (
                        <button
                          onClick={() => setModalContato(item)}
                          className="rounded border border-[#ddd] bg-white px-3 py-2 text-xs font-bold text-[#555] hover:border-[#c4d600] transition whitespace-nowrap"
                        >
                          Ver detalhes
                        </button>
                      )}
                    </div>
                  </div>
                )) : (
                  <p className="text-center text-[#999] py-8 text-sm">Nenhum resultado nesta categoria.</p>
                )}

              </div>
            </div>
          </div>
        </section>

      </main>

      <div className="hidden [@media(min-width:992px)]:block">
        <Footer />
      </div>
    </div>
  );
}