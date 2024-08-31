import { bitter } from "@/app/utils/fonts";
import Link from "next/link";
import React from "react";

function WageHourIssues() {
  return (
    <section className="px-5 flex flex-col gap-10">
      <h1
        className={`${bitter.className} font-bold text-secondary text-lg text-center dark:text-white lg:text-xl`}>
        Wage and Hour Issues
      </h1>
      <div
        className="flex flex-col gap-2 text-secondary dark:text-white">
        <p>
          Employees must be compensated according to wage and hour laws, which
          cover minimum wages, overtime, and meal and rest breaks. Employer
          policies must comply with these laws, but there are ways to get around
          them. For example, employers sometimes classify an employee as
          salaried, instead of hourly, simply to avoid paying overtime.
        </p>
        <p>
          In addition, employers often hire workers as independent contractors.
          This is an ideal way for them to handle short-term or contract work,
          since they can expand their workforce without having to offer
          benefits, unemployment insurance, worker's compensation, or other
          perks. That's why the independent contractor classification is often
          abused, but assessing whether that contractor is actually an employee
          can be difficult.
        </p>
        <p>
          Hourly workers are covered by the Fair Labor Standards Act and
          Connecticut state law. These set mandatory minimum wage requirements,
          and require “non-exempt,” or hourly, employees to be paid overtime for
          each hour over 40 they work in a single week. The laws require
          employers to keep adequate records and prohibit “off-the-clock” work.
          You have the right to file an action against your employer for unpaid
          overtime, as well as to seek damages for retaliation if fired for
          doing it.
        </p>
        <p>
          If you have any issues around employer wage and hour policies,
          overtime compensation, or independent contractor classification,{" "}
          <Link href="/contact" className="underline hover:no-underline font-bold">
            please call for a confidential consultation about your situation.
          </Link>
        </p>
      </div>
    </section>
  );
}

export default WageHourIssues;
