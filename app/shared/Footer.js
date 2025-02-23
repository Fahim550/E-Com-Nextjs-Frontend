import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 pt-8 py-12">
      <div className="container mx-auto px-6 lg:px-12 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-gray-400 transition duration-300">Home</a></li>
              <li><a href="/shop" className="hover:text-gray-400 transition duration-300">Shop</a></li>
              <li><a href="/about" className="hover:text-gray-400 transition duration-300">About Us</a></li>
              <li><a href="/contact" className="hover:text-gray-400 transition duration-300">Contact Us</a></li>
              <li><a href="/faq" className="hover:text-gray-400 transition duration-300">FAQ</a></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-xl font-bold mb-4">Customer Support</h3>
            <ul className="space-y-2">
              <li><a href="/shipping" className="hover:text-gray-400 transition duration-300">Shipping Information</a></li>
              <li><a href="/returns" className="hover:text-gray-400 transition duration-300">Returns & Exchanges</a></li>
              <li><a href="/privacy" className="hover:text-gray-400 transition duration-300">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-gray-400 transition duration-300">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-4">Get the latest updates on new products and exclusive offers.</p>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
                <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
                <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
                <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
                <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Your E-Commerce Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;