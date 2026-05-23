import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ChevronDown, Plus, Search, X, User, ChevronRight } from "lucide-react";
import HeaderFuncionario from "../../components/HeaderFuncionario";
import Footer from "../../components/Footer";
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

interface DetalheModalProps {
  usuario: Usuario;
  onClose: () => void;
}

function DetalheModal({ usuario, onClose }: DetalheModalProps) {
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
          <div className="flex justify-between border-b border-[#f0f0f0] pb-2">
            <span className="font-bold text-[#010817]">Idade</span>
            <span>{usuario.idade}</span>
          </div>
          <div className="flex justify-between border-b border-[#f0f0f0] pb-2">
            <span className="font-bold text-[#010817]">CPF</span>
            <span>{usuario.cpf}</span>
          </div>
          <div className="flex justify-between border-b border-[#f0f0f0] pb-2">
            <span className="font-bold text-[#010817]">E-mail</span>
            <span>{usuario.email}</span>
          </div>
          <div className="flex justify-between border-b border-[#f0f0f0] pb-2">
            <span className="font-bold text-[#010817]">Telefone</span>
            <span>{usuario.telefone}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold text-[#010817]">Status</span>
            <span>{usuario.status}</span>
          </div>
        </div>
        <button onClick={onClose} className="mt-5 w-full bg-[#f2f2f2] hover:bg-[#e0e0e0] text-[#333] font-bold py-2 rounded-lg text-sm transition">
          Fechar
        </button>
      </div>
    </div>
  );
}

// ─── Modal de Novo Cadastro ───────────────────────────────────────────────────

interface NovoCadastroModalProps {
  onClose: () => void;
  onSalvar: () => Promise<void>; // ← só chama o callback, sem passar o usuário
}

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

function NovoCadastroModal({ onClose, onSalvar }: NovoCadastroModalProps) {
  const [sucesso, setSucesso] = useState(false);
  const [nomeConfirmado, setNomeConfirmado] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CadastroForm>({
    defaultValues: { categoria: "Voluntário", status: "Ativo" },
  });

  const dataNasc = watch("dataNascimento");
  const idadeCalculada = dataNasc && dataNasc.length === 10 ? calcularIdade(dataNasc) : null;

  const onSubmit = async (data: CadastroForm) => {
    const idade = calcularIdade(data.dataNascimento);
    const novoUsuario: Usuario = {
      nome:           data.nome,
      dataNascimento: data.dataNascimento,
      idade:          `${idade} anos`,
      status:         data.status,
      categoria:      data.categoria,
      cpf:            data.cpf,
      email:          data.email,
      telefone:       data.telefone,
    };

    const ok = await enviarCadastro(novoUsuario); // 1️⃣ salva no banco
    if (!ok) return;

    await onSalvar(); // 2️⃣ recarrega a lista no CadastroF via getCadastros

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
                <select {...register("categoria")}
                  className="border border-[#eee] rounded-lg px-3 py-2 text-sm outline-none text-[#010817] cursor-pointer">
                  <option value="Voluntário">Voluntário</option>
                  <option value="Beneficiário">Beneficiário</option>
                </select>
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-xs font-bold text-[#010817]">Status*</label>
                <select {...register("status")}
                  className="border border-[#eee] rounded-lg px-3 py-2 text-sm outline-none text-[#010817] cursor-pointer">
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
                    validate: (v) => {
                      const idade = calcularIdade(v);
                      if (idade < 0 || idade > 120) return "Data inválida";
                      return true;
                    },
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

  // 1️⃣ Carrega do banco ao abrir a página
  useEffect(() => {
    getCadastros().then(setUsuarios);
  }, []);

  // 2️⃣ Recarrega do banco após salvar — passado como prop ao modal
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
    const matchBusca     = !busca || u.nome.toLowerCase().includes(busca.toLowerCase());
    const matchCategoria = !filtroCategoria || u.categoria === filtroCategoria;
    const matchStatus    = !filtroStatus || u.status === filtroStatus;
    const matchIdade     = !filtroIdade || getIdadeFaixa(u.idade) === filtroIdade;
    return matchBusca && matchCategoria && matchStatus && matchIdade;
  });

  return (
    <div className="min-h-screen flex flex-col font-[Arial] text-[#010817]">
      <HeaderFuncionario />

      {modalDetalhe && <DetalheModal usuario={modalDetalhe} onClose={() => setModalDetalhe(null)} />}
      {modalNovo && (
        <NovoCadastroModal
          onClose={() => setModalNovo(false)}
          onSalvar={handleNovoUsuario}
        />
      )}

      <main className="font-[Arial] text-[#010817] px-4 py-6 md:px-6 md:py-6 [@media(min-width:992px)]:mx-12 [@media(min-width:992px)]:my-[2rem] [@media(min-width:992px)]:px-0">

        <section className="flex flex-col [@media(min-width:992px)]:flex-row [@media(min-width:992px)]:justify-between gap-4 mb-[30px]">
          <div className="w-full">
            <div className="flex items-center gap-[15px] border border-[#eee] px-5 py-3 rounded-lg text-[#999] w-full [@media(min-width:992px)]:max-w-[600px] mb-5 bg-white">
              <Search size={18} />
              <input type="text" value={busca} onChange={(e) => setBusca(e.target.value)}
                placeholder="Pesquisar cpf ou nome..."
                className="w-full bg-transparent outline-none text-[#333] placeholder-[#999] text-sm [@media(min-width:992px)]:text-base" />
            </div>

            <div className="flex flex-wrap gap-3 mb-[20px] items-center">
              <div className="relative">
                <select value={filtroCategoria} onChange={(e) => setFiltroCategoria(e.target.value)}
                  className="appearance-none border border-[#eee] px-4 py-2 pr-10 rounded-lg cursor-pointer bg-white hover:border-[#c4d600] outline-none text-sm text-[#010817]">
                  <option value="">Categoria</option>
                  <option value="Voluntário">Voluntário</option>
                  <option value="Beneficiário">Beneficiário</option>
                </select>
                <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              <div className="relative">
                <select value={filtroStatus} onChange={(e) => setFiltroStatus(e.target.value)}
                  className="appearance-none border border-[#eee] px-4 py-2 pr-10 rounded-lg cursor-pointer bg-white hover:border-[#c4d600] outline-none text-sm text-[#010817]">
                  <option value="">Status</option>
                  <option value="Ativo">Ativo</option>
                  <option value="Encaminhado">Encaminhado</option>
                  <option value="Atendimento">Atendimento</option>
                  <option value="Finalizado">Finalizado</option>
                </select>
                <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              <div className="relative">
                <select value={filtroIdade} onChange={(e) => setFiltroIdade(e.target.value)}
                  className="appearance-none border border-[#eee] px-4 py-2 pr-10 rounded-lg cursor-pointer bg-white hover:border-[#c4d600] outline-none text-sm text-[#010817]">
                  <option value="">Idade</option>
                  <option value="Até 20">Até 20 anos</option>
                  <option value="21-30">21–30 anos</option>
                  <option value="31-40">31–40 anos</option>
                  <option value="41+">41+ anos</option>
                </select>
                <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {temFiltro && (
                <button onClick={() => { setFiltroStatus(""); setFiltroIdade(""); }}
                  className="flex items-center gap-2 border border-[#eee] px-4 py-2 rounded-lg text-sm text-[#999] bg-white hover:border-[#f1c40f] hover:text-[#555] transition-colors">
                  <X size={14} /> Limpar filtros
                </button>
              )}
            </div>
          </div>

          <button onClick={() => setModalNovo(true)}
            className="flex items-center justify-center gap-[10px] rounded-lg bg-[var(--laranja)] px-6 text-[0.95rem] font-bold text-white hover:bg-[#e57d05] cursor-pointer h-[50px] w-full [@media(min-width:992px)]:w-auto [@media(min-width:992px)]:whitespace-nowrap [@media(min-width:992px)]:self-start">
            <Plus size={18} /> Novo Cadastro
          </button>
        </section>

        <section className="mb-[25px] flex flex-wrap gap-[15px]">
          {[
            { label: "Todos",         count: usuarios.length,                                         filtro: "" },
            { label: "Voluntários",   count: usuarios.filter(u => u.categoria === "Voluntário").length,  filtro: "Voluntário" },
            { label: "Beneficiários", count: usuarios.filter(u => u.categoria === "Beneficiário").length, filtro: "Beneficiário" },
          ].map((item) => (
            <button key={item.label} onClick={() => setFiltroCategoria(item.filtro)}
              className={`flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium transition hover:shadow-sm ${filtroCategoria === item.filtro ? "border-[#f1c40f] bg-white text-black shadow-sm" : "border-[#e0e0e0] bg-[#f2f2f2] text-[#333] hover:border-[#f1c40f] hover:bg-white hover:text-black"}`}>
              {item.label}
              <span className="rounded border border-[#ddd] px-2 py-1 text-xs font-bold text-black">{item.count}</span>
            </button>
          ))}
        </section>

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