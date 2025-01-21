import SellerPage from "@/components/seller/SellerPage";

export default async function SellerDetails({ params }) {
  const sellerId = (await params).id;
  return <SellerPage />;
}
