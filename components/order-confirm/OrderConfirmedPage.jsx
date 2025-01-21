import Image from "next/image";
import ConfirmedSummary from "./ConfirmedSummary";

export default function OrderConfirmedPage() {
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-[689px_482px] gap-[30px] mt-8">
      <div className="w-full flex flex-col items-center">
        <Image
          src={"/image/orderConfirmed.svg"}
          width={700}
          height={700}
          alt="order-confirm"
          className="w-[294px] h-[223px] my-10"
        />
        {/* delivery card */}
        <div className="p-4 bg-white border border-border w-full rounded-2xl">
          {/* Order ID */}
          <p className="text-sm text-gray-500">Order #12062311</p>

          {/* Order Status */}
          <h1 className="mt-1 text-lg font-bold text-text">
            We Have Received Your Order
          </h1>

          {/* Actions */}
          <div className="mt-2 flex items-center gap-2">
            {/* Cancel Link */}
            <button className="text-primary text-sm font-medium hover:underline">
              Cancel
            </button>
            <span className="text-gray-400">•</span>
            {/* Finding Shipper */}
            <p className="text-green-500 text-sm font-medium">
              Finding your shipper
            </p>
          </div>
        </div>
        {/* delivery time */}
        <div className="flex items-center bg-[#FFF5E6] p-2 rounded-2xl mt-5 w-full">
          {/* Image Section */}

          <Image
            src="/image/man.svg"
            width={700}
            height={700}
            alt="delivery"
            className="w-[117px] h-[117px] object-cover rounded-2xl"
          />

          {/* Text Section */}
          <div className="flex flex-1 flex-col lg:flex-row justify-between items-start lg:items-end h-full ml-4 lg:mb-5">
            {/* Delivery Info */}
            <div>
              <p className="text-sm font-normal text-gray-600">Delivery in</p>
              <p className="text-lg font-bold text-black">15-20mins</p>
            </div>

            {/* Time Info */}
            <div className="text-left lg:text-right">
              <p className="text-sm font-normal text-gray-600">Time</p>
              <p className="text-lg font-bold text-black">14:20 - 14:35</p>
            </div>
          </div>
        </div>
      </div>
      <ConfirmedSummary />
    </div>
  );
}
