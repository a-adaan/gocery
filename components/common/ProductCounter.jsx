"use client";
import { useState } from "react";
import { FaMinus } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";

export default function ProductCounter() {
  const [qun, setQun] = useState(1);
  return (
    <div className="flex items-center justify-between border border-primary h-full w-full text-text rounded-full p-[3.3px]">
      <button
        className="h-full w-1/3 bg-[#D7D9DF] hover:bg-[#c2c3c7] text-white flex items-center justify-center cursor-pointer rounded-full"
        disabled={qun === 1}
        onClick={() => setQun(qun - 1)}
      >
        <FaMinus size={20} />
      </button>
      <p className=" text-2xl font-bold flex items-center justify-center">
        {qun}
      </p>
      <button
        className="h-full w-1/3 bg-primary hover:bg-orange-400 text-white flex items-center justify-center cursor-pointer rounded-full"
        onClick={() => setQun(qun + 1)}
      >
        <TiPlus size={20} />
      </button>
    </div>
  );
}
