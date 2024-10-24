import type { Metadata } from "next";
import {Inter} from 'next/font/google'
import "./globals.css";
import { cn } from "@/lib/utils";

const font = Inter({
  weight: ['200','400','600','800'], subsets: ['latin']
})


export const metadata: Metadata = {
  title: "CineTracker",
  description: "The movie and TV show tracker ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn('antialiased', font.className)}
      >
        {children}
      </body>
    </html>
  );
}
