import { useState } from "react";
import HeaderFuncionario from "../../../components/HeaderFuncionario/HeaderFuncionario";
import Footer from "../../../components/Footer/Footer";

export default function Fmonitoramento() {
  const [ativo, setAtivo] = useState(0);

  const ocorrencias = [
    {
      nome: "Dr. Felipe Oliveira",
      titulo: "Sair da Rede",
      previa: "Preciso reencaminhar meus pacientes...",
      status: "vermelho",
    },
    {
      nome: "Dra. Leticia Mendes",
      titulo: "Reportando Agora",
      previa: "Paciente apresentou quadro alérgico...",
      status: "amarelo",
    },
    {
      nome: "Dr. Ricardo Santos",
      titulo: "Locação de Consultório",
      previa: "Cadeira disponível para uso...",
      status: "",
    },
  ];

  const statusColor = (status: string) => {
    switch (status) {
      case "vermelho":
        return "bg-red-500";
      case "amarelo":
        return "bg-orange-400";
      default:
        return "bg-transparent";
    }
  };

  return (
    <div className="flex min-h-screen flex-col font-sans text-[#010817]">

      <HeaderFuncionario />

      <main className="flex h-[calc(100vh-6rem)] bg-[#f4f7f6]">

        <section className="w-[25%] bg-white p-6 border-r border-[#ddd]">

          <h2 className="mb-3 text-[28px] font-semibold">
            Ocorrências
          </h2>

          <div className="flex gap-2 mb-5">
            <span className="rounded bg-[#010817] px-3 py-1 text-sm text-white">
              Pendentes
            </span>
            <span className="rounded bg-[#eee] px-3 py-1 text-sm">
              Respondidas
            </span>
          </div>

          <div className="flex flex-col gap-3 overflow-y-auto">

            {ocorrencias.map((item, index) => (
              <div
                key={index}
                onClick={() => setAtivo(index)}
                className={`flex gap-3 p-3 border-b border-[#eee] cursor-pointer rounded-lg transition hover:bg-[#fffdf5] ${
                  ativo === index ? "bg-[#f0f0f0]" : ""
                }`}
              >

                <div className="h-10 w-10 rounded-full bg-[#ddd] flex items-center justify-center">
                  👤
                </div>

                <div className="flex flex-col flex-1">

                  <strong className="text-sm">
                    {item.nome}
                  </strong>

                  <span className="text-sm">
                    {item.titulo}
                  </span>

                  <span className="text-xs text-gray-500">
                    {item.previa}
                  </span>

                </div>

                <span className={`h-2.5 w-2.5 rounded-full mt-2 ${statusColor(item.status)}`} />

              </div>
            ))}

          </div>

        </section>

        <section className="w-[50%] flex flex-col bg-white">

          <div className="flex items-center gap-3 border-b border-[#eee] p-4">

            <div className="h-10 w-10 rounded-full bg-[#ddd] flex items-center justify-center">
              👤
            </div>

            <div>
              <strong>Dr. Felipe Oliveira</strong>
              <p className="text-xs text-green-600">online agora</p>
            </div>

          </div>

          <div className="flex flex-col gap-6 flex-1 overflow-y-auto p-6">

            <div className="flex gap-3">
              <div className="h-10 w-10 rounded-full bg-[#ddd] flex items-center justify-center">
                👤
              </div>

              <div className="bg-[#eee] p-3 rounded-lg max-w-[60%]">
                <p>Preciso sair da rede por questões pessoais.</p>
                <span className="text-xs text-gray-500">20 min atrás</span>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="bg-[#7ba4a8] text-white p-3 rounded-lg max-w-[55%]">
                <p>Entendido! Você pode nos informar os pacientes ativos?</p>
                <span className="text-xs">22 min atrás</span>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="h-10 w-10 rounded-full bg-[#ddd] flex items-center justify-center">
                👤
              </div>

              <div className="bg-[#eee] p-3 rounded-lg max-w-[60%]">
                <p>Tenho 5 pacientes em tratamento.</p>
                <span className="text-xs text-gray-500">20 min atrás</span>
              </div>
            </div>

            <div className="flex gap-2 mt-2">
              <button className="bg-[#eee] px-3 py-1 rounded text-sm">
                Confirmar
              </button>
              <button className="bg-[#eee] px-3 py-1 rounded text-sm">
                Solicitar lista
              </button>
              <button className="bg-[#eee] px-3 py-1 rounded text-sm">
                Encaminhar
              </button>
            </div>

          </div>

          <div className="flex gap-2 border-t border-[#ddd] p-3">

            <input
              className="flex-1 rounded-lg bg-[#f3f3f3] p-3 outline-none"
              placeholder="Digite sua resposta..."
            />

            <button className="bg-[#c4d600] px-4 rounded font-semibold">
              Enviar
            </button>

          </div>

        </section>

        <section className="w-[25%] bg-white p-6 border-l border-[#ddd] flex flex-col gap-5">

          <div className="flex flex-col items-center text-center">

            <div className="h-20 w-20 rounded-full bg-[#ddd] flex items-center justify-center">
              👤
            </div>

            <h3 className="mt-2 font-semibold">
              Dr. Felipe Oliveira
            </h3>

            <p className="text-sm">Dentista Voluntário</p>
            <p className="text-sm">CRO/SP 65231</p>

          </div>

          <div className="text-sm">
            <p>📧 email@email.com</p>
            <p>📞 (11) 99999-9999</p>
          </div>

          <div className="flex flex-col gap-3">

            <h4 className="font-semibold">
              Pacientes atuais
            </h4>

            <div className="flex gap-3">
              <div className="h-10 w-10 rounded-full bg-[#ddd]" />
              <div>
                <p className="font-semibold text-sm">Ana Pereira</p>
                <p className="text-xs text-gray-500">Tratamento de Cárie</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="h-10 w-10 rounded-full bg-[#ddd]" />
              <div>
                <p className="font-semibold text-sm">João Almeida</p>
                <p className="text-xs text-gray-500">Tratamento de Cárie</p>
              </div>
            </div>

          </div>

          <div className="mt-auto flex flex-col gap-2">

            <button className="bg-[#c4d600] p-3 rounded font-semibold">
              Finalizar Ocorrência
            </button>

            <button className="bg-[#f3f3f3] p-3 rounded border">
              Reencaminhar
            </button>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}