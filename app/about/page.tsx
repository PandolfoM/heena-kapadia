import React from "react";
import SliderCard, { Card } from "../components/slider-card";
import heena from "@/app/assets/heena.jpg";
import carmen from "@/app/assets/carmen.jpg";
import lynn from "@/app/assets/lynn.jpg";

const CARDS: Card[] = [
  {
    title: "Heena Kapadia",
    subtitle: "Attorney",
    image: heena,
    description: `Attorney Kapadia has worked in the field of employment law for over  30 years. She spent the first eight years of her practice representing  large corporations and other institutional clients in employment  matters. Since then, she has focused on representing and enforcing the  rights of employees in a broad array of employment related matters. In  March of 2014, she opened the Law Office of Heena Kapadia, a boutique  firm devoted solely to protecting and enforcing the rights of employees.

    Attorney Kapadia has extensive experience in litigating claims on  behalf of employees in Connecticut state and federal courts. Her  practice also involves counseling and advising employees on managing and  resolving difficult ongoing employment situations. With the benefit of  having represented both employers and employees, she has the unique  ability to assess and evaluate employment situations and conflicts from  both parties' viewpoints. Attorney Kapadia has assisted many employees  in resolving disputes through the mediation and arbitration processes.
    Coming from all walks of life, the clients of the Law Office of Heena  Kapadia include executives, physicians, attorneys, sales professionals,  nurses, and hourly employees. Every client is treated with respect,  courtesy, and equal attention.
    Attorney Kapadia is a member of the New Haven County Bar Association  and the Connecticut Employment Lawyers Association. In 1992, she  received her law degree with honors from the University of Connecticut  School of Law, then served as a judicial clerk to the United States  Magistrate Judge Arthur Latimer for the United States District Court for  the District of Connecticut.`,
  },
  {
    title: "Carmen Chapman",
    subtitle: "Attorney",
    image: carmen,
    description: `
Attorney Chapman has extensively litigated matters in the state and federal courts of New York and Connecticut. During her first ten years of practice, she focused on representing labor unions and their members and defending professional liability claims against lawyers. Since then, Attorney Chapman found a passion for representing employees, and she now focuses her entire practice on enforcing the rights of employees.

She handles a wide array of matters for employees through administrative agencies such as the Connecticut Commission on Human Rights and Opportunities, the Equal Employment Opportunities Commission, and the Connecticut Department of Labor. Attorney Chapman's diverse background in litigation is an asset to her clients, as it allows her to analyze claims from a unique and broad perspective.

Attorney Chapman attended the University of Texas at Austin, where she graduated with high honors. She graduated from the University of Houston Law Center, during which time she served as a judicial clerk to the Honorable Judge Tony Lindsey, Harris County District Court, Houston, Texas.
`,
  },
  {
    title: "Lynn Kelly",
    subtitle: "Paralegal",
    image: lynn,
    description: `
      Lynn Kelly began her career in the law fifteen years ago as a paralegal. She currently focuses primarily in the areas of employment litigation and real estate. Lynn supports Attorneys Kapadia and Chapman with agency and court filings, discovery matters and trial preparation.
    `,
  },
];

function About() {
  return (
    <section className="flex flex-col justify-center items-center gap-[100px]">
      <div className="flex flex-col justify-center items-center gap-28 w-full">
        <h1 className="font-bold text-xl text-secondary text-lg text-center">
          About
        </h1>
        <div className="w-full flex flex-col gap-1 font-bold text-secondary text-sm bg-primary p-5">
          <SliderCard cards={CARDS} />
        </div>
      </div>
    </section>
  );
}

export default About;
