import './TitlePage.css'

interface TitlePageProps {
  titulo: string
  subtitulo?: string
}

function TitlePage({ titulo, subtitulo }: TitlePageProps) {
  return (
    <div className="page-header">
      <h1 className="page-header-titulo">{titulo}</h1>
      {subtitulo && <p className="page-header-subtitulo">{subtitulo}</p>}
    </div>
  )
}

export default TitlePage