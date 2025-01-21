import ConfirmedSummary from "@/components/order-confirm/ConfirmedSummary";
import Image from "next/image";

export default function TrackingOrder() {
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-[689px_482px] gap-[30px] mt-8">
      <div className="w-full flex flex-col items-center">
        <Image
          src={"/image/map.svg"}
          width={700}
          height={700}
          alt="order-confirm"
          className="w-[689px] h-[300px] mb-10"
        />
        {/* delivery info */}
        <div className="bg-[#EFF8E8] w-full rounded-2xl border border-border mt-[42px] p-4 ">
          <div className="flex justify-between items-start">
            {/* Text Info */}
            <div>
              <p className="text-[#76777D] text-sm font-normal">
                Order #12062311
              </p>
              <p className="font-bold text-text text-lg">
                The shipper is coming to the
                <br /> restaurant to pickup your order
              </p>
            </div>
          </div>
          {/* 2nd row */}
          <div className="flex items-center p-2 rounded-2xl mt-5 w-full">
            {/* Image Section */}

            <Image
              src="/image/man.svg"
              width={700}
              height={700}
              alt="delivery"
              className="w-[60px] h-[60px] object-cover rounded-2xl"
            />

            {/* Text Section */}
            <div className="flex flex-1 justify-between items-center ml-4 lg:mb-5">
              {/* Delivery Info */}
              <div>
                <p className="text-sm font-normal text-gray-600">Delivery in</p>
                <p className="text-lg font-bold text-black">John Smith</p>
              </div>

              {/* Time Info */}
              <div className="text-left lg:text-right">
                <p className="text-sm font-normal text-gray-600">BMW S-5</p>
                <p className="text-lg font-bold text-black">CD 06D 1299</p>
              </div>
            </div>
          </div>
        </div>
        {/* delivery man */}
        <div className="flex items-center bg-[#FFF5E6] p-2 rounded-2xl mt-5 w-full">
          {/* Image Section */}

          <Image
            src="/image/man.svg"
            width={700}
            height={700}
            alt="delivery"
            className="w-[60px] h-[60px] object-cover rounded-full"
          />

          {/* Text Section */}
          <div className="flex flex-1 flex-col lg:flex-row justify-between items-start lg:items-end h-full ml-4 lg:mb-5">
            {/* Delivery Info */}
            <div>
              <p className="text-sm font-normal text-gray-600">
                Shipper Information
              </p>
              <p className="text-lg font-bold text-black">John Smith</p>
            </div>

            {/* Time Info */}
            <div className="text-left lg:text-right">
              <p className="text-sm font-normal text-gray-600">BMW S-5</p>
              <p className="text-lg font-bold text-black">CD 06D 1299</p>
            </div>
          </div>
        </div>
      </div>
      <ConfirmedSummary />
    </div>
  );
}
