import './Card.css'

interface CardProps {
  img: string
  alt: string
  titulo: string
  descricao: string
  numero?: string
}

function Card({ img, alt, titulo, descricao, numero }: CardProps) {
  return (
    <div className="info-card">
      <div className="info-card-img-wrap">
        <img src={img} alt={alt} className="info-card-img" />
        {numero && <span className="info-card-number">{numero}</span>}
      </div>
      <div className="info-card-body">
        <p className="info-card-title">{titulo}</p>
        <p className="info-card-desc">{descricao}</p>
      </div>
    </div>
  )
}

export default Card