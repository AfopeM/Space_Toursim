import { useState } from "react";
import { LayoutSection, MainSection } from "@/sections";
import { Tagline, Textbox } from "@/components";
import { motion } from "framer-motion";
import { slideVariant } from "@/utils/motion";
import Image from "next/image";
import useSwr from "swr";
import type { IData } from "@/model/props";

export default function Crew() {
  const { data } = useSwr("crew", async () => {
    const res = await fetch("/data.json");
    const data: IData = await res.json();
    return data.crew;
  });

  const pageName = "crew";
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
        <section className="flex w-full flex-col overflow-hidden">
          {data ? (
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
            md:h-72 md:w-72 md:border-b-0 lg:h-[500px] md:port:w-full"
              >
                <Image
                  src={data[currentSlide].image}
                  alt={`${data[currentSlide].name} image`}
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
                    {data[currentSlide].role}
                  </span>
                  {data[currentSlide].name}
                </h2>
                <Textbox extraStyle="md:w-[400px] m-auto lg:m-0 lg:">
                  {data[currentSlide].bio}
                </Textbox>
              </div>
            </motion.article>
          ) : null}
        </section>
        <div className=" flex w-1/2 justify-around md:w-2/6 ">
          {data
            ? data.map((crew, i) => {
                return (
                  <button
                    key={crew.name}
                    className={`${
                      i === currentSlide ? "bg-opacity-100" : "bg-opacity-20"
                    } h-4 w-4 rounded-full bg-brand-light lg:h-5 lg:w-5 lg:gap-12`}
                    onClick={() => handleSlideDirection(i)}
                  />
                );
              })
            : null}
        </div>
      </MainSection>
    </LayoutSection>
  );
}
