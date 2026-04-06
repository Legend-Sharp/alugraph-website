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
  openGraph: {
    title: "AluGraph | Aluminum & Glass Solutions",
    description: "პრემიუმ ხარისხის ალუმინის და მინის კონსტრუქციები. ფასადის სისტემები, კარ-ფანჯრები, ვიტრაჟები.",
    images: [{ url: "/images/logo.png", width: 1200, height: 630, alt: "AluGraph" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AluGraph | Aluminum & Glass Solutions",
    images: ["/images/logo.png"],
  },
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
