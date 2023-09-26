import Logo from "@shared_ui/Logo";
import SocialIcons from "@shared_ui/Social-Icons";
import Link from "next/link";
import React, { memo } from "react";
import { Outfit } from "next/font/google";
const outfit = Outfit({
  weight: "400",
  style: "normal",
  subsets: ["latin-ext", "latin"],
});

function Hamburger() {
  return (
    <>
      <header className="sticky top-0 flex sm:hidden flex-row justify-between items-center px-5 py-3 z-50">
        <Link href="/" className="flex justify-center items-center gap-4">
          <Logo />
          <h1 className={`${outfit.className} cursor-default`}>
            Kannu
          </h1>
        </Link>
        <div className="space-y-2 sm:hidden rotate-180">
          <span className="block w-5 h-0.5 bg-black dark:bg-white"></span>
          <span className="block w-8 h-0.5 bg-black dark:bg-white"></span>
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
