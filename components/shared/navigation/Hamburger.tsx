"use client";
import Logo from "@shared_ui/Logo";
import SocialIcons from "@shared_ui/Social-Icons";
import Link from "next/link";
import React, { memo, useEffect, useState } from "react";
import { Outfit } from "next/font/google";
import links from "@jsons/links.json";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
const outfit = Outfit({
  weight: "400",
  style: "normal",
  subsets: ["latin-ext", "latin"],
});

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
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
  const showMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <header
        id="hambar"
        className="sticky top-0 flex sm:hidden flex-row justify-between items-center px-5 py-3 z-50 transition-colors delay-duration-200 ease-in-out"
      >
        <Link href="/" className="flex justify-center items-center gap-4">
          <Logo />
          <h1 className={`${outfit.className} cursor-default`}>Kannu</h1>
        </Link>
        <div className="space-y-2 sm:hidden rotate-180" onClick={showMenu}>
          <span className="block w-5 h-0.5 bg-black dark:bg-white hamburger"></span>
          <span className="block w-8 h-0.5 bg-black dark:bg-white hamburger"></span>
        </div>
      </header>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={() => setIsOpen(false)}
      >
        <DrawerOverlay />
        <DrawerContent className="dark:bg-[#24262a]">
          <DrawerCloseButton />
          <DrawerHeader>Kannu Mandora</DrawerHeader>

          <DrawerBody>
            <ul className="list-none">
              {links.map(({ name, link }, index) => (
                <React.Fragment key={index}>
                  <li className="my-6" onClick={() => setIsOpen(!isOpen)}>
                    <Link
                      download={link === "/resume" ? true : false}
                      href={link === "/resume" ? "/Resume.pdf" : link}
                      className="active:text-teal-500"
                    >
                      {name.toUpperCase()}
                    </Link>
                  </li>
                  <hr />
                </React.Fragment>
              ))}
            </ul>
          </DrawerBody>

          <DrawerFooter>
            <SocialIcons />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default memo(Hamburger);
