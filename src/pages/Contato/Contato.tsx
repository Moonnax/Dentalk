import { useForm } from 'react-hook-form'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ProgramaCard from '../../components/ProgramaCard/ProgramaCard'
import TitlePage from '../../components/TitlePage/TitlePage'

interface ContatoForm {
  nome: string
  email: string
  telefone: string
  assunto: string
  mensagem: string
}

const acoesContato = [
  {
    nome: 'Seja Voluntário',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSckBsCTpck2XsG_TrAue6HIyp8SdtSBe_EzQU8j-EjYGg56JQ/viewform',
    img: 'https://turmadobem.org.br/wp-content/uploads/2022/08/seja-dentista-voluntario-turma-do-bem.png',
  },
  {
    nome: 'Quero Doar',
    link: 'https://paybox.doare.org/paybox?payboxId=83fed202-df0f-4665-9c74-688a834028d4',
    img: 'https://turmadobem.org.br/wp-content/uploads/2022/08/faca-uma-doacao-turma-do-bem.png',
  },
  {
    nome: 'Preciso de Ajuda',
    link: 'https://d400000007bqdeaa.my.salesforce-sites.com/triagem/?eventoNum=a0CbJ00002qxZ5V',
    img: 'https://turmadobem.org.br/wp-content/uploads/2022/08/preciso-de-ajuda-turma-do-bem.png',
  },
]

function Contato() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ContatoForm>()

  const onSubmit = (data: ContatoForm) => {
    console.log('Formulário enviado:', data)
    reset()
  }

  return (
    <div>
      <Header />

      <main
        className="
          min-h-screen
          flex
          items-center
          justify-center
          py-[4rem]
          px-[1rem]
          bg-[#f7f7f7]
        "
      >
        <div className="text-center">
          <TitlePage titulo="Entre em contato" />

          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="
              flex-col
              gap-[0.25rem]
              w-[90%]
              max-w-[36rem]
              mx-auto
              mt-[1.5rem]
              bg-white
              p-[2rem]
              rounded-[1rem]
              shadow-[0_2px_10px_rgba(0,0,0,0.08)]
              max-[768px]:w-[95%]
              max-[768px]:p-[1.25rem]
            "
          >
            {/* NOME */}
            <div
              className="
                flex
                flex-col
                gap-[0.3rem]
                mb-[0.75rem]
                text-left
              "
            >
              <label
                htmlFor="nome"
                className="
                  font-bold
                  text-[0.95rem]
                  text-[#010817]
                "
              >
                Nome*
              </label>

              <input
                id="nome"
                type="text"
                placeholder="Seu nome completo"
                className={`
                  p-[0.7rem_1rem]
                  border-[1.5px]
                  rounded-[0.5rem]
                  text-[0.95rem]
                  font-inherit
                  text-[#333]
                  outline-none
                  transition-all
                  ${
                    errors.nome
                      ? 'border-[#e53e3e]'
                      : 'border-[#ddd] focus:border-[#fd8b08]'
                  }
                `}
                {...register('nome', {
                  required: 'Nome é obrigatório',
                  minLength: {
                    value: 3,
                    message: 'Mínimo de 3 caracteres',
                  },
                })}
              />

              {errors.nome && (
                <span className="text-[#e53e3e] text-[0.8rem]">
                  {errors.nome.message}
                </span>
              )}
            </div>

            {/* EMAIL */}
            <div
              className="
                flex
                flex-col
                gap-[0.3rem]
                mb-[0.75rem]
                text-left
              "
            >
              <label
                htmlFor="email"
                className="
                  font-bold
                  text-[0.95rem]
                  text-[#010817]
                "
              >
                E-mail*
              </label>

              <input
                id="email"
                type="email"
                placeholder="seuemail@exemplo.com"
                className={`
                  p-[0.7rem_1rem]
                  border-[1.5px]
                  rounded-[0.5rem]
                  text-[0.95rem]
                  font-inherit
                  text-[#333]
                  outline-none
                  transition-all
                  ${
                    errors.email
                      ? 'border-[#e53e3e]'
                      : 'border-[#ddd] focus:border-[#fd8b08]'
                  }
                `}
                {...register('email', {
                  required: 'E-mail é obrigatório',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'E-mail inválido',
                  },
                })}
              />

              {errors.email && (
                <span className="text-[#e53e3e] text-[0.8rem]">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* TELEFONE */}
            <div
              className="
                flex
                flex-col
                gap-[0.3rem]
                mb-[0.75rem]
                text-left
              "
            >
              <label
                htmlFor="telefone"
                className="
                  font-bold
                  text-[0.95rem]
                  text-[#010817]
                "
              >
                Telefone / WhatsApp*
              </label>

              <input
                id="telefone"
                type="text"
                placeholder="(11) 99999-9999"
                className={`
                  p-[0.7rem_1rem]
                  border-[1.5px]
                  rounded-[0.5rem]
                  text-[0.95rem]
                  font-inherit
                  text-[#333]
                  outline-none
                  transition-all
                  ${
                    errors.telefone
                      ? 'border-[#e53e3e]'
                      : 'border-[#ddd] focus:border-[#fd8b08]'
                  }
                `}
                {...register('telefone', {
                  required: 'Telefone é obrigatório',
                  pattern: {
                    value: /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/,
                    message: 'Formato inválido. Ex: (11) 99999-9999',
                  },
                })}
              />

              {errors.telefone && (
                <span className="text-[#e53e3e] text-[0.8rem]">
                  {errors.telefone.message}
                </span>
              )}
            </div>

            {/* ASSUNTO */}
            <div
              className="
                flex
                flex-col
                gap-[0.3rem]
                mb-[0.75rem]
                text-left
              "
            >
              <label
                htmlFor="assunto"
                className="
                  font-bold
                  text-[0.95rem]
                  text-[#010817]
                "
              >
                Assunto*
              </label>

              <input
                id="assunto"
                type="text"
                placeholder="Assunto da mensagem"
                className={`
                  p-[0.7rem_1rem]
                  border-[1.5px]
                  rounded-[0.5rem]
                  text-[0.95rem]
                  font-inherit
                  text-[#333]
                  outline-none
                  transition-all
                  ${
                    errors.assunto
                      ? 'border-[#e53e3e]'
                      : 'border-[#ddd] focus:border-[#fd8b08]'
                  }
                `}
                {...register('assunto', {
                  required: 'Assunto é obrigatório',
                  minLength: {
                    value: 3,
                    message: 'Mínimo de 3 caracteres',
                  },
                })}
              />

              {errors.assunto && (
                <span className="text-[#e53e3e] text-[0.8rem]">
                  {errors.assunto.message}
                </span>
              )}
            </div>

            {/* MENSAGEM */}
            <div
              className="
                flex
                flex-col
                gap-[0.3rem]
                mb-[0.75rem]
                text-left
              "
            >
              <label
                htmlFor="mensagem"
                className="
                  font-bold
                  text-[0.95rem]
                  text-[#010817]
                "
              >
                Mensagem*
              </label>

              <textarea
                id="mensagem"
                rows={5}
                placeholder="Escreva sua mensagem aqui..."
                className={`
                  p-[0.7rem_1rem]
                  border-[1.5px]
                  rounded-[0.5rem]
                  text-[0.95rem]
                  font-inherit
                  text-[#333]
                  outline-none
                  resize-y
                  transition-all
                  ${
                    errors.mensagem
                      ? 'border-[#e53e3e]'
                      : 'border-[#ddd] focus:border-[#fd8b08]'
                  }
                `}
                {...register('mensagem', {
                  required: 'Mensagem é obrigatória',
                  minLength: {
                    value: 10,
                    message: 'Mínimo de 10 caracteres',
                  },
                })}
              />

              {errors.mensagem && (
                <span className="text-[#e53e3e] text-[0.8rem]">
                  {errors.mensagem.message}
                </span>
              )}
            </div>

            {isSubmitSuccessful && (
              <p
                className="
                  text-[#2f855a]
                  text-[0.95rem]
                  font-semibold
                  text-center
                "
              >
                ✅ Mensagem enviada com sucesso!
              </p>
            )}

            <button
              type="submit"
              className="
                mt-[0.5rem]
                bg-[#fd8b08]
                text-white
                border-none
                p-[0.8rem]
                rounded-[0.5rem]
                text-[1rem]
                font-bold
                cursor-pointer
                transition-all
                hover:bg-[#b36103]
              "
            >
              Enviar
            </button>
          </form>

          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-[1.5rem]
              mt-[2.5rem]
              max-[768px]:flex-col
              max-[768px]:items-center
            "
          >
            {acoesContato.map((a) => (
              <ProgramaCard
                key={a.nome}
                nome={a.nome}
                img={a.img}
                link={a.link}
              />
            ))}
          </div>

          <div
            className="
              flex
              justify-center
              gap-[2rem]
              mt-[2rem]
              max-[768px]:flex-col
              max-[768px]:items-center
              max-[768px]:gap-[1rem]
            "
          >
            <a
              href="https://www.linkedin.com/company/turma-do-bem/posts/?feedView=all"
              target="_blank"
              rel="noreferrer"
              className="
                text-[1.1rem]
                font-semibold
                text-[#587beb]
                no-underline
                transition-all
                hover:text-[#fd8b08]
              "
            >
              🔗 LinkedIn
            </a>

            <a
              href="https://www.facebook.com/turmadobem"
              target="_blank"
              rel="noreferrer"
              className="
                text-[1.1rem]
                font-semibold
                text-[#587beb]
                no-underline
                transition-all
                hover:text-[#fd8b08]
              "
            >
              📘 Facebook
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Contato