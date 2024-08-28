import React from "react";
import super_lawyer from "@/app/assets/super_lawyer.png";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-end gap-2 text-secondary/50 pt-[100px] pb-5 px-5 dark:text-white/50">
      <div className="h-[2px] w-[75px] bg-secondary/50 rounded-full dark:bg-white/20" />
      <section className="flex flex-col gap-3 text-center justify-center items-center py-3 lg:flex-row">
        <div className="lg:w-52">
          <p className="font-bold">Call</p>
          <a href="tel:2032888006" className="underline hover:no-underline">
            (203) 288-8006
          </a>
        </div>
        <div className="lg:w-52">
          <p className="font-bold">Office</p>
          <a
            href="https://maps.app.goo.gl/7Xty2qBTjYtK2c5A7"
            target="_blank"
            className="underline hover:no-underline">
            572 White Plains Road Trumbull, CT 06611
          </a>
        </div>
        <div className="lg:w-52">
          <p className="font-bold">Email</p>
          <a
            href="mailto:hkapadia@heenakapadiaLaw.com"
            target="_blank"
            className="underline hover:no-underline">
            hkapadia@heenakapadiaLaw.com
          </a>
        </div>
      </section>
      <div className="h-[2px] w-[175px] bg-secondary/50 rounded-full dark:bg-white/20" />
      <section className="flex flex-col gap-3 text-center justify-center items-center py-3">
        <div className="lg:w-52 flex flex-col">
          <Link
            href="https://profiles.superlawyers.com/connecticut/trumbull/lawyer/heena-kapadia/ad5c03f6-71fa-47b0-b7ba-5194c5225981.html"
            target="_blank">
            <Image
              src={super_lawyer}
              alt="super lawyer"
              className="w-20 m-auto"
            />
          </Link>
          <p className="text-xs">2017-2023</p>
        </div>
        <p className="text-xs">© 2024 HeenaKapadiaLaw. All Rights Reserved.</p>
      </section>
      {/* <section className="flex w-full items-center justify-center relative">
        <div className="flex flex-col items-center justify-end">
          <a href="tel:2032888006" className="underline hover:no-underline">
            (203) 288-8006
          </a>
          <a href="https://maps.app.goo.gl/7Xty2qBTjYtK2c5A7"className="underline hover:no-underline">
            572 White Plains Road Trumbull, CT 06611
          </a>
          <a
            href="mailto:HKapadia@HeenaKapadiaLaw.com"
            className="underline hover:no-underline">
            hkapadia@heenakapadialaw.com
          </a>
          <p>© 2024 HeenaKapadiaLaw. All Rights Reserved.</p>
        </div>
        <div className="absolute right-0 h-full">
          <Link
            href="https://profiles.superlawyers.com/connecticut/trumbull/lawyer/heena-kapadia/ad5c03f6-71fa-47b0-b7ba-5194c5225981.html"
            target="_blank">
            <Image
              src={super_lawyer}
              alt="super lawyer"
              className="w-20"
            />
          </Link>
          <p className="text-center">2017-2024</p>
        </div>
      </section> */}
    </footer>
  );
}

export default Footer;
