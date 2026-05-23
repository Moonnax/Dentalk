import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Vinicio from './pages/Voluntario/Vinicio.tsx'
import VMeusPacientes from './pages/Voluntario/Vmeuspacientes'
import Vagenda from './pages/Voluntario/Vagenda.tsx'
import Vatendimentos from './pages/Voluntario/Vatendimentos.tsx'
import VProntuario from './pages/Voluntario/Vprontuarios.tsx'
import ProntuarioPaciente from './pages/Voluntario/ProntuarioPaciente.tsx'

import Finicio from './pages/Funcionario/Finicio.tsx'
import Fcadastro from './pages/Funcionario/Fcadastro.tsx'
import Ftriagem from './pages/Funcionario/Ftriagem.tsx'
import Fmonitoramento from './pages/Funcionario/Fmonitoramento.tsx'
import FacoesEscola from './pages/Funcionario/FacoesEscola.tsx'

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Faq from './pages/Faq'
import Contato from './pages/Contato.tsx'
import QuemSomos from './pages/QuemSomos'
import IntegranteDetalhe from './pages/IntegranteDetalhe'
import Tdb from './pages/Tdb'
import Missao from './pages/Missao'
import Valores from './pages/Valores'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/areaVoluntario" element={<Vinicio />} />
        <Route path="/meus-pacientes" element={<VMeusPacientes />} />
        <Route path="/agenda" element={<Vagenda />} />
        <Route path="/atendimentos" element={<Vatendimentos />} />
        <Route path="/prontuarios" element={<VProntuario />} />
        <Route path="/voluntario/prontuarios/:slug" element={<ProntuarioPaciente />} />
        
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/contato" element={<Contato/>} />
        <Route path="/quemsomos" element={<QuemSomos/>} />
        <Route path="/quemSomos/:id" element={<IntegranteDetalhe />} />
        <Route path="/tdb" element={<Tdb/>} />
        <Route path="/missao" element={<Missao/>} />
        <Route path="/valores" element={<Valores/>} />
        
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