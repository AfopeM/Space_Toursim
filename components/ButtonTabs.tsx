import Image from "next/image";
import { motion } from "framer-motion";
import { tabVariant } from "@/utils/motion";
import { Textbox } from "@/components";

//prettier-ignore
{/* BUTTON TAB IMAGE */}
type ButtonTabsImageProps = {
  portrait: string;
  landscape: string;
};

export function ButtonTabsImage({ portrait, landscape }: ButtonTabsImageProps) {
  return (
    <motion.picture
      variants={tabVariant("img")}
      animate="animate"
      initial="initial"
      whileHover="hover"
      className="relative h-56 w-full md:order-2 md:h-full md:w-5/12 lg:max-w-lg 
      md:port:order-first md:port:h-64 md:port:w-full"
    >
      <source srcSet={portrait} media="(min-width:950px)" />
      <Image
        fill
        priority
        alt={`image`}
        sizes="100%"
        src={landscape}
        className="object-contain md:object-cover"
      />
    </motion.picture>
  );
}

//prettier-ignore
{/* BUTTON TAB CONTENT */}
type ButtonTabsContentProps = {
  name: string;
  description: string;
};

//prettier-ignore
export function ButtonTabsContent({ name, description }: ButtonTabsContentProps) {
  return (
    <motion.article
      variants={tabVariant("content")}
      animate="animate"
      initial="initial">
      <h2
        className="pb-4 text-center font-bellefair text-2xl uppercase text-brand-light md:text-start 
                md:text-5xl lg:text-6xl md:port:text-center md:port:text-3xl"
      >
        <span className="block pb-2 font-barlow text-base tracking-widest text-brand">
          The terminology...
        </span>
        {name}
      </h2>
      <Textbox extraStyle="md:w-[420px] lg:text-lg lg:leading-8">
        {description}
      </Textbox>
    </motion.article>
  );
}
