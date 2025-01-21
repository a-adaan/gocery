import CardSlider from "../common/CardSlider";
import FilterBar from "../common/FilterBar";
import ProductCard from "../common/ProductCard";
import Pagination from "./Pagination";

export default function CategoryPage({ name }) {
  return (
    <>
      <div className="hidden lg:block bg-[url('/image/cate.svg')] h-[427px] w-full bg-cover">
        <div className="container h-[456px] ">
          <p className="text-[52px] font-bold pt-[109px] text-text">{name}</p>
        </div>
      </div>
      <div className="mt-6 lg:mt-[72px] container">
        <div className="flex mb-8 lg:flex-row flex-col items-start lg:items-center justify-between">
          <p className="text-[30px] text-[#1A1D26] font-bold mb-4">{name}</p>
          <FilterBar />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[26.7px] justify-items-center">
          {/* Cards */}

          {Array(20)
            .fill("data")
            .map((_, index) => (
              <ProductCard key={index} />
            ))}
        </div>
        <div className="w-full flex justify-center my-[65px]">
          <Pagination />
        </div>
        <div>
          <p className="text-[30px] text-[#1A1D26] font-bold ">Sellers Pick</p>
          <CardSlider />
        </div>
      </div>
    </>
  );
}
