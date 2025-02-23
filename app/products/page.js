'use client'
import axios from 'axios';
import { useEffect, useState } from "react";
import ProductCard from '../components/productCard';
const AllProducts = () => {
  const [products, setProducts] = useState([]); // State to store products
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle errors

  // Fetch products from the backend API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://e-com-nextjs-backend.onrender.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data.products); // Update state with fetched products
      } catch (error) {
        setError(error.message); // Set error message
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchProducts();
  }, []);

  // Display loading state
  if (loading) {
    return <div>Loading products...</div>;
  }

  // Display error message
  if (error) {
    return <div>Error: {error}</div>;
  }
  const addToCart = async (product) => {
    try {
      // Prepare the payload to send to the backend
      const payload = {
        productId: product._id, // Ensure the product object has an `_id` field
        quantity: 1, // Default quantity (can be dynamic based on user input)
      };
  
      // Call the backend API to add the product to the cart
      const response = await axios.post('/cart', payload);
      console.log('Product added to cart:', response.data);
      alert('Product added to cart!');
    } catch (error) {
      console.error('Failed to add product to cart:', error);
      alert('Failed to add product to cart');
    }
  };

  // Display products
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
                    <ProductCard
                        key={product._id}
                        product={product}
                        addToCart={addToCart}
                        
                    />
                ))}
      </div>
    </div>
  );
};

export default AllProducts;