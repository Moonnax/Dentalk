import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Finicio from './pages/Funcionario/Finicio/Finicio'
import Fcadastro from './pages/Funcionario/Fcadastro/Fcadastro'
import Ftriagem from './pages/Funcionario/Ftriagem/Ftriagem'
import Fmonitoramento from './pages/Funcionario/Fmonitoramento/Fmonitoramento'
import FacoesEscola from './pages/Funcionario/FacoesEscola/FacoesEscola'
import Sobre from './pages/Sobre/Sobre'
import Faq from './pages/Faq/Faq'
import Contato from './pages/Contato/Contato'
import QuemSomos from './pages/QuemSomos/QuemSomos'
import Tdb from './pages/Tdb/Tdb'
import Missao from './pages/Missao/Missao'
import Valores from './pages/Valores/Valores'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/contato" element={<Contato/>} />
        <Route path="/quemsomos" element={<QuemSomos/>} />
        <Route path="/tdb" element={<Tdb/>} />
        <Route path="/missao" element={<Missao/>} />
        <Route path="/valores" element={<Valores/>} />
        
        <Route path="/" element={<Home />} />
        <Route path="/areaFuncionario" element={<Finicio />} />
        <Route path="/cadastrof" element={<Fcadastro />} />
        <Route path="/triagemf" element={<Ftriagem />} />
        <Route path="/monitoramento" element={<Fmonitoramento />} />
        <Route path="/acoesescolaf" element={<FacoesEscola />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App