import { useState } from "react";
import { LayoutSection, MainSection } from "@/sections";
import { Tagline, ButtonTabsImage, ButtonTabsContent } from "@/components";
import useSwr from "swr";
import type { IData } from "@/model/props";

export default function Technology() {
  const { data } = useSwr("technology", async () => {
    const res = await fetch("/data.json");
    const data: IData = await res.json();
    return data.technology;
  });
  const pageName = "technology";
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <LayoutSection pageName={pageName}>
      <MainSection>
        <Tagline id="03" title="Space Launch 101" />
        <section
          className="flex w-full flex-col items-center gap-8 md:h-[500px] 
          md:flex-row-reverse md:justify-evenly md:port:h-auto md:port:flex-col"
        >
          {/* BUTTON TAB IMAGE */}
          {data
            ? data.map((tech, i) => {
                if (i === currentTab)
                  return (
                    <ButtonTabsImage
                      key={tech.name}
                      portrait={tech.images.portrait}
                      landscape={tech.images.landscape}
                    />
                  );
              })
            : null}

          {/* BUTTON TAB CONTENT SECTION */}
          <section
            className="flex flex-col items-center gap-6 md:flex-row md:gap-12 
            md:port:flex-col md:port:gap-10"
          >
            {/* BUTTONS */}
            <div
              className="flex items-center gap-6 font-bellefair md:flex-col 
              md:port:flex-row"
            >
              {data
                ? data.map((tech, i) => {
                    return (
                      <button
                        key={tech.name}
                        onClick={() => setCurrentTab(i)}
                        className={`${
                          i === currentTab
                            ? "bg-brand-light text-brand-dark"
                            : "text-brand-light"
                        } h-10 w-10 rounded-full 
                        border-2 border-solid border-brand-light border-opacity-25 
                        text-center duration-500 ease-in-out hover:border-opacity-100 
                        md:h-14 md:w-14 md:text-2xl lg:h-20 lg:w-20`}
                      >
                        {i + 1}
                      </button>
                    );
                  })
                : null}
            </div>

            {/* BUTTON TAB CONTENT */}
            {data
              ? data.map((tech, i) => {
                  if (i === currentTab)
                    return (
                      <ButtonTabsContent
                        key={tech.name}
                        name={tech.name}
                        description={tech.description}
                      />
                    );
                })
              : null}
          </section>
        </section>
      </MainSection>
    </LayoutSection>
  );
}
