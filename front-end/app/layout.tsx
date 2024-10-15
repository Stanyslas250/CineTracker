import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CineTraker",
  description: "Yor movies and series trackers. Let's enjoy CINEMA!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
