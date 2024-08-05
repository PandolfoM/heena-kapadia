import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center gap-[100px]">
      <div className="flex flex-col justify-center items-center gap-5 px-5">
        <h1 className="font-bold text-xl text-secondary text-lg text-center">
          A Law Firm
          <br /> Dedicated Exclusively
          <br /> to Employees
        </h1>
        <p className="text-secondary/50 text-center">
          Working only for employees enables us to devote all our resources to
          protecting and advocating for you in these often-difficult situations.
        </p>
        <Button>Get Started</Button>
      </div>
      <div className="bg-primary -z-20 w-full px-5 pt-[50px] pb-[150px] relative">
        <h3 className="text-secondary font-bold text-lg leading-tight">
          We Are On{" "}
          <span className="text-white">
            Your
            <br /> Team!
          </span>
        </h3>
        <p className="text-white/75 text-sm">
          Separation from employment and other illegal treatment by an employer
          can often be traumatizing and financially devastating. The attorneys
          of the Law Office of Heena Kapadia have the experience necessary to
          protect you and help you seek justice.
        </p>
        {/* Successes */}
        <div className="bg-white/25 w-[300px] h-[250px] absolute -bottom-1/3 right-1/2 left-1/2 -translate-x-1/2 rounded-md text-center bg-clip-padding ">
          <div className="bg-[#F2F2F2] p-5 rounded-md bg-clip-padding border-[10px] border-white/25">
            <h4 className="font-bold text-secondary text-lg">Successes</h4>
            <p className="font-bold text-secondary text-sm">$1,800,000</p>
            <p className="text-secondary text-sm">
              Settlement in discrimination/retaliation case
            </p>
            <p className="font-bold text-secondary text-sm">$1,722,946</p>
            <p className="text-secondary text-sm">
              Verdict in retaliation case
            </p>
            <p className="font-bold text-secondary text-sm">$1,275,000</p>
            <p className="text-secondary text-sm">
              Settlement in discrimination/retaliation case
            </p>
          </div>
        </div>
      </div>
      {/* Areas of practice */}
      <div className="w-full px-5 pt-[150px]">
        <div className="bg-secondary px-5 rounded-md py-5 flex flex-col gap-[10px]">
          <h3 className="text-white font-bold text-lg leading-tight text-center">
            Areas of Practice
          </h3>
          <p className="text-white/50">
            The Law Office of Heena Kapadia represents employees in a broad
            array of employment related matters.
          </p>
          <div className="flex flex-col gap-[10px] dark">
            <Button className="w-full text-sm">Employee Discrimination</Button>
            <Button className="w-full text-sm">
              Whistleblower Retaliation
            </Button>
            <Button className="w-full text-sm">Wage and Hour Issues</Button>
            <Button className="w-full text-sm">Family Medical Leave Act</Button>
            <Button className="w-full text-sm">Other Areas of Practice</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
