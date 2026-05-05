import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Vinicio from './pages/Voluntario/Vinicio/Vinicio'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Vinicio" element={<Vinicio />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App