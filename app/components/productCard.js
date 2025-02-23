// components/ProductCard.js
'use client';

import Link from 'next/link';

const ProductCard = ({ product, addToCart }) => {

      const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };
    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <Link href={`/products/${product?._id}`} className="block">
                <img
                    src={product?.image || "https://via.placeholder.com/150"}
                    alt={product?.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                />
                <h2 className="text-xl font-semibold mt-4">{product?.name}</h2>
                <p className="text-gray-600">{truncateText(product?.description, 100)}</p>
                <p className="text-lg font-bold mt-2">${product?.price}</p>
            </Link>
            <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => addToCart(product)}
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
