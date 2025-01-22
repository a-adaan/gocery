"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ToggleSellerBtn() {
  const searchParams = useSearchParams();
  const section = searchParams.get("section");
  const [isRating, setIsRating] = useState(false); // Default to category

  useEffect(() => {
    // Update state based on the URL if the section is "rating"
    setIsRating(section === "rating");
  }, [section]);

  return (
    <div>
      <Link
        href={`/seller/123?section=${isRating ? "category" : "rating"}`}
        onClick={() => setIsRating(!isRating)}
        className="ml-2 text-green-600 font-medium"
      >
        • See All {isRating ? "categories" : "Reviews"}
      </Link>
    </div>
  );
}
