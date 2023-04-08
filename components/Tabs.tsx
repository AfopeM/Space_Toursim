import Image from "next/image";
import { Textbox } from "@/components";
import { motion } from "framer-motion";
import { tabVariant } from "@/utils/motion";

//prettier-ignore
{/* TAB IMAGE */}
type TabImageProps = {
  name: string;
  imgUrl: string;
};

export function TabImage({ name, imgUrl }: TabImageProps) {
  return (
    <motion.div
      variants={tabVariant("img")}
      animate="show"
      initial="hidden"
      whileHover="hover"
      className="relative h-44 w-44 md:h-[350px] md:w-[350px] lg:h-[445px] lg:w-[445px] md:port:h-72 md:port:w-72"
    >
      <Image fill sizes="100%" alt={`${name} image`} src={imgUrl} />
    </motion.div>
  );
}

//prettier-ignore
{/* TAB CONTENT */}
type TabContentProps = {
  name: string;
  description: string;
  distance: string;
  travel: string;
};

//prettier-ignore
export function TabContent({name,description,distance,travel}: TabContentProps) {
    return (
      <motion.article 
      variants={tabVariant("content")}
      animate="show"
      initial="hidden"
      className="flex flex-col items-center gap-4 md:w-full md:items-start 
      md:port:items-center">
        <h2
          className="text-center font-bellefair text-6xl md:port:text-6xl uppercase text-brand-light
      md:text-start md:text-8xl md:port:text-center"
        >
          {name}
        </h2>
        <Textbox extraStyle="md:w-full md:port:w-[30rem] pb-4">
          {description}
        </Textbox>
  
        <div
          className="flex w-full gap-4 border-t-2 border-solid border-brand-border 
          pt-4 text-center font-bellefair text-2xl md:text-3xl uppercase text-brand-light justify-between 
         md:text-start md:port:text-center"
        >
          <p>
            <span className="block font-barlow text-[14px] tracking-[2.36px] text-brand">
              Avg. Distance
            </span>
            {distance}
          </p>
          <p>
            <span className="block font-barlow text-[14px] tracking-[2.36px] text-brand">
              Est. Travel Time
            </span>
            {travel}
          </p>
        </div>
      </motion.article>
    );
  }