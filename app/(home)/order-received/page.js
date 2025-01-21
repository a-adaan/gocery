import FeedBack from "@/components/common/FeedBack";
import Image from "next/image";

export default function OrderReceived() {
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-[689px_482px] gap-[30px] mt-8">
      <div className="w-full flex flex-col items-center">
        <Image
          src={"/image/order_delivered.svg"}
          width={700}
          height={700}
          alt="order-confirm"
          className="w-[351px] h-[276px] mb-10"
        />
        {/* Text Section */}
        <div className="flex items-center bg-[#FFF5E6] p-2 rounded-2xl mt-5 w-full h-[100px] pl-5">
          <div>
            <p className="text-sm font-normal text-gray-600">Order #12062311</p>
            <p className="text-lg font-bold text-black">
              You received the order
            </p>
          </div>
        </div>
      </div>
      <div>
        <FeedBack />
      </div>
    </div>
  );
}
