import HeaderVoluntario from '../../../components/HeaderVoluntario/HeaderVoluntario';
import Footer from '../../../components/Footer/Footer';
import CarrosselPacientes from '../../../components/Carrossel/Carrossel';
import { TriangleAlert } from "lucide-react";
import { Link } from "react-router-dom";

function Vinicio() {
  return (
    <>
  <div className="min-h-screen flex flex-col font-[Arial] text-[#010817]">

      <HeaderVoluntario />

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
              <h2 className="text-[1.1rem] [@media(min-width:992px)]:text-[1.2rem] font-bold mb-4">
                Alertas Recebidos
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
                  { label: 'Reportar',                   icon: null },
                  { label: 'Conversar',                  icon: null },
                  { label: 'Solicitar clínica parceira', icon: <TriangleAlert size={18} color="orange" /> },
                ].map((item, i, arr) => (
                  <div
                    key={item.label}
                    className={`flex justify-between items-center py-3 font-bold text-[0.9rem] cursor-pointer hover:text-gray-600 transition-colors ${i < arr.length - 1 ? 'border-b border-black/5' : ''}`}
                  >
                    {item.label}
                    {item.icon}
                  </div>
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