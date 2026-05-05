import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Vinicio from './pages/Voluntario/Vinicio/Vinicio'
import VMeusPacientes from './pages/Voluntario/Vmeuspacientes/Vmeuspacientes'
import Vagenda from './pages/Voluntario/Vagenda/Vagenda'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/areaVoluntario" element={<Vinicio />} />
        <Route path="/meus-pacientes" element={<VMeusPacientes />} />
        <Route path="/agenda" element={<Vagenda />} />
        <Route path="/atendimentos" element={<Vinicio />} />
        <Route path="/prontuarios" element={<Vinicio />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App