import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { MotionConfig } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });
const integrale = localFont({
  src: [
    {
      path: "./fonts/Integrale-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Integrale-boldoblique.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Integrale-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Integrale-mediumoblique.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Integrale-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Integrale-regularoblique.otf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-integrale",
});

export const metadata: Metadata = {
  title: "lukger.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} ${integrale.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
