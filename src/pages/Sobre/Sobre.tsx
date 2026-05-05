import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import crono1 from '../../assets/crono1.png'
import crono2 from '../../assets/crono2.png'
import crono3 from '../../assets/crono3.jpeg'
import crono4 from '../../assets/crono4.jpeg'
import './Sobre.css'
import TitlePage from '../../components/TitlePage/TitlePage'

function Sobre() {
  return (
    <div>
      <Header />
      <main>
        <TitlePage titulo="Sobre"/>
        <div className="box">
          <p className="formText">
            A ONG Turma do Bem oferece serviços odontológicos voluntários para jovens de
            11 a 17 anos em situação de vulnerabilidade e com necessidades especiais, garantindo
            acesso gratuito aos procedimentos bucais necessários, com acompanhamento durante
            todo o processo.
            Em busca de melhorias tecnológicas compatíveis com o propósito da Turma do
            Bem, o projeto apresentado nesse relatório tem como objetivo atender o alto volume de
            mensagens que são recebidas pela TDB, garantindo que pessoas que buscam o
            atendimento tenham retorno adequado. O Projeto também tem como função registrar e
            facilitar a acessibilidade às informações de todo os envolvidos, possibilitando encontrá-las
            de forma intuitiva e gerar métricas sempre que necessário.
          </p>
          <img
            src="https://blog.escallo.com.br/wp-content/uploads/2022/04/Blog-Escallo-4-fatos-de-um-atendimento-Omnichannel.png"
            alt="imagem ilustrativa de diversos canais de comunicação"
            className="fotosobre"
          />
          <p className="formText">
            Nossa solução conecta todos os canais de comunicação em um único sistema,
            trazendo clareza e organização para o fluxo de atendimento. Além disso, o sistema
            notifica como pendente as mensagens não respondidas, garantindo que nenhuma
            solicitação fique sem resposta.
            Com uma interface intuitiva e personalizada, torna-se simples a localização de
            informações, acompanhar atendimentos e gerar métricas que ajudam na gestão, o
            desenvolvimento desse software fornece além da tecnologia, a acessibilidade social,
            tornando o processo inclusivo e agilizado para quem mais precisa.
          </p>
          <img
            src="https://img.freepik.com/free-vector/big-isolated-employee-working-office-workplace-flat-illustration_1150-41780.jpg?semt=ais_hybrid&w=740&q=80"
            alt="imagem ilustrativa de diversos dashboards"
            className="fotosobre"
          />
        </div>

        <div className="centralize">
          <p className="subtitle">Tecnologias envolvidas</p>
          <img
            src="https://i.pinimg.com/1200x/87/57/c3/8757c398cd4109d7c99adacef5f9fba6.jpg"
            alt="tecnologias envolvidas"
            className="fotosobre"
          />
          <p id="text-small-device" className="subtitle">Nosso Cronograma</p>
          <div className="box">
            <img src={crono1} alt="cronograma" className="fotosobre" />
            <img src={crono2} alt="cronograma" className="fotosobre" />
            <img src={crono3} alt="cronograma" className="fotosobre" />
            <img src={crono4} alt="cronograma" className="fotosobre" />
          </div>
        </div>

        <br />
      </main>
      <Footer />
    </div>
  )
}

export default Sobre