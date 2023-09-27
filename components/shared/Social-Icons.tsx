import Link from "next/link";
import React, { memo } from "react";
import { AiFillGithub as GitHub } from "react-icons/ai";
import { RiTwitterXLine as Twitter } from "react-icons/ri";
import { BsLinkedin as Linkedin } from "react-icons/bs";
import { BsInstagram as Instagram } from "react-icons/bs";

function SocialIcons() {
  return (
    <div className="flex flex-row justify-center items-center gap-3">
      <Link href="https://twitter.com/mandorakannu" target="_blank">
        <Twitter className="text-2xl hover:text-blue-500 active:text-blue-500 transition-colors ease-in-out delay-75" />
      </Link>
      <Link href="https://github.com/mandorakannu" target="_blank">
        <GitHub className="text-2xl hover:text-gray-500 active:text-gray-500 transition-colors ease-in-out delay-75" />
      </Link>
      <Link href="https://linkedin.com/in/mandorakannu" target="_blank">
        <Linkedin className="text-2xl hover:text-blue-500 active:text-blue-500 transition-colors ease-in-out delay-75" />
      </Link>
      <Link href="https://instagram.com/mandorakannu" target="_blank">
        <Instagram className="text-2xl hover:text-pink-500 active:text-pink-500 transition-colors ease-in-out delay-75" />
      </Link>
    </div>
  );
}

export default memo(SocialIcons);
