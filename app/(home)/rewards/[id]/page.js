import Image from "next/image";

export default async function RewardDetails({ params }) {
  const rewardId = (await params).id;
  return (
    <div className="relative">
      <div className="relative bg-[url('/image/seller/hero.svg')] w-full h-[260px] lg:h-[426px] bg-cover z-0">
        <div className="hidden lg:block absolute bottom-0 left-0 bg-white w-full h-10 rounded-t-3xl"></div>
      </div>
      <div className=" bg-white w-full">
        {/* Header Section */}
        <div className="container flex items-center bg-[#FFF] p-2 rounded-2xl mt-5 w-full">
          {/* Image Section */}

          <Image
            src="/image/reward.jpg"
            width={700}
            height={700}
            alt="delivery"
            className="w-[60px] h-[60px] object-cover rounded-2xl"
          />

          {/* Text Section */}
          <div className="flex flex-1 justify-between items-center h-full ml-4">
            {/* Delivery Info */}
            <div>
              <p className="text-lg font-bold text-black">
                50% off for Fresh Banana
              </p>
              <p className="text-sm font-normal text-gray-600">
                Expired On . 21 March 2022
              </p>
            </div>
          </div>
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
      </div>
    </div>
  );
}
