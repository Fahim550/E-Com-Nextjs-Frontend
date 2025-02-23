'use client'; // Mark as a Client Component if needed
import axios from 'axios';
import { useEffect, useState } from "react";
import ProductCard from '../components/productCard';
const TrendingProduct = () => {
    
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
      const addToCart = async (product) => {
        try {
          // Prepare the payload to send to the backend
          const payload = {
            productId: product._id, // Ensure the product object has an `_id` field
            
            quantity: 1, // Default quantity (can be dynamic based on user input)
          };
      
          // Call the backend API to add the product to the cart
          const response = await axios.post('https://e-com-nextjs-backend.onrender.com/cart', payload);
          console.log('Product added to cart:', response.data);
          alert(`Product added to cart! `);
        } catch (error) {
          console.error('Failed to add product to cart:', error);
          alert('Failed to add product to cart');
        }
      };
      // Display loading state
      if (loading) {
        return <div>Loading products...</div>;
      }
    
      // Display error message
      if (error) {
        return <div>Error: {error}</div>;
      }
      const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
          return text.substring(0, maxLength) + '...';
        }
        return text;
      };
  return (
    <div className="bg-white py-10">

    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Trending Products <span className="absolute mx-auto mt-12 left-0 right-0 w-40 h-1 bg-blue-500"></span></h2>
      <div>

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
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <img
              src={product.image || "https://via.placeholder.com/150"} // Use a placeholder if no image is provided
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">{truncateText(product.description, 100)}</p>
            <div className="flex items-center mb-4">
              <span className="text-yellow-400">★★★★☆</span>
              <span className="ml-2 text-gray-600">{product.rating}</span>
            </div>
            <p className="text-2xl font-bold mb-4">{product.price}</p>
            <button onClick={() => addToCart(product)} className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
            Add To cart
            </button>
          </div>
        ))}
      </div> */}
    </div>
  </div>
  );
};

export default TrendingProduct; 