import { useForm } from 'react-hook-form'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ProgramaCard from '../../components/ProgramaCard/ProgramaCard'
import './Contato.css'

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
      <main className="contato-main">
        <div className="centralize">
          <h1 className="title">Entre em Contato!</h1>

          <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="field">
              <label htmlFor="nome">Nome*</label>
              <input
                id="nome"
                type="text"
                placeholder="Seu nome completo"
                className={errors.nome ? 'input-error' : ''}
                {...register('nome', {
                  required: 'Nome é obrigatório',
                  minLength: { value: 3, message: 'Mínimo de 3 caracteres' },
                })}
              />
              {errors.nome && <span className="error-msg">{errors.nome.message}</span>}
            </div>

            <div className="field">
              <label htmlFor="email">E-mail*</label>
              <input
                id="email"
                type="email"
                placeholder="seuemail@exemplo.com"
                className={errors.email ? 'input-error' : ''}
                {...register('email', {
                  required: 'E-mail é obrigatório',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'E-mail inválido',
                  },
                })}
              />
              {errors.email && <span className="error-msg">{errors.email.message}</span>}
            </div>

            <div className="field">
              <label htmlFor="telefone">Telefone / WhatsApp*</label>
              <input
                id="telefone"
                type="text"
                placeholder="(11) 99999-9999"
                className={errors.telefone ? 'input-error' : ''}
                {...register('telefone', {
                  required: 'Telefone é obrigatório',
                  pattern: {
                    value: /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/,
                    message: 'Formato inválido. Ex: (11) 99999-9999',
                  },
                })}
              />
              {errors.telefone && <span className="error-msg">{errors.telefone.message}</span>}
            </div>

            <div className="field">
              <label htmlFor="assunto">Assunto*</label>
              <input
                id="assunto"
                type="text"
                placeholder="Assunto da mensagem"
                className={errors.assunto ? 'input-error' : ''}
                {...register('assunto', {
                  required: 'Assunto é obrigatório',
                  minLength: { value: 3, message: 'Mínimo de 3 caracteres' },
                })}
              />
              {errors.assunto && <span className="error-msg">{errors.assunto.message}</span>}
            </div>

            <div className="field">
              <label htmlFor="mensagem">Mensagem*</label>
              <textarea
                id="mensagem"
                rows={5}
                placeholder="Escreva sua mensagem aqui..."
                className={errors.mensagem ? 'input-error' : ''}
                {...register('mensagem', {
                  required: 'Mensagem é obrigatória',
                  minLength: { value: 10, message: 'Mínimo de 10 caracteres' },
                })}
              />
              {errors.mensagem && <span className="error-msg">{errors.mensagem.message}</span>}
            </div>

            {isSubmitSuccessful && (
              <p className="success-msg">✅ Mensagem enviada com sucesso!</p>
            )}

            <button type="submit" className="form-btn">Enviar</button>
          </form>

          <div className="contato-acoes">
            {acoesContato.map((a) => (
              <ProgramaCard key={a.nome} nome={a.nome} img={a.img} link={a.link} />
            ))}
          </div>

          <div className="contato-social">
            <a
              href="https://www.linkedin.com/company/turma-do-bem/posts/?feedView=all"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              🔗 LinkedIn
            </a>
            <a
              href="https://www.facebook.com/turmadobem"
              target="_blank"
              rel="noreferrer"
              className="social-link"
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