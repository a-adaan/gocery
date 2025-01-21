"use client";

import { useState } from "react";
import Slider from "./Slider";

export default function Hero() {
  const slides = [
    "/image/hero/hero01.svg",
    "/image/hero/hero01.svg",
    "/image/hero/hero01.svg",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const handleSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full mt-8 h-[176px] md:h-[300px] lg:h-[556px] rounded-lg lg:rounded-[25px] relative overflow-hidden">
      {/* Slider */}
      <div
        className="flex items-center transition-transform duration-500 ease-in-out rounded-lg lg:rounded-[25px]"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((img, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <Slider img={img} />
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="absolute bottom-2 lg:bottom-8 left-0 flex w-full justify-center gap-2 py-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-[11px] rounded transition-all duration-300 ${
              activeIndex === index
                ? "w-[35px] bg-[#FE9F00]"
                : "w-[11px] bg-[#FFFFFF66]"
            }`}
            onClick={() => handleSlide(index)}
          ></button>
        ))}
      </div>

      {/* content */}

      <div className="absolute block lg:hidden top-[52px] left-[24px] w-[190px] h-[109px]">
        <p className="text-lg font-bold text-text">
          free delivery <br />
          <span className="text-green-500 text-6xl font-semibold">20%</span> off
        </p>
      </div>

      <div className="absolute hidden lg:block top-[66px] left-[80px] w-[557px] h-[456px]">
        <p className="text-[52px] font-bold text-text">
          Free Home Delivery
          <br />
          In 24 Hour
        </p>
        <p className="mt-10 mb-9 text-base text-[#76777D] font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
          amet, condimentum neque ut. Vulputate sed enim ipsum nisi, leo, sed
          arcu facilisis sed. Rutrum sed diam et id tristique augue consectetur
          fringilla. Auctor vitae commodo commodo facilisis vulputate.
        </p>
        <button className="w-[308px] h-[62px] text-white font-bold text-lg bg-primary hover:bg-[#c08a2c] rounded-[39px] outline outline-2 outline-offset-4 outline-[#FE9F00]">
          Shop Now
        </button>
      </div>
    </div>
  );
}
