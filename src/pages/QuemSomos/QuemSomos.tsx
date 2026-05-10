import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import TitlePage from '../../components/TitlePage/TitlePage'
import logo from '../../assets/logo.png'

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
    <div className="font-[Arial,Helvetica,sans-serif] text-[#010817] flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1">

        <TitlePage
          titulo="Quem Somos"
          subtitulo="Conheça os estudantes por trás do projeto Dentalk."
        />

        <img
          src={logo}
          alt="logo Dentalk"
          className="block mx-auto p-[0.625rem]"
        />

        <div className="w-[90%] mx-auto bg-white text-center px-[0.625rem] py-[0.625rem]">
          <p className="text-justify leading-relaxed text-[1rem] mb-8">
            A Dentalk é um projeto desenvolvido por três estudantes de tecnologia, com o objetivo
            de apoiar iniciativas que transformam vidas, como os atendimentos odontológicos
            voluntários da ONG Turma do Bem. Nosso foco é desenvolver um software que centralize
            informações de pacientes e voluntários, acompanhe cada atendimento e garanta que
            nenhuma solicitação fique sem resposta.
            Esse projeto nasce da combinação de aprendizado, criatividade e responsabilidade
            social, com foco em desenvolver soluções humanizadas, seguras e intuitivas, que possam
            fazer a diferença de forma prática e significativa.
          </p>
          <p className="text-[1.5rem] font-semibold text-center">Integrantes</p>
        </div>

        {/* Cards dos integrantes */}
        <div className="text-center pb-12">
          <div className="inline-flex flex-wrap justify-center">
            {integrantes.map((i) => (
              <div
                key={i.id}
                onClick={() => navigate(`/quemSomos/${i.id}`)}
                onMouseEnter={() => setHoveredId(i.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`
                  border-2 bg-white cursor-pointer
                  p-5 m-[0.625rem]
                  transition-all duration-200
                  w-[90%]
                  [@media(min-width:992px)]:w-[25rem]

                  ${hoveredId === i.id
                    ? 'border-[#fd8b08] shadow-[0_6px_20px_rgba(253,139,8,0.18)] -translate-y-[3px]'
                    : 'border-[#010817] shadow-none translate-y-0'
                  }
                `}
              >
                <img
                  src={i.foto}
                  alt={`foto ${i.nome}`}
                  className="max-w-[18.75rem] w-full h-[18.75rem] block mx-auto my-5 object-cover"
                />

                <p className="text-[1.3rem] font-bold text-center">{i.nome}</p>

                <p className="text-[0.9rem] text-[#666] mt-[0.4rem] text-center">RM: {i.rm}</p>
                <p className="text-[0.9rem] text-[#666] text-center">{i.turma}</p>

                <p className={`
                  mt-4 text-[0.9rem] font-semibold text-center transition-colors duration-200
                  ${hoveredId === i.id ? 'text-[#fd8b08]' : 'text-[#587beb]'}
                `}>
                  Ver perfil completo →
                </p>
              </div>
            ))}
          </div>
        </div>

      </main>

      <div className="hidden [@media(min-width:992px)]:block">
        <Footer />
      </div>
    </div>
  )
}

export default QuemSomos