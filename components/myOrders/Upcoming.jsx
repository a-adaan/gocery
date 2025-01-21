import Image from "next/image";
import Link from "next/link";

export default function Upcoming() {
  return (
    <div className="bg-[#FFF5E6] rounded-2xl border border-border mt-[42px] p-4 ">
      <div className="flex justify-between items-start">
        {/* Left Section */}
        <div className="flex items-start gap-4">
          {/* Image */}
          <Image
            src="/image/man.svg"
            width={700}
            height={700}
            alt="delivery"
            className="w-[50px] h-[50px] object-cover rounded-md"
          />
          {/* Text Info */}
          <div>
            <p className="text-sm text-[#76777D]">2 Items</p>
            <h2 className="font-bold text-text text-base lg:text-lg">
              Your Banana
            </h2>
          </div>
        </div>

        {/* Right Section */}
        <div className="text-right">
          <p className="text-[#67CB19] font-normal">Order #12062311</p>
        </div>
      </div>
      {/* 2nd row */}
      <div className="flex justify-between items-start mt-[18px] mb-4 lg:mb-[33px]">
        <div>
          <p className="text-sm text-[#76777D]">Estimated Arrival</p>
          <p className="font-bold text-4xl text-text">
            20<span className="text-base font-normal"> min</span>
          </p>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-sm text-[#76777D]">Status</p>
          <p className="font-bold text-black">Item On The Way</p>
        </div>
      </div>
      {/* Buttons */}
      <div className="w-full justify-center lg:justify-end flex gap-2 lg:mt-[28px]">
        <button className="w-[148px] h-[40px] text-text border border-border font-medium text-lg bg-transparent hover:bg-error rounded-[39px]">
          Cancel
        </button>
        <Link href={"/track-order"}>
          <button className="w-[148px] h-[40px] text-white font-semibold text-lg bg-primary hover:bg-[#c08a2c] rounded-[39px]">
            Track Order
          </button>
        </Link>
      </div>
    </div>
  );
}
