"use client";
import Logo from "@shared_ui/Logo";
import Link from "next/link";
import { Outfit } from "next/font/google";
import SocialIcons from "@shared_ui/Social-Icons";
import links from "@jsons/links.json";
const outfit = Outfit({
  weight: "400",
  style: "normal",
  subsets: ["latin-ext", "latin"],
});

function Header(): JSX.Element {
  const scrollToTop = (): void => window.scrollTo(0, 0); // Scroll to top of Page

  return (
    <>
      <header className="hidden sm:block sticky bg-primary-800 text-white top-0 z-50 px-5 py-2 transition-colors delay-75 ease-in-out dark:bg-main dark:text-white">
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

export default Header;
