import React, { useState } from "react";
import { LayoutSection, MainSection } from "@/sections";
import { Tagline, Textbox } from "@/components";
import { motion, AnimatePresence } from "framer-motion";
import { slideVariant } from "@/utils/motion";
import Image from "next/image";
import data from "@/public/data.json";

export default function Crew() {
  const pageName = "crew";
  const { crew } = data;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState("right");

  function handleSlideDirection(slide: number) {
    if (currentSlide > slide) {
      setDirection("left");
    } else {
      setDirection("right");
    }

    setCurrentSlide(slide);
  }

  return (
    <LayoutSection pageName={pageName}>
      <MainSection>
        <Tagline id="02" title="Meet Your Crew" />
        <section className="flex w-full flex-col">
          <motion.article
            variants={slideVariant(direction)}
            initial="initial"
            animate="animate"
            key={currentSlide}
            className="flex w-full flex-col items-center gap-4 md:flex-row md:justify-evenly 
            md:port:flex-col"
          >
            <div
              className="relative h-64 w-4/6 border-b-2 border-solid border-brand-border md:order-last
            md:h-80 md:w-72 md:border-b-0 lg:h-[500px] md:port:w-full"
            >
              <Image
                src={crew[currentSlide].image}
                alt={`${crew[currentSlide].name} image`}
                className="object-contain"
                sizes="100%"
                priority
                fill
              />
            </div>
            <div>
              <h2
                className="text-center font-bellefair text-2xl uppercase text-brand-light md:pb-2 
                md:text-start md:text-4xl lg:text-6xl md:port:text-center"
              >
                <span className="block pb-1 text-base opacity-50 md:text-2xl lg:text-3xl">
                  {crew[currentSlide].role}
                </span>
                {crew[currentSlide].name}
              </h2>
              <Textbox extraStyle="md:w-[400px] m-auto lg:m-0 lg:">
                {crew[currentSlide].bio}
              </Textbox>
            </div>
          </motion.article>
        </section>
        <div className=" flex w-2/6 justify-around ">
          {crew.map((c, i) => {
            return (
              <button
                key={c.name}
                className={`${
                  i === currentSlide ? "bg-opacity-100" : "bg-opacity-20"
                } h-3 w-3 rounded-full bg-brand-light md:h-4 md:w-4 lg:h-5 lg:w-5 lg:gap-12`}
                onClick={() => handleSlideDirection(i)}
              />
            );
          })}
        </div>
      </MainSection>
    </LayoutSection>
  );
}
