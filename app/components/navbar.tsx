import React from "react";
import { bitter } from "../utils/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className="h-nav flex justify-between items-center px-5 backdrop-blur bg-white/50 w-[90%] rounded-md mt-[5px] fixed left-1/2 right-1/2 -translate-x-1/2">
      <p className={`${bitter.className} text-primary text-md font-bold`}>
        HEENA KAPADIA
      </p>
      <FontAwesomeIcon
        icon={faBars}
        className="w-6 cursor-pointer text-secondary"
      />
    </nav>
  );
}

export default Navbar;
