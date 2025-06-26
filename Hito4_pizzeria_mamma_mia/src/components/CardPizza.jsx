import React from "react";
import "./CardPizza.css";          // 👉 Asegúrate de tener este archivo de estilos

/**
 * CardPizza – Tarjeta individual de pizza
 * Props:
 *  - name         Nombre de la pizza
 *  - price        Precio numérico
 *  - desc         Descripción breve (opcional)
 *  - ingredients  Array de strings
 *  - img          URL de la imagen
 */
const CardPizza = ({ name, price, desc, ingredients, img }) => {
  return (
    <article className="card-pizza">
      <img src={img} alt={name} />

      <div className="card-content">
        <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>

        {/* Descripción – opcional; coméntala si no la deseas */}
        {desc && <p className="card-desc">{desc}</p>}

        <p className="card-price">
          <strong>Precio:</strong> ${price.toLocaleString()}
        </p>

        <p className="card-ing-title"><strong>Ingredientes:</strong></p>
        <ul className="card-ing-list">
          {ingredients.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default CardPizza;
