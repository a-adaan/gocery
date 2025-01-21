"use client";

import { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";
import ProfileDetails from "./ProfileDetails";

export default function ProfileMenu({
  isMenuOpen,
  menuRef,
  Modal,
  modalOpen,
  modalClose,
}) {
  const [edit, setEdit] = useState(true);
  return (
    <div
      ref={menuRef}
      style={{
        "--up-bg-color": edit ? "#fe9f00" : "#FFFFFF",
      }}
      className={`hidden lg:block absolute top-[70px] -right-6 my-shadow  w-[330px] h-auto rounded-2xl up ${
        edit ? "bg-primary" : "bg-white "
      } transition-all duration-300 ${
        isMenuOpen ? "opacity-100 z-50" : "opacity-0 -z-10"
      }`}
    >
      {edit ? (
        <ProfileDropdown
          btn={(ed) => setEdit(ed)}
          Modal={Modal}
          modalOpen={modalOpen}
          modalClose={modalClose}
        />
      ) : (
        <ProfileDetails
          btn={(ed) => setEdit(ed)}
          Modal={Modal}
          modalOpen={modalOpen}
          modalClose={modalClose}
        />
      )}
    </div>
  );
}
