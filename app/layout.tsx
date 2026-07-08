import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lush Properties · Real Estate on the West Rand, Roodepoort",
  description:
    "Family homes, townhouses and sectional title units across Roodepoort and the West Rand. Personal, honest guidance from a local agent who knows every suburb.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${openSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
