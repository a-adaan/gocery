"use client";
import Image from "next/image";
import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { CgAdd } from "react-icons/cg";
import AddCard from "../laptop/AddCard";
import { GoChevronLeft } from "react-icons/go";

function Wallet({ method }) {
  return (
    <div className="w-full border border-border rounded-2xl flex items-center p-2 gap-2">
      <Image
        src={method?.imgurl}
        width={700}
        height={700}
        alt="wallet"
        className="w-14 h-14 rounded-[15px]"
      />
      <div>
        <p className="font-bold text-black">{method?.title}</p>
        <p className="text-sm text-[#76777D]">Status</p>
      </div>
    </div>
  );
}

function PaymentWallet({ handleBtn }) {
  const [editPayment, setEditPayment] = useState(false);
  const paymentMethods = [
    { title: "Google Wallet", imgurl: "/image/g-wallet.svg" },
    { title: "Apple Wallet", imgurl: "/image/a-wallet.svg" },
    { title: "Visa Card", imgurl: "/image/visa.svg" },
    { title: "MAster Card", imgurl: "/image/master.svg" },
  ];
  return (
    <>
      <p className="text-text text-lg font-bold flex items-center gap-2 mb-10 ">
        {editPayment ? "Remove Wallet" : "Wallet Connect"}
        <span
          className="text-lg text-primary cursor-pointer"
          onClick={() => setEditPayment(!editPayment)}
        >
          <MdEdit />
        </span>
      </p>
      <div className="flex flex-col gap-4">
        {paymentMethods.map((method, index) => (
          <Wallet key={index} method={method} />
        ))}
      </div>
      <div className="mt-5">
        <button
          className="text-primary text-lg font-bold flex items-center gap-2"
          onClick={handleBtn}
        >
          <CgAdd size={30} /> Add payment
        </button>
      </div>
    </>
  );
}

export default function MEditPayment({ isOpen, onclose }) {
  const [addCard, setAddCard] = useState(false);

  return (
    <div
      className={`fixed lg:hidden top-0 left-0 pt-[100px] px-5 w-full h-screen bg-white z-50 transition-transform duration-500 shadow-md ${
        isOpen ? "" : "translate-x-[2000px]"
      }`}
    >
      <button
        onClick={onclose}
        className="absolute top-6 left-4 md:top-[26px] md:left-[33px] w-[38px] h-[38px] rounded-xl shadow-lg flex items-center justify-center"
      >
        <GoChevronLeft size={25} />
      </button>
      {addCard ? (
        <AddCard handleBtn={() => setAddCard(false)} />
      ) : (
        <PaymentWallet handleBtn={() => setAddCard(true)} />
      )}
    </div>
  );
}
