import React from "react";
import { Navbar } from "@/components";

type LayoutSectionProps = {
  pageName: string;
  children: React.ReactNode;
};

//prettier-ignore
export default function LayoutSection({pageName, children }: LayoutSectionProps) {

    const pages = [
        {
            name: "home",
            content: "bg-homeM md:bg-homeT lg:bg-homeD gap-0",
        },
        {
            name: "destination",
            content: "bg-destinationM md:bg-destinationT lg:bg-destinationD",
        },
        {
            name: "crew",
            content: "bg-crewM md:bg-crewT lg:bg-crewD",
        },
        {
            name: "technology",
            content: "bg-technologyM md:bg-technologyT lg:bg-technologyD",
        },
    ];
    // console.log(pages);

  return (
    <div
      className={` ${pages
        .map((page) => (page.name === pageName ? page.content : ""))
        .join(
          ""
        )} grid h-screen w-screen grid-rows-main gap-8 bg-cover px-6 md:px-12 
      lg:p-12 lg:pb-20`}>
        <Navbar pageName={pageName}/>
      {children}
    </div>
  );
}
