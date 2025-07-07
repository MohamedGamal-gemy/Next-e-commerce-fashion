import DetailsProduct from "@/components/detailsProduct/DetailsProduct";
import Right from "@/components/detailsProduct/Right";
import { getSingleProduct } from "@/lib/getSingleProduct";
import Image from "next/image";

const DetailsPage = async ({
  params,
}: {
  params: Promise<{ category: string; id: string }>;
}) => {
  const { id } = await params;
  const { variants, title, price, description } = await getSingleProduct({
    id,
  });
  // console.log(product);
  const images = variants?.[0]?.images;
  const sizes = variants?.[0]?.sizes;
  // const colors = variants.map((variant) => variant.color);
  const imagesOfVariants = variants.map(
    (variant: any) => variant.images[0].url
  );
  // console.log(imagesOfVariants);

  return (
    <div className="relative">
      <div className="absolute bg-sky-500 w-[10rem] h-[12rem] right-4 blur-[10rem] " />

      <div className="max-w-7xl  mx-auto flex justify-between my-4 bg-slate-700/20 p-5">
        {/* left */}
        <DetailsProduct images={images} />
        {/* right */}
        <Right
          title={title}
          price={price}
          sizes={sizes}
          description={description}
          imagesOfVariants={imagesOfVariants}
        />
      </div>
    </div>
  );
};

export default DetailsPage;
