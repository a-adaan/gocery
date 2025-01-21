"use client";
import { useState } from "react";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const pages = Array.from({ length: 9 }, (_, i) => i + 1);
  return (
    <>
      <div className="hidden lg:block lg:w-[759px] h-[93px] rounded-[111px] bg-white border border-[#D7D9DF] shadow-md p-2">
        <div className=" lg:w-[743px] h-[77px] rounded-[111px] flex items-center justify-evenly bg-[#FAFAFA]">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`w-[77px] h-[77px] text-[30px] flex items-center justify-center rounded-full text-text font-normal ${
                currentPage === page
                  ? "bg-primary text-white"
                  : "hover:text-primary"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
      <div className="join lg:hidden rounded-3xl">
        <button className="join-item btn bg-[#FAFAFA] border-[#D7D9DF]">
          «
        </button>
        <button className="join-item btn bg-[#FAFAFA] border-[#D7D9DF]">
          Page 22
        </button>
        <button className="join-item btn bg-[#FAFAFA] border-[#D7D9DF]">
          »
        </button>
      </div>
    </>
  );
}
