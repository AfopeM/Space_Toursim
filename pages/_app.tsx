import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Bellefair, Barlow_Condensed } from "next/font/google";

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-main",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sub",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={`${barlow.variable} ${bellefair.variable} bg-slate-800`}>
        <Head>
          <title>Space Tourism</title>
          <meta name="Space Tourism" content="Travel the galaxy Space X" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </div>
    </>
  );
}
