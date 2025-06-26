import React, { useState, useEffect } from "react";
import CardPizza from "./CardPizza";
import "./Home.css";

const Home = () => {
  // Usamos useState para manejar el estado de las pizzas
  const [pizzas, setPizzas] = useState([]); // Inicializamos un array vacío de pizzas

  // Consumimos la API dentro de useEffect
  useEffect(() => {
    // Realizamos la petición a la API
    fetch("http://localhost:5000/api/pizzas")
      .then((response) => response.json()) // Convertimos la respuesta en formato JSON
      .then((data) => setPizzas(data)) // Actualizamos el estado con las pizzas obtenidas
      .catch((error) => console.error("Error fetching pizzas:", error)); // Manejo de errores
  }, []); // El array vacío significa que solo se ejecutará al montar el componente

  return (
    <div className="home-container">
      <h1>¡Bienvenido a Pizzería Mamma Mía!</h1>
      <div className="pizza-list">
        {/* Mapeamos las pizzas obtenidas de la API */}
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            desc={pizza.desc}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
