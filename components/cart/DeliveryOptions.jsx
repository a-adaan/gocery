"use client";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

function OptionCard({ isSelected, onClick, price, type, deliveryTime }) {
  return (
    <div
      onClick={onClick}
      className={`h-[123px] w-[200px] bg-white flex flex-col justify-between rounded-2xl p-4 cursor-pointer border ${
        isSelected ? "border-primary" : "border-gray-300"
      }`}
    >
      <div className="flex items-center">
        <FaCheckCircle
          size={25}
          className={`${isSelected ? "text-green-500" : "text-gray-500"}`}
        />
        <p className="text-base font-semibold ml-2">{price}</p>
      </div>
      <div className="ml-8">
        <p className="text-sm font-normal">{type}</p>
        <p className="text-xs font-normal text-[#76777D]">{deliveryTime}</p>
      </div>
    </div>
  );
}

export default function DeliveryOptions() {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const options = [
    {
      price: "$1.99",
      type: "Standard",
      deliveryTime: "Estimated Delivery in 3 Days",
    },
    {
      price: "$3.99",
      type: "Medium",
      deliveryTime: "Estimated Delivery in 1 Day",
    },
    {
      price: "$5.99",
      type: "Advance",
      deliveryTime: "Delivery within 12 Hours",
    },
  ];

  return (
    <div className="bg-[#F8F8FA] rounded-2xl p-4">
      <p className="text-base text-text font-semibold mb-4">
        Preferred Delivery Option
      </p>
      <div className="flex items-center gap-[29px] overflow-x-auto no-scrollbar">
        {options.map((option, index) => (
          <OptionCard
            key={index}
            isSelected={selectedIndex === index + 1}
            onClick={() => setSelectedIndex(index + 1)}
            price={option.price}
            type={option.type}
            deliveryTime={option.deliveryTime}
          />
        ))}
      </div>
    </div>
  );
}
