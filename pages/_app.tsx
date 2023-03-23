import "~/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import clsx from "clsx";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={clsx(poppins.variable, "font-sans")}>
      <Component {...pageProps} />
    </main>
  );
}
