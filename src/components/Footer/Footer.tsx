import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer-logo">DenTalk</h2>

      <p className="footer-slogan">
        "Cada sorriso, uma história"
      </p>

      <p className="footer-info">
        Projeto institucional desenvolvido por alunos do Centro Universitário{" "}
        <a
          className="fiap-color"
          href="https://www.fiap.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          FIAP
        </a>
      </p>
    </footer>
  );
}

export default Footer;