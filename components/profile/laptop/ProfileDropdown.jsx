"use client";
import Image from "next/image";
import { FaAddressBook } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { RiFileList2Fill } from "react-icons/ri";
import { PiMedalFill } from "react-icons/pi";
import { MdPayments } from "react-icons/md";
import { BsTicketPerforatedFill } from "react-icons/bs";
import Link from "next/link";
import ProfileModal from "./ProfileModal";
import { useState } from "react";
import EditPayment from "./EditPayment";

export default function ProfileDropdown({ btn, Modal, modalOpen, modalClose }) {
  const [activeModal, setActiveModal] = useState(null);

  const handleOpenModal = (modalType) => {
    setActiveModal(modalType);
    modalOpen();
  };
  return (
    <>
      {/* Profile Section */}
      <div className="h-[146px] bg-primary rounded-2xl"></div>

      {/* Menu Items */}
      <div className="w-full relative bg-white h-full rounded-b-2xl p-2">
        <div className="absolute avatar ml-6 -translate-y-[60%]">
          <div className="ring-white ring-offset-base-100 w-8 h-8 lg:w-[103px] lg:h-[103px] rounded-full ring ring-offset-2">
            <Image
              src={"/image/navbar/pp.jpg"}
              width={700}
              height={700}
              alt="pp"
            />
          </div>
        </div>
        <div className=" ml-32">
          <p className="text-text font-bold ml-4">Jane Smith</p>
          <button
            onClick={() => btn(false)}
            className="text-[#A3A5A8] text-base font-normal ml-4"
          >
            Edit Profile
          </button>
        </div>

        {/* profile buttons */}
        <ul className=" w-auto m-4 p-4 rounded-2xl border border-border space-y-5 text-text ">
          <li>
            <Link
              href="/favourites"
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
              className="flex items-center gap-3 text-text text-base"
              onClick={() => handleOpenModal("EditPayment")}
            >
              <span className="text-primary text-2xl">
                <MdPayments />
              </span>
              Payments
            </button>
          </li>
          <li>
            <Link
              href={"/vouchers"}
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

      {/* Modal */}
      <ProfileModal isOpen={Modal} onClose={modalClose}>
        {activeModal === "EditPayment" && <EditPayment />}
        {activeModal === "EditAddress" && <p>Edit Address</p>}
      </ProfileModal>
    </>
  );
}
