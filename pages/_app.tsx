import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Bellefair, Barlow_Condensed } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

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
  const router = useRouter();
  return (
    <>
      <AnimatePresence>
        <motion.div
          key={router.route}
          initial={{
            // x: 20,
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          }}
          animate={{
            // x: 0,
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          }}
          exit={{
            // x: 20,
            // opacity: 0,
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          }}
          transition={{
            duration: 0.2,
            // damping: 350,
          }}
          className={`${barlow.variable} ${bellefair.variable} 
          bg-slate-800`}
        >
          <Head>
            <title>Space Tourism</title>
            <meta name="Space Tourism" content="Travel the galaxy Space X" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
