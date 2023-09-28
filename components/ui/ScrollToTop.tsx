"use client";
import React, { memo, useEffect, useRef } from "react";
import { BsFillArrowUpCircleFill as Arrow } from "react-icons/bs";
function ScrollToTop() {
  const scrollBtnRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100
        ? scrollBtnRef.current?.classList.remove("hidden")
        : scrollBtnRef.current?.classList.add("hidden");
    });
  }, []);

  return (
    <div
      ref={scrollBtnRef}
      className="hidden fixed bottom-10 right-10 cursor-pointer transition-all duration-500 ease-in-out scroll-to-top"
    >
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <Arrow className="text-5xl text-pink-200" />
      </button>
    </div>
  );
}

export default memo(ScrollToTop);
