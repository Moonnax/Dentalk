import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TitlePage from "../../components/TitlePage/TitlePage";

const faqs = [
  {
    question: "Quem vai se beneficiar do ERP?",
    answer:
      "Dentistas voluntários, funcionários da Turma do Bem e, indiretamente, os pacientes atendidos, porque o sistema facilita que todos recebam atendimento rápido, seguro e bem organizado. O foco é garantir que cada paciente seja tratado com dignidade e respeito, e que os voluntários tenham uma ferramenta eficiente para acompanhar seus atendimentos.",
  },
  {
    question: "Como o sistema ajuda os pacientes?",
    answer:
      "Garantindo que seus dados estejam seguros, que os atendimentos sejam acompanhados corretamente e que nenhuma solicitação fique sem resposta. Assim, cada paciente é tratado com dignidade e respeito.",
  },
  {
    question: "Como a Turma do Bem se beneficia com esse sistema?",
    answer:
      "O ERP permite que a ONG acompanhe casos de forma organizada, registre históricos de atendimentos e voluntários, e gere métricas que ajudam no planejamento de melhorias e no monitoramento do impacto social de suas ações.",
  },
  {
    question: "O sistema é focado apenas em tecnologia?",
    answer:
      "Não. A prioridade é humanização e eficiência. A tecnologia é apenas uma ferramenta para garantir que pacientes e voluntários tenham um atendimento mais seguro, rápido e organizado.",
  },
  {
    question: "Por que podemos confiar na proposta?",
    answer:
      "O projeto foi desenvolvido por estudantes focados em criar uma solução sob medida para a Turma do Bem, com atenção à segurança das informações e ao cuidado humano, alinhado à missão social da ONG.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <Header />

      <main
        className="
          min-h-[80vh]
          py-[2rem]
          px-[1rem]
          pb-[4rem]
          bg-[#f7f7f7]
        "
      >
        <TitlePage titulo="Perguntas frequentes" />

      <div className="flex justify-center">
        <div
          className="
            max-w-[48rem]
            mt-[2rem]
            mx-auto
            flex
            flex-col
            gap-[0.75rem]
          "
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`
                  bg-white
                  rounded-[0.75rem]
                  border
                  overflow-hidden
                  transition-all
                  duration-200
                  shadow-[0_2px_6px_rgba(0,0,0,0.05)]
                  hover:shadow-[0_4px_14px_rgba(0,0,0,0.1)]
                  ${
                    isOpen
                      ? "border-[#fd8b08] shadow-[0_4px_14px_rgba(253,139,8,0.15)]"
                      : "border-[#e8e8e8]"
                  }
                `}
              >
                <button
                  onClick={() => toggle(index)}
                  className={`
                    w-full
                    bg-transparent
                    border-none
                    px-[1.5rem]
                    py-[1.25rem]
                    flex
                    justify-between
                    items-center
                    gap-[1rem]
                    cursor-pointer
                    text-left
                    text-[1.05rem]
                    font-[700]
                    transition-colors
                    duration-200
                    max-[768px]:text-[0.95rem]
                    max-[768px]:px-[1.1rem]
                    max-[768px]:py-[1rem]
                    ${
                      isOpen ? "text-[#fd8b08]" : "text-[#010817]"
                    }
                  `}
                >
                  <span>{faq.question}</span>

                  <span
                    className="
                      text-[1.5rem]
                      font-[300]
                      text-[#fd8b08]
                      shrink-0
                      leading-none
                    "
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`
                    overflow-hidden
                    transition-all
                    duration-300
                    ${
                      isOpen
                        ? "max-h-[20rem] px-[1.5rem] pb-[1.25rem] max-[768px]:px-[1.1rem] max-[768px]:pb-[1rem]"
                        : "max-h-0 px-[1.5rem] max-[768px]:px-[1.1rem]"
                    }
                  `}
                >
                  <p
                    className="
                      text-[0.97rem]
                      text-[#444]
                      leading-[1.7]
                      border-t
                      border-[#f0f0f0]
                      pt-[1rem]
                    "
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </main>

      <Footer />
    </div>
  );
}

export default FAQ;