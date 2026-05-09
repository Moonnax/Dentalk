import HeaderFuncionario from "../../components/HeaderFuncionario/HeaderFuncionario";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

function Finicio() {
  return (
    <>
      <HeaderFuncionario />

      <main className="mx-12 my-4 flex font-[Arial] text-[#010817]">
        
        {/* COLUNA ESQUERDA */}
        <aside className="w-[450px] pr-10">
          <h1 className="pb-5 text-[34px] font-semibold">
            Olá, Funcionário do Bem!
          </h1>

          <div>

            
            <section className="mb-[25px] flex min-h-[180px] min-w-[380px] flex-col justify-between rounded-xl bg-[#f2f2f2] p-6">
              
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="my-[10px] text-[1.2rem] font-bold">
                    Aguardando encaminhamentos
                  </h2>

                  <p className="text-[0.9rem] text-[var(--font-cinza-normal)]">
                    Encaminhe pacientes aprovados para os voluntários compatíveis
                  </p>
                </div>

                <span className="flex h-[35px] w-[35px] flex-shrink-0 items-center justify-center rounded-full bg-[var(--amarelo-escuro)] font-bold text-[var(--preto)]">
                  51
                </span>
              </div>

              <div className="flex justify-end">
                <Link
                  to="/triagemf"
                  className="cursor-pointer font-extrabold text-[var(--preto)] hover:text-gray-500"
                >
                  Ir para Fila
                </Link>
              </div>
            </section>

           
            <section className="mb-[25px] flex min-h-[180px] min-w-[380px] flex-col justify-between rounded-xl bg-[#f2f2f2] p-6">
              
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="my-[10px] text-[1.2rem] font-bold">
                    Ocorrências urgentes
                  </h2>

                  <p className="text-[0.9rem] text-[var(--font-cinza-normal)]">
                    6 pedidos de consultório e 2 desligamentos
                  </p>
                </div>

                <span className="flex h-[35px] w-[35px] flex-shrink-0 items-center justify-center rounded-full bg-[var(--amarelo-escuro)] font-bold text-[var(--preto)]">
                  8
                </span>
              </div>

              <div className="flex justify-end">
                <Link
                  to="/monitoramento"
                  className="cursor-pointer font-extrabold text-[var(--preto)] hover:text-gray-500"
                >
                  Responder agora
                </Link>
              </div>
            </section>

           
            <section className="mb-[25px] flex min-h-[180px] min-w-[380px] flex-col justify-between rounded-xl bg-[#f2f2f2] p-6">
              
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="my-[10px] text-[1.2rem] font-bold">
                    Novas solicitações
                  </h2>

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

              <div className="flex justify-end">
                <Link
                  to="/triagemf"
                  className="cursor-pointer font-extrabold text-[var(--preto)] hover:text-gray-500"
                >
                  Ver solicitações
                </Link>
              </div>
            </section>
          </div>
        </aside>

        
        <div className="flex flex-col gap-10 border-l border-[#ccc] pl-10">

          
          <div className="w-[1300px] rounded-lg bg-[#f0f0f0] px-5 py-[10px] text-[0.9rem] text-[var(--cinza-claro)]">
            <p>Publicar Aviso Geral para Voluntários</p>
          </div>

          
          <section className="w-[1300px] rounded-[15px] bg-[#fdfdf5] p-[25px]">

            <div>
              <h3 className="text-[1.4rem] font-bold">
                Alertas de Prazo
              </h3>

              <div className="my-[10px] mb-5 w-[150px] border-b-2 border-[#333]"></div>
            </div>

            <div className="flex w-full flex-col">

              <div className="flex justify-between py-[10px] border-b border-[#d9d9d9]">
                <span className="w-[33%] text-[0.9rem] font-bold text-black">
                  Paciente
                </span>
                <span className="w-[33%] text-[0.9rem] font-bold text-black">
                  Dentista
                </span>

                <span className="w-[33%] text-[0.9rem] font-bold text-black">
                  Atraso
                </span>
              </div>

              <div className="flex justify-between py-[10px] border-b border-[#d9d9d9]">

                <span className="w-[33%] text-[0.9rem] text-[#444]">
                  Fernando Pereira
                </span>

                <span className="w-[33%] text-[0.9rem] text-[#444]">
                  Dra. Leticia Silva
                </span>

                <span className="w-[33%] text-[0.9rem] text-[#444]">
                  13 dias sem início
                </span>
              </div>

              <div className="flex justify-between bg-[#ececec] py-[10px] pl-[5px] border-b border-[#d9d9d9]">
                <span className="w-[33%] text-[0.9rem] text-[#444]">
                  Carlos Vicente
                </span>

                <span className="w-[33%] text-[0.9rem] text-[#444]">
                  Dra. Sandra Monteiro
                </span>

                <span className="w-[33%] text-[0.9rem] text-[#444]">
                  15 dias sem início
                </span>
              </div>

              <div className="flex justify-between py-[10px] border-b border-[#d9d9d9]">
                <span className="w-[33%] text-[0.9rem] text-[#444]">
                  Isadora Gomes
                </span>

                <span className="w-[33%] text-[0.9rem] text-[#444]">
                  Dr. Carlos Henrique
                </span>

                <span className="w-[33%] text-[0.9rem] text-[#444]">
                  5 dias sem início
                </span>
              </div>

              <div className="flex justify-between bg-[#ececec] py-[10px] pl-[5px] border-b border-[#d9d9d9]">
                <span className="w-[33%] text-[0.9rem] text-[#444]">
                  Marcelo Muniz
                </span>

                <span className="w-[33%] text-[0.9rem] text-[#444]">
                  Dr. André Britto
                </span>

                <span className="w-[33%] text-[0.9rem] text-[#444]">
                  20 dias sem início
                </span>
              </div>
            </div>

            <div className="mt-[25px] flex justify-end gap-[15px] text-[0.85rem] font-bold">

              <Link
                to="#"
                className="text-black hover:text-gray-500"
              >
                [ Contatar Funcionário ]
              </Link>

              <Link
                to="#"
                className="text-black hover:text-gray-500"
              >
                [ Reencaminhar paciente ]
              </Link>
            </div>
          </section>

          
          <section className="w-[1300px] rounded-[15px] bg-[#fdfdf5] p-[25px]">

            <div>
              <h3 className="text-[1.4rem] font-bold">
                Próximas Ações Escola
              </h3>

              <div className="my-[10px] mb-5 w-[150px] border-b-2 border-[#333]"></div>
            </div>

            <div className="flex w-full flex-col ">

              <div className="flex justify-between py-[10px] border-b border-[#d9d9d9]">
                <span className="w-[33%] text-[0.9rem] font-bold text-black">
                  Escola
                </span>

                <span className="w-[33%] text-[0.9rem] font-bold text-black">
                  Data
                </span>

                <span className="w-[33%] text-[0.9rem] font-bold text-black">
                  Status
                </span>
              </div>

              <div className="flex justify-between py-[10px] border-b border-[#d9d9d9]">
                <span className="w-[33%] text-[0.9rem] text-[#444]">
                  Escola Estadual Anita Garibaldi
                </span>

                <span className="w-[33%] text-[0.9rem] text-[#444]">
                  15/10 às 09h
                </span>

                <span className="w-[33%] text-[0.9rem] text-[#444]">
                  (Aprovado)
                </span>
              </div>

              <div className="flex justify-between py-[10px] border-b border-[#d9d9d9]">
                <span className="w-[33%] text-[0.9rem] text-[#444]">
                  Escola Municipal Paulo Freire
                </span>

                <span className="w-[33%] text-[0.9rem] text-[#444]">
                  18/10 às 14h
                </span>

                <span className="w-[33%] text-[0.9rem] text-[#444]">
                  (Pendente)
                </span>
              </div>
            </div>

            <div className="mt-[25px] flex justify-end gap-[15px] text-[0.85rem] font-bold">

              <Link
                to="#"
                className="text-black hover:text-gray-500"
              >
                [ Ver tudo ]
              </Link>

              <Link
                to="#"
                className="text-black hover:text-gray-500"
              >
                [ Nova Solicitação de ação ]
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Finicio;