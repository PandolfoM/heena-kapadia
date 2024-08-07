import { Button } from "@/components/ui/button";
import { bitter } from "../utils/fonts";
import Link from "next/link";
import Image from "next/image";
import lawBalance from "@/app/assets/law-balance.svg";

export default function Home() {
  return (
    <>
      <section className="flex flex-col justify-center items-center gap-[100px]">
        <div className="flex flex-col justify-center items-center gap-5 px-5">
          <h1
            className={`${bitter.className} font-bold text-secondary text-lg text-center dark:text-white lg:text-xl`}>
            A Law Firm
            <br className="lg:hidden" /> Dedicated Exclusively
            <br className="lg:hidden" /> to Employees
          </h1>
          <p className="text-secondary/50 text-center dark:text-white/50 lg:text-md">
            Working only for employees enables us to devote all our{" "}
            <br className="hidden lg:block" /> resources to protecting and
            advocating for you in these often-difficult situations.
          </p>
          <Link href="/contact">
            <Button>Get Started</Button>
          </Link>
        </div>
        <div className="bg-primary -z-20 w-full px-5 pt-[50px] pb-[150px] relative">
          <h3
            className={`${bitter.className} text-secondary font-bold text-lg leading-tight lg:text-xl`}>
            We Are On{" "}
            <span className="text-white">
              Your
              <br className="lg:hidden" /> Team!
            </span>
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
              <h4 className="font-bold text-secondary text-lg">Successes</h4>
              <p className="font-bold text-secondary text-sm lg:text-md">
                $1,800,000
              </p>
              <p className="text-secondary text-sm lg:text-md">
                Settlement in
                <br /> discrimination/retaliation case
              </p>
              <p className="font-bold text-secondary text-sm lg:text-md">
                $1,722,946
              </p>
              <p className="text-secondary text-sm lg:text-md">
                Verdict in retaliation case
              </p>
              <p className="font-bold text-secondary text-sm lg:text-md">
                $1,275,000
              </p>
              <p className="text-secondary text-sm lg:text-md">
                Settlement in
                <br /> discrimination/retaliation case
              </p>
            </div>
          </div>
        </div>
        {/* Areas of practice */}
        <div className="w-full px-5 pt-[150px] lg:w-4/5">
          <div className="bg-secondary px-5 rounded-md py-5 flex flex-col gap-[10px] dark:bg-primary lg:flex-row lg:justify-between lg:py-[50px]">
            <span className="flex flex-col gap-[10px] lg:justify-center">
              <h3
                className={`${bitter.className} text-white font-bold text-lg leading-tight text-center lg:text-left lg:w-fit lg:text-xl`}>
                Areas of Practice
              </h3>
              <p className="text-white/75 lg:text-left lg:w-96">
                The Law Office of Heena Kapadia represents employees in a broad
                array of employment related matters.
              </p>
            </span>
            <div className="flex flex-col gap-[10px] lg:w-[40%]">
              <Button className="w-full text-sm bg-primary dark:bg-secondary cursor-default">
                Employee Discrimination
              </Button>
              <Button className="w-full text-sm bg-primary dark:bg-secondary cursor-default">
                Whistleblower Retaliation
              </Button>
              <Button className="w-full text-sm bg-primary dark:bg-secondary cursor-default">
                Wage and Hour Issues
              </Button>
              <Button className="w-full text-sm bg-primary dark:bg-secondary cursor-default">
                Family Medical Leave Act
              </Button>
              <Button className="w-full text-sm bg-primary dark:bg-secondary cursor-default">
                Other Areas of Practice
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
