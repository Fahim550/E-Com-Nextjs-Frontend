import { faDollarSign, faTag, faTruck, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const FeaturesSection = () => {
  return (
    <div className="bg-blue-200">
    <div className="grid grid-cols-4 gap-4 justify-around mb-6 py-6 mx-16 ">
      {/* Free Shipping */}
      <div className="col-span-4 sm:col-span-2 md:col-span-1 flex items-center space-x-4 mb-4 md:mb-0">
      <FontAwesomeIcon icon={faTruck} className="text-gray-700 transition ease-linear duration-200 hover:scale-125" style={{ fontSize: '2.5rem' }} />
        <div>
          <h3 className="text-xl font-bold text-gray-800">FREE SHIPPING</h3>
          <p className="text-lg text-gray-600">Free shipping on all orders</p>
        </div>
      </div>

      {/* Easy Payment Policy */}
      <div className="col-span-4 sm:col-span-2 md:col-span-1 flex items-center space-x-4 mb-4 md:mb-0">
      <FontAwesomeIcon icon={faWallet} className="text-gray-700 transition ease-linear duration-200 hover:scale-125" style={{ fontSize: '2.5rem' }} />
        <div>
          <h3 className="text-xl font-bold text-gray-800">Easy Payment Policy</h3>
          <p className="text-lg text-gray-600">Multiple payment options for your convenience</p>
        </div>
      </div>

      {/* Money Return */}
      <div className="col-span-4 sm:col-span-2 md:col-span-1 flex items-center space-x-4 mb-4 md:mb-0">
      <FontAwesomeIcon icon={faDollarSign} className="text-gray-700 transition ease-linear duration-200 hover:scale-125" style={{ fontSize: '2.5rem' }} />
        <div>
          <h3 className="text-xl font-bold text-gray-800">MONEY RETURN</h3>
          <p className="text-lg text-gray-600">Back guarantee under 5 days</p>
        </div>
      </div>

      {/* Order Discount */}
      <div className="col-span-4 sm:col-span-2 md:col-span-1 flex items-center space-x-4">
      <FontAwesomeIcon icon={faTag} className="text-gray-700 transition ease-linear duration-200 hover:scale-125" style={{ fontSize: '2.5rem' }} />
        <div>
          <h3 className="text-xl font-bold text-gray-800">ORDER DISCOUNT</h3>
          <p className="text-lg text-gray-600">On every order over $150</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FeaturesSection;