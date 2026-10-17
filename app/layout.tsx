import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const interFont = Inter({
  variable: "--font-family",
  subsets: ["latin"],
  fallback: ["sans-serif"],
});

const manropeFont = Manrope({
  variable: "--second-family",
  subsets: ["latin"],
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: "TravelTrucks",
  description: "Campers of your dreams",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${interFont.variable} ${manropeFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
