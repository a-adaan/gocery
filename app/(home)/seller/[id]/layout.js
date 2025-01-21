"use client";
import { useSearchParams } from "next/navigation";

export default function SellerLayout({ children, category, rating }) {
  const searchParams = useSearchParams();
  const section = searchParams.get("section");
  return (
    <div>
      {children}
      <div className="lg:mt-[480px]">
        {section === "category" && category}
        {section === "rating" && rating}
      </div>
    </div>
  );
}
