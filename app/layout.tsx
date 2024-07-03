import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const poppins = Poppins({
  weight: ['100', '200','400','700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "joshmontech.com - Josh Montgomery's Portfolio Website",
  description: "Senior Front End Developer Josh Montgomery's portfolio website. Demonstrates 8 years of experience and technical knowledge in React, NextJS, Tailwind, TypeScript, JavaScript, CSS3, HTML5, and More.",
  keywords: ['Josh Montgomery', 'joshmontech', 'jmontech', 'front end', 'front-end', 'frontend', 'engineer', 'developer', 'senior'],
  authors: [{ name: 'Josh Montgomery' }],
  creator: 'Josh Montgomery',
  publisher: 'Josh Montgomery',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'joshmontech.com - Josh Montgomery\'s Portfolio Website',
    description: 'Senior Front End Developer Josh Montgomery\'s portfolio website. Demonstrates 8 years of experience and technical knowledge in React, NextJS, Tailwind, TypeScript, JavaScript, CSS3, HTML5, and More.',
    url: 'https://www.joshmontech.com',
    siteName: 'joshmontech.com',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'joshmontech.com - Josh Montgomery\'s Portfolio Website',
    description: 'Senior Front End Developer Josh Montgomery\'s portfolio website. Demonstrates 8 years of experience and technical knowledge in React, NextJS, Tailwind, TypeScript, JavaScript, CSS3, HTML5, and More.',
    creator: '@jmontech',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${poppins.variable} text-white`}>{children}<SpeedInsights /></body>
      <GoogleAnalytics gaId="G-59L5T8RB6F" />
    </html>
  );
}
