import ProductCard from "../common/ProductCard";

export default function JustForU() {
  return (
    <div className="mt-[72px] ">
      <div className="flex mb-8 items-center justify-between">
        <p className="text-[30px] text-[#1A1D26] font-bold">Just for You</p>
        <button className="text-base text-[#FE9F00] font-normal hover:text-[#1A1D26]">
          SEE ALL
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-rows-4 lg:grid-cols-5 md:gap-[26.7px] gap-y-5 justify-items-center">
        {/* Cards */}

        {Array(20)
          .fill("data")
          .map((_, index) => (
            <ProductCard key={index} />
          ))}
      </div>
      <div className="w-full mt-[47px] flex justify-center">
        <button className="w-[320px] md:w-[370px] h-[54px] rounded-[39px] text-white text-lg font-bold bg-primary outline outline-2 outline-offset-4 outline-[#FE9F00]">
          Load More
        </button>
      </div>
    </div>
  );
}
