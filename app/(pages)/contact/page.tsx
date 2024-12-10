"use client";

import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
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

const appFormSchema = z.object({
  name: z.string().min(1, { message: "Required" }),
  email: z.string().email(),
  phone: z.string().min(1, { message: "Required" }),
  message: z.string().min(1, { message: "Required" }),
});

function Contact() {
  const appForm = useForm<z.infer<typeof appFormSchema>>({
    resolver: zodResolver(appFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof appFormSchema>) => {
    console.log(data);
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
              className="w-full flex flex-col gap-[5px] lg:min-w-[30rem]">
              <FormField
                control={appForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
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
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={appForm.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Phone Number" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
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
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <Button className="w-full mt-[15px]" type="submit">
                Submit
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
