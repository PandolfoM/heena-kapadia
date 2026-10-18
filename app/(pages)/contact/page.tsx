"use client";

import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { nunitosans } from "../../utils/fonts";
import { sendEmail } from "@/lib/send-email";
import Loader from "@/app/components/loader";

const appFormSchema = z.object({
  name: z.string().min(1, { message: "Required" }),
  email: z.string().email(),
  phone: z
    .string()
    .regex(/^\d+$/, { message: "Invalid phone number" })
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(10, { message: "Phone number must be at most 10 digits" }),
  message: z.string().min(1, { message: "Required" }),
});

function Contact() {
  const turnstile = useRef<TurnstileInstance>(null);
  const [captchaToken, setCaptchaToken] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [msgSent, setMsgSent] = useState<boolean>(false);
  const appForm = useForm<z.infer<typeof appFormSchema>>({
    resolver: zodResolver(appFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof appFormSchema>) => {
    if (!captchaToken) {
      appForm.setError("root", {
        type: "manual",
        message: "Please wait for the security check to finish.",
      });
      return;
    }
    setLoading(true);
    let ok = false;
    try {
      // Sent through MJP Hub, which checks the Turnstile token.
      const res = await sendEmail({
        from: "Heena Kapadia",
        to: "hkapadia@heenakapadialaw.com",
        subject: "New Client Inquiry",
        emailProps: {
          Name: data.name,
          Email: data.email,
          Phone: data.phone,
          Message: data.message,
        },
        text: `New Client Inquiry
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Message: ${data.message}`,
        captchaToken,
      });
      ok = res.ok;
    } catch {
      ok = false;
    }
    // Tokens work once; get a fresh one for the next message.
    setCaptchaToken("");
    turnstile.current?.reset();
    setLoading(false);

    if (ok) {
      appForm.reset();
      setMsgSent(true);
      setTimeout(() => {
        setMsgSent(false);
      }, 2000);
    } else {
      appForm.setError("root", {
        type: "manual",
        message: "An error occurred. Please try again.",
      });
    }
  };

  return (
    <section className="flex gap-12 px-5 page items-center justify-center lg:flex-row xl:pl-20 xl:pr-52">
      <div className="flex flex-col justify-center items-center gap-10 flex-1">
        <section className="w-full text-md lg:flex lg:flex-col">
          <h1
            className={`${nunitosans.className}  text-primary text-lg text-center w-full lg:text-left lg:text-xl dark:text-white`}>
            Contact Us
          </h1>

          {/* socials */}
          <div className="w-full gap-10 text-md lg:flex">
            <div className="flex gap-2 items-center justify-center">
              <FontAwesomeIcon icon={faPhone} />
              <a
                href="tel:2032888006"
                className="underline hover:no-underline text-nowrap">
                (203) 288-8006
              </a>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <FontAwesomeIcon icon={faEnvelope} />
              <a
                href="mailto:hkapadia@heenakapadiaLaw.com"
                target="_blank"
                className="underline hover:no-underline">
                hkapadia@heenakapadiaLaw.com
              </a>
            </div>
          </div>
        </section>

        {/* form */}
        <section className="w-full flex">
          <Form {...appForm}>
            <form
              onSubmit={appForm.handleSubmit(onSubmit)}
              className="w-full flex flex-col gap-[5px] lg:min-w-120">
              <FormField
                control={appForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs text-error" />
                  </FormItem>
                )}
              />
              <FormField
                control={appForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs text-error" />
                  </FormItem>
                )}
              />
              <FormField
                control={appForm.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Phone Number"
                        {...field}
                        onInput={(e) => {
                          e.currentTarget.value = e.currentTarget.value.replace(
                            /\D/g,
                            ""
                          );
                        }}
                        maxLength={10}
                      />
                    </FormControl>
                    <FormMessage className="text-xs text-error" />
                  </FormItem>
                )}
              />
              <FormField
                control={appForm.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea placeholder="Message" rows={5} {...field} />
                    </FormControl>
                    <FormMessage className="text-xs text-error" />
                  </FormItem>
                )}
              />
              {appForm.formState.errors.root && (
                <p className="text-xs text-error">
                  {appForm.formState.errors.root.message}
                </p>
              )}
              {msgSent && (
                <p className="text-xs">Your message has been sent.</p>
              )}
              <Turnstile
                ref={turnstile}
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                onSuccess={setCaptchaToken}
                onExpire={() => setCaptchaToken("")}
                onError={() => setCaptchaToken("")}
                options={{ size: "flexible" }}
              />
              <Button className="w-full mt-[15px]" type="submit">
                {loading ? <Loader className="bg-white w-3 h-3" /> : "Submit"}
              </Button>
            </form>
          </Form>
        </section>
      </div>

      <div className="hidden lg:block w-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.220045024043!2d-73.18670552354097!3d41.23876450520013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7d07595e945c5%3A0xd34bb7a2097c6069!2sLaw%20Firm%20of%20Heena%20Kapadia!5e0!3m2!1sen!2sus!4v1733869621522!5m2!1sen!2sus"
          width="100%"
          height="500px"
          loading="lazy"></iframe>
      </div>
    </section>
  );
}

export default Contact;
