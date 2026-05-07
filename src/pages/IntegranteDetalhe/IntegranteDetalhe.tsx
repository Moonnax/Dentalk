import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import TitlePage from '../../components/TitlePage/TitlePage'
import './IntegranteDetalhe.css'

interface Integrante {
  id: string
  nome: string
  foto: string
  linkedin: string
  linkedinNome: string
  github: string
  githubNome: string
  rm: string
  turma: string
  bio: string
}

const integrantes: Integrante[] = [
  {
    id: 'isabely',
    nome: 'Isabely Marques',
    foto: 'https://i.pinimg.com/736x/f1/3e/1e/f13e1e9a57c27b6a3e74b588b0f72cb0.jpg',
    linkedin: 'https://www.linkedin.com/in/isabely-marques/',
    linkedinNome: 'Isabely Marques',
    github: 'https://github.com/ismrqs',
    githubNome: 'ismrqs',
    rm: '566663',
    turma: '1TDSPR-2025',
    bio: 'Estudante de tecnologia apaixonada por desenvolvimento web e soluções com impacto social. Contribuiu com o front-end e a identidade visual do projeto Dentalk.',
  },
  {
    id: 'mateus',
    nome: 'Mateus Ribeiro',
    foto: 'https://i.pinimg.com/736x/f6/ee/99/f6ee992e638eb7723a079fb9858f19eb.jpg',
    linkedin: 'https://www.linkedin.com/in/mateus-ribeiro-azevedo-a39a13269',
    linkedinNome: 'Mateus Ribeiro Azevedo',
    github: 'https://github.com/mateus-ribeiro-dev',
    githubNome: 'mateus-ribeiro-dev',
    rm: '566630',
    turma: '1TDSPR-2025',
    bio: 'Desenvolvedor focado em back-end e arquitetura de sistemas. Responsável pela estrutura de dados e integração do projeto Dentalk.',
  },
  {
    id: 'luana',
    nome: 'Luana Oliveira',
    foto: 'https://i.pinimg.com/736x/69/b9/83/69b9838e7332d7bd2b1862086f7fa1d0.jpg',
    linkedin: 'https://www.linkedin.com/in/luana-oliveira-83a3b1289/',
    linkedinNome: 'Luana Oliveira',
    github: 'https://github.com/Moonnax',
    githubNome: 'Moonnax',
    rm: '566621',
    turma: '1TDSPR-2025',
    bio: 'Desenvolvedora criativa com foco em UX e acessibilidade. Contribuiu com o design das interfaces e a experiência do usuário no projeto Dentalk.',
  },
]

function IntegranteDetalhe() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [carregando, setCarregando] = useState(true)

  const integrante = integrantes.find((i) => i.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)

    const timer = setTimeout(() => setCarregando(false), 400)
    return () => clearTimeout(timer)
  }, [id])

  useEffect(() => {
    if (integrante) {
      document.title = `${integrante.nome} — Dentalk`
    }
    return () => {
      document.title = 'Dentalk'
    }
  }, [integrante])

  if (carregando) {
    return (
      <div>
        <Header />
        <main className="detalhe-main">
          <p className="detalhe-loading">Carregando...</p>
        </main>
        <Footer />
      </div>
    )
  }

  if (!integrante) {
    return (
      <div>
        <Header />
        <main className="detalhe-main">
          <TitlePage titulo="Integrante não encontrado" />
          <div className="detalhe-not-found">
            <p>O integrante que você procura não existe.</p>
            <button className="detalhe-btn-voltar" onClick={() => navigate('/quemSomos')}>
              ← Voltar para Quem Somos
            </button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div>
      <Header />
      <main className="detalhe-main">
        <TitlePage titulo={integrante.nome} subtitulo={integrante.turma} />

        <div className="detalhe-card">
          <img src={integrante.foto} alt={`Foto de ${integrante.nome}`} className="detalhe-foto" />

          <div className="detalhe-info">
            <p className="detalhe-bio">{integrante.bio}</p>

            <div className="detalhe-dados">
              <p><span>RM:</span> {integrante.rm}</p>
              <p><span>Turma:</span> {integrante.turma}</p>
              <p>
                <span>LinkedIn:</span>{' '}
                <a href={integrante.linkedin} target="_blank" rel="noreferrer">
                  {integrante.linkedinNome}
                </a>
              </p>
              <p>
                <span>GitHub:</span>{' '}
                <a href={integrante.github} target="_blank" rel="noreferrer">
                  {integrante.githubNome}
                </a>
              </p>
            </div>

            <button className="detalhe-btn-voltar" onClick={() => navigate('/quemSomos')}>
              ← Voltar para Quem Somos
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default IntegranteDetalhe