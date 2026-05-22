import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle, X } from "lucide-react";
import { Link } from "react-router-dom";
import HeaderVoluntario from "../../components/HeaderVoluntario/HeaderVoluntario";
import Footer from "../../components/Footer/Footer";
import { getAtendimentos } from "../../api/GetAtendimento";
import { postAtendimento } from "../../api/PostAtendimento";

// ─── Tipos ────────────────────────────────────────────────────────────────────

type FormValues = {
  idConsulta: string;
  paciente: string;
  data: string;
  horarioInicio: string;
  horarioFim: string;
  procedimentos: string;
  pacientePresente: "sim" | "nao";
  observacoes?: string;
};

export type AtendimentoRecord = {
  idConsulta: string;
  paciente: string;
  data: string;
  horarioInicio: string;
  horarioFim: string;
  procedimentos: string;
  pacientePresente: "sim" | "nao";
  observacoes?: string;
};



function fmtData(iso: string) {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y.slice(2)}`;
}

// ─── Componente ───────────────────────────────────────────────────────────────

function Vatendimentos() {
  const [historico, setHistorico]     = useState<AtendimentoRecord[]>([]);
  const [sucesso, setSucesso]         = useState(false);

  useEffect(() => {
  getAtendimentos().then(setHistorico);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onBlur" });

  const presenca = watch("pacientePresente");

  const onSubmit = async (data: FormValues) => {
  // 1️⃣ Salva no banco
  await postAtendimento({
    idConsulta:       data.idConsulta,
    pacienteNome:     data.paciente,
    data:             data.data,
    horarioInicial:   data.horarioInicio,
    horarioFinal:     data.horarioFim,
    procedimento:     data.procedimentos,
    observacoes:      data.observacoes,
    pacientePresente: data.pacientePresente,
  });

  // 2️⃣ Busca a lista atualizada do banco e atualiza a tela
  const atualizado = await getAtendimentos();
  setHistorico(atualizado);

  // 3️⃣ Reseta o formulário
  setSucesso(true);
  reset();
  setTimeout(() => setSucesso(false), 3500);
};

  // Classe base reutilizável para inputs/textareas
  const field = (hasErr: boolean) =>
    `w-full border rounded-lg mt-1 px-3 text-sm outline-none transition-colors focus:border-[#f1c40f] ${
      hasErr ? "border-red-400 bg-red-50" : "border-[#bbb]"
    }`;

  return (
    <div className="min-h-screen flex flex-col font-[Arial] text-[#010817]">
      <HeaderVoluntario />

      <main className="px-4 py-6 md:px-6 lg:px-12 flex flex-col gap-10">

        {/* ── Toast sucesso ── */}
        {sucesso && (
          <div className="flex items-center gap-3 bg-green-500 text-white text-sm font-bold px-5 py-3 rounded-xl shadow">
            <CheckCircle size={18} />
            Atendimento registrado com sucesso!
            <button onClick={() => setSucesso(false)} className="ml-auto">
              <X size={15} />
            </button>
          </div>
        )}

        {/* ══ FORMULÁRIO ══ */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Registrar Atendimento</h2>
          <div className="h-[1px] bg-[#ccc] mb-6" />

          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col lg:flex-row gap-6 bg-white border border-[#eee] rounded-xl p-5"
          >
            {/* ── Coluna esquerda ── */}
            <div className="w-full lg:w-[30%] flex flex-col gap-4">

              {/* ID Consulta */}
              <div>
                <label className="text-sm font-medium">
                  <span className="text-red-500">*</span> ID Consulta:
                </label>
                <input
                  type="text"
                  placeholder="Ex: 1027"
                  className={`${field(!!errors.idConsulta)} h-9`}
                  {...register("idConsulta", {
                    required: "Obrigatório",
                    pattern: { value: /^\d+$/, message: "Somente números" },
                  })}
                />
                {errors.idConsulta && (
                  <p className="text-red-500 text-xs mt-1">{errors.idConsulta.message}</p>
                )}
              </div>

              {/* Paciente */}
              <div>
                <label className="text-sm font-medium">
                  <span className="text-red-500">*</span> Paciente:
                </label>
                <input
                  type="text"
                  placeholder="Nome completo"
                  className={`${field(!!errors.paciente)} h-9`}
                  {...register("paciente", {
                    required: "Obrigatório",
                    minLength: { value: 3, message: "Mínimo 3 caracteres" },
                  })}
                />
                {errors.paciente && (
                  <p className="text-red-500 text-xs mt-1">{errors.paciente.message}</p>
                )}
              </div>

              {/* Data */}
              <div>
                <label className="text-sm font-medium">
                  <span className="text-red-500">*</span> Data:
                </label>
                <input
                  type="date"
                  className={`${field(!!errors.data)} h-9`}
                  {...register("data", { required: "Obrigatório" })}
                />
                {errors.data && (
                  <p className="text-red-500 text-xs mt-1">{errors.data.message}</p>
                )}
              </div>

              {/* Horário início – fim */}
              <div>
                <label className="text-sm font-medium">
                  <span className="text-red-500">*</span> Horário inicial - Horário final:
                </label>
                <div className="flex items-center gap-2 mt-1">
                  <input
                    type="time"
                    className={`flex-1 border rounded-lg px-3 h-9 text-sm outline-none transition-colors focus:border-[#f1c40f] ${errors.horarioInicio ? "border-red-400 bg-red-50" : "border-[#bbb]"}`}
                    {...register("horarioInicio", { required: true })}
                  />
                  <span className="text-[#aaa] text-sm shrink-0">–</span>
                  <input
                    type="time"
                    className={`flex-1 border rounded-lg px-3 h-9 text-sm outline-none transition-colors focus:border-[#f1c40f] ${errors.horarioFim ? "border-red-400 bg-red-50" : "border-[#bbb]"}`}
                    {...register("horarioFim", { required: true })}
                  />
                </div>
                {(errors.horarioInicio || errors.horarioFim) && (
                  <p className="text-red-500 text-xs mt-1">Preencha início e fim</p>
                )}
              </div>

            </div>

            {/* ── Coluna direita ── */}
            <div className="flex-1 flex flex-col gap-5">

              <div className="flex flex-col lg:flex-row gap-4">

                {/* Procedimentos */}
                <div className="flex-1">
                  <label className="text-sm font-medium">
                    <span className="text-red-500">*</span> Procedimentos:
                  </label>
                  <textarea
                    placeholder="Descreva os procedimentos realizados…"
                    className={`${field(!!errors.procedimentos)} h-[140px] py-2 resize-none`}
                    {...register("procedimentos", {
                      required: "Obrigatório",
                      minLength: { value: 5, message: "Mínimo 5 caracteres" },
                    })}
                  />
                  {errors.procedimentos && (
                    <p className="text-red-500 text-xs mt-1">{errors.procedimentos.message}</p>
                  )}
                </div>

                {/* Paciente presente */}
                <div className="w-full lg:w-[25%] flex flex-col gap-3">
                  <span className="text-sm font-medium">
                    <span className="text-red-500">*</span> Paciente Presente?
                  </span>

                  {(["sim", "nao"] as const).map((val) => (
                    <label
                      key={val}
                      className={`flex justify-end items-center gap-2 cursor-pointer select-none rounded-lg px-2 py-1 transition-colors ${presenca === val ? "bg-yellow-50" : ""}`}
                    >
                      <span className="text-sm">{val === "sim" ? "Sim" : "Não"}</span>
                      <input
                        type="radio"
                        value={val}
                        className="hidden"
                        {...register("pacientePresente", { required: true })}
                      />
                      <div
                        className={`w-4 h-4 border rounded-sm transition-colors shrink-0 ${
                          presenca === val
                            ? "bg-[#f1c40f] border-[#c9a800]"
                            : "border-black"
                        }`}
                      />
                    </label>
                  ))}

                  {errors.pacientePresente && (
                    <p className="text-red-500 text-xs">Selecione uma opção</p>
                  )}
                </div>

              </div>

              {/* Observações */}
              <div>
                <label className="text-sm font-medium">Observações:</label>
                <textarea
                  placeholder="Observações adicionais (opcional)…"
                  className="w-full border border-[#bbb] rounded-lg mt-1 px-3 py-2 text-sm outline-none h-[100px] resize-none transition-colors focus:border-[#f1c40f]"
                  {...register("observacoes")}
                />
              </div>

              {/* Salvar */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#f1c40f] px-10 py-2 rounded-full font-bold hover:bg-yellow-400 transition-colors"
                >
                  Salvar
                </button>
              </div>

            </div>
          </form>
        </section>

        {/* ══ HISTÓRICO ══ */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Histórico</h2>
          <div className="h-[1px] bg-[#ccc] mb-6" />

          <div className="border border-[#eee] rounded-xl overflow-hidden bg-white">

            {/* Header desktop */}
            <div className="hidden md:flex bg-[#f9f9f9] font-bold text-sm border-b">
              <div className="w-[10%] p-3">ID</div>
              <div className="w-[18%] p-3">Paciente</div>
              <div className="w-[18%] p-3">Data</div>
              <div className="w-[10%] p-3">Presença</div>
              <div className="w-[22%] p-3">Procedimentos</div>
              <div className="w-[12%] p-3 text-right">Ação</div>
            </div>

            {historico.map((item, i) => (
              <div
                key={i}
                className={`flex flex-col md:flex-row border-b border-[#eee] p-4 hover:bg-[#fffdf5] gap-2 md:gap-0 ${i % 2 === 1 ? "bg-[#fcfcfc]" : "bg-white"}`}
              >
                {/* Mobile */}
                <div className="md:hidden flex flex-col gap-1 text-sm">
                  <p><strong>ID:</strong> {item.idConsulta}</p>
                  <p><strong>Paciente:</strong> {item.paciente}</p>
                  <p><strong>Data:</strong> {fmtData(item.data)} {item.horarioInicio}–{item.horarioFim}</p>
                  <p><strong>Presença:</strong> {item.pacientePresente === "sim" ? "Sim" : "Não"}</p>
                  <p><strong>Procedimentos:</strong> {item.procedimentos}</p>
                  <Link
                    to="/voluntario/prontuarios"
                    state={{ buscaInicial: item.paciente }}
                    className="text-[#555] underline mt-1"
                  >
                    ver mais
                  </Link>
                </div>

                {/* Desktop */}
                <div className="hidden md:flex w-full items-center">
                  <div className="w-[10%] text-sm">{item.idConsulta}</div>
                  <div className="w-[18%] text-sm">{item.paciente}</div>
                  <div className="w-[18%] text-sm">{fmtData(item.data)} {item.horarioInicio}–{item.horarioFim}</div>
                  <div className="w-[10%] text-sm">
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-bold ${
                        item.pacientePresente === "sim"
                          ? "bg-[#c4d600] text-black"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.pacientePresente === "sim" ? "Sim" : "Não"}
                    </span>
                  </div>
                  <div className="w-[22%] text-sm">{item.procedimentos}</div>
                  <div className="w-[12%] text-right">
                    <Link
                      to="/voluntario/prontuarios"
                      state={{ buscaInicial: item.paciente }}
                      className="text-sm underline text-[#555] hover:text-[#010817] transition-colors"
                    >
                      ver mais
                    </Link>
                  </div>
                </div>

              </div>
            ))}

          </div>
        </section>

      </main>

      <div className="hidden [@media(min-width:992px)]:block">
        <Footer />
      </div>
    </div>
  );
}

export default Vatendimentos;