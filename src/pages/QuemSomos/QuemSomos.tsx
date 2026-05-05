import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import logo from '../../assets/logo.png'
import './QuemSomos.css'

const integrantes = [
  {
    nome: 'Isabely Marques',
    foto: 'https://i.pinimg.com/736x/f1/3e/1e/f13e1e9a57c27b6a3e74b588b0f72cb0.jpg',
    linkedin: 'https://www.linkedin.com/in/isabely-marques/',
    linkedinNome: 'Isabely Marques',
    github: 'https://github.com/ismrqs',
    githubNome: 'ismrqs',
    rm: '566663',
    turma: '1TDSPR-2025',
  },
  {
    nome: 'Mateus Ribeiro',
    foto: 'https://i.pinimg.com/736x/f6/ee/99/f6ee992e638eb7723a079fb9858f19eb.jpg',
    linkedin: 'https://www.linkedin.com/in/mateus-ribeiro-azevedo-a39a13269',
    linkedinNome: 'Mateus Ribeiro Azevedo',
    github: 'https://github.com/mateus-ribeiro-dev',
    githubNome: 'mateus ribeiro dev',
    rm: '566630',
    turma: '1TDSPR-2025',
  },
  {
    nome: 'Luana Oliveira',
    foto: 'https://i.pinimg.com/736x/69/b9/83/69b9838e7332d7bd2b1862086f7fa1d0.jpg',
    linkedin: 'https://www.linkedin.com/in/luana-oliveira-83a3b1289/',
    linkedinNome: 'Luana Oliveira',
    github: 'https://github.com/Moonnax',
    githubNome: 'Moonnax',
    rm: '566621',
    turma: '1TDSPR-2025',
  },
]

function QuemSomos() {
  return (
    <div>
      <Header />
      <main>
        <h1 className="title">Quem Somos</h1>
        <img src={logo} alt="logo Dentalk" className="imgCenter" />

        <div className="box">
          <p className="formText" style={{ marginBottom: '100px' }}>
            A Dentalk é um projeto desenvolvido por três estudantes de tecnologia, com o objetivo
            de apoiar iniciativas que transformam vidas, como os atendimentos odontológicos
            voluntários da ONG Turma do Bem. Nosso foco é desenvolver um software que centralize
            informações de pacientes e voluntários, acompanhe cada atendimento e garanta que
            nenhuma solicitação fique sem resposta.
            Esse projeto nasce da combinação de aprendizado, criatividade e responsabilidade
            social, com foco em desenvolver soluções humanizadas, seguras e intuitivas, que possam
            fazer a diferença de forma prática e significativa.
          </p>
          <p className="subtitle">Integrantes</p>
        </div>

        <div className="centralize">
          {integrantes.map((i) => (
            <div key={i.rm} className="side">
              <img src={i.foto} alt={`foto ${i.nome}`} className="fotoavatar" />
              <p style={{ fontSize: '30px', textAlign: 'center' }}>{i.nome}</p>
              <br />
              <div className="mobile-click">
                <p>
                  Linkedin: <a className="mobile-click-link" href={i.linkedin} target="_blank" rel="noreferrer">{i.linkedinNome}</a><br />
                  GitHub: <a className="mobile-click-link" href={i.github} target="_blank" rel="noreferrer">{i.githubNome}</a><br />
                  RM: {i.rm}<br />
                  Turma: {i.turma}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default QuemSomos