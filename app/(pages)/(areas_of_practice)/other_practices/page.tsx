import Divider from "@/app/components/divider";
import { nunitosans } from "@/app/utils/fonts";
import React from "react";

function OtherPractices() {
  return (
    <section className="px-5 flex flex-col gap-10">
      <h1
        className={`${nunitosans.className}  text-primary text-lg text-center dark:text-white lg:text-xl`}>
        Other Areas of Practice
      </h1>

      <div className="flex flex-col gap-2 text-primary dark:text-white">
        <h3
          className={`${nunitosans.className}  text-primary text-md text-center dark:text-white lg:text-lg`}>
          Wrongful Termination
        </h3>
        <Divider />
        <p>
          Connecticut is an at-will employment state. An employer may fire an
          at-will employee for any reason or no reason, but not for a reason
          that violates an important public policy. For example, if you are
          fired in retaliation for raising a concern regarding a workplace
          safety issue or your employer's failure to properly pay taxes, you
          could have a common law claim for wrongful discharge.
        </p>
      </div>

      <div className="flex flex-col gap-2 text-primary dark:text-white">
        <h3
          className={`${nunitosans.className}  text-primary text-md text-center dark:text-white lg:text-lg`}>
          Contract/Severance Negotiation
        </h3>
        <Divider />
        <p>
          Employment contracts can be obvious, such as when they cover terms of
          employment in advance, including non-compete agreements. Less obvious
          are the contractual provisions in a stock option offer, or in an
          employment manual, or when an employer makes oral promises to an
          employee.
        </p>
        <p>
          Severance agreements can affect everything from the continuation of
          your benefits to future employment options. These typically offer
          attractive terms for a promise not to file claims against the
          employer. The legal restrictions and financial concessions in these
          agreements may not be in the employee's best interest. We can assist
          you in reviewing your severance agreement and negotiating to protect
          your rights.
        </p>
      </div>

      <div className="flex flex-col gap-2 text-primary dark:text-white">
        <h3
          className={`${nunitosans.className}  text-primary text-md text-center dark:text-white lg:text-lg`}>
          Workers' Compensation Retaliation
        </h3>
        <Divider />
        <p>
          Workers' Compensation insurance covers you if you have been injured at
          work. It compensates you for lost time from work, as well as for
          damages due to injuries or conditions that resulted from work-related
          injuries. Unfortunately, employers sometimes retaliate against
          employees who are injured at work and seek workers' compensation
          benefits. Injured employees can be terminated, disciplined, demoted,
          or suffer other unfair and illegal treatment, but they have a right to
          seek justice.
        </p>
      </div>

      <div className="flex flex-col gap-2 text-primary dark:text-white">
        <h3
          className={`${nunitosans.className}  text-primary text-md text-center dark:text-white lg:text-lg`}>
          Mediation
        </h3>
        <Divider />
        <p>
          The Connecticut Judicial Branch has reported that less than 2% of all
          civil cases end in a verdict. Instead, there is a settlement, arrived
          at through mediation. We have resolved hundreds of disputes this way.
          We reached these settlements months, and sometimes years, before the
          cases would have finally been presented in court.
        </p>
      </div>
    </section>
  );
}

export default OtherPractices;
