import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Vinicio from './pages/Voluntario/Vinicio/Vinicio'
import Vatendimentos from './pages/Voluntario/Vatendimentos/Vatendimentos'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* rota principal */}
        <Route path="/" element={<Vinicio />} />

        {/* outras páginas */}
        <Route path="/atendimentos" element={<Vatendimentos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App