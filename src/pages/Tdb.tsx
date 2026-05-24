import Header from '../components/Header';
import Footer from '../components/Footer';
import ProgramaCard from '../components/ProgramaCard';
import TitlePage from '../components/TitlePage';

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
];

function Tdb() {
  return (
    <div className="font-[Arial,Helvetica,sans-serif] text-[#010817] flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1 min-h-[80vh] px-4 md:px-6 py-12 pb-16">

        <div
          className="
            w-[95%] [@media(min-width:992px)]:w-[90%]
            max-w-[52rem] mx-auto
            bg-white rounded-[1rem]
            shadow-[0_2px_8px_rgba(0,0,0,0.06)]
            p-6 [@media(min-width:992px)]:p-[1.5rem]
            text-center
          "
        >
          <img
            src="https://i.pinimg.com/1200x/92/d2/84/92d284efe84c4a4e8674537aa05aff82.jpg"
            alt="Turma do Bem"
            className="
              block mx-auto mb-6 rounded-[0.75rem] object-cover
              w-[200px] h-[200px]
              [@media(min-width:992px)]:w-[300px] [@media(min-width:992px)]:h-[300px]
            "
          />

          <TitlePage titulo="Turma do Bem" />

          <p className="text-[1rem] leading-[1.75] text-[#333] text-left mb-6">
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

        <h2 className="text-center text-[1.4rem] [@media(min-width:992px)]:text-[1.75rem] font-semibold mt-10 mb-2">
          Conheça os programas
        </h2>

        <div
          className="
            flex flex-col items-center gap-8
            [@media(min-width:992px)]:flex-row [@media(min-width:992px)]:justify-center [@media(min-width:992px)]:flex-wrap
            mt-6
          "
        >
          {programas.map((p) => (
            <ProgramaCard key={p.nome} nome={p.nome} img={p.img} link={p.link} />
          ))}
        </div>

      </main>

      <div className="hidden [@media(min-width:992px)]:block">
        <Footer />
      </div>
    </div>
  );
}

export default Tdb;