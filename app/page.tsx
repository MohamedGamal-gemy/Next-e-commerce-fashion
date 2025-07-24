import Categories from "@/components/categories/Categories";
import HeroSection from "@/components/hero/HeroSection";
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-col gap-8">
      <HeroSection />
      <Categories />
    </div>
  );
};

export default Home;
