import { useState, useEffect } from "react";

// Función auxiliar para obtener datos iniciales del localStorage
const getInitialState = (key, defaultValue) => {
  const saved = localStorage.getItem(key);
  return saved ? JSON.parse(saved) : defaultValue;
};

const usePedidos = () => {
  // Estado para las películas compradas
  const [compras, setCompras] = useState(() =>
    getInitialState("compras_co_streaming", [])
  );

  // Estado para las películas reservadas
  const [reservas, setReservas] = useState(() =>
    getInitialState("reservas_co_streaming", [])
  );

  // Efecto para guardar las compras en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem("compras_co_streaming", JSON.stringify(compras));
  }, [compras]);

  // Efecto para guardar las reservas en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem("reservas_co_streaming", JSON.stringify(reservas));
  }, [reservas]);

  // Función para añadir una película a Compras
  const comprarPelicula = (pelicula) => {
    if (!pelicula || !pelicula.id) {
      console.error(
        "Intento de compra con objeto de película inválido o faltante."
      );
      return;
    }
    // Evita duplicados
    if (!compras.some((item) => item.id === pelicula.id)) {
      setCompras((prev) => [...prev, pelicula]);
      alert(`"${pelicula.nombre}" comprada y guardada localmente!`);
    } else {
      alert(`"${pelicula.nombre}" ya está en tus compras.`);
    }
  };

  // Función para añadir una película a Reservas
  const reservarPelicula = (pelicula) => {
    if (!pelicula || !pelicula.id) {
      console.error(
        "Intento de reserva con objeto de película inválido o faltante."
      );
      return;
    }
    if (!reservas.some((item) => item.id === pelicula.id)) {
      setReservas((prev) => [...prev, pelicula]);
      alert(`"${pelicula.nombre}" reservada y guardada localmente!`);
    } else {
      alert(`"${pelicula.nombre}" ya está reservada.`);
    }
  };

  return { compras, reservas, comprarPelicula, reservarPelicula };
};

export default usePedidos;
