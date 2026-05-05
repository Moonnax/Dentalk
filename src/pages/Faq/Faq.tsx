import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./FAQ.css";
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
      <main className="faq-main">
        <TitlePage titulo="Perguntas frequentes"/>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "faq-open" : ""}`}
            >
              <button className="faq-question" onClick={() => toggle(index)}>
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? "−" : "+"}</span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FAQ;