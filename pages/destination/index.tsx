import { useState } from "react";
import { LayoutSection, MainSection } from "@/sections";
import { Tagline, TabImage, TabContent } from "@/components";
import data from "@/public/data.json";

export default function Destination() {
  const { destinations } = data;
  const pageName = "destination";
  const [location, setLocation] = useState("Moon");

  return (
    <LayoutSection pageName={pageName}>
      <MainSection>
        <Tagline id="01" title="Pick your Destination" />
        <section
          className="flex flex-col items-center justify-center gap-8 md:w-full 
          md:flex-row md:justify-evenly md:port:w-[34rem] md:port:flex-col 
          md:port:justify-between"
        >
          {/* TAB IMAGE */}
          {destinations.map((destination) => {
            if (destination.name === location) {
              return (
                <TabImage
                  key={destination.name}
                  name={destination.name}
                  imgUrl={destination.image}
                />
              );
            }
          })}

          {/* TAB CONTENT SECTION */}
          <section
            className="flex flex-col items-center gap-6 md:w-96 md:items-start 
            md:port:items-center"
          >
            {/* TABS*/}
            <div className="flex h-8 items-center gap-6">
              {destinations.map((destination) => {
                return (
                  <div
                    key={destination.name}
                    className="group relative h-full text-brand-light"
                  >
                    <button
                      className="font-barlow text-sm uppercase tracking-[2.36px]"
                      onClick={() => setLocation(destination.name)}
                    >
                      {destination.name}
                    </button>
                    <span
                      className={`${
                        location === destination.name
                          ? "w-full bg-brand-light"
                          : "w-0 bg-brand-light/25"
                      } absolute bottom-0 left-0 h-1 duration-500 ease-in-out group-hover:w-full`}
                    />
                  </div>
                );
              })}
            </div>

            {/* TAB CONTENT */}
            {destinations.map((destination) => {
              if (destination.name === location) {
                return (
                  <TabContent
                    key={destination.name}
                    name={destination.name}
                    description={destination.description}
                    distance={destination.distance}
                    travel={destination.travel}
                  />
                );
              }
            })}
          </section>
        </section>
      </MainSection>
    </LayoutSection>
  );
}
