import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Industrial Construction | From the Ground Up",
  description: "A cinematic journey of building an industrial facility.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${playfair.variable} antialiased bg-noise`}
      >
        <SmoothScroll>{children}</SmoothScroll>
        <a
          href="https://buymeacoffee.com/sun_god_vicky"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#FFDD00] text-black px-4 py-2 rounded-full font-bold flex items-center gap-2 shadow-lg hover:scale-105 transition-transform"
        >
          ☕ Buy Me a Coffee
        </a>
      </body>
    </html>
  );
}
