import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Tourney } from "next/font/google";

const tourney = Tourney({
  variable: "--font-tourney",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={tourney.variable}>
      <Component {...pageProps} />
    </div>
  );
}
