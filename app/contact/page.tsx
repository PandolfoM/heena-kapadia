import {
  faEnvelope,
  faMapPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Contact() {
  return (
    <section className="flex flex-col justify-center items-center gap-[100px]">
      <div className="flex flex-col justify-center items-center gap-5 px-5 w-full">
        <h1 className="font-bold text-xl text-secondary text-lg text-center">
          Contact Us
        </h1>
        <div className="w-full flex flex-col gap-1 font-bold text-secondary text-sm">
          <div className="w-full flex gap-3 items-center">
            <FontAwesomeIcon icon={faPhone} className="h-5" />
            <a href="tel:2032888006" className="underline hover:no-underline">
              (203) 288-8006
            </a>
          </div>
          <div className="w-full flex gap-3 items-center">
            <FontAwesomeIcon icon={faMapPin} className="h-5" />
            <a
              href="https://maps.app.goo.gl/7Xty2qBTjYtK2c5A7"
              target="_blank"
              className="underline hover:no-underline">
              572 White Plains Road Trumbull, CT 06611
            </a>
          </div>
          <div className="w-full flex gap-3 items-center">
            <FontAwesomeIcon icon={faEnvelope} className="h-5" />
            <a
              href="mailto:hkapadia@heenakapadiaLaw.com"
              target="_blank"
              className="underline hover:no-underline">
              hkapadia@heenakapadiaLaw.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
