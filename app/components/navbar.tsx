"use client";

import React, { useEffect, useState } from "react";
import { bitter } from "../utils/fonts";
import logo from "@/app/assets/logo.png";
import logo_dark from "@/app/assets/logo_dark.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isPracticeOpen, setIsPracticeOpen] = useState<boolean>(false);
  const [currentPath, setCurrentPath] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    setCurrentPath(pathname.replace("/", ""));
  }, [pathname]);

  const handleClick = () => {
    toggleMenu();
  };

  const toggleMenu = () => {
    if (isOpen && isPracticeOpen) {
      setIsPracticeOpen(false);
      setTimeout(() => {
        setIsOpen(!isOpen);
      }, 700);
    }

    if (isOpen && !isPracticeOpen) {
      setIsOpen(false);
    }

    if (!isOpen) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <nav className="flex flex-col justify-center items-center px-5 bg-white w-full z-10 shadow-[0_0_20px_1px] shadow-white/80 border-b border-secondary/20 dark:border-b-white/20 dark:bg-secondary dark:shadow-secondary/80">
      <div className="w-full flex items-center justify-between h-nav relative lg:justify-center">
        <Link href="/" className="lg:absolute lg:left-0 lg:text-lg">
          <Image
            src={logo}
            alt="heena kapadia logo"
            width={200}
            className="hidden dark:block"
          />
          <Image
            src={logo_dark}
            alt="heena kapadia dark logo"
            width={200}
            className="block dark:hidden"
          />
        </Link>
        <div
          className={`${bitter.className} gap-2 justify-center hidden lg:flex lg:text-md`}>
          <Link
            href="/"
            className={cn(
              currentPath === "" && "bg-primary/20",
              "px-3 py-1 transition-all ease-in-out duration-300 rounded-sm hover:bg-primary/50"
            )}>
            Home
          </Link>
          <Link
            href="/contact"
            className={cn(
              currentPath === "contact" && "bg-primary/20",
              "px-3 py-1 transition-all ease-in-out duration-300 rounded-sm hover:bg-primary/50"
            )}>
            Contact
          </Link>
          <Link
            href="/about"
            className={cn(
              currentPath === "about" && "bg-primary/20",
              "px-3 py-1 transition-all ease-in-out duration-300 rounded-sm hover:bg-primary/50"
            )}>
            About
          </Link>
          <div className="relative flex flex-col group">
            <p
              className={cn(
                (currentPath === "employee_discrimination" ||
                  currentPath === "whistleblower" ||
                  currentPath === "wage_hour_issues" ||
                  currentPath === "family_medical_leave" ||
                  currentPath === "other_practices") &&
                  "bg-primary/20",
                "px-3 py-1 transition-all ease-in-out duration-300 rounded-sm hover:bg-primary/50 cursor-pointer peer"
              )}>
              Practice Areas <FontAwesomeIcon icon={faChevronUp} className="transition-all duration-300 ease-in-out text-sm text-secondary/50 ml-2 group-hover:rotate-180 dark:text-white/50" />
            </p>

            <div className="absolute w-max h-fit pt-1 text-white top-9 text-sm hidden group-hover:block ">
              <div className="bg-secondary p-2 rounded-sm dark:bg-primary flex flex-col gap-2">
                <Link
                  href="/employee_discrimination"
                  className={cn(
                    "cursor-pointer hover:bg-white/20 rounded-sm p-2",
                    currentPath === "employee_discrimination" &&
                      "text-white bg-white/20 dark:bg-secondary/20"
                  )}>
                  Employee Discrimination
                </Link>
                <Link
                  href="/whistleblower"
                  className={cn(
                    "cursor-pointer hover:bg-white/20 rounded-sm p-2",
                    currentPath === "whistleblower" &&
                      "text-white bg-white/20 dark:bg-secondary/20"
                  )}>
                  Whistleblower Retaliation
                </Link>
                <Link
                  href="/wage_hour_issues"
                  className={cn(
                    "cursor-pointer hover:bg-white/20 rounded-sm p-2",
                    currentPath === "wage_hour_issues" &&
                      "text-white bg-white/20 dark:bg-secondary/20"
                  )}>
                  Wage and Hour Issues
                </Link>
                <Link
                  href="/family_medical_leave"
                  className={cn(
                    "cursor-pointer hover:bg-white/20 rounded-sm p-2",
                    currentPath === "family_medical_leave" &&
                      "text-white bg-white/20 dark:bg-secondary/20"
                  )}>
                  Family Medical Leave Act
                </Link>
                <Link
                  href="/other_practices"
                  className={cn(
                    "cursor-pointer hover:bg-white/20 rounded-sm p-2 pb-2",
                    currentPath === "other_practices" &&
                      "text-white bg-white/20 dark:bg-secondary/20"
                  )}>
                  Other Areas of Practice
                </Link>
              </div>
            </div>
          </div>
        </div>
        <FontAwesomeIcon
          onClick={toggleMenu}
          icon={faBars}
          className="cursor-pointer text-secondary h-6 dark:text-white lg:hidden"
        />
      </div>

      {/* mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0, transition: { delay: 0.2 } }}
            className="flex flex-col text-center text-md font-bold text-secondary dark:text-white">
            <Link href="/" onClick={handleClick}>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { delay: 0.3 } }}
                transition={{ delay: 0.0 }}
                className={cn(currentPath === "" && "text-primary")}>
                Home
              </motion.p>
            </Link>
            <Link href="/contact" onClick={handleClick}>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { delay: 0.2 } }}
                transition={{ delay: 0.1 }}
                className={cn(currentPath === "contact" && "text-primary")}>
                Contact
              </motion.p>
            </Link>

            <Link href="/about" onClick={handleClick}>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { delay: 0.1 } }}
                transition={{ delay: 0.2 }}
                className={cn(currentPath === "about" && "text-primary")}>
                About
              </motion.p>
            </Link>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { delay: 0.0 } }}
              transition={{ delay: 0.3 }}
              onClick={() => setIsPracticeOpen(!isPracticeOpen)}
              className="cursor-pointer">
              Practice Areas{" "}
              <FontAwesomeIcon
                className={cn(
                  "transition-all duration-300 ease-in-out text-sm text-secondary/50 dark:text-white/50 ml-2",
                  isPracticeOpen && "rotate-180"
                )}
                icon={faChevronUp}
              />
            </motion.p>

            <AnimatePresence>
              {isPracticeOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0, transition: { delay: 0.4 } }}
                  className="flex flex-col gap-2 text-center text-sm font-bold text-secondary dark:text-white">
                  <Link href="/employee_discrimination" onClick={handleClick}>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, transition: { delay: 0.4 } }}
                      transition={{ delay: 0.0 }}
                      onClick={() => setIsPracticeOpen(!isPracticeOpen)}
                      className={cn(
                        "cursor-pointer",
                        currentPath === "employee_discrimination" &&
                          "text-primary"
                      )}>
                      Employee Discrimination
                    </motion.p>
                  </Link>
                  <Link href="/whistleblower" onClick={handleClick}>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, transition: { delay: 0.3 } }}
                      transition={{ delay: 0.1 }}
                      onClick={() => setIsPracticeOpen(!isPracticeOpen)}
                      className={cn(
                        "cursor-pointer",
                        currentPath === "whistleblower" && "text-primary"
                      )}>
                      Whistleblower Retaliation
                    </motion.p>
                  </Link>
                  <Link href="/wage_hour_issues" onClick={handleClick}>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, transition: { delay: 0.2 } }}
                      transition={{ delay: 0.2 }}
                      onClick={() => setIsPracticeOpen(!isPracticeOpen)}
                      className={cn(
                        "cursor-pointer",
                        currentPath === "wage_hour_issues" && "text-primary"
                      )}>
                      Wage and Hour Issues
                    </motion.p>
                  </Link>
                  <Link href="/family_medical_leave" onClick={handleClick}>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, transition: { delay: 0.1 } }}
                      transition={{ delay: 0.3 }}
                      onClick={() => setIsPracticeOpen(!isPracticeOpen)}
                      className={cn(
                        "cursor-pointer",
                        currentPath === "family_medical_leave" && "text-primary"
                      )}>
                      Family Medical Leave Act
                    </motion.p>
                  </Link>
                  <Link href="/other_practices" onClick={handleClick}>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, transition: { delay: 0.0 } }}
                      transition={{ delay: 0.4 }}
                      onClick={() => setIsPracticeOpen(!isPracticeOpen)}
                      className={cn(
                        "cursor-pointer pb-2",
                        currentPath === "other_practices" && "text-primary"
                      )}>
                      Other Areas of Practice
                    </motion.p>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
