"use client";
import { useRouter } from "next/navigation";

export default function NextButton({ handleNext = null, isLastStep = null }) {
  const router = useRouter();
  const handleBtn = () => {
    if (isLastStep) {
      router.push("/order-confirmed");
    } else if (handleNext) {
      handleNext();
    } else {
      router.push("/checkout");
    }
  };
  return (
    <button
      onClick={handleBtn}
      className="w-full h-[51px] mt-[18px] text-white font-bold text-lg bg-primary hover:bg-[#c08a2c] rounded-[39px] outline outline-2 outline-offset-4 outline-[#FE9F00]"
    >
      {isLastStep ? "Complete Order" : "Next"}
    </button>
  );
}
