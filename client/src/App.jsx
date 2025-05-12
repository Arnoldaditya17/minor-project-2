import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from "./features/product/components/CartPage";
import { CartProvider } from "./features/product/context/CartContext";
import Navbar from "./features/home/components/Navbar";
import ProductPage from "./features/product/ProductPage";
import HomePage from "./features/home/HomePage";
import OrderPage from "./features/orders/OrderPage";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <div className="container mx-auto p-4 pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/orders" element={<OrderPage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
