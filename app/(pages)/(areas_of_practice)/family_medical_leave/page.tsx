import { nunitosans } from "@/app/utils/fonts";
import Link from "next/link";
import React from "react";

function FamilyMedicalLeave() {
  return (
    <section className="px-5 flex flex-col gap-10">
      <h1
        className={`${nunitosans.className}  text-primary text-lg text-center dark:text-white lg:text-xl`}>
        Family Medical Leave Act
      </h1>
      <div className="flex flex-col gap-2 text-primary dark:text-white">
        <p>
          The Family Medical Leave Act (FMLA) permits qualifying employees to
          take unpaid leave to care for their own or a close family member's
          serious health condition, without risking losing their job. In
          Connecticut, there are both federal and state FMLA laws.
        </p>
        <p>
          The federal FMLA, signed into law in 1993, requires employers with 50
          or more employees to provide those workers 12 weeks per year of unpaid
          leave for qualifying medical or family reasons and not risk losing
          their job. Connecticut workers are covered by the federal FMLA, but
          also may be covered by Connecticut's FMLA. This law says that if your
          company employs 75 or more people within a 75-mile radius, and if
          you've worked there at least 1,000 hours in the last 12 months, you
          can take up to 16 weeks of FMLA leave in a two-year period.
        </p>
        <p>
          The FMLA leave time need not be consecutive under both federal and
          Connecticut laws. So, you can take your 12 or 16 weeks of leave time
          intermittently, using it only when necessary. The law also requires
          the employer to provide health insurance on the same terms as the
          employee had when the employee was at work. In addition, when the FMLA
          leave is over, the employer must give the employee the same job
          position, with the same seniority and benefits.
        </p>
        <p>
          To take FMLA leave, you or an immediate family member—spouse, child,
          or parent—has to have a serious health condition. That includes
          illness, injury, or other condition requiring hospitalization or
          continuing treatment by a healthcare provider. Three days in a row of
          incapacity is also generally required. FMLA leave can also be taken
          for the birth, adoption, or foster care placement of an employee's
          child.
        </p>
        <p>
          If you think you're entitled to FMLA leave and your employer has
          discouraged your from taking it, or outright refused it, or if you
          fear your employer might punish you, or your employer has in fact
          punished you for taking it,{" "}
          <Link href="/contact" className="underline hover:no-underline ">
            please contact us for a confidential consultation.
          </Link>
        </p>
      </div>
    </section>
  );
}

export default FamilyMedicalLeave;
