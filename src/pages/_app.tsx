import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Tourney, Courier_Prime, Space_Mono } from "next/font/google";
import Menu from "@/components/menu";

const tourney = Tourney({
  variable: "--font-tourney",
  subsets: ["latin"],
});

const courierPrime = Courier_Prime({
  variable: "--font-courier-prime",
  subsets: ["latin"],
  weight: "400",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${tourney.variable} ${courierPrime.variable} ${spaceMono.variable}`}
    >
      <Menu />
      <Component {...pageProps} />
    </div>
  );
}
