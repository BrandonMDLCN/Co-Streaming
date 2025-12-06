import React from "react";
const PeliculaDetails = ({ pelicula, comprarPelicula, reservarPelicula}) => {
  return (
    <div className="pelicula-card">
      <iframe width="100%" height="315" src={pelicula.trailer} title={`Trailer de ${pelicula.nombre}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <div className="card-info">
        <h3 className="pelicula-titulo"><strong>Nombre de Pelicula: </strong>{pelicula.nombre}</h3>
          <button onClick={() => comprarPelicula(pelicula)}>
            Comprar
          </button>
          <button onClick={() => reservarPelicula(pelicula)}>
            Reservar
          </button>
        <p className="pelicula-director"><strong>Director: </strong>{pelicula.director}</p>
        <p className="pelicula-ano"><strong>Año de estreno: </strong>{pelicula.anoEstreno}</p>
        <p className="pelicula-categoria"><strong>Categoría: </strong>{pelicula.categoria}</p>
        <p className="pelicula-duracion"><strong>Duración: </strong>{pelicula.duracion}</p>
        <p className="pelicula-duracion"><strong>Actores: </strong>{pelicula.actores}</p>
        <p className="pelicula-sinopsis"><strong>Sinopsis: </strong>{pelicula.sinopsis}</p>
      </div>
    </div>
  );
};

export default PeliculaDetails;
