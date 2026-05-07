import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ProgramaCard from '../../components/ProgramaCard/ProgramaCard'
import TitlePage from '../../components/TitlePage/TitlePage'

const programas = [
  {
    nome: 'Dentista do Bem',
    img: 'https://turmadobem.org.br/wp-content/uploads/2022/08/dentista-do-bem-1.png',
    link: 'https://turmadobem.org.br/dentista-do-bem/',
  },
  {
    nome: 'Apolônias do Bem',
    img: 'https://turmadobem.org.br/wp-content/uploads/2022/08/apolonias-do-bem-1.png',
    link: 'https://turmadobem.org.br/apolonias-do-bem/',
  },
]

function Tdb() {
  return (
    <div>
      <Header />

      <main
        className="
          min-h-[80vh]
          py-[3rem]
          px-[1rem]
          pb-[4rem]
          bg-[#f7f7f7]
        "
      >
      <div className="
            flex
            justify-center  
          "
        >
        <div
          className="
          p-[1.5rem]
          mx-auto
          my-0
          bg-white
          w-[90%]
          max-w-[52rem]
          rounded-[1rem]
          shadow-[0_2px_8px_rgba(0,0,0,0.06)]
          text-center
          flex
          flex-col
          items-center
          justify-center
          max-[768px]:w-[95%]
        "
        >
          <img
            src="https://i.pinimg.com/1200x/92/d2/84/92d284efe84c4a4e8674537aa05aff82.jpg"
            alt="Turma do Bem"
            className="
              w-[300px]
              h-[300px]
              object-cover
              block
              mx-auto
              mb-[1.5rem]
              rounded-[0.75rem]
              max-[768px]:w-[200px]
              max-[768px]:h-[200px]
            "
          />

          <TitlePage titulo="Turma do Bem" />

          <p
            className="
              text-[1rem]
              leading-[1.75]
              text-[#333]
              text-left
              mb-[1.5rem]
            "
          >
            A Turma do Bem é uma organização social dedicada à saúde bucal e ao voluntariado
            especializado, gerenciando a maior rede de dentistas voluntários do mundo, com mais de
            18 mil profissionais atuando em 12 países. Desde sua fundação, a ONG oferece
            atendimento odontológico gratuito a pessoas em situação de vulnerabilidade social, com
            foco em dois públicos principais: jovens de 11 a 17 anos e mulheres vítimas de
            violência de gênero que tiveram a dentição afetada.
            Com mais de 20 anos de atuação, a Turma do Bem já impactou mais de 82 mil jovens e
            1.100 mulheres, promovendo não apenas tratamentos odontológicos, mas também educação
            em saúde bucal e autocuidado, contribuindo para a autoestima e bem-estar de seus
            atendidos.
            A ONG também atua na formação e engajamento de dentistas voluntários, oferecendo
            treinamento e suporte para que possam atender com eficiência e humanização. Além disso,
            promove campanhas de conscientização e projetos sociais que ampliam o acesso à saúde e
            fortalecem comunidades.
          </p>
        </div>
      </div>
        <h2
          className="
            text-center
            text-[2rem]
            font-[550]
            mt-[2.5rem]
          "
        >
          Conheça os programas
        </h2>

        <div
          className="
            flex
            justify-center
            flex-wrap
            gap-[2rem]
            mt-[2.5rem]
            max-[768px]:flex-col
            max-[768px]:items-center
          "
        >
          {programas.map((p) => (
            <ProgramaCard
              key={p.nome}
              nome={p.nome}
              img={p.img}
              link={p.link}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Tdb