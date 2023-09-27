import React, { memo } from "react";
import { Outfit } from "next/font/google";
import Link from "next/link";
import { BsPersonHeart as Person } from "react-icons/bs";
const outfit = Outfit({
  weight: "400",
  style: "normal",
  subsets: ["latin-ext", "latin"],
});
function Main() {
  return (
    <>
      <main
        className={`${outfit.className} flex flex-col items-center justify-center h-[80dvh] px-5`}
      >
        <h2 className="text-3xl text-center">
          I love to create beautiful and efficient websites
        </h2>
        <div className="flex justify-center items-center gap-3 my-5">
          <Link
            href="#about"
            className="bg-blue-500 hover:bg-blue-600 transition-colors delay-75 px-4 py-2 mx-3 rounded-sm text-white"
          >
            Discover
          </Link>
          <Link
            href="#contact"
            className="flex justify-center items-center gap-3 hover:text-pink-400 transition-colors delay-75"
          >
            Contact Me <Person />
          </Link>
        </div>
      </main>
    </>
  );
}

export default memo(Main);
