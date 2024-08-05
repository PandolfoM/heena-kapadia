"use client";

import React, { useState } from "react";
import { bitter } from "../utils/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="min-h-[75px] flex flex-col justify-center items-center px-5 backdrop-blur bg-white/50 w-[90%] rounded-md mt-[5px] fixed left-1/2 right-1/2 -translate-x-1/2">
      <div className="w-full flex items-center justify-between h-nav">
        <p className={`${bitter.className} text-primary text-md font-bold`}>
          HEENA KAPADIA
        </p>
        <FontAwesomeIcon
          onClick={() => setIsOpen(!isOpen)}
          icon={faBars}
          className="cursor-pointer text-secondary h-6"
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="flex flex-col gap-2 text-center text-md font-bold text-secondary pb-8">
            <Link href="/" onClick={handleClick}>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { delay: 0.2 } }}
                transition={{ delay: 0.1 }}>
                Home
              </motion.p>
            </Link>
            <Link href="/contact" onClick={handleClick}>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { delay: 0.1 } }}
                transition={{ delay: 0.2 }}>
                Contact
              </motion.p>
            </Link>
            <Link href="/about" onClick={handleClick}>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { delay: 0.0 } }}
                transition={{ delay: 0.3 }}>
                About
              </motion.p>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
