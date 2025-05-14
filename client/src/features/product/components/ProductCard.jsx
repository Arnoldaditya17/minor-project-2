import React from 'react';
import { useCart } from '../context/CartContext';
import { FaShoppingCart, FaPlus, FaMinus, FaTrashAlt } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart, cartItems } = useCart();
  
  // Check if this product is in the cart and get its quantity
  const cartItem = cartItems.find(item => item.product_ndc === product.product_ndc);
  const isInCart = !!cartItem;
  const quantity = cartItem?.quantity || 0;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100">
      {/* Product Image Placeholder */}
      {/* <div className="bg-blue-50 h-48 flex items-center justify-center">
        {product.image ? (
          <img
            src={product.image}
            alt={product.generic_name}
            className="h-40 w-auto object-contain"
          />
        ) : (
          <div className="text-blue-300 text-6xl font-light">Rx</div>
        )}
      </div> */}
      
      {/* Product Info */}
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex-grow">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mb-2 inline-block">
            {product.dosage_form}
          </span>
          <h3 className="text-xl font-bold text-gray-800 mb-1">{product.brand_name}</h3>
          <p className="text-gray-600 text-sm mb-4">{product.generic_name}</p>
          
          {product.price && (
            <p className="text-lg font-semibold text-gray-900 mt-2">${product.price.toFixed(2)}</p>
          )}
        </div>
        
        {!isInCart ? (
          <button
            onClick={() => addToCart(product)}
            className="mt-4 w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-medium"
          >
            <FaShoppingCart size={18} />
            Add to Cart
          </button>
        ) : (
          <div className="mt-4">
            <div className="flex items-center justify-between bg-gray-100 rounded-lg p-2">
              <button
                onClick={() => removeFromCart(product.product_ndc)}
                className="h-8 w-8 flex items-center justify-center bg-red-100 text-red-600 rounded-md hover:bg-red-200"
                title="Remove item"
              >
                {quantity === 1 ? <FaTrashAlt size={14} /> : <FaMinus size={14} />}
              </button>
              
              <span className="font-medium text-gray-800">{quantity}</span>
              
              <button
                onClick={() => addToCart(product)}
                className="h-8 w-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200"
                title="Add item"
              >
                <FaPlus size={14} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;