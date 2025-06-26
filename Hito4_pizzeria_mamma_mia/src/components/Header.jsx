import React from 'react';
import './Header.css'; // Estilos para el header

const Header = () => {
  return (
    <header className="header-mamma-mia d-flex flex-column justify-content-center align-items-center text-white text-center">
      <h1>¡Pizzería Mamma Mia!</h1>
      <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
      <hr className="w-25" />
    </header>
  );
};

export default Header;
