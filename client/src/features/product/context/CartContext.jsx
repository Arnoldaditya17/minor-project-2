// src/context/CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [checkoutItems, setCheckoutItems] = useState([]); 
  const [selectedRoom, setSelectedRoom] = useState(null);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find(item => item.product_ndc === product.product_ndc);
      
      if (existingProduct) {
        return prevItems.map(item =>
          item.product_ndc === product.product_ndc
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find(item => item.product_ndc === productId);
      
      if (existingProduct && existingProduct.quantity > 1) {
        return prevItems.map(item =>
          item.product_ndc === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prevItems.filter(item => item.product_ndc !== productId);
      }
    });
  };

  const checkoutCart = (roomNo) => {
  setCheckoutItems(cartItems);
  setSelectedRoom(roomNo); // ✅ store room number
  setCartItems([]); // clear cart after checkout
};

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      checkoutItems, 
      checkoutCart,
      selectedRoom,
    }}>
      {children}
    </CartContext.Provider>
  );
};
