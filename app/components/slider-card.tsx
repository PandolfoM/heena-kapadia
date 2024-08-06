"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Button } from "@/components/ui/button";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

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
    <div className="relative m-auto bg-white p-6 rounded-sm duration-300 transition-all w-full">
      <Swiper
        spaceBetween={30}
        effect="fade"
        loop={true}
        mousewheel={{ invert: false }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        modules={[Pagination, EffectFade, Mousewheel]}
        className="flex flex-col items-center justify-end !overflow-visible h-[450px]"
        onSlideChangeTransitionStart={() => {
          const activeSlide = document.querySelector(
            ".swiper-slide-active .swiper-slide-content"
          );
          const prevSlide = document.querySelector(
            ".swiper-slide-prev .swiper-slide-content"
          );
          const nextSlide = document.querySelector(
            ".swiper-slide-next .swiper-slide-content"
          );

          if (prevSlide) {
            prevSlide.classList.add("slide-down");
          }
          if (nextSlide) {
            nextSlide.classList.add("slide-down");
          }
          if (activeSlide) {
            activeSlide.classList.remove("slide-down");
            activeSlide.classList.add("slide-up");
          }
        }}
        onSlideChangeTransitionEnd={() => {
          const slides = document.querySelectorAll(".swiper-slide-content");
          slides.forEach((slide) => {
            slide.classList.remove("slide-up", "slide-down");
          });
        }}>
        {cards.map((card, i) => (
          <SwiperSlide
            key={i}
            className="relative !flex flex-col justify-end items-center cursor-default !bg-transparent swiper-slide">
            <Image
              src={card.image}
              alt=""
              className="object-center object-cover block rounded-sm duration-300 transition-all aspect-square w-[90%] h-[250px] m-auto shadow-[0_0_20px_1px] shadow-primary/50 absolute top-0 left-0 right-0 -translate-y-1/2"
            />
            <div className="swiper-slide-content text-center flex flex-col gap-5 justify-between items-center overflow-hidden">
              <span>
                <h4 className="text-secondary/50 text-sm">{card.subtitle}</h4>
                <h3 className="text-secondary text-md">{card.title}</h3>
              </span>
              <p className="text-xs h-max font-normal text-secondary/50 line-clamp-6">
                {card.description}
              </p>
              <Button className="bg-primary text-white">Read More</Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-pagination z-10 text-center !absolute !top-[37%] h-fit select-none flex justify-center"></div>
    </div>
  );
}

export default SliderCard;
