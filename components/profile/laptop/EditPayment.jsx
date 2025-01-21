"use client";
import Image from "next/image";
import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { CgAdd } from "react-icons/cg";
import AddCard from "./AddCard";

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
      <p className="text-text text-lg font-bold flex items-center gap-2 mb-10">
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

export default function EditPayment() {
  const [addCard, setAddCard] = useState(false);

  return (
    <div className="w-[1000px] h-[571px] pt-[70px] pl-[95px]">
      {addCard ? (
        <AddCard handleBtn={() => setAddCard(false)} />
      ) : (
        <PaymentWallet handleBtn={() => setAddCard(true)} />
      )}
    </div>
  );
}
