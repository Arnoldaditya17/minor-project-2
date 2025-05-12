// src/context/CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find(item => item.product_ndc === product.product_ndc);
      
      if (existingProduct) {
        // If the product already exists, increase the quantity
        return prevItems.map(item =>
          item.product_ndc === product.product_ndc
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If the product doesn't exist, add it with a quantity of 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find(item => item.product_ndc === productId);
      
      if (existingProduct && existingProduct.quantity > 1) {
        // If the quantity is more than 1, just decrease it
        return prevItems.map(item =>
          item.product_ndc === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        // If the quantity is 1 or no quantity, remove it from the cart
        return prevItems.filter(item => item.product_ndc !== productId);
      }
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
