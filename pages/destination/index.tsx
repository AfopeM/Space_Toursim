import React from "react";
import { LayoutSection, TabSection } from "@/sections";
import { Tagline } from "@/components";
import data from "@/public/data.json";

export default function Destination() {
  const pageName = "destination";
  return (
    <LayoutSection pageName={pageName}>
      <main className="flex flex-col items-center justify-around lg:px-32">
        <Tagline id="01" title="Pick your Destination" />
        <TabSection destinations={data.destinations} />
      </main>
    </LayoutSection>
  );
}
