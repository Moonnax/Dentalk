import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import TitlePage from '../../components/TitlePage/TitlePage'

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
    bio: 'Atuei no desenvolvimento do projeto DenTalk, sendo responsável pela estruturação, modelagem e implementação do banco de dados da aplicação, garantindo a organização, integridade e eficiência no armazenamento das informações do sistema. Também participei ativamente do desenvolvimento front-end utilizando React, contribuindo para a criação de interfaces funcionais, integração das funcionalidades da plataforma e melhoria da experiência do usuário.',
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
    bio: 'Atuei no desenvolvimento back-end do projeto, sendo responsável pela construção e integração das APIs utilizando Python e Java. Desenvolvi a lógica de negócio da aplicação, implementei endpoints RESTful, integração com banco de dados e tratamento de dados para garantir performance e escalabilidade do sistema. Também participei da estruturação da arquitetura da aplicação, focando em segurança, organização do código e comunicação eficiente entre os serviços.',
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
    bio: 'Liderei a organização estratégica do projeto Dentalk, atuando no planejamento, visão de mercado e direcionamento da plataforma. Também fui responsável pela criação e treinamento da inteligência artificial do sistema, desenvolvendo um chatbot capaz de identificar solicitações de ajuda automaticamente. Além disso, desenvolvi o layout base do front-end, definindo a identidade visual e a experiência principal da aplicação.',
  },
]

const wrapperClass = "font-[Arial,Helvetica,sans-serif] text-[#010817] flex flex-col min-h-screen bg-white"

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
    if (integrante) document.title = `${integrante.nome} — Dentalk`
    return () => { document.title = 'Dentalk' }
  }, [integrante])

  if (carregando) {
    return (
      <div className={wrapperClass}>
        <Header />
        <main className="flex-1 min-h-[80vh] px-4 md:px-6 py-8 pb-16">
          <p className="text-center pt-16 text-[#666] text-[1.1rem]">Carregando...</p>
        </main>
        <div className="hidden [@media(min-width:992px)]:block"><Footer /></div>
      </div>
    )
  }

  if (!integrante) {
    return (
      <div className={wrapperClass}>
        <Header />
        <main className="flex-1 min-h-[80vh] px-4 md:px-6 py-8 pb-16">
          <TitlePage titulo="Integrante não encontrado" />
          <div className="text-center pt-8">
            <p className="text-[#555] mb-6">O integrante que você procura não existe.</p>
            <button
              onClick={() => navigate('/quemSomos')}
              className="bg-transparent border-2 border-[#010817] text-[#010817] px-5 py-[0.6rem] rounded-[2rem] text-[0.9rem] font-bold cursor-pointer transition-all duration-200 hover:bg-[#010817] hover:text-white"
            >
              ← Voltar para Quem Somos
            </button>
          </div>
        </main>
        <div className="hidden [@media(min-width:992px)]:block"><Footer /></div>
      </div>
    )
  }

  return (
    <div className={wrapperClass}>
      <Header />

      <main className="flex-1 min-h-[80vh] px-4 md:px-6 py-8 pb-16">

        <TitlePage titulo={integrante.nome} subtitulo={integrante.turma} />

        <div className="
          max-w-[52rem] mx-auto mt-8
          bg-white rounded-[1rem] overflow-hidden
          shadow-[0_2px_10px_rgba(0,0,0,0.08)]
          p-5 [@media(min-width:992px)]:p-8

          flex flex-col items-center text-center gap-6
          [@media(min-width:992px)]:flex-row [@media(min-width:992px)]:items-start [@media(min-width:992px)]:text-left [@media(min-width:992px)]:gap-10
        ">

          <img
            src={integrante.foto}
            alt={`Foto de ${integrante.nome}`}
            className="
              object-cover rounded-[0.75rem] flex-shrink-0
              w-[10rem] h-[10rem]
              [@media(min-width:992px)]:w-[14rem] [@media(min-width:992px)]:h-[14rem]
            "
          />

          <div className="flex flex-col gap-5 w-full">

            <p className="text-[1rem] text-[#444] leading-[1.75]">{integrante.bio}</p>

            <div className="flex flex-col gap-[0.4rem] text-[0.95rem] text-[#555]">
              <p>
                <span className="font-bold text-[#010817]">RM:</span> {integrante.rm}
              </p>
              <p>
                <span className="font-bold text-[#010817]">Turma:</span> {integrante.turma}
              </p>
              <p>
                <span className="font-bold text-[#010817]">LinkedIn:</span>{' '}
                <a
                  href={integrante.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#587beb] no-underline hover:text-[#fd8b08] transition-colors duration-200"
                >
                  {integrante.linkedinNome}
                </a>
              </p>
              <p>
                <span className="font-bold text-[#010817]">GitHub:</span>{' '}
                <a
                  href={integrante.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#587beb] no-underline hover:text-[#fd8b08] transition-colors duration-200"
                >
                  {integrante.githubNome}
                </a>
              </p>
            </div>

            <div className="flex justify-center [@media(min-width:992px)]:justify-start">
              <button
                onClick={() => navigate('/quemSomos')}
                className="
                  mt-2 bg-transparent border-2 border-[#010817] text-[#010817]
                  px-5 py-[0.6rem] rounded-[2rem]
                  text-[0.9rem] font-bold cursor-pointer
                  transition-all duration-200
                  hover:bg-[#010817] hover:text-white
                "
              >
                ← Voltar para Quem Somos
              </button>
            </div>

          </div>
        </div>

      </main>

      <div className="hidden [@media(min-width:992px)]:block">
        <Footer />
      </div>
    </div>
  )
}

export default IntegranteDetalhe