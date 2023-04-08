import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type NavbarProps = {
  pageName: string;
};

export default function Navbar({ pageName }: NavbarProps) {
  const [collapseMenu, setCollapseMenu] = useState(true);

  const routes = [
    { name: "home", path: "/" },
    { name: "destination", path: "/destination" },
    { name: "crew", path: "/crew" },
    { name: "technology", path: "/technology" },
  ];

  return (
    <nav className="relative flex h-24 items-center justify-between font-barlow">
      {/* LOGO */}
      <Link
        href="/"
        className="relative h-10 w-10 md:h-14 md:w-12"
        as={`image`}
      >
        <Image fill alt="logo" src="/./logo.svg" className="object-contain" />
      </Link>

      {/* DESKTOP MENU */}
      <div
        className="hidden md:-m-12 md:flex md:h-full md:items-center md:gap-6 md:bg-brand-light 
  md:bg-opacity-5 md:px-12 md:backdrop-blur-lg lg:gap-12 lg:pl-24 lg:pr-48"
      >
        <span className="absolute -left-[485px] hidden h-[2px] w-4/6 bg-white opacity-25 lg:block" />
        {routes.map((route, i) => {
          return (
            <Link
              key={route.name}
              href={route.path}
              className="group relative flex h-full items-center 
          uppercase tracking-widest text-brand-light"
            >
              <p className="lg:flex lg:gap-2 lg:tracking-[2.7px]">
                <span className="hidden lg:block lg:font-bold">0{i}</span>
                {route.name}
              </p>
              <span
                className={`${
                  pageName === route.name
                    ? "w-full bg-brand-light"
                    : "w-0 bg-brand-light/25"
                }
              absolute bottom-0 left-0 h-1 duration-500 ease-in-out group-hover:w-full`}
              />
            </Link>
          );
        })}
      </div>

      {/* MOBILE MENU BUTTON */}
      <div
        className={` ${
          collapseMenu ? "rotate-180" : ""
        } relative z-20 h-6 w-6 object-contain duration-500 ease-in-out md:hidden`}
      >
        {collapseMenu ? (
          <Image
            fill
            alt="hamburger icon"
            src="/./icon-hamburger.svg"
            className="object-contain"
          />
        ) : (
          <Image
            fill
            alt="close icon"
            src="/./icon-close.svg"
            className="object-contain"
          />
        )}
        <input
          name="menu"
          type="checkbox"
          className="absolute h-full w-full opacity-0"
          onClick={() => {
            setCollapseMenu(!collapseMenu);
          }}
        />
      </div>

      {/* MOBILE MENU */}
      <div
        className={`${
          collapseMenu ? "translate-x-full" : ""
        } fixed right-0 top-0 z-10 flex h-screen w-3/4 flex-col gap-2 bg-brand-light bg-opacity-5 
        py-36 pl-12 backdrop-blur-lg duration-500 ease-in-out md:translate-x-full`}
      >
        {routes.map((route, i) => {
          return (
            <Link
              key={route.name}
              href={route.path}
              className="group relative flex h-16 items-center uppercase tracking-widest text-brand-light"
            >
              <p className="flex gap-2">
                <span className="font-bold">0{i}</span>
                {route.name}
              </p>
              <span
                className={`${
                  pageName === route.name
                    ? "h-full bg-brand-light"
                    : "h-0 bg-brand-light/25"
                }
              absolute bottom-0 right-0 w-2 duration-500 ease-in-out group-hover:h-full`}
              />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
