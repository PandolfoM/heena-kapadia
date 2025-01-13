import React from "react";
import Image from "next/image";
import super_lawyer from "@/app/assets/super_lawyer.png";
import logo_dark from "@/app/assets/logo_dark.png";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full flex flex-col items-start justify-end text-primary mt-60 bg-primary/5">
      <section className="px-5 pb-5 pt-10 relative w-fit m-auto md:flex md:flex-row md:gap-32 md:justify-center md:items-start">
        <div className="pb-10 md:pb-0 relative">
          <Image
            src={logo_dark}
            alt="heena kapadia dark logo"
            className="block w-[250px] md:w-[300px]"
          />
        </div>
        <div className="flex flex-col text-md">
          <p className="">Trumbull</p>
          <a href="tel:2032888006" className="underline hover:no-underline">
            (203) 288-8006
          </a>
          <a
            href="mailto:hkapadia@heenakapadiaLaw.com"
            target="_blank"
            className="underline hover:no-underline pb-5">
            hkapadia@heenakapadialaw.com
          </a>
          <a
            href="https://maps.app.goo.gl/7Xty2qBTjYtK2c5A7"
            target="_blank"
            className="underline hover:no-underline">
            572 White Plains Road
            <br /> Trumbull, CT 06611
          </a>
        </div>

        <Link
          href="https://profiles.superlawyers.com/connecticut/trumbull/lawyer/heena-kapadia/ad5c03f6-71fa-47b0-b7ba-5194c5225981.html"
          target="_blank"
          className="flex self-end">
          <Image
            src={super_lawyer}
            alt="rated by super lawyer"
            width={100}
            className="pt-5 sm:p-0"
          />
        </Link>
      </section>
      <section className="m-auto text-sm pt-5 pb-5 text-primary/50 flex gap-2">
        <p>
          <br className="block sm:hidden" />© 2024 HeenaKapadiaLaw. All Rights
          Reserved.
        </p>
      </section>
    </footer>
  );
}

export default Footer;
