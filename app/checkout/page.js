'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const CheckoutPage = () => {
  const [cartCheckout, setCartCheckout] = useState([]);
  const [user, setUser] = useState({
    name: '',
    email: '',
    address: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  // Fetch cart information
  useEffect(() => {
    const fetchCart = async () => {
      try {
        // Fetch cart data
        const cartResponse = await fetch("https://e-com-nextjs-backend.onrender.com/cart");
        if (!cartResponse.ok) {
          throw new Error("Failed to fetch cart products");
        }
        const cartData = await cartResponse.json();
        setCartCheckout(cartData.carts);
      } catch (error) {
        console.error('Error fetching cart data:', error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Handle checkout process
  const handleCheckout = async () => {
    const confirmed = window.confirm("Are you sure you want to complete the purchase?");
    if (!confirmed) return;

    try {
      // Validate user input
      if (!user.name || !user.email || !user.address) {
        throw new Error("Please fill in all user information fields.");
      }

      // Send a POST request to the checkout endpoint
      const response =  axios.post('https://e-com-nextjs-backend.onrender.com/checkout', { 
        userName: user.name,
        userEmail: user.email,
        userAddress: user.address,
        cartItems: cartCheckout, // Include cart items in the request
      });
      setCartCheckout([]);
      alert(response.data?.message || 'Purchase successful!');
      setCartCheckout([]); // Clear cart on frontend
      router.push(`/`); // Redirect to home page
    } catch (error) {
      console.error('Failed to complete purchase:', error);
      alert(error.response?.data?.error || error.message || 'Failed to complete purchase.');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>

      {/* User Information Input Fields */}
      <div className="mb-6 p-4 border rounded-lg shadow bg-gray-50">
        <h2 className="text-2xl font-semibold mb-2">User Information</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={user.address}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>
      </div>

      {/* Display Cart Items */}
      {Array.isArray(cartCheckout) && cartCheckout.length > 0 ? (
        <>
          <ul className="space-y-4">
            {cartCheckout.map(item => (
              <li key={item._id} className="flex justify-between items-center p-4 border rounded-lg shadow">
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <p className="text-lg font-bold">${item.price * item.quantity}</p>
              </li>
            ))}
          </ul>

          {/* Display Total Price and Checkout Button */}
          <div className="mt-6 text-right">
            <p className="text-xl font-semibold mb-4">
              Total: ${cartCheckout.reduce((total, item) => total + (item.price * item.quantity), 0)}
            </p>
            <button 
              onClick={handleCheckout} 
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Complete Purchase
            </button>
          </div>
        </>
      ) : (
        <p>Your checkout is empty.</p>
      )}
    </div>
  );
};

export default CheckoutPage;