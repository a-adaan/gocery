import Link from "next/link";
import ForgetForm from "./ForgetForm";
import { GoChevronLeft } from "react-icons/go";

export default function ForgetPass() {
  return (
    <div className="relative lg:h-[691px] h-full w-full lg:w-[1200px] lg:rounded-[32px] bg-white grid grid-cols-1 lg:grid-cols-2 lg:shadow-lg">
      <ForgetForm />
      <div className="lg:bg-[#FFFCF6] rounded-[32px] flex flex-col justify-center items-center lg:items-start order-1 lg:order-2">
        <div className="hidden lg:block px-[59px] py-[68px]">
          <p className="text-2xl text-[#76777D] mb-6">Welcome to</p>
          <p className="text-[44px]">E-commerce App</p>
        </div>
        <img
          src="/image/auth/vector02.svg"
          alt="login"
          className="w-[422px] h-[281px] px-[62px]"
        />
      </div>
      <button className="absolute top-6 left-4 md:top-[26px] md:left-[33px] w-[38px] h-[38px] rounded-xl shadow-lg flex items-center justify-center">
        <Link href="/">
          <GoChevronLeft size={25} />
        </Link>
      </button>
    </div>
  );
}
