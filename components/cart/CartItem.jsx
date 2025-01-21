import Image from "next/image";
import ProductCounter from "../common/ProductCounter";
import { AiOutlineClose } from "react-icons/ai";

export default function CartItem() {
  return (
    <div className="relative w-full h-[96px] rounded-2xl border border-[#EBECEF] flex items-center gap-[16px] p-1">
      <Image
        src="/image/cart.jpg"
        width={700}
        height={700}
        alt="cart"
        className="w-[88px] h-[88px] rounded-[13px] object-cover"
      />
      <div className="flex-grow">
        <div className="flex items-center justify-between pr-4">
          <div>
            <p className="text-base font-semibold text-text">name</p>
            <p className="text-xs font-normal text-[#76777D]">- category</p>
            <p className="text-xl text-green-500 font-bold mt-1">$1.99</p>
          </div>
          <div className="h-[35px] w-[79px]">
            <ProductCounter />
          </div>
        </div>
      </div>
      <button className=" absolute top-1 right-1 p-1 cursor-pointer text-lg text-primary">
        <AiOutlineClose />
      </button>
    </div>
  );
}
