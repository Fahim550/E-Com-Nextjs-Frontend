import Link from 'next/link';

const HeroSection = () => {
  return (
    <div
      id="hero"
      className="grid grid-cols-2 pt-6 px-6 lg:px-20 overflow-hidden h-screen gap-2"
      style={{
        background:
          'linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, rgb(238, 239, 175) 0%, rgb(195, 227, 250) 100%)',
        clipPath: 'ellipse(150% 87% at 93% 13%)',
      }}
    >
      <div className="mx-6 md:mx-10 mt-0 md:mt-6 col-span-2 sm:col-span-1">
        <h1 className="text-[6vw] sm:text-[3vw] font-bold text-gray-900 leading-tight">
          Shop exclusive collections crafted for quality and distinction.
        </h1>
        <p className="font-normal text-[2vw] leading-normal md:mt-4 text-gray-700">
          Explore curated selections: <br />
          <span className="font-medium">"Electronics," "Fashion,"</span> and{' '}
          <span className="font-medium">"Home Essentials"</span>
        </p>
        <Link href="/product" passHref>
          <button className="text-lg mt-8 px-4 bg-blue-500 hover:bg-blue-600 text-white  shadow-lg rounded">
            Start Shopping
          </button>
        </Link>
      </div>
      <div className="flex justify-center md:justify-end col-span-2 sm:col-span-1">
        <img
          src="https://quickcart-gs.vercel.app/_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2Favinashdm%2Fgs-images%2Fmain%2Fquickcart%2Fm16coelz8ivkk9f0nwrz.webp&w=1920&q=75"
          alt="Elegant Watch"
          className="w-9/12 md:w-full transition ease-linear duration-300 hover:scale-125"
        />
      </div>
    </div>
  );
};

export default HeroSection;