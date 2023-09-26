import "./globals.css";
import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { PropsWithChildren } from "react";

const font = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kannu Mandora | Full Stack Developer",
  description:
    "Hi, it's me Kannu Mandora. I want to be a Full Stack Developer. I am currently focused on my skills in React, Node, and Express.",
  keywords: [
    "Kannu",
    "Kannu Mandora",
    "Mandora",
    "Web Developer",
    "Full Stack",
    "MERN Stack",
    "Stack",
    "Full Stack Developer",
    "Mandora Kannu",
    "tech blogger",
    "developer",
    "web development",
    "software engineering",
    "programming languages",
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
  twitter: {
    card: "summary_large_image",
    title: "Kannu Mandora | Full Stack Developer",
    description:
      "Hi, it's me Kannu Mandora. I want to be a Full Stack Developer. I am currently focused on my skills in React, Node, and Express. I am also learning about MySQL and MongoDB. I am also a computer student at the College of SETH G.L. BIHANI S.D. P.G. COLLEGE at Sriganganagar.",
    siteId: "@mandorakannu",
    creator: "@KannuMandora",
    creatorId: "1467726470533754880",
    images: ["https://mandorakannu.tech/images/main.webp"],
  },
  verification: {
    google: "_RMbn1Udckop0qHdoAu_PoiGFWqwB19CecNEqZfHxAE",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: ["mandorakannu@gmail.com"],
    },
  },
  icons: [
    {
      href: "/favicon.ico",
      rel: "icon",
      type: "image/x-icon",
      url: "/favicon.ico",
    },
  ],
};
export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <html lang="en">
        <body className={`${font.className} dark:bg-black text-white`}>
          {children}
          <Analytics />
        </body>
      </html>
    </>
  );
}
