import LeftSideOfDetailsPage from "@/components/detailsProduct/leftSideOfDetailsPage";
import Right from "@/components/detailsProduct/Right";
import { getSingleProduct } from "@/lib/getSingleProduct";

const DetailsPage = async ({
  params,
}: {
  params: Promise<{ category: string; id: string }>;
}) => {
  const { id } = await params;
  const { variants, title, price, description } = await getSingleProduct({
    id,
  });
  const images = variants?.[0]?.images;
  const sizes = variants?.[0]?.sizes;

  return (
    <div className="relative">
      <div className="absolute bg-sky-500 w-[10rem] h-[12rem] right-4 blur-[10rem] " />

      <div className="max-w-7xl  mx-auto flex justify-between my-4 bg-slate-700/20 p-5">
        {/* left */}
        <LeftSideOfDetailsPage images={images}  />
        {/* right */}
        <Right
          variants={variants}
          id={id}
          title={title}
          price={price}
          sizes={sizes}
          description={description}
        />
      </div>
    </div>
  );
};

export default DetailsPage;
