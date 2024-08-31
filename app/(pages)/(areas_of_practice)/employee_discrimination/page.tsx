import Divider from "@/app/components/divider";
import { bitter } from "@/app/utils/fonts";
import Link from "next/link";
import React from "react";

function EmployeeDiscrimination() {
  return (
    <section className="flex flex-col gap-10">
      <h1
        className={`${bitter.className} font-bold text-secondary text-lg text-center dark:text-white lg:text-xl`}>
        Employment Discrimination
      </h1>
      <div className="flex flex-col gap-2 text-secondary dark:text-white">
        <p>
          The Connecticut Fair Employment Practices Act (CFEPA) prohibits
          employment discrimination based on race, color, religious creed, age
          (over 18), sex, pregnancy, national origin, ancestry, past or present
          history of mental disorder, physical disability, marital status,
          veteran status and sexual orientation. Sexual harassment is also
          specifically prohibited. The CFEPA applies to employers who have three
          or more employees.
        </p>
        <p>
          There are many Federal laws that also protect employees in some of the
          groups identified in CFEPA. Federal discrimination laws protecting
          employees from discrimination are set forth in statutes, such as the
          Americans with Disabilities Act, the Age Discrimination in Employment
          Act (over 40), and Title VII (race, ethnicity, and gender). In most
          cases, federal law extends to employers with 15 or more employees, and
          in some cases 20 or more employees.
        </p>
        <p>
          If you think you may be a victim of employment discrimination,{" "}
          <Link href="/contact" className="underline hover:no-underline font-bold">
            please contact us for a confidential consultation.
          </Link>
        </p>
      </div>

      <div className="flex flex-col gap-2 text-secondary dark:text-white">
        <h3
          className={`${bitter.className} font-bold text-secondary text-md text-center dark:text-white lg:text-lg`}>
          Age
        </h3>
        <Divider />
        <p>
          Employees at all levels correctly believe their age and experience are
          an asset to their organizations. But employers often view an
          employee's age as a disadvantage, because of higher salary and benefit
          costs and misperceptions about productivity and flexibility.
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
          Gender
        </h3>
        <Divider />
        <p>
          Gender discrimination can be fairly obvious when pay inequity between
          males and females is undeniable and an organization continues to be
          run by an old boy's club. But sometimes an employer's glass ceiling is
          not so apparent—until you realize that the prized assignments aren’t
          being given to you and your move to the next level is not going to
          happen.
        </p>
      </div>

      <div className="flex flex-col gap-2 text-secondary dark:text-white">
        <h3
          className={`${bitter.className} font-bold text-secondary text-md text-center dark:text-white lg:text-lg`}>
          Race/Ethnicity
        </h3>
        <Divider />
        <p>
          It is illegal for an employer to discriminate against an employee on
          the basis of race with regard to hiring, firing, benefits,
          compensation, discipline, job training, promotion, or any other
          condition of employment.
        </p>
        <p>
          Neither federal nor state laws specifically define “race,” although
          it's generally understood as the ancestry or physical or cultural
          characteristics associated with a particular group of people. That
          allows protection to be extended to people discriminated against
          because of their ethnicity. The law also prohibits discrimination
          based on the race or ethnicity of an employee's spouse, partner, or
          friends.
        </p>
        <p>
          Evidence of racial discrimination need not be direct and typically is
          not, but can be proven through circumstantial evidence, such as a
          co-worker using racist language with no serious consequences or
          workers of your race being let go and replaced by hires of a different
          race.
        </p>
      </div>

      <div className="flex flex-col gap-2 text-secondary dark:text-white">
        <h3
          className={`${bitter.className} font-bold text-secondary text-md text-center dark:text-white lg:text-lg`}>
          Disability
        </h3>
        <Divider />
        <p>
          Federal and Connecticut laws prohibit discrimination against
          individuals with disabilities—in employment, as well as all in areas
          of public life. Under these laws an employer cannot refuse to hire and
          cannot fire or discriminate against an employee because of the
          person's present or past mental disability, learning disability, or
          physical disability. Plus, if you care for someone with a disability,
          but aren't disabled yourself, you may have protection under the law.
        </p>
      </div>

      <div className="flex flex-col gap-2 text-secondary dark:text-white">
        <h3
          className={`${bitter.className} font-bold text-secondary text-md text-center dark:text-white lg:text-lg`}>
          Pregnancy
        </h3>
        <Divider />
        <p>
          Pregnancy discrimination includes an employer denying time off or
          reasonable accommodations for a pregnant employee, as well as firing
          or demoting a pregnant employee. The law also prohibits forced time
          off or restrictions on work, and any other negative employment actions
          because of an employee's pregnancy or related medical condition.
        </p>
      </div>

      <div className="flex flex-col gap-2 text-secondary dark:text-white">
        <h3
          className={`${bitter.className} font-bold text-secondary text-md text-center dark:text-white lg:text-lg`}>
          Sexual Harassment
        </h3>
        <Divider />
        <p>
          State and federal laws prohibit unwanted sexual conduct in the
          workplace. Illegal conduct ranges from undesired comments about a
          person's body and questions about someone's personal relationships, to
          sexual requests. Violations of the law include inappropriate touching
          by a supervisor, as well as touching or requests for sex by a
          co-worker when the employer knows, or ought to know, about the
          behavior.
        </p>
        <p>
          A supervisor's demand for sex in return for a job benefit is
          prohibited even if the employee agrees to it. Also prohibited is
          sexual conduct that creates a hostile and intimidating work
          environment. However, the general use of off-color language does not
          constitute such an environment. Victims can be women or men.
        </p>
      </div>

      <div className="flex flex-col gap-2 text-secondary dark:text-white">
        <h3
          className={`${bitter.className} font-bold text-secondary text-md text-center dark:text-white lg:text-lg`}>
          Sexual Orientation
        </h3>
        <Divider />
        <p>
          It is generally understood that the phrase “sexual orientation” refers
          to whether a person is homosexual, or gay; heterosexual, or straight;
          or bisexual. “Gender identity” refers to a person's
          self-identification as a man or a woman, as opposed to that person's
          anatomical sex at birth. In addition, not all transgender people are
          gay; many identify as straight (transgender women with male partners
          and transgender men with female partners).
        </p>
        <p>
          Discrimination for sexual orientation or gender identity in the
          workplace can impact your job status, working environment, health
          benefits, and a host of other issues.
        </p>
      </div>

      <div className="flex flex-col gap-2 text-secondary dark:text-white">
        <h3
          className={`${bitter.className} font-bold text-secondary text-md text-center dark:text-white lg:text-lg`}>
          Marital Status
        </h3>
        <Divider />
        <p>
          Employment discrimination on the basis of marital status is prohibited
          in the state of Connecticut. Employers cannot refuse to hire, or
          terminate or otherwise take adverse action against an applicant or
          employee because he or she is single, married, separated, widowed, or
          divorced. Federal employees are also protected from marital status
          discrimination by the Civil Service Reform Act, even though Title VII
          and other federal employment laws do not cover marital status.
        </p>
      </div>

      <div className="flex flex-col gap-2 text-secondary dark:text-white">
        <h3
          className={`${bitter.className} font-bold text-secondary text-md text-center dark:text-white lg:text-lg`}>
          Veterans
        </h3>
        <Divider />
        <p>
          Veteran discrimination happens when being a former member of the
          uniformed military services makes a person a target of workplace
          prejudice and employment discrimination. A common form occurs when a
          veteran cannot get employment because of veteran status or disability.
          When the discrimination applies to a disabled veteran, it may be
          protected under veteran specific legislation or under overarching laws
          for all Americans with disabilities.
        </p>
      </div>
    </section>
  );
}

export default EmployeeDiscrimination;
