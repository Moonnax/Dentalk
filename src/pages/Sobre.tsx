import Header from "../components/Header";
import Footer from "../components/Footer";

import crono1 from "../assets/crono1.png";
import crono2 from "../assets/crono2.png";
import crono3 from "../assets/crono3.jpeg";
import crono4 from "../assets/crono4.jpeg";

import TitlePage from "../components/TitlePage";

function Sobre() {
  return (
    <div className="font-[Arial,Helvetica,sans-serif] text-[#010817] flex flex-col min-h-screen">
      
    <Header />
      <main className="flex-1">

        <TitlePage titulo="Sobre" />

        <div className="w-[90%] mx-auto bg-white p-[0.625rem] text-center">

          <p
            className="
              text-justify leading-relaxed
              text-[1rem]
              min-[768px]:text-[1.2rem]
              min-[992px]:text-[1rem]
            "
          >
            A ONG Turma do Bem oferece serviços odontológicos voluntários para jovens de
            11 a 17 anos em situação de vulnerabilidade e com necessidades especiais,
            garantindo acesso gratuito aos procedimentos bucais necessários, com
            acompanhamento durante todo o processo.

            Em busca de melhorias tecnológicas compatíveis com o propósito da Turma do
            Bem, o projeto apresentado nesse relatório tem como objetivo atender o alto
            volume de mensagens que são recebidas pela TDB, garantindo que pessoas que
            buscam o atendimento tenham retorno adequado.

            O Projeto também tem como função registrar e facilitar a acessibilidade às
            informações de todo os envolvidos, possibilitando encontrá-las de forma intuitiva
            e gerar métricas sempre que necessário.
          </p>

          <img
            src="https://blog.escallo.com.br/wp-content/uploads/2022/04/Blog-Escallo-4-fatos-de-um-atendimento-Omnichannel.png"
            alt="imagem ilustrativa de diversos canais de comunicação"
            className="max-w-[43.75rem] w-full h-auto block mx-auto my-5"
          />

          <p
            className="
              text-justify leading-relaxed
              text-[1rem]
              min-[768px]:text-[1.2rem]
              min-[992px]:text-[1rem]
            "
          >
            Nossa solução conecta todos os canais de comunicação em um único sistema,
            trazendo clareza e organização para o fluxo de atendimento.

            Além disso, o sistema notifica como pendente as mensagens não respondidas,
            garantindo que nenhuma solicitação fique sem resposta.

            Com uma interface intuitiva e personalizada, torna-se simples a localização de
            informações, acompanhar atendimentos e gerar métricas que ajudam na gestão.

            O desenvolvimento desse software fornece além da tecnologia, a acessibilidade
            social, tornando o processo inclusivo e agilizado para quem mais precisa.
          </p>

          <img
            src="https://img.freepik.com/free-vector/big-isolated-employee-working-office-workplace-flat-illustration_1150-41780.jpg?semt=ais_hybrid&w=740&q=80"
            alt="imagem ilustrativa de diversos dashboards"
            className="max-w-[43.75rem] w-full h-auto block mx-auto my-5"
          />
        </div>

        <div className="text-center">

          <p
            className="
              mt-4 text-center font-[550]
              text-[1.375rem]
              min-[768px]:text-[1.375rem]
              min-[992px]:text-[2rem]
            "
          >
            Tecnologias envolvidas
          </p>

          <img
            src="https://i.pinimg.com/1200x/87/57/c3/8757c398cd4109d7c99adacef5f9fba6.jpg"
            alt="tecnologias envolvidas"
            className="max-w-[43.75rem] w-full h-auto block mx-auto my-5"
          />

          <p
            className="
              mt-4 text-center font-[550]
              text-[1.375rem]
              min-[768px]:text-[1.375rem]
              min-[992px]:text-[2rem]
            "
          >
            Nosso Cronograma
          </p>

          <div className="w-[90%] mx-auto bg-white p-[0.625rem] text-center">

            <img
              src={crono1}
              alt="cronograma"
              className="max-w-[43.75rem] w-full h-auto block mx-auto my-5"
            />

            <img
              src={crono2}
              alt="cronograma"
              className="max-w-[43.75rem] w-full h-auto block mx-auto my-5"
            />

            <img
              src={crono3}
              alt="cronograma"
              className="max-w-[43.75rem] w-full h-auto block mx-auto my-5"
            />

            <img
              src={crono4}
              alt="cronograma"
              className="max-w-[43.75rem] w-full h-auto block mx-auto my-5"
            />

          </div>
        </div>

        <br />
      
      </main>
    <div className="hidden min-[992px]:block">
  <Footer />
</div>
    </div>
  );
}

export default Sobre;