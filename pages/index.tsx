import { LayoutSection } from "@/sections";

export default function Home() {
  const pageName = "home";

  return (
    <LayoutSection pageName={pageName}>
      <main>Home Page</main>
    </LayoutSection>
  );
}
