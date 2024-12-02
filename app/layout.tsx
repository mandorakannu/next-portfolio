import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { PropsWithChildren } from "react";
import { Providers } from "@ui/providers/ChakraUIProvider";

const font = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kannu Mandora | Full Stack Developer",
  description:
    "Discover Mandorakannu's portfolio showcasing expertise in web development, innovative projects, and creative solutions. Explore achievements and skills.",
  keywords: [
    "journal",
    "blog",
    "technology",
    "lifestyle",
    "personal growth",
    "Kannu Mandora",
    "content",
    "articles",
    "news",
    "web dev",
    "MERN stack",
    "React",
    "Node.js",
    "frontend",
    "backend",
    "full-stack",
    "coding",
    "JavaScript",
    "MongoDB",
    "Express",
    "tutorials",
    "projects",
    "developer",
    "upskilling",
    "tech",
    "programming",
    "career tips",
    "blogging",
  ],
  authors: [{ name: "Kannu Mandora" }],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https:/mandorakannu.xyz",
    title: "Kannu Mandora | Full Stack Developer",
    description:
      "Discover Mandorakannu's portfolio showcasing expertise in web development, innovative projects, and creative solutions. Explore achievements and skills.",
    images: [
      {
        url: "https:/mandorakannu.xyz/images/author.jpg",
        width: 800,
        height: 600,
        alt: "Kannu Mandora | Full Stack Developer",
      },
    ],
    siteName: "Kannu Mandora | Full Stack Developer",
    countryName: "India",
    locale: "en_IN",
  },
  twitter: {
    creatorId: "@mandorakannu",
    card: "summary_large_image",
    title: "Kannu Mandora | Full Stack Developer",
    creator: "Kannu Mandora",
    description:
      "Discover Mandorakannu's portfolio showcasing expertise in web development, innovative projects, and creative solutions. Explore achievements and skills.",
    images: {
      url: "https:/mandorakannu.xyz/images/author.jpg",
      alt: "Kannu Mandora | Full Stack Developer",
    },
  },
  verification: {
    google: "RMbn1Udckop0qHdoAu_PoiGFWqwB19CecNEqZfHxAE",
    yahoo: "74bbe6e379214911a1f7682e4d6e244e",
  },
  icons: [
    {
      href: "/favicon.ico",
      rel: "icon",
      type: "image/x-icon",
      url: "/favicon.ico",
    },
  ],
  metadataBase: new URL(`https:/mandorakannu.xyz`),
  alternates: {
    canonical: "./",
  },
};


export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <html lang="en">
        <body className={font.className}>
          <Providers>{children}</Providers>
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </>
  );
}
