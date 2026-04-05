import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AluGraph | Aluminum & Glass Solutions",
  description:
    "AluGraph - პრემიუმ ხარისხის ალუმინის და მინის კონსტრუქციები. ფასადის სისტემები, კარ-ფანჯრები, ვიტრაჟები. თქვენი სანდო პარტნიორი მშენებლობაში.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka" className={`${inter.variable}`}>
      <body className="antialiased bg-[#080c14] text-[#f8fafc] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
