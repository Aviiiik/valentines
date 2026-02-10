import type { Metadata } from "next";
import { Inter, Gloria_Hallelujah } from "next/font/google";
import "./globals.css";

// Clean body font
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// The "10 Things" handwritten font
const handwriting = Gloria_Hallelujah({
  weight: "400",
  variable: "--font-handwriting",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "10 Things I Hate About You...",
  description: "But mostly, I hate the way I don't hate you. Not even a little bit.",
  openGraph: {
    title: "A Message for mi amor",
    description: "Click to open your Valentine's note.",
    images: [{ url: '/images/bg1.jfif' }], // Shows the swing image when you text the link
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${handwriting.variable} antialiased bg-[#fdf6e3]`}
      >
        {children}
      </body>
    </html>
  );
}