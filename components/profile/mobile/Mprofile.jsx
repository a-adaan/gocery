"use client";
import Image from "next/image";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { FaAddressBook } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { RiFileList2Fill } from "react-icons/ri";
import { PiMedalFill } from "react-icons/pi";
import { MdPayments } from "react-icons/md";
import { BsTicketPerforatedFill } from "react-icons/bs";
import { useState } from "react";
import EditProfile from "./EditProfile";
import MEditPayment from "./MEditPayment";

export default function Mprofile({ isProfileOpen, setProfileOpen }) {
  const [activeTab, setActiveTab] = useState(null);
  const [isOpen, setOpen] = useState(false);

  const handleTab = (name) => {
    setActiveTab(name);
    setOpen(true);
  };
  return (
    <>
      <div
        className={`fixed lg:hidden top-0 left-0 w-full h-screen bg-primary z-30 transition-transform delay-100 duration-650 shadow-md ${
          isProfileOpen ? "" : "translate-x-[2000px]"
        }`}
      >
        <button className="block lg:hidden p-4" onClick={setProfileOpen}>
          <IoMdClose size={32} color="white" />
        </button>

        {/* Profile Section */}
        <div className="h-[80px] bg-primary rounded-2xl"></div>

        {/* Menu Items */}
        <div className="w-full relative bg-white h-full rounded-b-2xl p-2">
          <div className="absolute avatar ml-6 -translate-y-[60%]">
            <div className="ring-white ring-offset-base-100 w-20 h-20 rounded-full ring ring-offset-2">
              <Image
                src={"/image/navbar/pp.jpg"}
                width={700}
                height={700}
                alt="pp"
              />
            </div>
          </div>
          <div className=" ml-[26%]">
            <p className="text-text text-lg font-bold ml-4">Jane Smith</p>
            <button
              onClick={() => handleTab("edit")}
              className="text-[#A3A5A8] text-sm font-normal ml-4"
            >
              Edit Profile
            </button>
          </div>

          {/* profile buttons */}
          <ul className=" w-auto m-4 p-4 rounded-2xl border border-border space-y-5 text-text ">
            <li>
              <Link
                href="/favourites"
                onClick={setProfileOpen}
                className="flex items-center gap-3 text-text text-base"
              >
                <span className="text-primary text-2xl">
                  <FaHeart />
                </span>
                Favorite
              </Link>
            </li>
            <li>
              <Link
                href={"/address"}
                onClick={setProfileOpen}
                className="flex items-center gap-3 text-text text-base"
              >
                <span className="text-primary text-2xl">
                  <FaAddressBook />
                </span>
                Address
              </Link>
            </li>
            <li>
              <Link
                href={"/my-orders"}
                onClick={setProfileOpen}
                className="flex items-center gap-3 text-text text-base"
              >
                <span className="text-primary text-2xl">
                  <RiFileList2Fill />
                </span>
                Orders
              </Link>
            </li>
            <li>
              <Link
                href={"/rewards"}
                onClick={setProfileOpen}
                className="flex items-center gap-3 text-text text-base"
              >
                <span className="text-primary text-2xl">
                  <PiMedalFill />
                </span>
                Rewards
              </Link>
            </li>
            <li>
              <button
                onClick={() => handleTab("payment")}
                className="flex items-center gap-3 text-text text-base"
              >
                <span className="text-primary text-2xl">
                  <MdPayments />
                </span>
                Payments
              </button>
            </li>
            <li>
              <Link
                href={"/rewards"}
                onClick={setProfileOpen}
                className="flex items-center gap-3 text-text text-base"
              >
                <span className="text-primary text-2xl">
                  <BsTicketPerforatedFill />
                </span>
                Vouchers
              </Link>
            </li>
          </ul>

          {/* Log Out Button */}
          <div className="p-4">
            <button className="w-full h-[51px] text-white font-bold text-lg bg-primary hover:bg-[#c08a2c] rounded-[39px] outline outline-2 outline-offset-4 outline-[#FE9F00]">
              Log Out
            </button>
          </div>
        </div>
      </div>
      {activeTab === "edit" && (
        <EditProfile isOpen={isOpen} onclose={() => setOpen(false)} />
      )}
      {activeTab === "payment" && (
        <MEditPayment isOpen={isOpen} onclose={() => setOpen(false)} />
      )}
    </>
  );
}
