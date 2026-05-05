import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Card from '../../components/Card/Card'
import './Missao.css'

const missoes = [
  {
    titulo: 'Organização / Centralização',
    img: 'https://gtrigueiro.com.br/wp-content/uploads/2020/09/Gestao-de-Documentos--1024x682.png',
    descricao: 'Centralizar informações de pacientes, voluntários e atendimentos em um único sistema, evitando falhas e perdas de dados.',
  },
  {
    titulo: 'Agilidade e Responsividade',
    img: 'https://avozdaserra.com.br/sites/default/files/noticias/202001107_caderno-z_p02_20-man_vs_women_smiling_0.jpg',
    descricao: 'Garantir que todas as solicitações recebam retorno rápido, sem deixar ninguém sem atendimento.',
  },
  {
    titulo: 'Humanização e Inclusão',
    img: 'https://58e68bf56934d95555dd054c.redesign.static-01.com/l/images/203892b15b9b5e92d38e9b777b350f170cc2c1f0.png',
    descricao: 'Respeitar nome social, identidade de gênero e acessibilidade, criando um ambiente seguro e acolhedor para todos.',
  },
]

function Missao() {
  return (
    <div>
      <Header />
      <main className="missao-main">
        <h1 className="title">Missão</h1>
        <p className="missao-intro">
          Nossa missão é potencializar o impacto da Turma do Bem, garantindo que cada sorriso
          seja cuidado com atenção e dignidade, por meio de:
        </p>
        <div className="missao-grid">
          {missoes.map((m, i) => (
            <Card
              key={i}
              img={m.img}
              alt={m.titulo}
              titulo={m.titulo}
              descricao={m.descricao}
              numero={`0${i + 1}`}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Missao