"use client";
import Logo from "@shared_ui/Logo";
import Link from "next/link";
import React, { memo, useEffect } from "react";

import { Outfit } from "next/font/google";
import SocialIcons from "@shared_ui/Social-Icons";
const outfit = Outfit({
  weight: "400",
  style: "normal",
  subsets: ["latin-ext", "latin"],
});

function Header(): JSX.Element {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const header = document.querySelector("header");
      if(window.scrollY === 0) header?.classList.remove("bg-blue-500", "text-white");
      else if (window.scrollY > 20) {
      header?.classList.add("bg-blue-500", "text-white");
      }
    });
  }, []);
  const scrollToTop = (): void => window.scrollTo(0, 0); // Scroll to top of Page

  return (
    <>
      <header className="hidden sm:block sticky top-0 z-50 px-5 py-2 transition-colors delay-75 ease-in-out">
        <nav className="flex flex-row justify-around">
          <div className="hidden sm:flex flex-row justify-center items-center gap-4">
            <Link href="/" scroll={true} onClick={scrollToTop}>
              <Logo />
            </Link>
            <h1 className={`${outfit.className} cursor-default`}>
              Kannu Mandora
            </h1>
          </div>
          <ul
            className={`${outfit.className} hidden sm:flex flex-row justify-center items-center gap-5`}
          >
            <li>
              <Link href="/" onClick={scrollToTop}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#About">About</Link>
            </li>
            <li>
              <Link href="#Services">Services</Link>
            </li>
            <li>
              <Link href="#Projects">Projects</Link>
            </li>
          </ul>
          <SocialIcons />
        </nav>
      </header>
    </>
  );
}

export default memo(Header);
