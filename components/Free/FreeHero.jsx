import FilterBar from "../common/FilterBar";
import ProductCard from "../common/ProductCard";

export default function FreeHero() {
  return (
    <>
      <div className="hidden lg:block bg-[url('/image/free.svg')] h-[573px] w-full bg-contain">
        <div className="container h-[456px] ">
          <p className="text-[52px] font-bold pt-[109px]">
            Free Home Delivery
            <br />
            In 24 Hour
          </p>
          <p className="mt-10 mb-9 text-base w-[557px] text-[#76777D] font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            amet, condimentum neque ut. Vulputate sed enim ipsum nisi, leo, sed
            arcu facilisis sed. Rutrum sed diam et id tristique augue
            consectetur fringilla. Auctor vitae commodo commodo facilisis
            vulputate.
          </p>
        </div>
      </div>
      <div className="mt-6 lg:mt-[72px] container">
        <div className="flex mb-8 lg:flex-row flex-col items-start lg:items-center justify-between">
          <p className="text-[30px] text-[#1A1D26] font-bold mb-4">
            Free Home Delivery
          </p>
          <FilterBar />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-[26.7px] justify-items-center">
          {/* Cards */}

          {Array(20)
            .fill("data")
            .map((_, index) => (
              <ProductCard key={index} />
            ))}
        </div>
      </div>
    </>
  );
}
