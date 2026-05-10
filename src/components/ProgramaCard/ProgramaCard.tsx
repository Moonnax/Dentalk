import { Link } from "react-router-dom"

interface ProgramaCardProps {
  nome: string
  img: string
  link: string
}

function ProgramaCard({ nome, img, link }: ProgramaCardProps) {
  return (
    <Link
      to={link}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col items-center no-underline bg-white rounded-[1rem] p-6 w-72 border border-[#eee] shadow-[0_2px_8px_rgba(0,0,0,0.07)] transition-all duration-[250ms] ease-in-out hover:shadow-[0_6px_20px_rgba(253,139,8,0.2)] hover:-translate-y-[3px]"
    >
      <img
        src={img}
        alt={nome}
        className="w-full max-w-[14rem] h-[14rem] object-contain block mb-4"
      />
      <p className="text-[1.2rem] font-bold text-[#010817] text-center transition-colors duration-200 group-hover:text-[#fd8b08]">
        {nome}
      </p>
    </Link>
  )
}

export default ProgramaCard