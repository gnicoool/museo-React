import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Items from './pages/Items'
import ItemDetalle from './pages/Detalles'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/items/:id" element={<ItemDetalle />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App