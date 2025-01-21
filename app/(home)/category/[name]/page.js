import CategoryPage from "@/components/category/CategoryPage";

export default async function Category({ params }) {
  const name = (await params).name;
  return <CategoryPage name={name} />;
}
