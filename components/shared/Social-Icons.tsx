import Link from "next/link";
import React, { memo } from "react";
import { AiFillGithub as GitHub } from "react-icons/ai";
import { RiTwitterXLine as Twitter } from "react-icons/ri";

function SocialIcons() {
  return (
    <div className="flex flex-row justify-center items-center gap-3">
      <Link href="https://twitter.com/mandorakannu" target="_blank">
        <Twitter className="text-2xl" />
      </Link>
      <Link href="https://github.com/mandorakannu" target="_blank">
        <GitHub className="text-2xl" />
      </Link>
    </div>
  );
}

export default memo(SocialIcons);
