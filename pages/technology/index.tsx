import React from "react";
import { LayoutSection } from "@/sections";
import { Tagline } from "@/components";

export default function Technology() {
  const pageName = "technology";
  return (
    <LayoutSection pageName={pageName}>
      <main>
        <Tagline id="03" title="Space Launch 101" />
      </main>
    </LayoutSection>
  );
}
