"use client";
import { useState } from "react";
import Image from "next/image";

export default function ProductImg() {
  const [selectedImage, setSelectedImage] = useState(
    "/image/product/product02.svg"
  );

  // Array of thumbnail image sources
  const thumbnails = [
    "/image/product/product03.svg",
    "/image/product/product02.svg",
    "/image/product/product03.svg",
    "/image/product/product03.svg",
    "/image/product/product03.svg",
  ];

  return (
    <div>
      {/* Main Image with Zoom Effect */}
      <div className="relative w-full h-[500px] overflow-hidden rounded-2xl group">
        <Image
          src={selectedImage}
          alt="product"
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out "
          width={700}
          height={700}
        />
      </div>

      {/* Thumbnail Images */}
      <div className="grid grid-cols-5 gap-2 sm:gap-4 mt-4">
        {thumbnails.map((thumbnail, index) => (
          <Image
            key={index}
            src={thumbnail}
            alt={`product-thumbnail-${index}`}
            className={`w-[107px] h-[107px] cursor-pointer rounded-2xl transition-transform duration-200 ease-in-out ${
              selectedImage === thumbnail
                ? "ring-2 ring-offset-2 ring-primary"
                : ""
            }`}
            width={700}
            height={700}
            onClick={() => setSelectedImage(thumbnail)}
          />
        ))}
      </div>
    </div>
  );
}
