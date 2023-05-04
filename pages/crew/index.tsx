import { useState } from "react";
import { LayoutSection, MainSection } from "@/sections";
import { Tagline, Textbox } from "@/components";
import { motion } from "framer-motion";
import { slideVariant } from "@/utils/motion";
import Image from "next/image";
import { GetStaticProps } from "next";
import { IData } from "@/model/props";

export const getStaticProps: GetStaticProps = async () => {
  const host =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://spacextourism.netlify.app";
  const res = await fetch(`${host}/data.json`);
  const { crew }: IData = await res.json();
  return {
    props: {
      crew,
    },
  };
};

export default function Crew({ crew }: IData) {
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
          {crew.map((member, i) => {
            if (i !== currentSlide) return;
            return (
              <motion.article
                key={member.name}
                variants={slideVariant(direction)}
                initial="initial"
                animate="animate"
                className="flex w-full flex-col items-center gap-4 md:flex-row
                md:justify-evenly md:port:flex-col"
              >
                <div
                  className="relative h-64 w-4/6 border-b-2 border-solid 
                    border-brand-border md:order-last md:h-72 md:w-72 
                    md:border-b-0 lg:h-[500px] md:port:w-full"
                >
                  <Image
                    fill
                    priority
                    sizes="100%"
                    src={member.image}
                    alt={`${member.name} image`}
                    className="object-contain"
                  />
                </div>

                <div>
                  <h2
                    className="text-center font-bellefair text-2xl uppercase 
                        text-brand-light md:pb-2 md:text-start md:text-4xl 
                        lg:text-6xl md:port:text-center"
                  >
                    <span
                      className="block pb-1 text-base opacity-50 md:text-2xl 
                        lg:text-3xl"
                    >
                      {member.role}
                    </span>
                    {member.name}
                  </h2>
                  <Textbox extraStyle="md:w-[400px] m-auto lg:m-0 lg:">
                    {member.bio}
                  </Textbox>
                </div>
              </motion.article>
            );
          })}
        </section>
        <div className=" flex w-1/2 justify-around md:w-2/6 ">
          {crew.map((member, i) => {
            return (
              <button
                key={member.name}
                className={`${
                  i === currentSlide ? "bg-opacity-100" : "bg-opacity-20"
                } h-4 w-4 rounded-full bg-brand-light lg:h-5 lg:w-5 lg:gap-12`}
                onClick={() => handleSlideDirection(i)}
              />
            );
          })}
        </div>
      </MainSection>
    </LayoutSection>
  );
}
