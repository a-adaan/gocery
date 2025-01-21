import ProductDetailsPage from "@/components/products/ProductDetailsPage";

export default async function ProductDetails({ params }) {
  const productId = (await params).id;
  return <ProductDetailsPage />;
}
