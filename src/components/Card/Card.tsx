interface CardProps {
  img: string
  alt: string
  titulo: string
  descricao: string
  numero?: string
}

function Card({ img, alt, titulo, descricao, numero }: CardProps) {
  return (
    <div
      className="
        flex items-center gap-8 bg-white rounded-[1rem] overflow-hidden
        border border-[#eee] shadow-[0_2px_8px_rgba(0,0,0,0.07)]
        transition-all duration-[250ms] ease-in-out
        hover:shadow-[0_6px_20px_rgba(253,139,8,0.15)] hover:-translate-y-[2px]

        /* Mobile/Tablet: coluna */
        flex-col gap-0
        /* Desktop: linha */
        [@media(min-width:992px)]:flex-row [@media(min-width:992px)]:gap-8
      "
    >
      <div className="relative flex-shrink-0 w-full [@media(min-width:992px)]:w-auto">
        <img
          src={img}
          alt={alt}
          className="
            w-full h-[12rem] object-cover block
            [@media(min-width:992px)]:w-[10rem] [@media(min-width:992px)]:h-[10rem]
          "
        />
        {numero && (
          <span className="
            absolute top-2 left-2
            bg-[#fd8b08] text-white
            text-[0.85rem] [@media(min-width:992px)]:text-[0.75rem]
            font-[800] px-[0.45rem] py-[0.2rem]
            rounded-[0.35rem] tracking-[0.05em]
          ">
            {numero}
          </span>
        )}
      </div>

      <div className="p-4 [@media(min-width:992px)]:py-5 [@media(min-width:992px)]:pr-6 [@media(min-width:992px)]:pl-0 text-left">
        <p className="text-[1.3rem] font-[800] text-[#010817] mb-[0.4rem]">{titulo}</p>
        <p className="text-[0.95rem] text-[#555] leading-[1.6]">{descricao}</p>
      </div>
    </div>
  )
}

export default Card