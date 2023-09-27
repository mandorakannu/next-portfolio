"use client";
import Logo from "@shared_ui/Logo";
import SocialIcons from "@shared_ui/Social-Icons";
import Link from "next/link";
import React, { memo, useEffect } from "react";
import { Outfit } from "next/font/google";
const outfit = Outfit({
  weight: "400",
  style: "normal",
  subsets: ["latin-ext", "latin"],
});

function Hamburger() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const header = document.querySelector("#hambar");
      const hamburger = document.querySelectorAll(".hamburger");
      if (window.scrollY === 0) {
        header?.classList.remove("bg-gray-500", "text-white");
        hamburger?.forEach((h) => {
          h.classList.add("bg-black");
          h.classList.remove("bg-white");
        });
      } else if (window.scrollY > 20) {
        header?.classList.add("bg-gray-500", "text-white");
        hamburger?.forEach((h) => {
          h.classList.remove("bg-black"), h.classList.add("bg-white");
        });
      }
    });
  }, []);
  return (
    <>
      <header
        id="hambar"
        className="sticky top-0 flex sm:hidden flex-row justify-between items-center px-5 py-3 z-50 transition-colors delay-75 ease-in-out"
      >
        <Link href="/" className="flex justify-center items-center gap-4">
          <Logo />
          <h1 className={`${outfit.className} cursor-default`}>Kannu</h1>
        </Link>
        <div className="space-y-2 sm:hidden rotate-180">
          <span className="block w-5 h-0.5 bg-black dark:bg-white hamburger"></span>
          <span className="block w-8 h-0.5 bg-black dark:bg-white hamburger"></span>
        </div>
      </header>
      <div className="scale-up-ver-top hambar hidden fixed z-50 w-screen">
        <ul className="space-y-2 grid place-items-center bg-navy-700 font-firaCode py-10 gap-5">
          <li>
            <a href="#About" className="active:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#Services" className="active:text-gray-400">
              Services
            </a>
          </li>
          <li>
            <SocialIcons />
          </li>
        </ul>
      </div>
    </>
  );
}

export default memo(Hamburger);
