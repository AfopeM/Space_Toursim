import React from "react";

type LayoutSectionProps = {
  pageName: string;
  children: React.ReactNode;
};

//prettier-ignore
export default function LayoutSection({pageName, children }: LayoutSectionProps) {
  return (
    <div
      className={`grid h-screen w-screen grid-rows-main gap-8 bg-cover px-6 md:px-12 
      lg:p-12 lg:pb-20 bg-homeM md:bg-homeT lg:bg-homeD`}>
      {children}
    </div>
  );
}
