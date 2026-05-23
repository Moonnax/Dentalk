import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle, X } from "lucide-react";
import HeaderVoluntario from "../../components/HeaderVoluntario";
import Footer from "../../components/Footer";
import { getAtendimentos } from "../../api/GetAtendimento";
import { postAtendimento } from "../../api/PostAtendimento";

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

// Modal Ver Mais 

function ModalVerMais({ item, onClose }: { item: AtendimentoRecord; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(1,8,23,0.45)" }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl w-full max-w-md p-8"
        style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.18)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm"
              style={{ background: "#f0fef0", border: "1.5px solid #c4d600", color: "#5a6600" }}
            >
              {item.paciente.split(" ").map((n) => n[0]).slice(0, 2).join("")}
            </div>
            <div>
              <p className="font-bold text-[#010817] text-[0.95rem]">{item.paciente}</p>
              <p className="text-xs text-[#888]">ID Consulta: {item.idConsulta}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#aaa] hover:text-[#333] transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Infos */}
        <div className="flex flex-col gap-[10px] bg-[#fafafa] rounded-xl p-4 mb-5">
          {[
            ["Data",            fmtData(item.data)],
            ["Horário",        `${item.horarioInicio} – ${item.horarioFim}`],
            ["Paciente presente", item.pacientePresente === "sim" ? "Sim" : "Não"],
            ["Procedimentos",  item.procedimentos],
          ].map(([label, valor]) => (
            <div key={label} className="flex justify-between gap-4 text-[13px]">
              <span className="text-[#888] shrink-0">{label}</span>
              <span className="font-semibold text-[#010817] text-right">{valor}</span>
            </div>
          ))}

          {item.observacoes && (
            <div className="flex flex-col gap-1 pt-3 border-t border-[#eee] mt-1">
              <span className="text-[#888] text-[13px]">Observações</span>
              <div
                className="text-[13px] font-semibold rounded-lg px-3 py-[10px]"
                style={{ background: "#fffdf0", border: "1px solid #f5e49a", color: "#856d00" }}
              >
                {item.observacoes}
              </div>
            </div>
          )}
        </div>

        <button
          onClick={onClose}
          className="w-full bg-[#f2f2f2] hover:bg-[#e4e4e4] text-[#333] font-bold py-2 rounded-lg text-sm transition-colors"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}

function Vatendimentos() {
  const [historico, setHistorico]         = useState<AtendimentoRecord[]>([]);
  const [sucesso, setSucesso]             = useState(false);
  const [modalItem, setModalItem]         = useState<AtendimentoRecord | null>(null);

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
    const atualizado = await getAtendimentos();
    setHistorico(atualizado);
    setSucesso(true);
    reset();
    setTimeout(() => setSucesso(false), 3500);
  };

  const field = (hasErr: boolean) =>
    `w-full border rounded-lg mt-1 px-3 text-sm outline-none transition-colors focus:border-[#f1c40f] ${
      hasErr ? "border-red-400 bg-red-50" : "border-[#bbb]"
    }`;

  return (
    <div className="min-h-screen flex flex-col font-[Arial] text-[#010817]">
      <HeaderVoluntario />

      {/* Modal Ver Mais */}
      {modalItem && (
        <ModalVerMais item={modalItem} onClose={() => setModalItem(null)} />
      )}

      <main className="px-4 py-6 md:px-6 lg:px-12 flex flex-col gap-10">

        {/* Toast sucesso */}
        {sucesso && (
          <div className="flex items-center gap-3 bg-green-500 text-white text-sm font-bold px-5 py-3 rounded-xl shadow">
            <CheckCircle size={18} />
            Atendimento registrado com sucesso!
            <button onClick={() => setSucesso(false)} className="ml-auto">
              <X size={15} />
            </button>
          </div>
        )}

        {/* FORMULÁRIO  */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Registrar Atendimento</h2>
          <div className="h-[1px] bg-[#ccc] mb-6" />

          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col lg:flex-row gap-6 bg-white border border-[#eee] rounded-xl p-5"
          >
            {/* Coluna esquerda */}
            <div className="w-full lg:w-[30%] flex flex-col gap-4">

              <div>
                <label className="text-sm font-medium"><span className="text-red-500">*</span> ID Consulta:</label>
                <input type="text" placeholder="Ex: 1027" className={`${field(!!errors.idConsulta)} h-9`}
                  {...register("idConsulta", {
                    required: "Obrigatório",
                    pattern: { value: /^\d+$/, message: "Somente números" },
                  })} />
                {errors.idConsulta && <p className="text-red-500 text-xs mt-1">{errors.idConsulta.message}</p>}
              </div>

              <div>
                <label className="text-sm font-medium"><span className="text-red-500">*</span> Paciente:</label>
                <input type="text" placeholder="Nome completo" className={`${field(!!errors.paciente)} h-9`}
                  {...register("paciente", {
                    required: "Obrigatório",
                    minLength: { value: 3, message: "Mínimo 3 caracteres" },
                  })} />
                {errors.paciente && <p className="text-red-500 text-xs mt-1">{errors.paciente.message}</p>}
              </div>

              <div>
                <label className="text-sm font-medium"><span className="text-red-500">*</span> Data:</label>
                <input type="date" className={`${field(!!errors.data)} h-9`}
                  {...register("data", { required: "Obrigatório" })} />
                {errors.data && <p className="text-red-500 text-xs mt-1">{errors.data.message}</p>}
              </div>

              <div>
                <label className="text-sm font-medium"><span className="text-red-500">*</span> Horário inicial - Horário final:</label>
                <div className="flex items-center gap-2 mt-1">
                  <input type="time"
                    className={`flex-1 border rounded-lg px-3 h-9 text-sm outline-none transition-colors focus:border-[#f1c40f] ${errors.horarioInicio ? "border-red-400 bg-red-50" : "border-[#bbb]"}`}
                    {...register("horarioInicio", { required: true })} />
                  <span className="text-[#aaa] text-sm shrink-0">–</span>
                  <input type="time"
                    className={`flex-1 border rounded-lg px-3 h-9 text-sm outline-none transition-colors focus:border-[#f1c40f] ${errors.horarioFim ? "border-red-400 bg-red-50" : "border-[#bbb]"}`}
                    {...register("horarioFim", { required: true })} />
                </div>
                {(errors.horarioInicio || errors.horarioFim) && (
                  <p className="text-red-500 text-xs mt-1">Preencha início e fim</p>
                )}
              </div>

            </div>

            {/* Coluna direita */}
            <div className="flex-1 flex flex-col gap-5">

              <div className="flex flex-col lg:flex-row gap-4">

                <div className="flex-1">
                  <label className="text-sm font-medium"><span className="text-red-500">*</span> Procedimentos:</label>
                  <textarea
                    placeholder="Descreva os procedimentos realizados…"
                    className={`${field(!!errors.procedimentos)} h-[140px] py-2 resize-none`}
                    {...register("procedimentos", {
                      required: "Obrigatório",
                      minLength: { value: 5, message: "Mínimo 5 caracteres" },
                    })} />
                  {errors.procedimentos && <p className="text-red-500 text-xs mt-1">{errors.procedimentos.message}</p>}
                </div>

                <div className="w-full lg:w-[25%] flex flex-col gap-3">
                  <span className="text-sm font-medium"><span className="text-red-500">*</span> Paciente Presente?</span>
                  {(["sim", "nao"] as const).map((val) => (
                    <label
                      key={val}
                      className={`flex justify-end items-center gap-2 cursor-pointer select-none rounded-lg px-2 py-1 transition-colors ${presenca === val ? "bg-yellow-50" : ""}`}
                    >
                      <span className="text-sm">{val === "sim" ? "Sim" : "Não"}</span>
                      <input type="radio" value={val} className="hidden" {...register("pacientePresente", { required: true })} />
                      <div className={`w-4 h-4 border rounded-sm transition-colors shrink-0 ${presenca === val ? "bg-[#f1c40f] border-[#c9a800]" : "border-black"}`} />
                    </label>
                  ))}
                  {errors.pacientePresente && <p className="text-red-500 text-xs">Selecione uma opção</p>}
                </div>

              </div>

              <div>
                <label className="text-sm font-medium">Observações:</label>
                <textarea
                  placeholder="Observações adicionais (opcional)…"
                  className="w-full border border-[#bbb] rounded-lg mt-1 px-3 py-2 text-sm outline-none h-[100px] resize-none transition-colors focus:border-[#f1c40f]"
                  {...register("observacoes")} />
              </div>

              <div className="flex justify-end">
                <button type="submit" className="bg-[#f1c40f] px-10 py-2 rounded-full font-bold hover:bg-yellow-400 transition-colors">
                  Salvar
                </button>
              </div>

            </div>
          </form>
        </section>

        {/* HISTÓRICO */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Histórico</h2>
          <div className="h-[1px] bg-[#ccc] mb-6" />

          <div className="border border-[#eee] rounded-xl overflow-hidden bg-white">

            {/* Header desktop */}
            <div className="hidden md:flex bg-[#f9f9f9] font-bold text-sm border-b">
              <div className="w-[10%] p-3">ID</div>
              <div className="w-[20%] p-3">Paciente</div>
              <div className="w-[18%] p-3">Data</div>
              <div className="w-[10%] p-3">Presença</div>
              <div className="w-[30%] p-3">Procedimentos</div>
              <div className="w-[12%] p-3 text-right">Ação</div>
            </div>

            {historico.length === 0 && (
              <p className="text-center text-[#999] py-8 text-sm">Nenhum atendimento registrado.</p>
            )}

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
                  <button
                    onClick={() => setModalItem(item)}
                    className="text-[#555] underline mt-1 text-left"
                  >
                    ver mais
                  </button>
                </div>

                {/* Desktop */}
                <div className="hidden md:flex w-full items-center">
                  <div className="w-[10%] text-sm">{item.idConsulta}</div>
                  <div className="w-[20%] text-sm">{item.paciente}</div>
                  <div className="w-[18%] text-sm">{fmtData(item.data)} {item.horarioInicio}–{item.horarioFim}</div>
                  <div className="w-[10%] text-sm">
                    <span className={`px-2 py-0.5 rounded text-xs font-bold ${item.pacientePresente === "sim" ? "bg-[#c4d600] text-black" : "bg-red-100 text-red-700"}`}>
                      {item.pacientePresente === "sim" ? "Sim" : "Não"}
                    </span>
                  </div>
                  <div className="w-[30%] text-sm text-[#555] pr-4 truncate">{item.procedimentos}</div>
                  <div className="w-[12%] text-right">
                    <button
                      onClick={() => setModalItem(item)}
                      className="rounded border border-[#ddd] bg-white px-3 py-[6px] text-xs font-bold text-[#555] hover:border-[#c4d600] transition whitespace-nowrap"
                    >
                      Ver mais
                    </button>
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