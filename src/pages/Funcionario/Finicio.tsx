import HeaderFuncionario from "../../components/HeaderFuncionario/HeaderFuncionario";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";


function Finicio() {
  return (
    <>
      <HeaderFuncionario />

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
            Olá, Funcionário do Bem!
          </h1>

          <section className="mb-[25px] flex flex-col justify-between rounded-xl bg-[#f2f2f2] p-6 min-h-[160px] [@media(min-width:992px)]:min-h-[180px] [@media(min-width:992px)]:min-w-[380px]">
            <div className="flex items-start justify-between">
              <div className="flex-1 pr-3">
                <h2 className="my-[10px] text-[1.1rem] font-bold">Aguardando encaminhamentos</h2>
                <p className="text-[0.9rem] text-[var(--font-cinza-normal)]">
                  Encaminhe pacientes aprovados para os voluntários compatíveis
                </p>
              </div>
              <span className="flex h-[35px] w-[35px] flex-shrink-0 items-center justify-center rounded-full bg-[var(--amarelo-escuro)] font-bold text-[var(--preto)]">
                51
              </span>
            </div>
            <div className="flex justify-end mt-4">
              <Link to="/triagemf" className="cursor-pointer font-extrabold text-[var(--preto)] hover:text-gray-500">
                Ir para Fila
              </Link>
            </div>
          </section>

          <section className="mb-[25px] flex flex-col justify-between rounded-xl bg-[#f2f2f2] p-6 min-h-[160px] [@media(min-width:992px)]:min-h-[180px] [@media(min-width:992px)]:min-w-[380px]">
            <div className="flex items-start justify-between">
              <div className="flex-1 pr-3">
                <h2 className="my-[10px] text-[1.1rem] font-bold">Ocorrências urgentes</h2>
                <p className="text-[0.9rem] text-[var(--font-cinza-normal)]">
                  6 pedidos de consultório e 2 desligamentos
                </p>
              </div>
              <span className="flex h-[35px] w-[35px] flex-shrink-0 items-center justify-center rounded-full bg-[var(--amarelo-escuro)] font-bold text-[var(--preto)]">
                8
              </span>
            </div>
            <div className="flex justify-end mt-4">
              <Link to="/monitoramento" className="cursor-pointer font-extrabold text-[var(--preto)] hover:text-gray-500">
                Responder agora
              </Link>
            </div>
          </section>

          <section className="mb-[25px] flex flex-col justify-between rounded-xl bg-[#f2f2f2] p-6 min-h-[160px] [@media(min-width:992px)]:min-h-[180px] [@media(min-width:992px)]:min-w-[380px]">
            <div className="flex items-start justify-between">
              <div className="flex-1 pr-3">
                <h2 className="my-[10px] text-[1.1rem] font-bold">Novas solicitações</h2>
                <div className="text-[0.9rem] text-[var(--font-cinza-normal)]">
                  <p className="my-[5px]">Facebook: 10</p>
                  <p className="my-[5px]">Instagram: 11</p>
                  <p className="my-[5px]">Whatsapp: 30</p>
                </div>
              </div>
              <span className="flex h-[35px] w-[35px] flex-shrink-0 items-center justify-center rounded-full bg-[var(--amarelo-escuro)] font-bold text-[var(--preto)]">
                197
              </span>
            </div>
            <div className="flex justify-end mt-4">
              <Link to="/triagemf" className="cursor-pointer font-extrabold text-[var(--preto)] hover:text-gray-500">
                Ver solicitações
              </Link>
            </div>
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

          <div className="w-full rounded-lg bg-[#f0f0f0] px-5 py-[10px] text-[0.9rem] text-[var(--cinza-claro)]">
            <p>Publicar Aviso Geral para Voluntários</p>
          </div>

          <section className="w-full rounded-[15px] bg-[#fdfdf5] p-4 [@media(min-width:992px)]:p-[25px]">
            <h3 className="text-[1.2rem] [@media(min-width:992px)]:text-[1.4rem] font-bold">
              Alertas de Prazo
            </h3>
            <div className="my-[10px] mb-5 w-[150px] border-b-2 border-[#333]" />

            <div className="w-full">

              <div className="flex py-[10px] border-b border-[#d9d9d9]">
                <span className="w-[33%] text-[0.8rem] [@media(min-width:992px)]:text-[0.9rem] font-bold text-black pr-2">Paciente</span>
                <span className="w-[33%] text-[0.8rem] [@media(min-width:992px)]:text-[0.9rem] font-bold text-black pr-2">Dentista</span>
                <span className="w-[33%] text-[0.8rem] [@media(min-width:992px)]:text-[0.9rem] font-bold text-black">Atraso</span>
              </div>

              <div className="flex py-[10px] border-b border-[#d9d9d9]">
                <span className="w-[33%] text-[0.8rem] [@media(min-width:992px)]:text-[0.9rem] text-[#444] pr-2">Fernando Pereira</span>
                <span className="w-[33%] text-[0.8rem] [@media(min-width:992px)]:text-[0.9rem] text-[#444] pr-2">Dra. Leticia Silva</span>
                <span className="w-[33%] text-[0.8rem] [@media(min-width:992px)]:text-[0.9rem] text-[#444]">13 dias sem início</span>
              </div>

              <div className="flex bg-[#ececec] py-[10px] pl-[5px] border-b border-[#d9d9d9]">
                <span className="w-[33%] text-[0.8rem] [@media(min-width:992px)]:text-[0.9rem] text-[#444] pr-2">Carlos Vicente</span>
                <span className="w-[33%] text-[0.8rem] [@media(min-width:992px)]:text-[0.9rem] text-[#444] pr-2">Dra. Sandra Monteiro</span>
                <span className="w-[33%] text-[0.8rem] [@media(min-width:992px)]:text-[0.9rem] text-[#444]">15 dias sem início</span>
              </div>

              <div className="flex py-[10px] border-b border-[#d9d9d9]">
                <span className="w-[33%] text-[0.8rem] [@media(min-width:992px)]:text-[0.9rem] text-[#444] pr-2">Isadora Gomes</span>
                <span className="w-[33%] text-[0.8rem] [@media(min-width:992px)]:text-[0.9rem] text-[#444] pr-2">Dr. Carlos Henrique</span>
                <span className="w-[33%] text-[0.8rem] [@media(min-width:992px)]:text-[0.9rem] text-[#444]">5 dias sem início</span>
              </div>

              <div className="flex bg-[#ececec] py-[10px] pl-[5px] border-b border-[#d9d9d9]">
                <span className="w-[33%] text-[0.8rem] [@media(min-width:992px)]:text-[0.9rem] text-[#444] pr-2">Marcelo Muniz</span>
                <span className="w-[33%] text-[0.8rem] [@media(min-width:992px)]:text-[0.9rem] text-[#444] pr-2">Dr. André Britto</span>
                <span className="w-[33%] text-[0.8rem] [@media(min-width:992px)]:text-[0.9rem] text-[#444]">20 dias sem início</span>
              </div>

            </div>

            <div className="mt-[25px] flex flex-wrap justify-end gap-[10px] [@media(min-width:992px)]:gap-[15px] text-[0.78rem] [@media(min-width:992px)]:text-[0.85rem] font-bold">
              <Link to="#" className="text-black hover:text-gray-500">[ Contatar Funcionário ]</Link>
              <Link to="#" className="text-black hover:text-gray-500">[ Reencaminhar paciente ]</Link>
            </div>
          </section>

          <section className="w-full rounded-[15px] bg-[#fdfdf5] p-4 [@media(min-width:992px)]:p-[25px]">
            <h3 className="text-[1.2rem] [@media(min-width:992px)]:text-[1.4rem] font-bold">
              Próximas Ações Escola
            </h3>
            <div className="my-[10px] mb-5 w-[150px] border-b-2 border-[#333]" />

            <div className="w-full">

              <div className="flex py-[10px] border-b border-[#d9d9d9]">
                <span className="w-[33%] text-[0.8rem] [@media(min-width:992px)]:text-[0.9rem] font-bold text-black pr-2">Escola</span>
                <span className="w-[33%] text-[0.8rem] [@media(min-width:992px)]:text-[0.9rem] font-bold text-black pr-2">Data</span>
                <span className="w-[33%] text-[0.8rem] [@media(min-width:992px)]:text-[0.9rem] font-bold text-black">Status</span>
              </div>

              <div className="flex py-[10px] border-b border-[#d9d9d9]">
                <span className="w-[33%] text-[0.8rem] [@media(min-width:992px)]:text-[0.9rem] text-[#444] pr-2">Escola Estadual Anita Garibaldi</span>
                <span className="w-[33%] text-[0.8rem] [@media(min-width:992px)]:text-[0.9rem] text-[#444] pr-2">15/10 às 09h</span>
                <span className="w-[33%] text-[0.8rem] [@media(min-width:992px)]:text-[0.9rem] text-[#444]">(Aprovado)</span>
              </div>

              <div className="flex py-[10px] border-b border-[#d9d9d9]">
                <span className="w-[33%] text-[0.8rem] [@media(min-width:992px)]:text-[0.9rem] text-[#444] pr-2">Escola Municipal Paulo Freire</span>
                <span className="w-[33%] text-[0.8rem] [@media(min-width:992px)]:text-[0.9rem] text-[#444] pr-2">18/10 às 14h</span>
                <span className="w-[33%] text-[0.8rem] [@media(min-width:992px)]:text-[0.9rem] text-[#444]">(Pendente)</span>
              </div>

            </div>

            <div className="mt-[25px] flex flex-wrap justify-end gap-[10px] [@media(min-width:992px)]:gap-[15px] text-[0.78rem] [@media(min-width:992px)]:text-[0.85rem] font-bold">
              <Link to="#" className="text-black hover:text-gray-500">[ Ver tudo ]</Link>
              <Link to="#" className="text-black hover:text-gray-500">[ Nova Solicitação de ação ]</Link>
            </div>
          </section>

        </div>
      </main>

      <div className="hidden [@media(min-width:992px)]:block">
        <Footer />
      </div>
    </>
  );
}

export default Finicio;