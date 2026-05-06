type SaibaMaisProps = {
  href: string;
  texto: string;
};

export default function SaibaMais({ href, texto }: SaibaMaisProps) {
  return (
    <a className="inline-block bg-[#fd8b08] text-white px-[2rem] py-[0.8rem] rounded-[2rem] no-underline font-bold border-none hover:bg-[#b36103] hover:text-white transition-colors">

      {texto}
    </a>
  );
}
