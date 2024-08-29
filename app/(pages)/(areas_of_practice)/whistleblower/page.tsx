import { bitter } from "@/app/utils/fonts";
import Link from "next/link";
import React from "react";

function Whistleblower() {
  return (
    <section className="px-5 flex flex-col gap-10">
      <h1
        className={`${bitter.className} font-bold text-secondary text-lg text-center dark:text-white lg:text-xl`}>
        Whistleblower Retaliation
      </h1>
      <div className="flex flex-col gap-2 text-secondary dark:text-white">
        <p>
          If an employee discovers an employer is doing something illegal or
          unethical and reports it, the employee whistleblower is protected by
          law from retaliation by the employer and co-workers. This protection
          holds even if the employer's behavior is eventually found to be legal
          and ethical.
        </p>
        <p>
          In cases where the whistleblower is reporting fraud against the
          federal government, federal laws protect the individual and can
          provide the whistleblower with substantial rewards.
        </p>
        <p>
          If you're a whistleblower concerned about retaliation,{" "}
          <Link href="/contact" className="underline hover:no-underline">
            please contact us for a confidential consultation.
          </Link>
        </p>
      </div>

      <div className="flex flex-col gap-2 text-secondary dark:text-white">
        <h3
          className={`${bitter.className} font-bold text-secondary text-md text-center dark:text-white lg:text-lg`}>
          First Amendment/Free Speech
        </h3>
        <div className="h-[2px] w-3/5 bg-secondary/50 rounded-full dark:bg-white/20 m-auto" />
        <p>
          Connecticut law protects employees from retaliation by an employer for
          exercising their right to free speech under the United States
          Constitution and the Connecticut State Constitution. However, not all
          speech is protected. Speech that involves a matter of public concern
          is generally protected. If you have experienced retaliation from your
          employer for raising concerns regarding health and safety, serious
          wrongdoing, or other matters of public concern, we can assist. In
          Connecticut, if you exercise your first amend speech rights, you are
          protected.
        </p>
        <p>
          We protect your rights in claims against your employer for hiring
          younger, less qualified workers to supervise you, or for firing you
          and filling your job with a younger, lower-paid worker.
        </p>
      </div>

      <div className="flex flex-col gap-2 text-secondary dark:text-white">
        <h3
          className={`${bitter.className} font-bold text-secondary text-md text-center dark:text-white lg:text-lg`}>
          SOX
        </h3>
        <div className="h-[2px] w-3/5 bg-secondary/50 rounded-full dark:bg-white/20 m-auto" />
        <p>
          SOX (the Sarbanes-Oxley Act) protects whistleblowers who provide
          information, cause it to be provided, or otherwise assist an
          investigation of conduct they believe violates:
        </p>
        <ul className="list-disc ml-8">
          <li>
            federal criminal prohibitions against securities fraud, bank fraud,
            mail fraud, or wire fraud;
          </li>
          <li>
            any rule or regulation of the SEC (Securities and Exchange
            Commission); or
          </li>
          <li>any federal law relating to fraud against shareholders.</li>
        </ul>
        <p>
          SOX even protects internal disclosures, such as when an employee
          raises a concern to a boss about misleading financial information in
          an SEC filing. In addition, SOX prohibits retaliation for
          whistleblower actions.
        </p>
      </div>

      <div className="flex flex-col gap-2 text-secondary dark:text-white">
        <h3
          className={`${bitter.className} font-bold text-secondary text-md text-center dark:text-white lg:text-lg`}>
          OSHA/DOL REPORTING
        </h3>
        <div className="h-[2px] w-3/5 bg-secondary/50 rounded-full dark:bg-white/20 m-auto" />
        <p>
          The Department of Labor's OSHA Whistleblower Protection Program
          protects employees from retaliation for reporting employer violations
          of various OSHA laws. Employees are entitled to a safe work
          environment and employers are required to follow OSHA standards and
          other safety rules.
        </p>
      </div>
    </section>
  );
}

export default Whistleblower;
