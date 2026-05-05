import './ProgramaCard.css'

interface ProgramaCardProps {
  nome: string
  img: string
  link: string
}

function ProgramaCard({ nome, img, link }: ProgramaCardProps) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="programa-card">
      <img src={img} alt={nome} className="programa-card-img" />
      <p className="programa-card-nome">{nome}</p>
    </a>
  )
}

export default ProgramaCard