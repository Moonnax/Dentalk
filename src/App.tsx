import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Finicio from './pages/Funcionario/Finicio/Finicio'
import Fcadastro from './pages/Funcionario/Fcadastro/Fcadastro'
import Ftriagem from './pages/Funcionario/Ftriagem/Ftriagem'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/areaFuncionario" element={<Finicio />} />
        <Route path="/cadastrof" element={<Fcadastro />} />
        <Route path="/triagemf" element={<Ftriagem />} />
        <Route path="/monitoramento" element={<Finicio />} />
        <Route path="/acoesescolaf" element={<Finicio />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App