import type { Metadata } from "next";
import "./globals.css";
import { Cormorant_Garamond } from 'next/font/google';
import localFont from 'next/font/local';


const cormorant_Garamond = Cormorant_Garamond({ subsets: ["latin"], weight: "400", variable: '--font-garamond' });
const monosans = localFont({ src: "../public/fonts/Mona-Sans.ttf", variable: '--font-monosans' });

export const metadata: Metadata = {
  title: "Ignacio's 2024 Portfolio ",
  description: "Ignacio's 2024 Portfolio",
};


export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={`${cormorant_Garamond.variable} ${monosans.variable} scroll-smooth`} >
      <meta name='viewport' content='width=device-width,initial-scale=1'></meta>
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
        <body className="bg-background">{children}</body>
    </html>
  );
}
