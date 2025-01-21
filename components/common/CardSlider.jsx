"use client";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProductCard from "./ProductCard";

export default function CardSlider({ cards = 20 }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardsPerSlide = 4;
  const totalSlides = Math.ceil(cards / cardsPerSlide);

  // Move to the next slide
  const handleNext = () => {
    setActiveIndex((prev) =>
      prev < totalSlides - 1 ? prev + 1 : totalSlides - 1
    );
  };

  // Move to the previous slide
  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <>
      <div className="hidden lg:flex items-center">
        <button
          className=" bg-gray-100 text-black rounded-full w-[91px] h-[91px] flex items-center justify-center mr-[30px]"
          onClick={handlePrev}
          aria-label="Previous"
        >
          <FaArrowLeft size={40} />
        </button>
        <div className="w-full h-[400px] flex items-center overflow-hidden">
          {/* Navigation Buttons */}
          {/* Slider */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {/* Card Grid */}
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="grid grid-cols-4 w-full flex-shrink-0"
              >
                {Array.from({ length: cardsPerSlide }).map((_, cardIndex) => {
                  const cardNumber = slideIndex * cardsPerSlide + cardIndex;
                  return cardNumber < cards ? (
                    <ProductCard key={cardNumber} />
                  ) : null;
                })}
              </div>
            ))}
          </div>
        </div>
        {/* Navigation Buttons */}
        <button
          className=" bg-gray-100 text-black rounded-full w-[91px] h-[91px] flex items-center justify-center"
          onClick={handleNext}
          aria-label="Next"
        >
          <FaArrowRight size={40} />
        </button>
      </div>
      <div className="lg:hidden flex w-full pb-2 overflow-x-auto no-scrollbar gap-4 mt-8">
        {/* Cards */}

        {Array(cards)
          .fill("data")
          .map((_, index) => (
            <ProductCard key={index} />
          ))}
      </div>
    </>
  );
}
