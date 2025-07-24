import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[570px] overflow-hidden shadow-lg">
      {/* Background Image */}
      <Image
        src="/vecteezy_man-wearing-a-tan-overcoat-and-sunglasses-posing-against-a_47023077.jpeg"
        alt="Stylish Outfit"
        fill
        priority
        className="object-cover object-top"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Hero Content */}
      <div className="absolute top-1/2 -translate-y-1/2 flex flex-col justify-center items-center text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Elevate Your Style
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-6">
          Discover premium fashion pieces that define elegance and confidence.
        </p>
        <div className="flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition">
            Shop Now
          </button>
          <button className="bg-white hover:bg-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-lg transition">
            Explore Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
