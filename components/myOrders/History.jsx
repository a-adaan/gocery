import Image from "next/image";

export default function History() {
  return (
    <div className=" w-full md:w-[380px] h-[76px] p-2 border border-[#EBECEF] rounded-2xl grid grid-cols-6">
      <div className="">
        <Image
          src="/image/noti.jpg"
          width={700}
          height={700}
          alt="delivery"
          className="w-[60px] h-[60px] object-cover rounded-[10px]"
        />
      </div>
      <div className="col-span-5 ml-[9px] flex justify-between">
        <div className="flex flex-col justify-between">
          <span>
            <span className=" text-xs text-[#67CB19] mr-2">Delivered</span>
            <span className="text-xs text-[#8C8E92]">• 3 Items</span>
          </span>
          <p className="text-base text-text font-bold">Beef Burger</p>
        </div>
        <div className="flex flex-col justify-between mr-1">
          <span className="text-xs text-[#8C8E92]">Feb 3 - 2:33</span>

          <p className="text-base text-text font-bold">$ 17.99</p>
        </div>
      </div>
    </div>
  );
}
