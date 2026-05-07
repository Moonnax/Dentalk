import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import TitlePage from '../../components/TitlePage/TitlePage'
import logo from '../../assets/logo.png'
import './QuemSomos.css'

interface Integrante {
  id: string
  nome: string
  foto: string
  rm: string
  turma: string
}

const integrantes: Integrante[] = [
  {
    id: 'isabely',
    nome: 'Isabely Marques',
    foto: 'https://i.pinimg.com/736x/f1/3e/1e/f13e1e9a57c27b6a3e74b588b0f72cb0.jpg',
    rm: '566663',
    turma: '1TDSPR-2025',
  },
  {
    id: 'mateus',
    nome: 'Mateus Ribeiro',
    foto: 'https://i.pinimg.com/736x/f6/ee/99/f6ee992e638eb7723a079fb9858f19eb.jpg',
    rm: '566630',
    turma: '1TDSPR-2025',
  },
  {
    id: 'luana',
    nome: 'Luana Oliveira',
    foto: 'https://i.pinimg.com/736x/69/b9/83/69b9838e7332d7bd2b1862086f7fa1d0.jpg',
    rm: '566621',
    turma: '1TDSPR-2025',
  },
]

function QuemSomos() {
  const navigate = useNavigate()
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div>
      <Header />
      <main>
        <TitlePage
          titulo="Quem Somos"
          subtitulo="Conheça os estudantes por trás do projeto Dentalk."
        />
        <img src={logo} alt="logo Dentalk" className="imgCenter" />

        <div className="box">
          <p className="formText" style={{ marginBottom: '2rem' }}>
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

        <div className="centralize" style={{ paddingBottom: '3rem' }}>
          {integrantes.map((i) => (
            <div
              key={i.id}
              className={`side integrante-card ${hoveredId === i.id ? 'integrante-hovered' : ''}`}
              onClick={() => navigate(`/quemSomos/${i.id}`)}
              onMouseEnter={() => setHoveredId(i.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{ cursor: 'pointer' }}
            >
              <img src={i.foto} alt={`foto ${i.nome}`} className="fotoavatar" />
              <p style={{ fontSize: '1.3rem', fontWeight: 700, textAlign: 'center' }}>{i.nome}</p>
              <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.4rem' }}>RM: {i.rm}</p>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>{i.turma}</p>
              <p className="integrante-ver-mais">Ver perfil completo →</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default QuemSomos