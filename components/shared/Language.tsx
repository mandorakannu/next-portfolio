import React, { memo } from "react";
import skills from "@jsons/skills.json";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiGit,
  SiGithub,
  SiPhp,
  SiMysql,
  SiMongoose,
} from "react-icons/si";
function Language() {
  const skillsIcons = [
    <SiHtml5 key="html" className="text-6xl text-red-400 brightness-150" />,
    <SiCss3 key="css" className="text-6xl text-blue-400  brightness-150" />,
    <SiTailwindcss
      key="tailwind"
      className="text-6xl text-sky-500  brightness-150"
    />,
    <SiJavascript
      key="js"
      className="text-6xl text-yellow-300 brightness-150"
    />,
    <SiTypescript key="js" className="text-6xl text-sky-600 brightness-150" />,
    <SiReact key="react" className="text-6xl text-blue-500 brightness-150" />,
    <SiNextdotjs
      key="react"
      className="text-6xl text-white brightness-150"
    />,
    <SiNodedotjs
      key="node"
      className="text-6xl text-green-500 brightness-150"
    />,
    <SiExpress
      key="express"
      className="text-6xl text-yellow-400 brightness-150"
    />,
    <SiMongodb
      key="mongo"
      className="text-6xl text-green-400 brightness-150"
    />,
    <SiGit key="mongo" className="text-6xl text-red-400 brightness-150" />,
    <SiGithub
      key="mongo"
      className="text-6xl text-white brightness-150"
    />,
    <SiPhp key="mongo" className="text-6xl text-[#787cb5] brightness-150" />,
    <SiMysql key="mongo" className="text-6xl text-[#f29111] brightness-150" />,
    <SiReact
      key="reactnative"
      className="text-6xl text-blue-500 brightness-150"
    />,
    <SiMongoose
      key="mongo"
      className="text-6xl text-[#A58B6F] brightness-150"
    />,
  ];
  return (
    <section
      id="language"
      className="pointer-events-none select-none bg-primary-500 text-white py-32"
    >
      <h3 className="text-4xl text-center my-6">Languages and Frameworks</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-8 place-items-center gap-6 p-5">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-5 m-4 p-6 w-1/2"
          >
            {skillsIcons[index]}
            <span className="text-3xl">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default memo(Language);
