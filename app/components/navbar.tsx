"use client";

import React, { useEffect, useState } from "react";
import { bitter } from "../utils/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentPath, setCurrentPath] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    setCurrentPath(pathname.replace("/", ""));
  }, [pathname]);

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="min-h-[75px] flex flex-col justify-center items-center px-5 backdrop-blur bg-white/50 w-[90%] rounded-md mt-[5px] fixed left-1/2 right-1/2 -translate-x-1/2 z-50 shadow-[0_0_20px_1px] shadow-white/80 dark:bg-secondary/50 dark:shadow-secondary/80">
      <div className="w-full flex items-center justify-between h-nav relative lg:justify-center">
        <Link
          href="/"
          className={`${bitter.className} text-primary text-md font-bold lg:absolute lg:left-0 lg:text-lg`}>
          HEENA KAPADIA
        </Link>
        <div
          className={`${bitter.className} gap-2 justify-center hidden lg:flex lg:text-md`}>
          <Link
            href="/"
            onClick={handleClick}
            className={cn(
              currentPath === "" && "bg-primary/50",
              "px-3 py-1 transition-all ease-in-out duration-300 rounded-sm hover:bg-primary/30"
            )}>
            Home
          </Link>
          <Link
            href="/contact"
            onClick={handleClick}
            className={cn(
              currentPath === "contact" && "bg-primary/50",
              "px-3 py-1 transition-all ease-in-out duration-300 rounded-sm hover:bg-primary/30"
            )}>
            Contact
          </Link>
          <Link
            href="/about"
            onClick={handleClick}
            className={cn(
              currentPath === "about" && "bg-primary/50",
              "px-3 py-1 transition-all ease-in-out duration-300 rounded-sm hover:bg-primary/30"
            )}>
            About
          </Link>
        </div>
        <FontAwesomeIcon
          onClick={() => setIsOpen(!isOpen)}
          icon={faBars}
          className="cursor-pointer text-secondary h-6 dark:text-white lg:hidden"
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="flex flex-col gap-2 text-center text-md font-bold text-secondary dark:text-white">
            <Link href="/" onClick={handleClick}>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { delay: 0.2 } }}
                transition={{ delay: 0.1 }}
                className={cn(currentPath === "" && "text-primary")}>
                Home
              </motion.p>
            </Link>
            <Link href="/contact" onClick={handleClick}>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { delay: 0.1 } }}
                transition={{ delay: 0.2 }}
                className={cn(currentPath === "contact" && "text-primary")}>
                Contact
              </motion.p>
            </Link>
            <Link href="/about" onClick={handleClick}>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { delay: 0.0 } }}
                transition={{ delay: 0.3 }}
                className={cn(
                  currentPath === "about" && "text-primary",
                  "pb-8"
                )}>
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
