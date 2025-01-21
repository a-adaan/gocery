"use client";
import { FaShoppingBag, FaHeart } from "react-icons/fa";
import { BsBellFill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ProfileMenu from "../profile/laptop/ProfileMenu";
import { useEffect, useRef } from "react";

export default function NavBtn() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const menuRef = useRef(null);

  const MenuToggle = () => {
    setIsMenuOpen(true);
  };
  const Menuclose = () => {
    setIsMenuOpen(false);
  };
  const Modalclose = () => {
    setIsModalOpen(false);
  };
  const ModalOpen = () => {
    console.log("open");
    setIsMenuOpen(false);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        Menuclose();
      }
    };

    const handleScroll = () => {
      Menuclose();
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [Menuclose]);
  return (
    <div className="hidden relative lg:flex items-center gap-5">
      <div className="flex items-center gap-[79px]">
        <ul className="flex items-center gap-[29px]">
          <li>
            <div className="indicator group">
              <Link href="/home">
                <span className="group-hover:block hidden indicator-item h-2 w-2 rounded-full bg-[#FE9F00]"></span>
                <p className="hover:text-[#FE9F00] p-1 text-lg text-[#1A1D26]">
                  EXPLORE
                </p>
              </Link>
            </div>
          </li>
          <li>
            <div className="indicator group">
              <Link href="/faq">
                <span className="group-hover:block hidden indicator-item h-2 w-2 rounded-full bg-[#FE9F00]"></span>
                <p className="hover:text-[#FE9F00] p-1 text-lg text-[#1A1D26]">
                  FAQ
                </p>
              </Link>
            </div>
          </li>
          <li>
            <div className="indicator group">
              <Link href="/about">
                <span className="group-hover:block hidden indicator-item h-2 w-2 rounded-full bg-[#FE9F00]"></span>
                <p className="hover:text-[#FE9F00] p-1 text-lg text-[#1A1D26]">
                  ABOUT
                </p>
              </Link>
            </div>
          </li>
        </ul>
        <ul className="flex items-center gap-[30px]">
          <li>
            <div className="indicator group">
              <Link href="/cart">
                <span className="group-hover:block hidden indicator-item h-2 w-2 rounded-full bg-[#FE9F00]"></span>
                <p className="hover:text-[#FE9F00] p-1 text-lg text-[#AEB2BE]">
                  <FaShoppingBag size={24} />
                </p>
              </Link>
            </div>
          </li>
          <li>
            <div className="indicator group">
              <Link href="/favourites">
                <span className="group-hover:block hidden indicator-item h-2 w-2 rounded-full bg-[#FE9F00]"></span>
                <p className="hover:text-[#FE9F00] p-1 text-lg text-[#AEB2BE]">
                  <FaHeart size={24} />
                </p>
              </Link>
            </div>
          </li>
          <li>
            <div className="indicator group">
              <Link href="/notifications">
                <span className="group-hover:block hidden indicator-item h-2 w-2 rounded-full bg-[#FE9F00]"></span>
                <p className="hover:text-[#FE9F00] p-1 text-lg text-[#AEB2BE]">
                  <BsBellFill size={24} />
                </p>
              </Link>
            </div>
          </li>
        </ul>
      </div>
      <div
        className="hidden lg:block avatar cursor-pointer"
        onClick={MenuToggle}
      >
        <div className="ring-[#FE9F00] ring-offset-base-100 w-[46px] h-[46px] rounded-full ring ring-offset-2">
          <Image
            src={"/image/navbar/pp.jpg"}
            width={700}
            height={700}
            alt="pp"
          />
        </div>
      </div>
      <ProfileMenu
        menuRef={menuRef}
        Modal={isModalOpen}
        modalOpen={ModalOpen}
        modalClose={Modalclose}
        isMenuOpen={isMenuOpen}
      />
    </div>
  );
}
