import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'
import Faq from './pages/Faq/Faq'
import QuemSomos from './pages/QuemSomos/QuemSomos'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/quemsomos" element={<QuemSomos/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App