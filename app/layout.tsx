import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['100', '200','400','700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "joshmontech.com - Josh Montgomery's Portfolio Website",
  description: "Senior Front End Developer Josh Montgomery's portfolio website. Demonstrates 8 years of experience and technical knowledge in React, NextJS, Tailwind, TypeScript, JavaScript, CSS3, HTML5, and More.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${poppins.variable} text-white`}>{children}</body>
      <GoogleAnalytics gaId="G-59L5T8RB6F" />
    </html>
  );
}
