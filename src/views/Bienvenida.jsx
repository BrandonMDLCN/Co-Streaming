import React, { useState } from "react";
import PeliculaCard from "../components/PeliculaCard";
import "../css/buscador.css";

const Bienvenida = ({ peliculas, isLoading, error }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchField, setSearchField] = useState("nombre");
  
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFieldChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredPeliculas = peliculas.filter((pelicula) => {
    if (searchTerm === "") {
      return true;
    }

    const normalizedSearchTerm = searchTerm.toLowerCase();

    const peliculaFieldValue = pelicula[searchField]
      ? pelicula[searchField].toString().toLowerCase()
      : "";

    return peliculaFieldValue.includes(normalizedSearchTerm);
  });

  const noResults =
    !isLoading && peliculas.length > 0 && filteredPeliculas.length === 0;

  return (
    <main className="peliculas-lista-container">
      <h1>Inicio</h1>

      <div className="search-controls-container">
        <select
          value={searchField}
          onChange={handleFieldChange}
          className="search-dropdown"
        >
          <option value="nombre">Título</option>
          <option value="director">Director</option>
          <option value="categoria">Categoría</option>
        </select>

        <input
          type="text"
          placeholder={`Buscar por ${searchField}...`}
          value={searchTerm}
          onChange={handleSearchTermChange}
          className="search-input"
        />
      </div>

      <h2>Catálogo de Películas ({filteredPeliculas.length} peliculas)</h2>

      {error && <p className="error-message">{error}</p>}
      {isLoading && !error && (
        <p className="loading-message">Cargando películas...</p>
      )}

      {noResults && (
        <p className="empty-message">
          No se encontraron películas que coincidan con "{searchTerm}" en el campo de **{searchField}**.
        </p>
      )}

      {!isLoading && filteredPeliculas.length > 0 && (
        <div className="peliculas-grid">
          {filteredPeliculas.map((pelicula) => (
            <PeliculaCard key={pelicula.id} pelicula={pelicula} />
          ))}
        </div>
      )}

      {!isLoading && peliculas.length === 0 && !noResults && (
        <p>No se encontraron películas en el catálogo.</p>
      )}
    </main>
  );
};

export default Bienvenida;
