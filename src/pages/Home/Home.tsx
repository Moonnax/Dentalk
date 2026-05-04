import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import logo from '../../assets/logo.png'
import background from '../../assets/home-background.png'
import "./Home.css";

function Home() {
  return (
    <div
      className="home-background"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Header />
      <main className="home-main">
        <div className="home-content">
          <img src={logo} alt="Dentalk" className="home-logo" />
          <p className="home-subtitle">
            Uma solução desenvolvida por estudantes, pensada para apoiar a ONG
            Turma do Bem a transformar vidas através da saúde bucal.
          </p>
          <a href="/sobre" className="home-button">
            Saiba mais sobre
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;