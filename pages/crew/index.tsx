import React from "react";
import { LayoutSection } from "@/sections";
import { Tagline } from "@/components";

export default function Crew() {
  const pageName = "crew";
  return (
    <LayoutSection pageName={pageName}>
      <main>
        <Tagline id="02" title="Meet Your Crew" />
      </main>
    </LayoutSection>
  );
}
