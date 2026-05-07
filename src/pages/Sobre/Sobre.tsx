import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import crono1 from "../../assets/crono1.png";
import crono2 from "../../assets/crono2.png";
import crono3 from "../../assets/crono3.jpeg";
import crono4 from "../../assets/crono4.jpeg";
import TitlePage from "../../components/TitlePage/TitlePage";

function Sobre() {
  return (
    <div>
      <Header />

      <main className="
          flex
          flex-col
          items-center
          text-center
          p-[0.625rem]
          mx-auto
          bg-white
          w-[90%]
          h-auto
        ">
        <TitlePage titulo="Sobre" />

        <div
          className="
            p-[0.625rem]
            mx-auto
            bg-white
            w-[90%]
            h-auto
            text-center
          "
        >
          <p className="formText">
            A ONG Turma do Bem oferece serviços odontológicos voluntários para
            jovens de 11 a 17 anos em situação de vulnerabilidade e com
            necessidades especiais, garantindo acesso gratuito aos procedimentos
            bucais necessários, com acompanhamento durante todo o processo. Em
            busca de melhorias tecnológicas compatíveis com o propósito da Turma
            do Bem, o projeto apresentado nesse relatório tem como objetivo
            atender o alto volume de mensagens que são recebidas pela TDB,
            garantindo que pessoas que buscam o atendimento tenham retorno
            adequado. O Projeto também tem como função registrar e facilitar a
            acessibilidade às informações de todo os envolvidos, possibilitando
            encontrá-las de forma intuitiva e gerar métricas sempre que
            necessário.
          </p>
        
        <div className="flex justify-center">
          <img
            src="https://blog.escallo.com.br/wp-content/uploads/2022/04/Blog-Escallo-4-fatos-de-um-atendimento-Omnichannel.png"
            alt="imagem ilustrativa de diversos canais de comunicação"
            className="
              max-w-[43.75rem]
              w-full
              h-auto
              block
              my-[1.25rem]
              mx-auto
              
            "
          />
        </div>

          <p className="formText">
            Nossa solução conecta todos os canais de comunicação em um único
            sistema, trazendo clareza e organização para o fluxo de atendimento.
            Além disso, o sistema notifica como pendente as mensagens não
            respondidas, garantindo que nenhuma solicitação fique sem resposta.
            Com uma interface intuitiva e personalizada, torna-se simples a
            localização de informações, acompanhar atendimentos e gerar métricas
            que ajudam na gestão, o desenvolvimento desse software fornece além
            da tecnologia, a acessibilidade social, tornando o processo
            inclusivo e agilizado para quem mais precisa.
          </p>

        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/big-isolated-employee-working-office-workplace-flat-illustration_1150-41780.jpg?semt=ais_hybrid&w=740&q=80"
            alt="imagem ilustrativa de diversos dashboards"
            className="
              max-w-[43.75rem]
              w-full
              h-auto
              block
              my-[1.25rem]
              mx-auto
            "
          />
        </div>
        </div>

        <div className="text-center">
          <p
            className="
              mt-4
              text-center
              text-[2rem]
              font-[550]
            "
          >
            Tecnologias envolvidas
          </p>

          <img
            src="https://i.pinimg.com/1200x/87/57/c3/8757c398cd4109d7c99adacef5f9fba6.jpg"
            alt="tecnologias envolvidas"
            className="
              max-w-[43.75rem]
              w-full
              h-auto
              block
              my-[1.25rem]
              mx-auto
            "
          />

          <p
            id="text-small-device"
            className="
              mt-4
              text-center
              text-[2rem]
              font-[550]
            "
          >
            Nosso Cronograma
          </p>

          <div
            className="
              p-[0.625rem]
              mx-auto
              bg-white
              w-[90%]
              h-auto
              text-center
            "
          >
            <img
              src={crono1}
              alt="cronograma"
              className="
                max-w-[43.75rem]
                w-full
                h-auto
                block
                my-[1.25rem]
                mx-auto
              "
            />

            <img
              src={crono2}
              alt="cronograma"
              className="
                max-w-[43.75rem]
                w-full
                h-auto
                block
                my-[1.25rem]
                mx-auto
              "
            />

            <img
              src={crono3}
              alt="cronograma"
              className="
                max-w-[43.75rem]
                w-full
                h-auto
                block
                my-[1.25rem]
                mx-auto
              "
            />

            <img
              src={crono4}
              alt="cronograma"
              className="
                max-w-[43.75rem]
                w-full
                h-auto
                block
                my-[1.25rem]
                mx-auto
              "
            />
          </div>
        </div>

        <br />
      </main>

      <Footer />
    </div>
  );
}

export default Sobre;