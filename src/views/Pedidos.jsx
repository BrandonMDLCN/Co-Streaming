import React from "react";
import MovieListCompras from "../components/MovieListCompras";
import MovieListReservas from "../components/MovieListReservas";
import "../css/MisPedidos.css";
import { Link, useParams } from "react-router-dom";

const Pedidos = ({ compras, reservas }) => {
  const { vistaCompraReserva } = useParams();
  const opcionCompraReserva = Number(vistaCompraReserva);
  if (vistaCompraReserva === undefined) {
    return (
      <div>
        <h1>Pagina de Pedidos</h1>
        <Link to="/Pedidos/1" className="pagPedidoPeli-Reserv">
          <h2>Mis Peliculas ({compras.length})</h2>
        </Link>
        <MovieListCompras compras={compras} />

        <Link to="/Pedidos/2" className="pagPedidoPeli-Reserv">
          <h2>Mis Reservas ({reservas.length})</h2>
        </Link>
        <MovieListReservas reservas={reservas} />
      </div>
    );
  } else if (opcionCompraReserva === 1) {
    return (
      <div>
        <h1>Mis Peliculas ({compras.length})</h1>
        <MovieListCompras compras={compras} />
      </div>
    );
  } else if (opcionCompraReserva === 2) {
    return (
      <div>
        <h1>Mis Reservas ({reservas.length})</h1>
        <MovieListReservas reservas={reservas} />
      </div>
    );
  }
  return (
    <div>
      <h1>Error Ruta no disponible</h1>
    </div>
  );
};

export default Pedidos;
