import Nothing from "../common/Nothing";
import ProductCard from "../common/ProductCard";

export default function FavouritePage() {
  const favourites = null;
  return (
    <div className="container flex flex-col items-center">
      <div className="w-[230px] h-[38px] flex items-center border border-primary rounded-full mt-[39px] mb-[30px]">
        <button className="w-[114px] h-[34px] m-[2px] rounded-full text-text hover:text-white hover:bg-primary transition-all duration-200 ease-linear ">
          Items
        </button>
        <button className="w-[114px] h-[34px] m-[2px] rounded-full text-text hover:text-white hover:bg-primary transition-all duration-200 ease-linear">
          Shops
        </button>
      </div>
      {/* items */}
      {favourites ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[26.7px] justify-items-center">
          {/* Cards */}

          {Array(20)
            .fill("data")
            .map((_, index) => (
              <ProductCard key={index} />
            ))}
        </div>
      ) : (
        <>
          <Nothing img="/image/nofav.svg" title="No Favourite Items" />
          <button className="w-[220px] h-[51px] mt-[37px] text-white font-bold text-lg bg-primary hover:bg-[#c08a2c] rounded-[39px] outline outline-2 outline-offset-4 outline-[#FE9F00]">
            Browse Items
          </button>
        </>
      )}
    </div>
  );
}
