import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";

export default function ProductCard() {
  return (
    <Link href="/products/1234565">
      <div className="w-[151px] h-[230px] md:w-[219.45px] md:h-[330px] bg-white rounded-xl md:rounded-[23px] hover:shadow-md relative border-[1.45px] border-[#EBECEF] flex-shrink-0">
        {/* Heart Icon */}
        <div className="absolute top-4 right-4 text-gray-400 hover:text-primary cursor-pointer">
          <FaRegHeart size={26} />
        </div>

        {/* Image */}
        <Image
          src="/image/product/product.svg"
          width={700}
          height={700}
          alt="Bananas"
          className="w-[143px] h-[143px] md:w-[216px] md:h-[207px] object-cover mx-auto py-1 md:p-[5.81px] rounded-xl md:rounded-[23px]"
        />

        {/* Product Details */}
        <div className="p-2 md:p-[14.53px]">
          <h2 className="text-sm md:text-lg font-bold text-gray-800">
            Bananas
          </h2>
          <p className="text-xs font-normal text-gray-500">
            Fruits • By Weight/kg
          </p>
          <p className="text-base md:text-2xl font-bold text-[#67CB19] mt-2">
            $1.59
          </p>
        </div>

        {/* Add Button */}
        <button className="absolute bottom-[6px] md:bottom-[10px] right-[10px] bg-[#FE9F00] text-white h-7 w-7 md:h-[45.85px] md:w-[45.85px] rounded-lg md:rounded-[14.53px] flex items-center justify-center hover:bg-yellow-600 transition">
          <HiPlus className="text-xl font-extrabold" size={32} />
        </button>
      </div>
    </Link>
  );
}
