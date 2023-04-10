import React from "react";

type Props = {
  extraStyle: string;
  children: React.ReactNode;
};

export default function Textbox({ extraStyle, children }: Props) {
  return (
    <p
      className={`w-80 px-2 text-center font-barlow leading-6 text-brand md:px-0 md:text-start md:text-lg 
        lg:w-96 md:port:px-4 md:port:text-center ${extraStyle}`}
    >
      {children}
    </p>
  );
}
