"use client";
import { useState } from "react";
import SellerFilter from "./SellerFilter";
import ProductCard from "@/components/common/ProductCard";

export default function SellerCategory() {
  const [categories, setCategories] = useState([
    "popular",
    "fruits",
    "vegitables",
    "fish",
  ]);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container">
      {/* Tab navigation */}
      <div className="flex border-b border-gray-200">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-6 py-3 text-sm font-medium text-gray-600 hover:text-primary transition-all duration-300 ease-in-out ${
              activeTab === index
                ? "border-b-2  border-primary  text-primary"
                : ""
            }`}
            onClick={() => setActiveTab(index)} // Set the active tab on click
          >
            {category} {/* Display category name as the tab label */}
          </button>
        ))}
      </div>
      {/* filter bar */}
      <SellerFilter />
      {/* Tab content */}
      <div className="mt-6 ">
        {categories[activeTab] && (
          <div>
            <h2 className="text-2xl font-bold my-10 text-text">
              {categories[activeTab]}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[26.7px] justify-items-center">
              {/* Cards */}

              {Array(20)
                .fill("data")
                .map((_, index) => (
                  <ProductCard key={index} />
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
