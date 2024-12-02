"use client";
import Logo from "@shared_ui/Logo";
import SocialIcons from "@shared_ui/Social-Icons";
import Link from "next/link";
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
import { Fragment, useState } from "react";
const outfit = Outfit({
  weight: "400",
  style: "normal",
  subsets: ["latin-ext", "latin"],
});

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const showMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <header
        id="hambar"
        className="sticky top-0 flex sm:hidden flex-row bg-primary-800 text-white justify-between items-center px-5 py-3 z-50 transition-colors delay-duration-200 ease-in-out dark:bg-[#24262a] dark:text-white"
      >
        <Link href="/" className="flex justify-center items-center gap-4">
          <Logo />
          <h1 className="cursor-default">Kannu Mandora</h1>
        </Link>
        <div className="space-y-2 sm:hidden rotate-180" onClick={showMenu}>
          <span className="block w-5 h-0.5 bg-white dark:bg-white hamburger"></span>
          <span className="block w-8 h-0.5 bg-white dark:bg-white hamburger"></span>
        </div>
      </header>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={() => setIsOpen(false)}
      >
        <DrawerOverlay />
        <DrawerContent className="dark:bg-[#24262a] dark:text-white">
          <DrawerCloseButton />
          <DrawerHeader>Kannu Mandora</DrawerHeader>

          <DrawerBody>
            <ul className="list-none">
              {links.map(({ name, link }, index) => (
                <Fragment key={index}>
                  <li className="my-6" onClick={() => setIsOpen(!isOpen)}>
                    <Link href={link} className="active:text-primary-500">
                      {name.toUpperCase()}
                    </Link>
                  </li>
                  <hr />
                </Fragment>
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

export default Hamburger;
