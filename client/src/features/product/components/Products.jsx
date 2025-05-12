import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    axios
      .get("https://api.fda.gov/drug/ndc.json?limit=10")
      .then((response) => {
        setProducts(response.data.results);
        setTimeout(() => {
          setLoading(false);
        }, 1000); 
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  },
  []);

  // Skeleton shimmer card
  const SkeletonCard = () => (
    <div className="animate-pulse bg-white shadow-md rounded-lg p-4 space-y-4">
      <div className="h-40 bg-gray-300 rounded"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      <div className="h-8 bg-gray-300 rounded w-full mt-4"></div>
    </div>
  );

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Available Medicines
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : products.map((product) => (
              <ProductCard
                key={product.product_ndc}
                product={product}
                addToCart={addToCart}
              />
            ))}
      </div>
    </div>
  );
};

export default Products;
