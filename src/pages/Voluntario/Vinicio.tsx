import { useState, type JSX } from "react";
import HeaderVoluntario from '../../components/HeaderVoluntario';
import Footer from '../../components/Footer';
import CarrosselPacientes from '../../components/Carrossel';
import { Flag, MessageCircle, TriangleAlert, X } from "lucide-react";
import { Link } from "react-router-dom";

function Vinicio() {
  const alertCount = 0;
  type ModalType = 'reportar' | 'conversar' | 'clinica' | null;
  const [modal, setModal] = useState<ModalType>(null);

    const modais: Record<Exclude<ModalType, null>, {
    titulo: string;
    conteudo: JSX.Element;
  }> = {
    reportar: {
      titulo: 'Reportar',
      conteudo: (
        <div className="flex flex-col gap-3">
          <p className="text-[0.9rem] text-[#555]">Descreva o problema ou situação a ser reportada:</p>
          <textarea
            className="w-full border border-[#ccc] rounded-lg p-3 text-[0.9rem] resize-none focus:outline-none focus:border-[#aaa]"
            rows={4}
            placeholder="Digite aqui..."
          />
          <button
            className="self-end bg-[#010817] text-white text-[0.85rem] font-bold px-5 py-2 rounded-lg hover:opacity-80 transition-opacity"
            onClick={() => setModal(null)}
          >
            Enviar
          </button>
        </div>
      ),
    },
    conversar: {
      titulo: 'Conversar',
      conteudo: (
        <div className="flex flex-col gap-3">
          <p className="text-[0.9rem] text-[#555]">Envie uma mensagem para a equipe da Turma do Bem:</p>
          <textarea
            className="w-full border border-[#ccc] rounded-lg p-3 text-[0.9rem] resize-none focus:outline-none focus:border-[#aaa]"
            rows={4}
            placeholder="Digite sua mensagem..."
          />
          <button
            className="self-end bg-[#010817] text-white text-[0.85rem] font-bold px-5 py-2 rounded-lg hover:opacity-80 transition-opacity"
            onClick={() => setModal(null)}
          >
            Enviar
          </button>
        </div>
      ),
    },
    clinica: {
      titulo: 'Solicitar clínica parceira',
      conteudo: (
        <div className="flex flex-col gap-3">
          <p className="text-[0.9rem] text-[#555]">Preencha os dados para solicitar uma clínica parceira:</p>
          <input
            className="w-full border border-[#ccc] rounded-lg p-3 text-[0.9rem] focus:outline-none focus:border-[#aaa]"
            placeholder="Nome do paciente"
          />
          <input
            className="w-full border border-[#ccc] rounded-lg p-3 text-[0.9rem] focus:outline-none focus:border-[#aaa]"
            placeholder="Motivo da solicitação"
          />
          <button
            className="self-end bg-[#010817] text-white text-[0.85rem] font-bold px-5 py-2 rounded-lg hover:opacity-80 transition-opacity"
            onClick={() => setModal(null)}
          >
            Solicitar
          </button>
        </div>
      ),
    },
  };

  return (
    <>
      <div className="min-h-screen flex flex-col font-[Arial] text-[#010817]">

        <HeaderVoluntario />

        {modal && (
          <div
            className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4"
            onClick={() => setModal(null)}
          >
            <div
              className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-[1.1rem]">{modais[modal].titulo}</h3>
                <button onClick={() => setModal(null)} className="hover:opacity-60 transition-opacity">
                  <X size={20} />
                </button>
              </div>
              {modais[modal].conteudo}
            </div>
          </div>
        )}

        <main
          className="
            font-[Arial] text-[#010817]
            px-4 py-4
            md:px-6 md:py-4
            [@media(min-width:992px)]:flex
            [@media(min-width:992px)]:flex-row
            [@media(min-width:992px)]:mx-12
            [@media(min-width:992px)]:my-4
            [@media(min-width:992px)]:px-0
          "
        >

          <aside
            className="
              w-full mb-6
              [@media(min-width:992px)]:w-[450px]
              [@media(min-width:992px)]:flex-shrink-0
              [@media(min-width:992px)]:pr-10
              [@media(min-width:992px)]:mb-0
            "
          >
            <h1 className="pb-5 font-semibold text-[26px] md:text-[30px] [@media(min-width:992px)]:text-[34px]">
              Olá, Dentista do Bem!
            </h1>

            <section>
              <h2 className="text-[1.1rem] font-bold mb-4">Encaminhados</h2>
              <CarrosselPacientes />
            </section>
          </aside>

          <div
            className="
              w-full flex flex-col gap-6
              [@media(min-width:992px)]:flex-1
              [@media(min-width:992px)]:border-l
              [@media(min-width:992px)]:border-[#ccc]
              [@media(min-width:992px)]:pl-10
              [@media(min-width:992px)]:gap-10
            "
          >

            <section className="w-full rounded-[15px] bg-[#fdfdf5] p-4 [@media(min-width:992px)]:p-[25px]">
              <h3 className="text-[1.2rem] [@media(min-width:992px)]:text-[1.4rem] font-bold">
                Próximas Consultas
              </h3>
              <div className="my-[10px] mb-5 w-[150px] border-b-2 border-[#333]" />

              <div className="w-full">
                <div className="flex py-[10px] border-b border-[#d9d9d9]">
                  <span className="w-[18%] text-[0.8rem] [@media(min-width:992px)]:text-[0.9rem] font-bold text-black pr-2">ID</span>
                  <span className="w-[34%] text-[0.8rem] [@media(min-width:992px)]:text-[0.9rem] font-bold text-black pr-2">Nome</span>
                  <span className="w-[34%] text-[0.8rem] [@media(min-width:992px)]:text-[0.9rem] font-bold text-black pr-2">Agendamento</span>
                  <span className="w-[14%] text-[0.8rem] [@media(min-width:992px)]:text-[0.9rem] font-bold text-black text-right">Detalhes</span>
                </div>

                {[
                  { id: '15666', nome: 'Carlos Vicente',   data: '23/04/26 14:20', destaque: false },
                  { id: '15667', nome: 'Ana Maria Silva',  data: '23/04/26 15:00', destaque: true  },
                  { id: '15668', nome: 'Ricardo Oliveira', data: '24/04/26 09:00', destaque: false },
                  { id: '15669', nome: 'Sophia Ventura',   data: '24/04/26 10:00', destaque: true  },
                  { id: '15670', nome: 'João Mendes',      data: '24/04/26 14:00', destaque: false },
                  { id: '15671', nome: 'Rebeca Lopes',     data: '24/04/26 15:00', destaque: true  },
                ].map((row) => (
                  <div
                    key={row.id}
                    className={`relative flex py-[10px] border-b border-[#d9d9d9] ${row.destaque ? 'bg-[#ececec] pl-[5px]' : ''}`}
                  >
                    <span className="absolute left-0 top-[20%] h-[60%] w-[3px] bg-[#f1c40f]" />
                    <span className="w-[18%] text-[0.8rem] [@media(min-width:992px)]:text-[0.9rem] text-[#444] pl-3 pr-2">{row.id}</span>
                    <span className="w-[34%] text-[0.8rem] [@media(min-width:992px)]:text-[0.9rem] text-[#444] pr-2">{row.nome}</span>
                    <span className="w-[34%] text-[0.8rem] [@media(min-width:992px)]:text-[0.9rem] text-[#444] pr-2">{row.data}</span>
                    <Link to="/agenda" className="w-[14%] text-[0.8rem] [@media(min-width:992px)]:text-[0.9rem] font-bold text-black text-right hover:text-gray-500">
                      ver mais
                    </Link>
                  </div>
                ))}
              </div>

              <div className="mt-[25px] flex justify-end text-[0.78rem] [@media(min-width:992px)]:text-[0.85rem] font-bold">
                <Link to="/agenda" className="text-black hover:text-gray-500">[ Ver agenda completa ]</Link>
              </div>
            </section>

            <div className="flex flex-col gap-6 [@media(min-width:992px)]:flex-row [@media(min-width:992px)]:justify-between [@media(min-width:992px)]:gap-0">

              <section className="w-full [@media(min-width:992px)]:w-[48%]">
                <h2 className="text-[1.1rem] [@media(min-width:992px)]:text-[1.2rem] font-bold mb-4 flex items-center gap-2">
                  Alertas Recebidos
                  {alertCount > 0 && (
                    <span className="bg-red-500 text-white text-[11px] font-bold px-2 py-0.5 rounded-full">
                      {alertCount}
                    </span>
                  )}
                </h2>
                <div className="rounded-xl bg-[#f2f2f2] h-[120px] flex items-center justify-center text-[#888] text-[0.9rem]">
                  Nenhum alerta recebido
                </div>
              </section>

              <section className="w-full [@media(min-width:992px)]:w-[48%]">
                <h2 className="text-[1.1rem] [@media(min-width:992px)]:text-[1.2rem] font-bold mb-4">
                  Turma do Bem
                </h2>
                <div className="rounded-xl bg-[#f9fbc7] p-5">
                  {[
                    { label: 'Reportar',                   icon: <Flag size={17} className="text-[#888]" />,  key: 'reportar'  },
                    { label: 'Conversar',                  icon: <MessageCircle size={17} className="text-[#888]" />, key: 'conversar' },
                    { label: 'Solicitar clínica parceira', icon: <TriangleAlert size={17} color="orange" />,   key: 'clinica'   },
                  ].map((item, i, arr) => (
                    <button
                      key={item.key}
                      onClick={() => setModal(item.key as ModalType)}
                      className={`w-full flex justify-between items-center py-3 font-bold text-[0.9rem] cursor-pointer hover:text-gray-600 transition-colors bg-transparent border-none text-left ${i < arr.length - 1 ? 'border-b border-black/5' : ''}`}
                    >
                      {item.label}
                      {item.icon}
                    </button>
                  ))}
                </div>
              </section>

            </div>

          </div>
        </main>

        <div className="hidden [@media(min-width:992px)]:block">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Vinicio;