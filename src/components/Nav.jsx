import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  return (
    <nav className="header-nav">
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        {/* Funcionalidades Para Otro Proyecto Proximo */}
        {/* <li>
          <Link to="/Favoritos">Favoritos</Link>
        </li>
        <li>
          <Link to="/Categorias">Categorias</Link>
        </li> */}
        <li
          className="has-submenu"
          onMouseEnter={() => setIsSubmenuOpen(true)}
          onMouseLeave={() => setIsSubmenuOpen(false)}
        >
          <Link to="/Pedidos">Mis Pedidos</Link>
          {isSubmenuOpen && (
            <ul className="submenu">
              <li>
                <Link to="/Pedidos/1">Mis Peliculas</Link>
              </li>
              <li>
                <Link to="/Pedidos/2">Mis Reservas</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/Perfil">Perfil</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
