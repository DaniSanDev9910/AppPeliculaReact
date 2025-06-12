import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import ConsultarPeliculas from './pages/ConsultarPeliculas'
import Visualizaciones from './pages/Visualizaciones'
import CrearGenero from './pages/CrearGenero'
import CrearPelicula from './pages/CrearPelicula'
import NavbarMenu from './components/NavbarMenu/NavbarMenu'
import './App.css'

function App() {
  
  return (
    <>
      <div>
        <NavbarMenu />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/verPeliculas" element={<ConsultarPeliculas />} />
            <Route path="/visualizaciones" element={<Visualizaciones />} />
            <Route path="/administrar/crearGenero" element={<CrearGenero />} />
            <Route path="/administrar/crearPelicula" element={<CrearPelicula />} />
          </Routes>
        </div>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
