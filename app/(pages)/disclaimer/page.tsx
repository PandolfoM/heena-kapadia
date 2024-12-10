import React from "react";
import { nunitosans } from "@/app/utils/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGavel,
  faLandmark,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <section className="flex flex-col justify-center items-center gap-[100px] page">
      <div className="flex flex-col justify-center items-center gap-28 w-full">
        <h1
          className={`${nunitosans.className}  text-secondary text-lg text-center dark:text-white lg:text-xl`}>
          Disclaimer
        </h1>

        <div className="w-full flex flex-col gap-1  text-secondary text-sm px-5 lg:gap-[50px]">
          <h3
            className={`${nunitosans.className} text-md  text-secondary dark:text-white lg:text-xl`}>
            Where we Practice
          </h3>
          <section className="flex flex-col lg:flex-row lg:justify-center gap-10 lg:m-auto">
            <div className="bg-secondary text-white w-full max-w-[375px] m-auto shadow-[0_0_20px_1px] shadow-secondary/50  lg:max-w-none lg:m-0 lg:w-[320px] h-auto rounded-md flex flex-col p-[50px] dark:bg-primary dark:text-white dark:shadow-primary/50">
              <FontAwesomeIcon icon={faLandmark} size="2x" className="mb-2" />
              <h3
                className={`${nunitosans.className} text-lg text-center  leading-[100%] h-32 lg:h-40`}>
                Courts
              </h3>
              <div className="text-white/75 font-normal dark:text-white/75">
                <ul className="list-disc">
                  <li>Connecticut Federal District Court</li>
                  <li>New York Federal District Court</li>
                  <li>Connecticut State Courts</li>
                  <li>New York State Courts</li>
                </ul>
              </div>
            </div>
            <div className="bg-secondary text-white w-full max-w-[375px] m-auto shadow-[0_0_20px_1px] shadow-secondary/50 lg:max-w-none lg:w-[320px] h-auto rounded-md flex flex-col p-[50px] dark:bg-primary dark:text-white dark:shadow-primary/50">
              <FontAwesomeIcon icon={faGavel} size="2x" className="mb-2" />
              <h3
                className={`${nunitosans.className} text-lg text-center  leading-[100%] h-32 lg:h-40`}>
                Connecticut Administrative Agencies
              </h3>
              <div className="text-white/75 font-normal dark:text-white/75">
                <ul className="list-disc">
                  <li>Commission on Human Rights and Opportunities</li>
                  <li>Department of Labor</li>
                  <li>Freedom of Information Commission</li>
                  <li>Office of Public Hearings</li>
                  <li>State Ethics Office</li>
                </ul>
              </div>
            </div>
            <div className="bg-secondary text-white w-full max-w-[375px] m-auto shadow-[0_0_20px_1px] shadow-secondary/50 lg:max-w-none lg:w-[320px] h-auto rounded-md flex flex-col p-[50px] dark:bg-primary dark:text-white dark:shadow-primary/50">
              <FontAwesomeIcon icon={faShieldAlt} size="2x" className="mb-2" />
              <h3
                className={`${nunitosans.className} text-lg text-center  leading-[100%] h-32 lg:h-40`}>
                Federal Administrative Agencies
              </h3>
              <div className="text-white/75 font-normal dark:text-white/75">
                <ul className="list-disc">
                  <li>Equal Employment Opportunities Commission</li>
                  <li>Occupational Safety and Hazard Administration (OSHA)</li>
                  <li>Office of Administrative Law Judges</li>
                  <li>Office of Civil Rights</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default About;
