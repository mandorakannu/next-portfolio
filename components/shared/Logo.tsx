import Image from "next/image";
import logo from "@images/logo.png";
export default function Logo() {
  return (
    <div className="relative">
      <Image
        src={logo}
        alt="logo"
        className="w-16 bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500  absolute rounded-full border-2 p-0.5 transition-colors duration-500 ease-in-out animate-spin -z-20"
      />
      <Image
        src={logo}
        alt="logo"
        className="w-10 rounded-full border-2 p-0.5 transition-colors duration-500 ease-in-out z-50"
      />
    </div>
  );
}
