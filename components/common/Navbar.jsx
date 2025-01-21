"use client";
import Image from "next/image";
import SearchBox from "./SearchBox";
import NavBtn from "./NavBtn";
import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";
import { CgMenuLeft } from "react-icons/cg";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa6";
import { RiFileList2Fill } from "react-icons/ri";
import { IoMail } from "react-icons/io5";
import Mprofile from "../profile/mobile/Mprofile";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <>
      <div className="container w-full lg:flex lg:items-center lg:gap-[80px]">
        <div className="flex lg:flex-row lg:items-center lg:gap-2 flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                className={`block text-primary mr-3 lg:hidden transition-transform duration-500 ${
                  isMenuOpen ? "translate-y-[-500px]" : ""
                }`}
                onClick={toggleMenu}
              >
                <CgMenuLeft size={35} />
              </button>
              <Link href="/home" className="flex items-center gap-2 mr-2">
                <Image
                  src={"/image/navbar/Ellipse.svg"}
                  width={700}
                  height={700}
                  alt="icon"
                  className="w-8 h-8 lg:w-11 lg:h-11"
                />
                <p className="text-[26px] lg:text-3xl font-normal text-text">
                  Grocery
                </p>
              </Link>
            </div>
            <div className="block lg:hidden ">
              <div className="indicator group mr-5">
                <Link href="/cart">
                  <span className="group-hover:block hidden indicator-item h-2 w-2 rounded-full bg-[#FE9F00]"></span>
                  <p className="hover:text-[#FE9F00] p-1 text-lg text-[#AEB2BE]">
                    <FaShoppingBag size={24} />
                  </p>
                </Link>
              </div>
              <div className="avatar" onClick={() => setProfileOpen(true)}>
                <div className="ring-[#FE9F00] ring-offset-base-100 w-8 h-8 lg:w-[46px] lg:h-[46px] rounded-full ring ring-offset-2">
                  <Image
                    src={"/image/navbar/pp.jpg"}
                    width={700}
                    height={700}
                    alt="pp"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <SearchBox />
          </div>
        </div>
        <NavBtn />
      </div>
      {/* floating navbar */}
      <div
        className={`fixed lg:hidden top-0 left-0 w-[80%] h-screen bg-white z-30 transition-transform delay-100 duration-650 shadow-md ${
          isMenuOpen ? "" : "-translate-x-[2000px]"
        }`}
      >
        <button className="block lg:hidden p-4" onClick={toggleMenu}>
          <IoMdClose size={32} color="black" />
        </button>

        {/* Menu Items */}
        <div className="w-full relative bg-white h-full rounded-b-2xl p-2">
          <div className="w-full text-center">
            <p className="text-text text-lg font-bold ml-4">Menu</p>
          </div>

          {/* profile buttons */}
          <ul className=" w-auto p-4 rounded-2xl space-y-5 text-text ">
            <li>
              <Link
                href="/notifications"
                onClick={toggleMenu}
                className="flex items-center gap-3 text-text text-base"
              >
                <span className="text-primary text-2xl">
                  <FaBell />
                </span>
                Notification
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                onClick={toggleMenu}
                className="flex items-center gap-3 text-text text-base"
              >
                <span className="text-primary text-2xl">
                  <BsFillQuestionCircleFill />
                </span>
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={toggleMenu}
                className="flex items-center gap-3 text-text text-base"
              >
                <span className="text-primary text-2xl">
                  <RiFileList2Fill />
                </span>
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={toggleMenu}
                className="flex items-center gap-3 text-text text-base"
              >
                <span className="text-primary text-2xl">
                  <IoMail />
                </span>
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Log Out Button */}
          <div className="p-4">
            {/* <!-- Download Our App --> */}
            <div>
              <h3 className="font-bold text-base text-text mb-6">
                DOWNLOAD OUR APP
              </h3>
              <div className="space-y-4 flex flex-col">
                <Link href="/" className="block">
                  <Image
                    src="/image/footer/google.svg"
                    width={176}
                    height={53}
                    alt="Google Play"
                  />
                </Link>
                <Link href="/" className="block">
                  <Image
                    src="/image/footer/apple.svg"
                    width={176}
                    height={53}
                    alt="App Store"
                  />
                </Link>
              </div>
            </div>

            {/* <!-- Follow Us --> */}
            <div className="mt-8">
              <h3 className="font-bold text-base text-text mb-6">FOLLOW US</h3>
              <div className="flex items-center space-x-7">
                <Link href="/" className="block">
                  <Image
                    src="/image/footer/fb.svg"
                    width={30}
                    height={30}
                    alt="Facebook"
                  />
                </Link>
                <Link href="/" className="block">
                  <Image
                    src="/image/footer/insta.svg"
                    width={30}
                    height={30}
                    alt="Instagram"
                  />
                </Link>
                <Link href="/" className="block">
                  <Image
                    src="/image/footer/LinkedIn.svg"
                    width={30}
                    height={30}
                    alt="LinkedIn"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile Profile section */}
      <Mprofile
        isProfileOpen={isProfileOpen}
        setProfileOpen={() => setProfileOpen(false)}
      />
    </>
  );
}
