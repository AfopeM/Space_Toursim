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
      animate="animate"
      initial="initial"
      whileHover="hover"
    >
      <Image
        width={0}
        height={0}
        sizes="100%"
        src={imgUrl}
        alt={`${name} image`}
        className="h-auto w-40 duration-500 ease-in-out 
        md:w-[310px] lg:w-[445px] md:port:w-72"
      />
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
export function TabContent({name, description, distance, travel}: TabContentProps) {
    return (
      <motion.article 
      variants={tabVariant("content")}
      animate="animate"
      initial="initial"
      className="flex flex-col items-center gap-4 md:w-full md:items-start 
      md:port:items-center">
        <h2
          className="text-center font-bellefair text-6xl md:port:text-6xl uppercase text-brand-light
      md:text-start md:text-8xl md:port:text-center"
        >
          {name}
        </h2>
        <Textbox extraStyle="md:w-full md:port:w-[30rem] pb-2">
          {description}
        </Textbox>
  
        <div
          className="flex w-full gap-4 border-t-2 border-solid border-brand-border 
          pt-2 text-center font-bellefair text-2xl md:text-3xl uppercase text-brand-light justify-between 
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
