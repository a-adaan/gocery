"use client";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import ProfileModal from "./ProfileModal";
import EditName from "./EditName";
import EditEmail from "./EditEmail";
import EditPhone from "./EditPhone";
import EditPassword from "./EditPassword";

export default function ProfileDetails({ btn, Modal, modalOpen, modalClose }) {
  const [activeModal, setActiveModal] = useState(null);

  // Handlers for opening specific modals
  const handleOpenModal = (modalType) => {
    setActiveModal(modalType);
    modalOpen();
  };

  return (
    <div className="p-4">
      <button className="p-2 mb-1 text-text" onClick={() => btn(true)}>
        <IoMdClose size={30} />
      </button>
      {/* Menu Items */}
      <div className="w-full rounded-2xl border border-border bg-white h-1/2">
        <div className="p-3">
          <div className="flex justify-between">
            <p className="text-[#76777D] text-sm">Name</p>
            <button
              className="text-sm text-primary"
              onClick={() => handleOpenModal("EditName")}
            >
              Edit
            </button>
          </div>
          <p className="text-base text-text font-bold">John</p>
        </div>
        <div className="p-3">
          <div className="flex justify-between">
            <p className="text-[#76777D] text-sm">Email</p>
            <button
              className="text-sm text-primary"
              onClick={() => handleOpenModal("EditEmail")}
            >
              Edit
            </button>
          </div>
          <p className="text-base text-text font-bold">example@example.com</p>
        </div>
        <div className="p-3">
          <div className="flex justify-between">
            <p className="text-[#76777D] text-sm">Phone</p>
            <button
              className="text-sm text-primary"
              onClick={() => handleOpenModal("EditPhone")}
            >
              Edit
            </button>
          </div>
          <p className="text-base text-text font-bold">+77017911111244</p>
        </div>
        <div className="p-3">
          <div className="flex justify-between">
            <p className="text-[#76777D] text-sm">Password</p>
            <button
              className="text-sm text-primary"
              onClick={() => handleOpenModal("EditPassword")}
            >
              Edit
            </button>
          </div>
          <p className="text-base text-text font-bold">..............</p>
        </div>
      </div>

      {/* Linked account */}
      <h2 className="text-text text-lg font-bold mt-11 mb-3">Linked Account</h2>
      <div className="w-full rounded-2xl border border-border bg-white h-1/2">
        <div className="p-3 flex justify-between">
          <div className="flex items-center gap-2">
            <span>
              <FcGoogle size={28} />
            </span>
            <p className="text-base text-text font-bold">Google</p>
          </div>
          <button className="text-sm text-primary">Connected</button>
        </div>
        <div className="p-3 flex justify-between">
          <div className="flex items-center gap-2">
            <span>
              <FaFacebook size={28} color="#3C5A9A" />
            </span>
            <p className="text-base text-text font-bold">Facebook</p>
          </div>
          <button className="text-sm text-primary">Connected</button>
        </div>
        <div className="p-3 flex justify-between">
          <div className="flex items-center gap-2">
            <span>
              <FaApple size={28} />
            </span>
            <p className="text-base text-text font-bold">Apple</p>
          </div>
          <button className="text-sm text-primary">Connected</button>
        </div>
      </div>

      {/* Modal */}
      <ProfileModal isOpen={Modal} onClose={modalClose}>
        {activeModal === "EditName" && <EditName />}
        {activeModal === "EditEmail" && <EditEmail />}
        {activeModal === "EditPhone" && <EditPhone />}
        {activeModal === "EditPassword" && <EditPassword />}
      </ProfileModal>
    </div>
  );
}
