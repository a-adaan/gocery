import Image from "next/image";

export default function Rewards() {
  return (
    <div className="container">
      <div className="flex items-center bg-[#FFF] border border-border p-2 rounded-2xl mt-5 w-full">
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

          {/* Time Info */}
          <div className="text-right">
            <p className="text-sm font-normal text-primary">View</p>
          </div>
        </div>
      </div>
    </div>
  );
}
