import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Finicio from './pages/Funcionario/Finicio/Finicio'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/areaFuncionario" element={<Finicio />} />
        <Route path="/cadastrof" element={<Finicio />} />
        <Route path="/triagemf" element={<Finicio />} />
        <Route path="/monitoramento" element={<Finicio />} />
        <Route path="/acoesescolaf" element={<Finicio />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App