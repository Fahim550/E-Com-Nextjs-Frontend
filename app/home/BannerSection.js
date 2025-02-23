import Image from 'next/image';

const BannerSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 px-16">
      {/* First Banner */}
      <div className="relative bg-gray-50 rounded-lg shadow-md overflow-hidden">
        <Image
          src="https://img.freepik.com/free-photo/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera_1258-126800.jpg?t=st=1736088216~exp=1736091816~hmac=55f78242ac515e2847505a16d4267203ce7f2553a102b2e8887a567afbcc3237&w=826"
          alt="Office Dress"
          width={800}
          height={400}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-start p-6">
          <h3 className="text-white text-xl font-bold">
            Up to <span className="text-red-500">50%</span> Off
          </h3>
          <p className="text-white text-lg font-medium mt-2">Office Dress</p>
          <button className="mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-black transition duration-300">
            Shop Now
          </button>
        </div>
      </div>

      {/* Second Banner */}
      <div className="relative bg-gray-50 rounded-lg shadow-md overflow-hidden">
        <Image
          src="https://img.freepik.com/free-photo/front-view-cyber-monday-shopping-cart-with-bags-copy-space_23-2148657638.jpg?t=st=1736089185~exp=1736092785~hmac=725035bc832188a429b9b1d57fe36253fcc63d3d4e9bf78ea467dab6823590b9&w=996"
          alt="All Products"
          width={800}
          height={400}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-start p-6">
          <h3 className="text-white text-xl font-bold">
            Up to <span className="text-red-500">40%</span> Off
          </h3>
          <p className="text-white text-lg font-medium mt-2">All Products</p>
          <button className="mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-black transition duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;