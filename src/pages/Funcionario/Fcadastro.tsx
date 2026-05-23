import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Plus, X, User, ChevronRight } from "lucide-react";
import HeaderFuncionario from "../../components/HeaderFuncionario";
import Footer from "../../components/Footer";
import FiltrosBusca from "../../components/FiltrosBusca";
import { enviarCadastro } from "../../api/PostCadastro";
import { getCadastros } from "../../api/GetCadastro";

interface Usuario {
  nome: string;
  dataNascimento: string;
  idade: string;
  status: string;
  categoria: string;
  cpf: string;
  email: string;
  telefone: string;
}

// ─── Modal Detalhe ────────────────────────────────────────────────────────────

function DetalheModal({ usuario, onClose }: { usuario: Usuario; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-[#010817]">Detalhes do Cadastro</h2>
          <button onClick={onClose} className="text-[#999] hover:text-[#333]"><X size={20} /></button>
        </div>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-full bg-[#f0f0f0] flex items-center justify-center">
            <User size={24} className="text-[#aaa]" />
          </div>
          <div>
            <p className="font-bold text-[#010817]">{usuario.nome}</p>
            <span className={`text-xs font-bold px-2 py-0.5 rounded ${usuario.categoria === "Voluntário" ? "bg-[#c4d600] text-black" : "bg-[#dff3ff] text-[#006494]"}`}>
              {usuario.categoria}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-sm text-[#555]">
          {[
            ["Idade",    usuario.idade],
            ["CPF",      usuario.cpf],
            ["E-mail",   usuario.email],
            ["Telefone", usuario.telefone],
            ["Status",   usuario.status],
          ].map(([label, valor]) => (
            <div key={label} className="flex justify-between border-b border-[#f0f0f0] pb-2 last:border-0">
              <span className="font-bold text-[#010817]">{label}</span>
              <span>{valor}</span>
            </div>
          ))}
        </div>
        <button onClick={onClose} className="mt-5 w-full bg-[#f2f2f2] hover:bg-[#e0e0e0] text-[#333] font-bold py-2 rounded-lg text-sm transition">
          Fechar
        </button>
      </div>
    </div>
  );
}

// ─── Modal Novo Cadastro ──────────────────────────────────────────────────────

interface CadastroForm {
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  dataNascimento: string;
  categoria: string;
  status: string;
}

function calcularIdade(dataNascimento: string): number {
  const [ano, mes, dia] = dataNascimento.split("-").map(Number);
  const hoje = new Date();
  let idade = hoje.getFullYear() - ano;
  const mesDiff = hoje.getMonth() + 1 - mes;
  if (mesDiff < 0 || (mesDiff === 0 && hoje.getDate() < dia)) idade--;
  return idade;
}

function NovoCadastroModal({ onClose, onSalvar }: { onClose: () => void; onSalvar: () => Promise<void> }) {
  const [sucesso, setSucesso]               = useState(false);
  const [nomeConfirmado, setNomeConfirmado] = useState("");

  const { register, handleSubmit, watch, formState: { errors } } = useForm<CadastroForm>({
    defaultValues: { categoria: "Voluntário", status: "Ativo" },
  });

  const dataNasc        = watch("dataNascimento");
  const idadeCalculada  = dataNasc && dataNasc.length === 10 ? calcularIdade(dataNasc) : null;

  const onSubmit = async (data: CadastroForm) => {
    const idade = calcularIdade(data.dataNascimento);
    const novoUsuario: Usuario = {
      nome: data.nome, dataNascimento: data.dataNascimento,
      idade: `${idade} anos`, status: data.status,
      categoria: data.categoria, cpf: data.cpf,
      email: data.email, telefone: data.telefone,
    };
    const ok = await enviarCadastro(novoUsuario);
    if (!ok) return;
    await onSalvar();
    setNomeConfirmado(data.nome);
    setSucesso(true);
    setTimeout(() => { setSucesso(false); onClose(); }, 1800);
  };

  const inputClass = (hasError: boolean) =>
    `border rounded-lg px-3 py-2 text-sm outline-none text-[#333] w-full transition ${hasError ? "border-red-400 focus:border-red-400" : "border-[#eee] focus:border-[#c4d600]"}`;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-bold text-[#010817]">Novo Cadastro</h2>
          <button onClick={onClose} className="text-[#999] hover:text-[#333]"><X size={20} /></button>
        </div>

        {sucesso ? (
          <div className="flex flex-col items-center gap-3 py-8">
            <div className="w-14 h-14 rounded-full bg-[#c4d600] flex items-center justify-center text-2xl">✓</div>
            <p className="font-bold text-[#010817]">Cadastro realizado!</p>
            <p className="text-sm text-[#999]">{nomeConfirmado} foi adicionado com sucesso.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-3">
            <div className="flex gap-3">
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-xs font-bold text-[#010817]">Categoria*</label>
                <select {...register("categoria")} className="border border-[#eee] rounded-lg px-3 py-2 text-sm outline-none text-[#010817] cursor-pointer">
                  <option value="Voluntário">Voluntário</option>
                  <option value="Beneficiário">Beneficiário</option>
                </select>
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-xs font-bold text-[#010817]">Status*</label>
                <select {...register("status")} className="border border-[#eee] rounded-lg px-3 py-2 text-sm outline-none text-[#010817] cursor-pointer">
                  <option value="Ativo">Ativo</option>
                  <option value="Encaminhado">Encaminhado</option>
                  <option value="Atendimento">Atendimento</option>
                  <option value="Finalizado">Finalizado</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-[#010817]">Nome completo*</label>
              <input placeholder="Ex: João Silva" className={inputClass(!!errors.nome)}
                {...register("nome", {
                  required: "Nome é obrigatório",
                  minLength: { value: 3, message: "Mínimo 3 caracteres" },
                  pattern: { value: /^[a-zA-ZÀ-ÿ\s]+$/, message: "Apenas letras são permitidas" },
                })} />
              {errors.nome && <span className="text-red-500 text-xs">{errors.nome.message}</span>}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-[#010817]">Data de nascimento*</label>
              <div className="flex items-center gap-2">
                <input type="date" className={inputClass(!!errors.dataNascimento)}
                  max={new Date().toISOString().split("T")[0]}
                  {...register("dataNascimento", {
                    required: "Data de nascimento é obrigatória",
                    validate: (v) => { const i = calcularIdade(v); return (i >= 0 && i <= 120) || "Data inválida"; },
                  })} />
                {idadeCalculada !== null && (
                  <span className="text-sm text-[#010817] font-bold whitespace-nowrap bg-[#f2f2f2] px-3 py-2 rounded-lg">
                    {idadeCalculada} anos
                  </span>
                )}
              </div>
              {errors.dataNascimento && <span className="text-red-500 text-xs">{errors.dataNascimento.message}</span>}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-[#010817]">CPF*</label>
              <input placeholder="000.000.000-00" className={inputClass(!!errors.cpf)}
                {...register("cpf", {
                  required: "CPF é obrigatório",
                  pattern: { value: /^(\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11})$/, message: "Digite um CPF válido" },
                })} />
              {errors.cpf && <span className="text-red-500 text-xs">{errors.cpf.message}</span>}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-[#010817]">E-mail*</label>
              <input type="email" placeholder="email@exemplo.com" className={inputClass(!!errors.email)}
                {...register("email", {
                  required: "E-mail é obrigatório",
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "E-mail inválido" },
                })} />
              {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-[#010817]">Telefone*</label>
              <input placeholder="(11) 99999-9999" className={inputClass(!!errors.telefone)}
                {...register("telefone", {
                  required: "Telefone é obrigatório",
                  pattern: { value: /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/, message: "Formato: (11) 99999-9999" },
                })} />
              {errors.telefone && <span className="text-red-500 text-xs">{errors.telefone.message}</span>}
            </div>

            <div className="flex gap-2 mt-2">
              <button type="button" onClick={onClose}
                className="flex-1 border border-[#eee] text-[#555] font-bold py-2 rounded-lg text-sm hover:bg-[#f2f2f2] transition">
                Cancelar
              </button>
              <button type="submit"
                className="flex-1 bg-[var(--laranja)] hover:bg-[#e57d05] text-white font-bold py-2 rounded-lg text-sm transition">
                Cadastrar
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────

export default function CadastroF() {
  const [busca, setBusca]                     = useState("");
  const [filtroCategoria, setFiltroCategoria] = useState("");
  const [filtroStatus, setFiltroStatus]       = useState("");
  const [filtroIdade, setFiltroIdade]         = useState("");
  const [modalDetalhe, setModalDetalhe]       = useState<Usuario | null>(null);
  const [modalNovo, setModalNovo]             = useState(false);
  const [usuarios, setUsuarios]               = useState<Usuario[]>([]);

  useEffect(() => { getCadastros().then(setUsuarios); }, []);

  const handleNovoUsuario = async () => {
    const atualizado = await getCadastros();
    setUsuarios(atualizado);
  };

  const getIdadeFaixa = (idadeStr: string) => {
    const n = parseInt(idadeStr);
    if (n <= 20) return "Até 20";
    if (n <= 30) return "21-30";
    if (n <= 40) return "31-40";
    return "41+";
  };

  const temFiltro = !!filtroStatus || !!filtroIdade;

  const usuariosFiltrados = usuarios.filter((u) => {
    const matchBusca     = !busca           || u.nome.toLowerCase().includes(busca.toLowerCase());
    const matchCategoria = !filtroCategoria || u.categoria === filtroCategoria;
    const matchStatus    = !filtroStatus    || u.status    === filtroStatus;
    const matchIdade     = !filtroIdade     || getIdadeFaixa(u.idade) === filtroIdade;
    return matchBusca && matchCategoria && matchStatus && matchIdade;
  });

  return (
    <div className="min-h-screen flex flex-col font-[Arial] text-[#010817]">
      <HeaderFuncionario />

      {modalDetalhe && <DetalheModal usuario={modalDetalhe} onClose={() => setModalDetalhe(null)} />}
      {modalNovo && (
        <NovoCadastroModal onClose={() => setModalNovo(false)} onSalvar={handleNovoUsuario} />
      )}

      <main className="font-[Arial] text-[#010817] px-4 py-6 md:px-6 md:py-6 [@media(min-width:992px)]:mx-12 [@media(min-width:992px)]:my-[2rem] [@media(min-width:992px)]:px-0">

        {/* FiltrosBusca + botão Novo Cadastro lado a lado no desktop */}
        <div className="flex flex-col [@media(min-width:992px)]:flex-row [@media(min-width:992px)]:justify-between [@media(min-width:992px)]:items-start gap-4">
          <div className="flex-1">
            <FiltrosBusca
              busca={busca}
              onBuscaChange={setBusca}
              placeholder="Pesquisar cpf ou nome..."

              filtrosSelect={[
                {
                  placeholder: "Categoria",
                  value: filtroCategoria,
                  onChange: setFiltroCategoria,
                  opcoes: [
                    { label: "Voluntário",   value: "Voluntário"   },
                    { label: "Beneficiário", value: "Beneficiário" },
                  ],
                },
                {
                  placeholder: "Status",
                  value: filtroStatus,
                  onChange: setFiltroStatus,
                  opcoes: [
                    { label: "Ativo",        value: "Ativo"        },
                    { label: "Encaminhado",  value: "Encaminhado"  },
                    { label: "Atendimento",  value: "Atendimento"  },
                    { label: "Finalizado",   value: "Finalizado"   },
                  ],
                },
                {
                  placeholder: "Idade",
                  value: filtroIdade,
                  onChange: setFiltroIdade,
                  opcoes: [
                    { label: "Até 20 anos", value: "Até 20" },
                    { label: "21–30 anos",  value: "21-30"  },
                    { label: "31–40 anos",  value: "31-40"  },
                    { label: "41+ anos",    value: "41+"    },
                  ],
                },
              ]}

              tabs={[
                { label: "Todos",         contagem: usuarios.length },
                { label: "Voluntários",   contagem: usuarios.filter((u) => u.categoria === "Voluntário").length  },
                { label: "Beneficiários", contagem: usuarios.filter((u) => u.categoria === "Beneficiário").length },
              ]}
              tabAtiva={
                filtroCategoria === ""            ? "Todos"
                : filtroCategoria === "Voluntário" ? "Voluntários"
                : "Beneficiários"
              }
              onTabChange={(tab) =>
                setFiltroCategoria(
                  tab === "Todos" ? "" : tab === "Voluntários" ? "Voluntário" : "Beneficiário"
                )
              }

              temFiltroAtivo={temFiltro}
              onLimparFiltros={() => { setFiltroStatus(""); setFiltroIdade(""); }}
            />
          </div>

          <button
            onClick={() => setModalNovo(true)}
            className="flex items-center justify-center gap-[10px] rounded-lg bg-[var(--laranja)] px-6 text-[0.95rem] font-bold text-white hover:bg-[#e57d05] cursor-pointer h-[50px] w-full [@media(min-width:992px)]:w-auto [@media(min-width:992px)]:whitespace-nowrap [@media(min-width:992px)]:mt-0"
          >
            <Plus size={18} /> Novo Cadastro
          </button>
        </div>

        <section>
          <div className="border border-[#eee] rounded-xl overflow-hidden flex flex-col">
            <div className="overflow-x-auto">
              <div className="min-w-[480px]">
                <div className="flex items-center px-4 [@media(min-width:992px)]:px-6 py-4 bg-[#fafafa] border-b-2 border-[#eee]">
                  <span className="w-[35%] [@media(min-width:992px)]:w-[30%] font-bold text-black text-sm">Nome</span>
                  <span className="w-[15%] [@media(min-width:992px)]:w-[20%] font-bold text-black text-sm">Idade</span>
                  <span className="w-[20%] font-bold text-black text-sm">Status</span>
                  <span className="w-[20%] font-bold text-black text-sm">Categoria</span>
                  <span className="w-[10%] font-bold text-black text-sm">Detalhes</span>
                </div>

                {usuariosFiltrados.length > 0 ? usuariosFiltrados.map((usuario, index) => (
                  <div key={index} className="flex items-center px-4 [@media(min-width:992px)]:px-6 py-4 border-b border-[#f5f5f5] hover:bg-[#fffdf5]">
                    <span className="w-[35%] [@media(min-width:992px)]:w-[30%] text-[#555] text-sm">{usuario.nome}</span>
                    <span className="w-[15%] [@media(min-width:992px)]:w-[20%] text-[#555] text-sm">{usuario.idade}</span>
                    <span className="w-[20%] text-[#555] text-sm">{usuario.status}</span>
                    <span className="w-[20%] text-[#555] text-sm">{usuario.categoria}</span>
                    <span className="w-[10%] flex justify-center">
                      <button onClick={() => setModalDetalhe(usuario)}
                        className="flex items-center gap-1 text-blue-400 px-2 py-1 rounded text-sm font-bold hover:text-blue-700">
                        Abrir <ChevronRight size={14} />
                      </button>
                    </span>
                  </div>
                )) : (
                  <p className="text-center text-[#999] py-8 text-sm">Nenhum resultado encontrado.</p>
                )}
              </div>
            </div>
          </div>
        </section>

      </main>
      <div className="hidden [@media(min-width:992px)]:block"><Footer /></div>
    </div>
  );
}