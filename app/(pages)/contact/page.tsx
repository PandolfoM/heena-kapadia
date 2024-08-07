"use client";

import {
  faEnvelope,
  faMapPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { bitter } from "../../utils/fonts";

const formSchema = z
  .object({
    name: z.string().min(1, { message: "Required" }),
    email: z.string().email(),
    phone: z.string().min(1, { message: "Required" }),
    interest: z.string().optional(),
    type: z.enum(["appointment", "question"]),
    message: z.string().min(1, { message: "Required" }),
  })
  .refine(
    (input) => {
      if (input.type === "appointment" && !input.interest) return false;
      return true;
    },
    {
      message: "Required",
      path: ["interest"],
    }
  );

function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      interest: "",
      type: "appointment",
      message: "",
    },
  });

  const type = form.watch("type");

  useEffect(() => {
    if (type === "question") {
      form.setValue("interest", "");
    }
  }, [type]);

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <section className="flex flex-col justify-center items-center gap-[100px]">
      <div className="flex flex-col justify-center items-center gap-5 px-5 w-full lg:gap-[100px]">
        <h1
          className={`${bitter.className} font-bold lg:text-xl text-secondary text-lg text-center dark:text-white`}>
          Contact Us
        </h1>
        <div className="w-full flex flex-col gap-5 lg:flex-row-reverse lg:justify-around lg:w-[75%] lg:gap-10">
          <div className="w-full flex flex-col gap-1 font-bold text-secondary text-sm dark:text-primary lg:w-fit">
            <h3 className="hidden lg:block lg:text-white lg:text-lg lg:leading-[100%] lg:pb-3">
              Socials
            </h3>
            <div className="w-full flex gap-3 items-center">
              <div className="w-7 flex items-end">
                <FontAwesomeIcon icon={faPhone} className="h-5" />
              </div>
              <a href="tel:2032888006" className="underline hover:no-underline">
                (203) 288-8006
              </a>
            </div>
            <div className="w-full flex gap-3 items-center">
              <div className="w-7 flex items-end">
                <FontAwesomeIcon icon={faMapPin} className="h-5" />
              </div>
              <a
                href="https://maps.app.goo.gl/7Xty2qBTjYtK2c5A7"
                target="_blank"
                className="underline hover:no-underline">
                572 White Plains Road Trumbull, CT 06611
              </a>
            </div>
            <div className="w-full flex gap-3 items-center">
              <div className="w-7 flex items-end">
                <FontAwesomeIcon icon={faEnvelope} className="h-5" />
              </div>
              <a
                href="mailto:hkapadia@heenakapadiaLaw.com"
                target="_blank"
                className="underline hover:no-underline">
                hkapadia@heenakapadiaLaw.com
              </a>
            </div>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full flex flex-col gap-[5px] lg:max-w-[50%] lg:min-w-[30rem]">
              <FormField
                control={form.control}
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
                control={form.control}
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
                control={form.control}
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
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Message Type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="appointment">Appointment</SelectItem>
                        <SelectItem value="question">Question</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              {type === "appointment" && (
                <FormField
                  control={form.control}
                  name="interest"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Area of Interest" {...field} />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
              )}
              <FormField
                control={form.control}
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
        </div>
      </div>
    </section>
  );
}

export default Contact;
