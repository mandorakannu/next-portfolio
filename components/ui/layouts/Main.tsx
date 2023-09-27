import React, { memo } from "react";
import Link from "next/link";
import { BsPersonHeart as Person } from "react-icons/bs";
import About from "./About";
function Main() {
  return (
    <>
      <main className="flex flex-col items-center justify-center h-screen px-5 pb-20">
        <h2 className="text-3xl text-center">
          I love to create beautiful and efficient websites
        </h2>
        <div className="flex justify-center items-center gap-3 my-5">
          <Link
            href="#about"
            className="bg-teal-500 hover:bg-teal-600 transition-colors delay-75 px-4 py-2 mx-3 rounded-sm text-white"
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
      <About />
    </>
  );
}

export default memo(Main);
