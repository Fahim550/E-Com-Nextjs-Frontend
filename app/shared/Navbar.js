"use client";
import { faBars, faBoxOpen, faHome, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
const [cartCount, setCartCount] = useState(0);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  // Fetch cart item count from backend
  useEffect(() => {
    const fetchCartItems = async () => {
        try {
            const response = await fetch("https://e-com-nextjs-backend.onrender.com/cart");
            if (!response.ok) {
                throw new Error("Failed to fetch cart products");
            }
            const data = await response.json();
            console.log("cart", data.carts);

            setCartItems(data.carts); // Update state with fetched products
            setCartCount(data.carts.length); // Update the cart item count

        } catch (error) {
            setError(error.message); // Set error message
        } finally {
            setLoading(false); // Set loading to false
        }
    };

    fetchCartItems();
}, []);
    return (
        <nav className="bg-white shadow-md px-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-2xl font-bold text-blue-600 items-start">
                    <Link href="/">
                    <img src="/image/logo.png" alt="Logo" className="w-24 h-20" />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 items-center">
                    <Link href="/" className="flex items-center hover:text-blue-500 transition-colors">
                        <FontAwesomeIcon icon={faHome} className="mr-2" />
                        Home
                    </Link>
                    <Link href="/products" className="flex items-center hover:text-blue-500 transition-colors">
                        <FontAwesomeIcon icon={faBoxOpen} className="mr-2" />
                        Products
                    </Link>
                    <Link href="/cart" className="relative flex items-center hover:text-blue-500 transition-colors">
    <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
    Cart
    {cartCount > 0 && (
        <span className="absolute -top-4  bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {cartCount}
        </span>
    )}
</Link>
                    {/* <Link href="/contact" className="flex items-center hover:text-blue-500 transition-colors">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        Contact
                    </Link> */}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-2 space-y-2">
                    <Link href="/" className="block p-2 bg-gray-100 rounded flex items-center">
                        <FontAwesomeIcon icon={faHome} className="mr-2" />
                        Home
                    </Link>
                    <Link href="/products" className="block p-2 bg-gray-100 rounded flex items-center">
                        <FontAwesomeIcon icon={faBoxOpen} className="mr-2" />
                        Products
                    </Link>
                    <Link href="/cart" className="block p-2 bg-gray-100 rounded flex items-center">
                        <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                        Cart
                        {cartCount > 0 && (
        <span className="absolute ml-16 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {cartCount}
        </span>
    )}
                    </Link>
                    {/* <Link href="/contact" className="block p-2 bg-gray-100 rounded flex items-center">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        Contact
                    </Link> */}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
