"use client";
import Logo from "@shared_ui/Logo";
import Link from "next/link";
import React, { memo, useCallback, useEffect, useRef } from "react";
import { Outfit } from "next/font/google";
import SocialIcons from "@shared_ui/Social-Icons";
import links from "@jsons/links.json";
const outfit = Outfit({
  weight: "400",
  style: "normal",
  subsets: ["latin-ext", "latin"],
});

function Header(): JSX.Element {
  const headerRef = useRef<HTMLHeadElement>(null);
  const handleScroll = useCallback(() => {
    if (headerRef.current) {
      if (window.scrollY > 0) {
        headerRef.current.classList.add("bg-gray-700", "text-white");
      } else {
        headerRef.current.classList.remove("bg-gray-700", "text-white");
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  const scrollToTop = (): void => window.scrollTo(0, 0); // Scroll to top of Page

  return (
    <>
      <header
        className="hidden sm:block sticky top-0 z-50 px-5 py-2 transition-colors delay-75 ease-in-out dark:bg-main dark:text-white"
        ref={headerRef}
      >
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
            {links.map(({ name, link }) => (
              <li key={name}>
                <Link
                  href={link}
                  className="cursor-pointer hover:text-primary-400 transition-colors delay-75 ease-in-out"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <SocialIcons />
        </nav>
      </header>
    </>
  );
}

export default memo(Header);
