function Footer() {
  return (
    <footer className="bg-[#010817] text-white text-center px-4 py-8 mt-12">
      <h2 className="mb-3 font-bold text-lg">DenTalk</h2>

      <p className="italic mb-4">"Cada sorriso, uma história"</p>

      <p className="max-w-[30rem] mx-auto whitespace-nowrap text-sm">
        Projeto institucional desenvolvido por alunos do Centro Universitário{" "}
        <a
          href="https://www.fiap.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#fd8b08] no-underline hover:text-[#fd8b08]"
        >
          FIAP
        </a>
      </p>
    </footer>
  );
}

export default Footer;