import Image from "next/image";
import Link from "next/link";

export default function Categories() {
  const categories = [
    {
      href: "/products/men",
      name: "Men",
      image:
        "/vecteezy_casual-button-up-in-soft-aqua-on-a-stylish-male-model-set-in_48990004.jpg",
    },
    {
      href: "/products/kids",

      name: "Kids",
      image:
        "/vecteezy_a-little-girl-wearing-sunglasses-and-a-black-t-shirt_65968562.jpg",
    },
    {
      //   name: "Accessories",
      href: "/products/women",

      name: "Women",
      //   image: "/vecteezy_stylish-accessories-arranged-on-a-vibrant-red-background-for_53388101.jpeg",
      image:
        "/vecteezy_women-s-clothes-on-a-hanger-in-a-room-with-white-walls-ai_33113886.jpg",
    },
  ];

  return (
    <section className="container mx-auto mb-12 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center ">
        <span className="  bg-gradient-to-l via-blue-400 to-fuchsia-600 from-violet-700 bg-clip-text text-transparent ">
          Shop by Category
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((cat, index) => (
          <Link
            href={cat.href}
            key={index}
            className="relative h-[240px] rounded overflow-hidden group cursor-pointer shadow-lg"
          >
            {/* Background Image */}
            <Image
              src={cat.image}
              alt={cat.name}
              fill
              className="object-cover transform group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />

            {/* Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-2xl font-bold tracking-wide">
                {cat.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
