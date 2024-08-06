import React from "react";

function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-end gap-2 text-secondary/50 text-xs pt-[100px] pb-5 dark:text-white/50">
      <div className="h-[2px] w-[75px] bg-secondary/50 rounded-full dark:bg-white/50" />
      <div className="flex flex-col items-center justify-end">
        <a href="tel:2032888006" className="underline hover:no-underline">
          (203) 288-8006
        </a>
        <a
          href="mailto:HKapadia@HeenaKapadiaLaw.com"
          className="underline hover:no-underline">
          hkapadia@heenakapadialaw.com
        </a>
        <p>© 2024 HeenaKapadiaLaw. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
