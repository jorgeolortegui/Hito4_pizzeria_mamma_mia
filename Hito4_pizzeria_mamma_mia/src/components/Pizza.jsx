import React, { useState, useEffect } from 'react';
import './Pizza.css';  // Importamos el archivo de estilos

const Pizza = ({ id }) => {
  const [pizza, setPizza] = useState(null);

  // Usamos useEffect para hacer la petición a la API solo cuando el componente se monta
  useEffect(() => {
    // Realizamos la solicitud a la API usando el id de la pizza
    fetch(`http://localhost:5000/api/pizzas/${id}`)
      .then((response) => response.json()) // Convertimos la respuesta en JSON
      .then((data) => setPizza(data)) // Actualizamos el estado con la pizza obtenida
      .catch((error) => console.error('Error fetching pizza:', error)); // Si hay algún error
  }, [id]); // El efecto se ejecuta solo cuando el id cambia

  if (!pizza) {
    return <p>Loading...</p>; // Mientras no se tenga la pizza, mostramos un mensaje de carga
  }

  return (
    <div className="pizza-details">
      <h1>{pizza.name}</h1>
      <p>{pizza.desc}</p>
      <p><strong>Ingredientes:</strong> {pizza.ingredients.join(', ')}</p>
      <p><strong>Precio:</strong> ${pizza.price}</p>
      <img src={pizza.img} alt={pizza.name} />
      <button>Añadir al carrito</button>
    </div>
  );
};

export default Pizza;
