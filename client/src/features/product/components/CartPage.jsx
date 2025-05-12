// src/components/CartPage.js
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-lg text-gray-600">Your cart is empty!</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((product) => (
            <div
              key={product.product_ndc}
              className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg"
            >
              <div>
                <h3 className="text-lg font-semibold">{product.brand_name}</h3>
                <p>{product.generic_name}</p>
                <p>Quantity: {product.quantity}</p>
              </div>
              <button
                onClick={() => handleRemoveItem(product.product_ndc)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrashAlt />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
