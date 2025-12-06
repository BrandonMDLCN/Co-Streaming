import React from "react";
import { Link } from "react-router-dom";

const PeliculaCard = ({ pelicula }) => {
  return (
    <div className="pelicula-card">
      <img
        src={pelicula.portada}
        alt={`Portada de ${pelicula.nombre}`}
        className="pelicula-portada"
      />
      <div className="card-info">
        <h3 className="pelicula-titulo">{pelicula.nombre}</h3>
        <p className="pelicula-director">Director: {pelicula.director}</p>
        <p className="pelicula-ano">Año: {pelicula.anoEstreno}</p>
        <p className="pelicula-categoria">Categoría: {pelicula.categoria}</p>
        <Link to={`/Detalle-Pelicula/${pelicula.id}`}>
          <button>
            Detalles
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PeliculaCard;
