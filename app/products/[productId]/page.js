'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProductDetails = ({params}) => {
  const { productId } =  React.use(params);;// ✅ Correctly get the dynamic route parameter
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!productId) return;

    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://e-com-nextjs-backend.onrender.com/products/${productId}`);
        // alert("Full API Response:", response.data);
        setProduct(response?.data?.product);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) return <div className="text-center p-8">Loading...</div>;
  if (!product) return <div className="text-center p-8">Product not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product?.name}</h1>
      <img 
        src={product?.image} 
        alt={product?.name} 
        className="w-full h-96 object-contain mb-4"
      />
      <div className="space-y-2">
        <p className="text-xl">Price: ${product?.price}</p>
        <p>Stock: {product?.stock}</p>
        <p>Category: {product?.category}</p>
        <p className="text-gray-600">{product?.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
