interface TitlePageProps {
  titulo: string
  subtitulo?: string
}

function TitlePage({ titulo, subtitulo }: TitlePageProps) {
  return (
    <div className="text-center pt-8">
      <h1 className="text-[2.6rem] text-[#010817] font-bold">{titulo}</h1>
      {subtitulo && (
        <p className="text-[1.1rem] text-[#666] max-w-[42rem] mx-auto mt-2 leading-[1.6]">
          {subtitulo}
        </p>
      )}
    </div>
  )
}

export default TitlePage