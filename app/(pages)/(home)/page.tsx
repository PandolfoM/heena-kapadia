import { Button } from "@/components/ui/button";
import Link from "next/link";
import { nunitosans } from "@/app/utils/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcaseMedical,
  faFileContract,
  faGavel,
  faMoneyCheck,
  faUserTie,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <section className="flex flex-col justify-center items-center skipFirst">
        <div className="relative flex flex-col justify-center items-center gap-5 px-5 w-full h-[30rem] z-0">
          <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-no-repeat bg-cover bg-center z-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-primary/10 z-10" />
          <div className="relative z-20 flex flex-col justify-center items-center gap-5 px-5">
            <h1
              className={`${nunitosans.className}  text-lg text-center text-white lg:text-xl`}>
              A Law Firm
              <br className="lg:hidden" /> Dedicated Exclusively
              <br className="lg:hidden" /> to Employees
            </h1>
            <p
              className={`${nunitosans.className} text-center text-white/90 lg:text-md`}>
              Working only for employees enables us to devote all our{" "}
              <br className="hidden lg:block" /> resources to protecting and
              advocating for you in these often-difficult situations.
            </p>
            <Link href="/contact">
              <Button className="bg-primary ">Get Started</Button>
            </Link>
          </div>
        </div>
        <div className="bg-primary -z-20 w-full px-5 pt-[50px] pb-[150px] relative">
          <h3
            className={`${nunitosans.className}  text-white text-lg leading-tight lg:text-xl`}>
            We Are On Your
            <br className="lg:hidden" /> Team!
          </h3>
          <p className="text-white/75 text-sm lg:w-1/2">
            Separation from employment and other illegal treatment by an
            employer can often be traumatizing and financially devastating. The
            attorneys of the Law Office of Heena Kapadia have the experience
            necessary to protect you and help you seek justice.
          </p>
          {/* Successes */}
          {/* <Image
            alt=""
            src={lawBalance}
            className="absolute top-0 bottom-0 left-1/2 -translate-y-5 -translate-x-1/2 lg:left-0 lg:translate-x-full lg:top-1/2 lg:-translate-y-1/2 2xl:right-1/2 2xl:left-1/2 2xl:-translate-x-[70%]"
          /> */}
          <div className="w-[85%] h-auto absolute top-1/2 right-1/2 left-1/2 translate-y-20 -translate-x-1/2 rounded-md text-center bg-clip-padding sm:w-[70%] md:w-1/2 lg:right-0 lg:translate-x-1/3 lg:-translate-y-1/4 lg:w-[375px] xl:w-[440px] 2xl:translate-x-1/2">
            <div className="bg-[#F2F2F2] p-5 rounded-md bg-clip-padding border-[10px] border-white/25 h-full w-full">
              <h4 className="text-primary text-lg">Successes</h4>
              <p className="text-primary text-sm lg:text-md">$1,800,000</p>
              <p className="text-primary text-sm lg:text-md">
                Settlement in
                <br /> discrimination/retaliation case
              </p>
              <p className=" text-primary text-sm lg:text-md">$1,800,000</p>
              <p className="text-primary text-sm lg:text-md">
                Settlement in
                <br /> free speech retaliation case.
              </p>
              <p className=" text-primary text-sm lg:text-md">$1,722,946</p>
              <p className="text-primary text-sm lg:text-md">
                Verdict in retaliation case
              </p>
              <p className=" text-primary text-sm lg:text-md">$1,275,000</p>
              <p className="text-primary text-sm lg:text-md">
                Settlement in
                <br /> discrimination/retaliation case
              </p>
            </div>
          </div>
        </div>
        {/* Areas of practice */}
        <div className="w-full px-5 pt-96 lg:pt-60 lg:w-4/5">
          <div className="bg-primary px-5 rounded-md py-5 flex flex-col gap-[10px] dark:bg-primary xl:flex-row xl:justify-between xl:py-[50px]">
            <span className="flex flex-col gap-[10px] lg:justify-center">
              <h3
                className={`${nunitosans.className} text-white  text-lg leading-tight text-center xl:text-left xl:w-fit xl:text-xl`}>
                Areas of Practice
              </h3>
              <p className="text-white/75 pb-5 text-center xl:text-left xl:w-96">
                The Law Office of Heena Kapadia represents employees in a broad
                array of employment related matters.
              </p>
            </span>
            <div className="flex flex-col items-center text-white w-[87%] m-auto gap-[10px] sm:w-auto md:grid md:grid-cols-2 lg:w-[55%] xl:whitespace-nowrap xl:justify-items-start xl:m-0 ">
              <Link
                href="/employee_discrimination"
                className="cursor-pointer w-full  text-sm flex gap-2 justify-start items-center rounded-md py-2 px-2">
                <FontAwesomeIcon icon={faUserTie} size="2x" className="w-10" />
                Employment Discrimination
              </Link>
              <Link
                href="/whistleblower"
                className="cursor-pointer w-full  text-sm flex gap-2 justify-start items-center rounded-md py-2 px-2">
                <FontAwesomeIcon icon={faWind} size="2x" className="w-10" />
                Whistleblower Retaliation
              </Link>
              <Link
                href="/wage_hour_issues"
                className="cursor-pointer w-full  text-sm flex gap-2 justify-start items-center rounded-md py-2 px-2">
                <FontAwesomeIcon
                  icon={faMoneyCheck}
                  size="2x"
                  className="w-10"
                />
                Wage and Hour Issues
              </Link>
              <Link
                href="/family_medical_leave"
                className="cursor-pointer w-full  text-sm flex gap-2 justify-start items-center rounded-md py-2 px-2">
                <FontAwesomeIcon
                  icon={faBriefcaseMedical}
                  size="2x"
                  className="w-10"
                />
                Family Medical Leave Act
              </Link>
              <Link
                href="/other_practices"
                className="cursor-pointer w-full  text-sm flex gap-2 justify-start items-center rounded-md py-2 px-2">
                <FontAwesomeIcon icon={faGavel} size="2x" className="w-10" />
                Wrongful Termination
              </Link>
              <Link
                href="/other_practices"
                className="cursor-pointer w-full  text-sm flex gap-2 justify-start items-center rounded-md py-2 px-2 whitespace-break-spaces">
                <FontAwesomeIcon
                  icon={faFileContract}
                  size="2x"
                  className="w-10"
                />
                Contract / Severance Negotiation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
