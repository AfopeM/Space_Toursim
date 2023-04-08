/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bellefair: ["var(--font-main)"],
        barlow: ["var(--font-sub)"],
      },
      screens: {
        md: "768px",
        lg: "1440px",
        port: {
          raw: "(orientation:portrait)",
        },
      },
      colors: {
        brand: "#D0D6F9",
        "brand-light": "#FFFFFF",
        "brand-dark": "#0B0D17",
        "brand-border": "#383B4B",
      },
      gridTemplateRows: {
        main: "96px 1fr",
      },
      backgroundImage: {
        homeM: "url('/./home/background-home-mobile.jpg')",
        homeT: "url('/./home/background-home-tablet.jpg')",
        homeD: "url('/./home/background-home-desktop.jpg')",
        destinationM: "url('/./destination/background-destination-mobile.jpg')",
        destinationT: "url('/./destination/background-destination-tablet.jpg')",
        destinationD:
          "url('/./destination/background-destination-desktop.jpg')",
        crewM: "url('/./crew/background-crew-mobile.jpg')",
        crewT: "url('/./crew/background-crew-tablet.jpg')",
        crewD: "url('/./crew/background-crew-desktop.jpg')",
        technologyM: "url('/./technology/background-technology-mobile.jpg')",
        technologyT: "url('/./technology/background-technology-tablet.jpg')",
        technologyD: "url('/./technology/background-technology-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
