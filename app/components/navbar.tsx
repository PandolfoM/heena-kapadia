"use client";

import React, { useEffect, useState } from "react";
import { nunitosans } from "../utils/fonts";
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
    <nav className="flex flex-col justify-center items-center px-5 bg-primary text-white w-full z-10 shadow-[0_0_20px_1px] shadow-primary/80 border-b border-primary/20">
      <div className="w-full flex items-center justify-between relative lg:justify-center h-navMobile sm:h-nav ">
        <Link href="/" className="lg:absolute lg:left-10 xl:left-40 lg:text-lg">
          <Image
            src={logo}
            alt="heena kapadia logo"
            width={200}
            className="hidden dark:block"
          />
          <Image
            src={logo}
            alt="heena kapadia dark logo"
            width={200}
            className="block dark:hidden"
          />
        </Link>
        <div
          className={`${nunitosans.className} gap-2 justify-center hidden lg:flex lg:text-md`}>
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
              Practice Areas{" "}
              <FontAwesomeIcon
                icon={faChevronUp}
                className="transition-all duration-300 ease-in-out text-sm text-white/50 ml-2 group-hover:rotate-180 dark:text-white/50"
              />
            </p>

            <div className="absolute w-max h-fit text-white top-8 pt-1 text-sm z-50 hidden group-hover:block">
              <div className="bg-primary p-2 rounded-sm dark:bg-primary flex flex-col gap-2">
                <Link
                  href="/employee_discrimination"
                  className={cn(
                    "cursor-pointer hover:bg-primary/50 rounded-sm p-2",
                    currentPath === "employee_discrimination" &&
                      "text-white bg-primary/20 dark:bg-secondary/20"
                  )}>
                  Employment Discrimination
                </Link>
                <Link
                  href="/whistleblower"
                  className={cn(
                    "cursor-pointer hover:bg-primary/50 rounded-sm p-2",
                    currentPath === "whistleblower" &&
                      "text-white bg-primary/20 dark:bg-secondary/20"
                  )}>
                  Whistleblower Retaliation
                </Link>
                <Link
                  href="/wage_hour_issues"
                  className={cn(
                    "cursor-pointer hover:bg-primary/50 rounded-sm p-2",
                    currentPath === "wage_hour_issues" &&
                      "text-white bg-primary/20 dark:bg-secondary/20"
                  )}>
                  Wage and Hour Issues
                </Link>
                <Link
                  href="/family_medical_leave"
                  className={cn(
                    "cursor-pointer hover:bg-primary/50 rounded-sm p-2",
                    currentPath === "family_medical_leave" &&
                      "text-white bg-primary/20 dark:bg-secondary/20"
                  )}>
                  Family Medical Leave Act
                </Link>
                <Link
                  href="/other_practices"
                  className={cn(
                    "cursor-pointer hover:bg-primary/50 rounded-sm p-2 pb-2",
                    currentPath === "other_practices" &&
                      "text-white bg-primary/20 dark:bg-secondary/20"
                  )}>
                  Other Areas of Practice
                </Link>
              </div>
            </div>
          </div>
        </div>
        <a
          href="tel:2032888006"
          className={`${nunitosans.className} underline hover:no-underline text-md text-nowrap block absolute right-0 top-0 sm:top-auto sm:right-14 lg:right-10 xl:right-40`}>
          (203) 288-8006
        </a>
        <FontAwesomeIcon
          onClick={toggleMenu}
          icon={faBars}
          className="cursor-pointer text-white h-6 dark:text-white lg:hidden"
        />
      </div>

      {/* mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0, transition: { delay: 0.4 } }}
            className="flex flex-col text-center text-md text-white dark:text-white">
            <Link href="/" onClick={handleClick}>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { delay: 0.3 } }}
                transition={{ delay: 0.0 }}
                className={cn(currentPath === "" && "text-accent")}>
                Home
              </motion.p>
            </Link>
            <Link href="/contact" onClick={handleClick}>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { delay: 0.2 } }}
                transition={{ delay: 0.1 }}
                className={cn(currentPath === "contact" && "text-accent")}>
                Contact
              </motion.p>
            </Link>

            <Link href="/about" onClick={handleClick}>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { delay: 0.1 } }}
                transition={{ delay: 0.2 }}
                className={cn(currentPath === "about" && "text-accent")}>
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
                  "transition-all duration-300 ease-in-out text-sm text-white/50 dark:text-white/50 ml-2",
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
                  className="flex flex-col gap-2 text-center text-sm text-white dark:text-white">
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
                          "text-accent"
                      )}>
                      Employment Discrimination
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
                        currentPath === "whistleblower" && "text-accent"
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
                        currentPath === "wage_hour_issues" && "text-accent"
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
                        currentPath === "family_medical_leave" && "text-accent"
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
                        currentPath === "other_practices" && "text-accent"
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
