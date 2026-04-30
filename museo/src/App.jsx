import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Items from './pages/Items'
import ItemDetalle from './pages/Detalles'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="items" element={<Items />} />
        <Route path="items/:id" element={<ItemDetalle />} />
      </Route>
    </Routes>
  )
}