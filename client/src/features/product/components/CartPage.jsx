import { FaTrashAlt } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const CartPage = () => {
  const { cartItems, removeFromCart, checkoutCart } = useCart();
  const navigate = useNavigate();
  const [roomNumber, setRoomNumber] = useState('101'); // default room

  const handleCheckout = () => {
    checkoutCart(roomNumber); // pass room number
    navigate('/orders');
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-lg text-gray-600">Your cart is empty!</p>
      ) : (
        <>
          {/* Room Selection */}
          <div className="mb-4">
            <label htmlFor="room" className="block mb-2 text-sm font-medium text-gray-700">
              Select Room Number
            </label>
            <select
              id="room"
              value={roomNumber}
              onChange={(e) => setRoomNumber(e.target.value)}
              className="border border-gray-300 p-2 rounded w-48"
            >
              <option value="101">Room 101</option>
              <option value="102">Room 102</option>
              <option value="103">Room 103</option>
              <option value="104">Room 104</option>
            </select>
          </div>

          <div className="space-y-4 mb-6">
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
                  onClick={() => removeFromCart(product.product_ndc)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrashAlt />
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={handleCheckout}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
