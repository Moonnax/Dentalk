import { useForm } from 'react-hook-form'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProgramaCard from '../components/ProgramaCard'
import TitlePage from '../components/TitlePage'
import { enviarContato } from '../api/PostContato'

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

  const onSubmit = async (data: ContatoForm) => {
    const sucesso = await enviarContato(data)
    if (sucesso) reset()
  }

  const inputBase = 'w-full px-4 py-[0.7rem] border-[1.5px] border-[#ddd] rounded-lg text-[0.95rem] text-[#333] font-[inherit] outline-none transition-colors duration-200 focus:border-[#fd8b08]'
  const inputError = 'border-[#e53e3e]'

  return (
    <div className="font-[Arial,Helvetica,sans-serif] text-[#010817] flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1 min-h-[80vh] px-4 md:px-6 py-8 pb-16">

        <TitlePage titulo="Entre em contato" />

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="
            flex flex-col gap-1
            w-[95%] [@media(min-width:992px)]:w-[90%]
            max-w-[36rem] mx-auto mt-6
            bg-white rounded-[1rem]
            shadow-[0_2px_10px_rgba(0,0,0,0.08)]
            p-5 [@media(min-width:992px)]:p-8
          "
        >
          <div className="flex flex-col gap-[0.3rem] mb-3">
            <label htmlFor="nome" className="font-bold text-[0.95rem] text-[#010817]">Nome*</label>
            <input
              id="nome"
              type="text"
              placeholder="Seu nome completo"
              className={`${inputBase} ${errors.nome ? inputError : ''}`}
              {...register('nome', {
                required: 'Nome é obrigatório',
                minLength: { value: 3, message: 'Mínimo de 3 caracteres' },
              })}
            />
            {errors.nome && <span className="text-[#e53e3e] text-[0.8rem]">{errors.nome.message}</span>}
          </div>

          <div className="flex flex-col gap-[0.3rem] mb-3">
            <label htmlFor="email" className="font-bold text-[0.95rem] text-[#010817]">E-mail*</label>
            <input
              id="email"
              type="email"
              placeholder="seuemail@exemplo.com"
              className={`${inputBase} ${errors.email ? inputError : ''}`}
              {...register('email', {
                required: 'E-mail é obrigatório',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'E-mail inválido',
                },
              })}
            />
            {errors.email && <span className="text-[#e53e3e] text-[0.8rem]">{errors.email.message}</span>}
          </div>

          <div className="flex flex-col gap-[0.3rem] mb-3">
            <label htmlFor="telefone" className="font-bold text-[0.95rem] text-[#010817]">Telefone / WhatsApp*</label>
            <input
              id="telefone"
              type="text"
              placeholder="(11) 99999-9999"
              className={`${inputBase} ${errors.telefone ? inputError : ''}`}
              {...register('telefone', {
                required: 'Telefone é obrigatório',
                pattern: {
                  value: /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/,
                  message: 'Formato inválido. Ex: (11) 99999-9999',
                },
              })}
            />
            {errors.telefone && <span className="text-[#e53e3e] text-[0.8rem]">{errors.telefone.message}</span>}
          </div>

          <div className="flex flex-col gap-[0.3rem] mb-3">
            <label htmlFor="assunto" className="font-bold text-[0.95rem] text-[#010817]">Assunto*</label>
            <input
              id="assunto"
              type="text"
              placeholder="Assunto da mensagem"
              className={`${inputBase} ${errors.assunto ? inputError : ''}`}
              {...register('assunto', {
                required: 'Assunto é obrigatório',
                minLength: { value: 3, message: 'Mínimo de 3 caracteres' },
              })}
            />
            {errors.assunto && <span className="text-[#e53e3e] text-[0.8rem]">{errors.assunto.message}</span>}
          </div>

          <div className="flex flex-col gap-[0.3rem] mb-3">
            <label htmlFor="mensagem" className="font-bold text-[0.95rem] text-[#010817]">Mensagem*</label>
            <textarea
              id="mensagem"
              rows={5}
              placeholder="Escreva sua mensagem aqui..."
              className={`${inputBase} resize-y ${errors.mensagem ? inputError : ''}`}
              {...register('mensagem', {
                required: 'Mensagem é obrigatória',
                minLength: { value: 10, message: 'Mínimo de 10 caracteres' },
              })}
            />
            {errors.mensagem && <span className="text-[#e53e3e] text-[0.8rem]">{errors.mensagem.message}</span>}
          </div>

          {isSubmitSuccessful && (
            <p className="text-[#2f855a] text-[0.95rem] font-semibold text-center">
              ✅ Mensagem enviada com sucesso!
            </p>
          )}

          <button
            type="submit"
            className="mt-2 bg-[#fd8b08] text-white border-none py-[0.8rem] rounded-lg text-[1rem] font-bold cursor-pointer transition-colors duration-200 hover:bg-[#b36103]"
          >
            Enviar
          </button>
        </form>

        <div className="flex flex-col items-center gap-6 [@media(min-width:992px)]:flex-row [@media(min-width:992px)]:flex-wrap [@media(min-width:992px)]:justify-center mt-10">
          {acoesContato.map((a) => (
            <ProgramaCard key={a.nome} nome={a.nome} img={a.img} link={a.link} />
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 [@media(min-width:992px)]:flex-row [@media(min-width:992px)]:justify-center [@media(min-width:992px)]:gap-8 mt-8">
          <a
            href="https://www.linkedin.com/company/turma-do-bem/posts/?feedView=all"
            target="_blank"
            rel="noreferrer"
            className="text-[1.1rem] font-semibold text-[#587beb] no-underline transition-colors duration-200 hover:text-[#fd8b08]"
          >
            🔗 LinkedIn
          </a>
          <a
            href="https://www.facebook.com/turmadobem"
            target="_blank"
            rel="noreferrer"
            className="text-[1.1rem] font-semibold text-[#587beb] no-underline transition-colors duration-200 hover:text-[#fd8b08]"
          >
            📘 Facebook
          </a>
        </div>

      </main>

      <div className="hidden [@media(min-width:992px)]:block">
        <Footer />
      </div>
    </div>
  )
}

export default Contato