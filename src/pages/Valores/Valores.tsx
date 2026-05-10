import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Card from '../../components/Card/Card'
import TitlePage from '../../components/TitlePage/TitlePage'

const valores = [
  {
    titulo: 'Humanização',
    img: 'https://biblioteca.cofen.gov.br/wp-content/uploads/2021/08/Humanizacao.jpg',
    descricao: 'Colocamos as pessoas no centro de tudo. Cada paciente é tratado com dignidade, empatia e respeito.',
  },
  {
    titulo: 'Impacto Social',
    img: 'https://fia.com.br/wp-content/uploads/2022/09/impacto-social-de-uma-empresa.jpg',
    descricao: 'Acreditamos que tecnologia deve servir à sociedade, gerando transformação real na vida de quem mais precisa.',
  },
  {
    titulo: 'Acessibilidade e Inclusão',
    img: 'https://porvir.org/especial/participacao/wp-content/themes/Inketa/images/internas-case/colegio-jose.jpg',
    descricao: 'Desenvolvemos soluções intuitivas e inclusivas, garantindo que todos possam acessar e utilizar o sistema.',
  },
  {
    titulo: 'Eficiência e Simplicidade',
    img: 'https://portalcelulose.com.br/wp-content/uploads/2025/03/Eficiencia-eficacia-e-efetividade-no-ambiente-organizacional-na-busca-da-excelencia-operacional.jpg',
    descricao: 'Simplicidade é poder. Criamos processos ágeis e claros para que o foco permaneça no atendimento.',
  },
]

function Valores() {
  return (
    <div className="font-[Arial,Helvetica,sans-serif] text-[#010817] flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1 min-h-[80vh] px-4 md:px-6 py-8 pb-16">

        <TitlePage
          titulo="Nossos valores"
          subtitulo="Os princípios que guiam cada decisão do projeto Dentalk"
        />

        <div className="flex flex-col gap-5 max-w-[52rem] mx-auto mt-8">
          {valores.map((v, i) => (
            <Card
              key={i}
              img={v.img}
              alt={v.titulo}
              titulo={v.titulo}
              descricao={v.descricao}
              numero={`0${i + 1}`}
            />
          ))}
        </div>

      </main>

      <div className="hidden [@media(min-width:992px)]:block">
        <Footer />
      </div>
    </div>
  )
}

export default Valores