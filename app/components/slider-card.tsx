"use client";

import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ReadMoreDialog } from "./dialogs";

export interface Card {
  title: string;
  subtitle: string;
  description: string;
  image: StaticImport;
}

type Props = {
  cards: Card[];
};

function SliderCard({ cards }: Props) {
  return (
    <div className="flex flex-col gap-40 md:gap-10">
      {cards.map((card, i) => (
        <div
          key={i}
          className="relative m-auto bg-white p-6 pt-40 rounded-sm duration-300 transition-all w-full md:rounded-md md:bg-clip-padding md:border-[10px] md:border-white/25 md:pt-20">
          <Image
            src={card.image}
            alt=""
            className="object-center object-cover block rounded-sm duration-300 transition-all aspect-square w-[90%] h-[250px] m-auto shadow-[0_0_20px_1px] shadow-primary/50 absolute top-0 left-0 right-0 -translate-y-1/2 sm:w-[60%] sm:h-[275px] md:w-[300px] md:h-[90%] lg:w-[350px] md:right-full md:-translate-x-1/2 md:translate-y-0 md:top-1/2 md:bottom-1/2 z-10 md:rounded-md"
          />
          <div className="text-center flex flex-col gap-5 justify-between items-center overflow-visible md:text-left md:items-start md:pl-40 md:w-[95%] lg:pl-56">
            <span>
              <h4 className="text-secondary/50 text-sm lg:text-md">
                {card.subtitle}
              </h4>
              <h3 className="text-secondary text-md lg:text-lg">
                {card.title}
              </h3>
            </span>
            <p className="text-xs h-max font-normal text-secondary/50 line-clamp-6 lg:text-sm">
              {card.description}
            </p>
            <ReadMoreDialog header={card.title} text={card.description}>
              <Button className="bg-primary text-white shadow-[0_0_20px_1px] shadow-primary/50">
                Read More
              </Button>
            </ReadMoreDialog>
          </div>
          <div className="swiper-pagination z-10 text-center !absolute !top-[37%] h-fit select-none flex justify-center gap-1 md:flex-col md:!right-5 md:!top-[45%] md:!bottom-auto md:!left-auto md:!w-fit"></div>
        </div>
      ))}
    </div>
  );
}

export default SliderCard;
