import React from "react";

type MainSectionProps = {
  children: React.ReactNode;
};

export default function MainSection({ children }: MainSectionProps) {
  return (
    <main
      className="flex flex-col items-center justify-evenly md:justify-around md:px-16 
     lg:px-24"
    >
      {children}
    </main>
  );
}
