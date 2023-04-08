import Link from "next/link";
import { LayoutSection } from "@/sections";
import { Textbox } from "@/components";

export default function Home() {
  const pageName = "home";

  return (
    <LayoutSection pageName={pageName}>
      <main
        className="flex flex-col items-center justify-evenly gap-20 md:flex-row md:justify-around 
        lg:flex-row lg:justify-around md:port:flex-col md:port:justify-center"
      >
        <section className="flex flex-col items-center gap-6 md:items-start md:port:items-center">
          <h1
            className="flex flex-col gap-6 text-center font-barlow uppercase tracking-widest text-brand
            md:gap-6 md:text-start md:text-lg lg:text-2xl md:port:text-center"
          >
            So, You want to travel to
            <span className="font-bellefair text-7xl text-brand-light md:text-9xl">
              Space
            </span>
          </h1>
          <Textbox extraStyle="md:w-96 md:text-start md:px-0">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </Textbox>
        </section>
        <section className="flex items-center justify-center">
          <Link
            href={"/destination"}
            className="group relative flex h-[130px] w-[130px] items-center justify-center rounded-full bg-brand-light
      duration-500 ease-out md:h-[180px] md:w-[180px] lg:h-[250px] lg:w-[250px]"
          >
            <p
              className="font-bellefair text-xl uppercase text-brand-dark duration-500 ease-out md:text-2xl 
      lg:text-3xl "
            >
              Explore
            </p>
            <span
              className="absolute h-[130px] w-[130px] rounded-full bg-brand-light bg-opacity-10 
        duration-500 ease-in-out group-hover:h-[210px] group-hover:w-[210px] md:h-[180px] 
        md:w-[180px] md:group-hover:h-[245px] md:group-hover:w-[245px] lg:h-[250px] lg:w-[250px] 
        lg:group-hover:h-[375px] lg:group-hover:w-[375px]"
            />
          </Link>
        </section>
      </main>
    </LayoutSection>
  );
}
// md:text-8xl lg:text-9xl
