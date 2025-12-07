// Librerías
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Vistas y Componentes
import Bienvenida from "./views/Bienvenida";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import Favoritos from "./views/Favoritos";
// import Categorias from "./views/Categorias";
import Pedidos from "./views/Pedidos";
import Perfil from "./views/Perfil";
import usePeliculas from "./hooks/usePelicula";
import DetallePelicula from "./views/DetallePelicula";
import usePedidos from "./hooks/usePedidos";

// Estilos
import "./App.css";
import "./css/Movie-Peliculas-Cards.css"
import "./css/MisPedidos.css"

function App() {
  const {peliculas, isLoading, error} = usePeliculas();
  const {compras, reservas, comprarPelicula, reservarPelicula} = usePedidos();

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Bienvenida peliculas={peliculas} isLoading={isLoading} error={error} />} />
          {/* <Route path="/Favoritos" element={<Favoritos />} /> */}
          {/* <Route path="/Categorias" element={<Categorias />} /> */}
          <Route path="/Pedidos" element={<Pedidos compras={compras} reservas={reservas}/>} />
          <Route path="/Pedidos/:vistaCompraReserva" element={<Pedidos compras={compras} reservas={reservas}/>} />
          <Route path="/Perfil" element={<Perfil />} /> 
          <Route path="/Detalle-Pelicula/:id" element={<DetallePelicula peliculas={peliculas} isLoading={isLoading} error={error} comprarPelicula={comprarPelicula} reservarPelicula={reservarPelicula}/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
