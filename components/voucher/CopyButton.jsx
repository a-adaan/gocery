"use client";
import { useState } from "react";
import { GrCopy } from "react-icons/gr";

export default function CopyButton({ code, color }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);

    // Reset the button text after 2 seconds
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div>
      <button
        onClick={handleCopy}
        style={{ backgroundColor: `${color}` }}
        className="w-[131px] h-[36px] text-white font-semibold flex items-center justify-center gap-[11px] text-sm rounded-full  "
      >
        <GrCopy />
        {isCopied ? "Copied" : code}
      </button>
    </div>
  );
}
