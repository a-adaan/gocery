import ProductCard from "../common/ProductCard";

export default function NewIn() {
  return (
    <div className="mt-[71px] ">
      <div className="flex mb-8 items-center justify-between">
        <p className="text-[30px] text-[#1A1D26] font-bold">New IN</p>
        <button className="text-base text-[#FE9F00] font-normal hover:text-[#1A1D26]">
          SEE ALL
        </button>
      </div>
      <div className="flex lg:grid lg:grid-cols-5 w-full pb-2 overflow-x-auto no-scrollbar gap-4 lg:gap-[26px]">
        {/* Cards */}

        {Array(5)
          .fill("data")
          .map((_, index) => (
            <ProductCard key={index} />
          ))}
      </div>
    </div>
  );
}
