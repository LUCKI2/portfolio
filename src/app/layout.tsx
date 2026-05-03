import type { Metadata } from "next";
import { Cinzel, Inter, Noto_Serif } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Christipher Trufant | Software Engineer",
  description:
    "Full-stack developer, AI engineer, and autonomous agent architect. Building production-grade applications with Next.js, TypeScript, and AI.",
  keywords:
    "Software Engineer, Full-Stack Developer, AI Engineer, Next.js, TypeScript, React, CareerCraft, RYUK",
  authors: [{ name: "Christipher Trufant" }],
  openGraph: {
    title: "Christipher Trufant | Software Engineer",
    description:
      "Portfolio of Christipher Trufant — Full-stack developer and AI agent architect, inspired by Death Note's Shinigami realm.",
    url: "https://portfolio-axp9se9ot-chrisoutthepaint34-2267s-projects.vercel.app",
    siteName: "Christipher Trufant Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Christipher Trufant — Ryuk",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christipher Trufant | Software Engineer",
    description: "Full-stack developer and AI agent architect.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${inter.variable} ${notoSerif.variable} h-full`}
    >
      <body className="min-h-full antialiased selection:bg-red-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
