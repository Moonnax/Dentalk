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
    <div className="font-[Arial,Helvetica,sans-serif] text-[#010817] flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1 min-h-[80vh] px-4 md:px-6 py-8 pb-16">

        <TitlePage titulo="Perguntas frequentes" />

        <div className="max-w-[48rem] mx-auto mt-8 flex flex-col gap-3">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`
                  bg-white rounded-xl overflow-hidden
                  transition-shadow duration-200
                  ${isOpen
                    ? "border border-[#fd8b08] shadow-[0_4px_14px_rgba(253,139,8,0.15)]"
                    : "border border-[#e8e8e8] shadow-[0_2px_6px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_14px_rgba(0,0,0,0.1)]"
                  }
                `}
              >
                <button
                  onClick={() => toggle(index)}
                  className={`
                    w-full bg-transparent border-none cursor-pointer text-left
                    flex justify-between items-center gap-4
                    px-5 py-5
                    md:px-6 md:py-5
                    text-[0.95rem] md:text-[1.05rem] font-bold
                    transition-colors duration-200
                    ${isOpen ? "text-[#fd8b08]" : "text-[#010817]"}
                  `}
                >
                  <span>{faq.question}</span>
                  <span className="text-[#fd8b08] text-2xl font-light flex-shrink-0 leading-none">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`
                    overflow-hidden transition-all duration-[350ms] ease-in-out
                    ${isOpen ? "max-h-[20rem]" : "max-h-0"}
                  `}
                >
                  <div className="px-5 pb-5 md:px-6 md:pb-5">
                    <p className="text-[0.97rem] text-[#444] leading-[1.7] border-t border-[#f0f0f0] pt-4 m-0">
                      {faq.answer}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}

        </div>
      </main>

      <div className="hidden [@media(min-width:992px)]:block">
        <Footer />
      </div>
    </div>
  );
}

export default FAQ;