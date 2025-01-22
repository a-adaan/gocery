import { FaRegHeart } from "react-icons/fa";
import ToggleSellerBtn from "./ToggleSellerBtn";

export default function SellerPage() {
  const stats = [
    { title: "Joined", value: "11+" },
    { title: "Favorites", value: "1583" },
    { title: "Positive Seller Ratings", value: "96%" },
    { title: "Ship on Time", value: "71%" },
    { title: "Chat Response Rate", value: "92%" },
  ];
  return (
    <div className="relative">
      <div className="relative bg-[url('/image/seller/hero.svg')] w-full h-[260px] lg:h-[426px] bg-cover z-0">
        <div className="hidden lg:block absolute bottom-0 left-0 bg-white w-full h-10 rounded-t-3xl"></div>
      </div>
      <div className=" bg-white w-full">
        {/* Header Section */}
        <div className="container flex flex-col lg:flex-row items-start mt-[52px] justify-between gap-5 ">
          {/* Left Content */}
          <div>
            <span className="flex items-center text-2xl md:text-3xl font-bold text-text ">
              Your Bananas
              <FaRegHeart className="text-2xl ml-3 text-text" />
            </span>
            <div className="flex flex-wrap gap-2 mt-2">
              {/* category */}
              {Array(3)
                .fill("Fruits")
                .map((cat, index) => (
                  <span
                    key={index}
                    className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {cat}
                  </span>
                ))}
            </div>
            {/* Rating and Reviews */}
            <div className="flex items-center mt-2 text-gray-500 text-sm">
              <div className="rating rating-xs rating-half my-2">
                {[...Array(10)].map((_, index) => (
                  <input
                    key={index}
                    type="checkbox"
                    name="rating-10"
                    className={`mask mask-star-2 ${
                      index % 2 === 0 ? "mask-half-1" : "mask-half-2 mr-1"
                    } bg-rating`}
                    disabled
                    defaultChecked={index === 4}
                  />
                ))}
              </div>
              <span className="ml-2">99+</span>
              <ToggleSellerBtn />
            </div>
          </div>
          {/* Chat Button */}
          <button className="w-1/2 lg:w-[177px] h-[51px] text-white font-bold text-lg bg-primary hover:bg-[#c08a2c] rounded-[39px] outline outline-2 outline-offset-4 outline-[#FE9F00]">
            chat
          </button>
        </div>
        {/* Description */}
        <p className="text-[#76777D] container text-justify text-sm mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, nam
          auctor blandit sed metus id orci. Malesuada sed ultrices velit
          commodo. Neque elementum adipiscing Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. auctor blandit sed metus id orci.
          Malesuada sed ultrices velit commodo. Neque elementum adipiscing Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Arcu, nam auctor
          blandit sed metus id orci. Malesuada sed ultrices velit commodo. Neque
          elementum adipiscing Lorem sit amet, consectetur adipiscing elit.
          Arcu, nam auctor blandit sed metus id orci. Malesuada sed ultrices
          velit commodo. Neque elementum adipiscing Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Arcu, nam auctor blandit sed metus id
          orci. Malesuada sed ultrices velit commodo. Neque elementum adipiscing
        </p>

        {/* Stats Section */}
        <div className="container mt-5 mb-[43px] h-auto lg:h-[120px] bg-[#F8F8FA] rounded-2xl w-full grid grid-cols-2 lg:grid-cols-5 gap-2 divide-x divide-[#F8F8FA]">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-between py-4 px-4 "
            >
              <div className="text-base font-normal">{stat.title}</div>
              <div className="text-[36px] text-[#67CB19] font-medium">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
