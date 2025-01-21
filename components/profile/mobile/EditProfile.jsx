"use client";
import { GoChevronLeft } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import MEditName from "./MEditName";
import { useState } from "react";
import MEditEmail from "./MEditEmail";
import MEditPhone from "./MEditPhone";
import MEditPassword from "./MEditPassword";

export default function EditProfile({ isOpen, onclose }) {
  const [activeModal, setActiveModal] = useState(null);
  return (
    <div
      className={`fixed lg:hidden top-0 left-0 w-full h-screen bg-white z-40 transition-transform delay-100 duration-650 shadow-md ${
        isOpen ? "" : "translate-x-[2000px]"
      }`}
    >
      <button
        onClick={onclose}
        className="absolute top-6 left-4 md:top-[26px] md:left-[33px] w-[38px] h-[38px] rounded-xl shadow-lg flex items-center justify-center"
      >
        <GoChevronLeft size={25} />
      </button>
      <div className="p-4 mt-20">
        {/* Menu Items */}
        <div className="w-full rounded-2xl border border-border bg-white h-1/2">
          <div className="p-3">
            <div className="flex justify-between">
              <p className="text-[#76777D] text-sm">Name</p>
              <button
                className="text-sm text-primary"
                onClick={() => setActiveModal("EditName")}
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
                onClick={() => setActiveModal("EditEmail")}
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
                onClick={() => setActiveModal("EditPhone")}
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
                onClick={() => setActiveModal("EditPassword")}
              >
                Edit
              </button>
            </div>
            <p className="text-base text-text font-bold">..............</p>
          </div>
        </div>

        {/* Linked account */}
        <h2 className="text-text text-lg font-bold mt-11 mb-3">
          Linked Account
        </h2>
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
              <span className="text-text">
                <FaApple size={28} />
              </span>
              <p className="text-base text-text font-bold">Apple</p>
            </div>
            <button className="text-sm text-primary">Connected</button>
          </div>
        </div>
      </div>
      {activeModal === "EditName" && (
        <MEditName isOpen={true} onclose={() => setActiveModal(null)} />
      )}
      {activeModal === "EditEmail" && (
        <MEditEmail isOpen={true} onclose={() => setActiveModal(null)} />
      )}
      {activeModal === "EditPhone" && (
        <MEditPhone isOpen={true} onclose={() => setActiveModal(null)} />
      )}
      {activeModal === "EditPassword" && (
        <MEditPassword isOpen={true} onclose={() => setActiveModal(null)} />
      )}
    </div>
  );
}
