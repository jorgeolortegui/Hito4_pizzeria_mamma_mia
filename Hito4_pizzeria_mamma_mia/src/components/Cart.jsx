// src/components/Cart.jsx
import React, { useState } from "react";
import { pizzaCart } from "../data/pizzas";
import "./Cart.css";  // Asegúrate de que el archivo CSS esté importado correctamente

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);
  const [isProcessing, setIsProcessing] = useState(false); // Estado para simular el pago

  // Función para aumentar la cantidad de una pizza en el carrito
  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    setCart(updatedCart);
  };

  // Función para disminuir la cantidad de una pizza en el carrito
  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.count > 1
        ? { ...item, count: item.count - 1 }
        : item
    );
    setCart(updatedCart);
  };

  // Función para eliminar una pizza del carrito
  const removePizza = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  // Calcular el total de la compra
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.count, 0);
  };

  // Simulacro de pago
  const handlePayment = () => {
    setIsProcessing(true);  // Inicia el "proceso" de pago

    setTimeout(() => {
      setIsProcessing(false);
      alert("¡Pago realizado con éxito! Gracias por tu compra.");
      // Limpiar el carrito después del pago (opcional)
      setCart([]);
    }, 2000); // Simula un tiempo de procesamiento de 2 segundos
  };

  return (
    <div className="cart-container">
      <h2>Detalles del pedido</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img className="cart-item-img" src={item.img} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-info">
                <h4>{item.name}</h4>
                <p>Precio: ${item.price.toLocaleString()}</p>
              </div>
              <div className="cart-item-quantity">
                <button onClick={() => decreaseQuantity(item.id)} className="btn btn-decrease">-</button>
                <span>{item.count}</span>
                <button onClick={() => increaseQuantity(item.id)} className="btn btn-increase">+</button>
              </div>
              <button onClick={() => removePizza(item.id)} className="btn btn-remove">Eliminar</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Total: ${calculateTotal().toLocaleString()}</h3>
        <button
          className="pay-btn"
          onClick={handlePayment}
          disabled={isProcessing}  // Desactiva el botón durante el "proceso"
        >
          {isProcessing ? "Procesando..." : "Pagar"}
        </button>
      </div>
    </div>
  );
};

export default Cart;
