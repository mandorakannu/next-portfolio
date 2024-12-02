import Image from "next/image";
export default function Logo() {
  return (
      <Image
        src="/images/author.jpg"
        alt="logo"
        width={60}
        height={40}
        className="w-10 rounded-lg border-2 p-0.5 transition-colors duration-500 ease-in-out z-50"
      />
  );
}
