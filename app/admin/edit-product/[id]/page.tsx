import EditProductForm from "@/components/admin/edit-product/EditProductForm";
import { getSingleProduct } from "@/lib/getSingleProduct";

const Edit = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  if (!id) return <div>Product not found</div>;
  const product = await getSingleProduct({ id });
  console.log("product", product);

  return (
    <div>{id && product && <EditProductForm defaultValues={product} />}</div>
  );
};

export default Edit;
