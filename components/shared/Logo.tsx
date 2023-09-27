"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import logo from "@images/logo.png";
import { useColors } from "@hooks/useColors";
export default function Logo() {
  const getColor = useColors();
  const [color] = useState<string>(getColor || "bg-gradient-to-r from-primary-500 via-green-500 to-blue-500");
  return (
    <Image
      src={logo}
      alt="logo"
      className={`w-10 rounded-full border-2 p-0.5 ${color} transition-colors duration-500 ease-in-out`}
    />
  );
}
