"use client";

import React, { useEffect, useState } from "react";
import { bitter } from "../utils/fonts";
import logo from "@/app/assets/logo.png";
import logo_dark from "@/app/assets/logo_dark.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

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
    <nav className="flex flex-col justify-center items-center px-5 bg-white w-full z-10 shadow-[0_0_20px_1px] shadow-white/80 border-b border-secondary/20 dark:border-b-white/20 dark:bg-secondary dark:shadow-secondary/80">
      <div className="w-full flex items-center justify-between h-nav relative lg:justify-center">
        <Link href="/" className="lg:absolute lg:left-0 lg:text-lg">
          <Image src={logo} alt="heena kapadia logo" width={200} className="hidden dark:block" />
          <Image src={logo_dark} alt="heena kapadia dark logo" width={200} className="block dark:hidden" />
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
                  "pb-2"
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
