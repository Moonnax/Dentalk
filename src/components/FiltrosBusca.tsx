import { Search, X, ChevronDown } from "lucide-react";

// ─── Tipos ────────────────────────────────────────────────────────────────────

export interface OpcaoFiltro {
  label: string;
  value: string;
}

export interface ConfigFiltroSelect {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  opcoes: OpcaoFiltro[];
}

export interface ConfigTab<T extends string = string> {
  label: T;
  /** Contador opcional exibido ao lado do label */
  contagem?: number;
}

interface FiltrosBuscaProps<T extends string = string> {
  /** Valor atual da busca */
  busca: string;
  onBuscaChange: (value: string) => void;
  placeholder?: string;

  /** Filtros tipo <select> — passe quantos quiser (0‥n) */
  filtrosSelect?: ConfigFiltroSelect[];

  /** Tabs de navegação — passe vazio ou omita para não exibir */
  tabs?: ConfigTab<T>[];
  tabAtiva?: T;
  onTabChange?: (tab: T) => void;

  /** Callback chamado ao clicar em "Limpar filtros"
   *  Se omitido, o botão não aparece mesmo com filtros ativos */
  onLimparFiltros?: () => void;

  /** Controle externo de visibilidade do botão Limpar (true = mostra) */
  temFiltroAtivo?: boolean;
}

// ─── Componente ──────────────────────────────────────────────────────────────

export default function FiltrosBusca<T extends string = string>({
  busca,
  onBuscaChange,
  placeholder = "Buscar...",
  filtrosSelect = [],
  tabs = [],
  tabAtiva,
  onTabChange,
  onLimparFiltros,
  temFiltroAtivo = false,
}: FiltrosBuscaProps<T>) {
  return (
    <section className="flex flex-col gap-5 mb-[30px]">

      {/* ── Barra de busca ── */}
      <div className="flex items-center gap-[15px] border border-[#eee] px-5 py-3 rounded-lg text-[#999] w-full [@media(min-width:992px)]:max-w-[600px] bg-white">
        <Search size={18} className="shrink-0" />
        <input
          type="text"
          value={busca}
          onChange={(e) => onBuscaChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none text-[#333] placeholder-[#999] text-sm [@media(min-width:992px)]:text-base"
        />
        {busca && (
          <button
            onClick={() => onBuscaChange("")}
            className="text-[#bbb] hover:text-[#555] transition-colors"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* ── Filtros select + Limpar ── */}
      {filtrosSelect.length > 0 && (
        <div className="flex flex-wrap items-center gap-3">
          {filtrosSelect.map((f) => (
            <div key={f.placeholder} className="relative">
              <select
                value={f.value}
                onChange={(e) => f.onChange(e.target.value)}
                className="appearance-none cursor-pointer rounded-lg border border-[#eee] bg-white pl-4 pr-10 py-2 text-sm [@media(min-width:992px)]:text-base text-[#010817] outline-none hover:border-[#c4d600] transition-colors"
              >
                <option value="">{f.placeholder}</option>
                {f.opcoes.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#010817]"
              />
            </div>
          ))}

          {temFiltroAtivo && onLimparFiltros && (
            <button
              onClick={onLimparFiltros}
              className="flex items-center gap-2 border border-[#eee] px-4 py-2 rounded-lg text-sm text-[#999] bg-white hover:border-[#f1c40f] hover:text-[#555] transition-colors"
            >
              <X size={14} />
              Limpar filtros
            </button>
          )}
        </div>
      )}

      {/* ── Tabs ── */}
      {tabs.length > 0 && onTabChange && (
        <div className="flex flex-wrap gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => onTabChange(tab.label)}
              className={`flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium transition hover:shadow-sm ${
                tabAtiva === tab.label
                  ? "border-[#f1c40f] bg-white text-black shadow-sm"
                  : "border-[#e0e0e0] bg-[#f2f2f2] text-[#333] hover:border-[#f1c40f] hover:bg-white hover:text-black"
              }`}
            >
              {tab.label}
              {tab.contagem !== undefined && (
                <span
                  className={`text-xs font-bold px-1.5 py-0.5 rounded-full leading-none ${
                    tabAtiva === tab.label
                      ? "bg-[#010817] text-white"
                      : "bg-[#d0d0d0] text-[#555]"
                  }`}
                >
                  {tab.contagem}
                </span>
              )}
            </button>
          ))}
        </div>
      )}

    </section>
  );
}