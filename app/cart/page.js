'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  // Fetch cart items from the backend
  useEffect(() => {
    const fetchCartItems = async () => {
        try {
            const response = await fetch("https://e-com-nextjs-backend.onrender.com/cart");
            if (!response.ok) {
              throw new Error("Failed to fetch cart products");
            }
            const data = await response.json();
            console.log("cart",data.carts);
            setCartItems(data.carts); // Update state with fetched products
          } catch (error) {
            setError(error.message); // Set error message
          } finally {
            setLoading(false); // Set loading to false
          }
    };

    fetchCartItems();
  }, []);

// Increment
const handleIncrement = async (id) => {
  try {
    const item = cartItems.find((item) => item._id === id);
    const updatedQuantity = item.quantity + 1;
    await axios.put(`https://e-com-nextjs-backend.onrender.com/cart/${id}`, { quantity: updatedQuantity }); // Add await
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, quantity: updatedQuantity } : item
      )
    );
  } catch (error) {
    console.error('Failed to increment quantity:', error);
  }
};

// Decrement
const handleDecrement = async (id) => {
  try {
    const item = cartItems.find((item) => item._id === id);
    const updatedQuantity = item.quantity - 1;
    if (updatedQuantity > 0) {
      await axios.put(`https://e-com-nextjs-backend.onrender.com/cart/${id}`, { quantity: updatedQuantity }); // Add await
      setCartItems((prev) =>
        prev.map((item) =>
          item._id === id ? { ...item, quantity: updatedQuantity } : item
        )
      );
    } else {
      alert("Quantity can't be less than 1");
    }
  } catch (error) {
    console.error('Failed to decrement quantity:', error);
  }
};

// Delete
const handleDelete = async (id) => {
  try {
    await axios.delete(`https://e-com-nextjs-backend.onrender.com/cart/${id}`); // Add await
    setCartItems((prev) => prev.filter((item) => item._id !== id));
  } catch (error) {
    console.error('Failed to delete item:', error);
  }
};

  // Calculate total price
  const totalPrice = Array.isArray(cartItems)
  ? cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  : 0;

  if (loading) return <div>Loading cart items...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleBuyNow = () => {
    router.push(`/checkout`);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-4">Image</th>
            <th className="p-4">Product</th>
            <th className="p-4">Quantity</th>
            <th className="p-4">Price</th>
            <th className="p-4">Total</th>
            <th className="p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(cartItems) && cartItems?.map((item) => (
            <tr key={item._id} className="border-b">
              <td className="p-4">
  <img
    src={item.image} 
    alt={item.name} 
    className="w-16 h-16 object-cover rounded"
  />
</td>
              <td className="p-4">{item.name}</td>
              <td className="p-4">
                <button onClick={() => handleDecrement(item._id)}>-</button>
                <span className="mx-2">{item.quantity}</span>
                <button onClick={() => handleIncrement(item._id)}>+</button>
              </td>
              <td className="p-4">${item.price}</td>
              <td className="p-4">${(item.price * item.quantity).toFixed(2)}</td>
              <td className="p-4">
                <button onClick={() => handleDelete(item._id)} className="bg-red-500 px-4 py-1 text-white text-md font-semibold rounded-lg">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-6 flex justify-between items-center w-full">
  <div className="p-4">
    <button
      onClick={handleBuyNow}
      className="bg-blue-500 px-4 py-1 text-white text-md font-semibold rounded-lg"
    >
      Buy Now
    </button>
  </div>
  <h2 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
</div>
    </div>
  );
}