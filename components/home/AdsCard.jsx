import { GoArrowRight } from "react-icons/go";

export default function AdsCard() {
  return (
    <div className="w-[340px] h-[186px] md:w-[590px] md:h-[273px] bg-[url('/image/hero/ads.svg')] rounded-2xl bg-cover ">
      <div className="mt-2 md:mt-8 ml-4 md:ml-[45px] w-[240px] h-[150px] md:w-[342px] md:h-[218px] flex flex-col justify-between">
        <p className="text-sm md:text-2xl font-normal text-[#1A1D26] md:leading-[29px] text-left">
          Lorem ipsum dolor sit
          <br /> amet, consectetur adipiscing elit. Tincidunt amet, condimentum
        </p>
        <button className="w-9 h-9 md:w-[65px] md:h-[65px] bg-[#FE9F00] flex justify-center items-center rounded-full outline outline-2 outline-offset-4 outline-[#FE9F00]">
          <GoArrowRight size={40} color="#FFFFFF" />
        </button>
      </div>
    </div>
  );
}
