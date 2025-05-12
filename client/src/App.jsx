import React from 'react';
import CartPage from './features/product/components/CartPage';
import { CartProvider } from './features/product/context/CartContext';
import Navbar from './features/home/components/Navbar';
import Products from './features/product/components/Products';

function App() {
  return (
    <CartProvider>
      <Navbar />
      <div className="container mx-auto p-4">
        <Products />
        {/* Add other components if needed */}
      </div>
      <CartPage />
    </CartProvider>
  );
}

export default App;
