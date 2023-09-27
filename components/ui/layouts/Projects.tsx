import React from "react";
import Image from "next/image";
import laptop from "@images/laptop.png";
import api from "@images/api.png";
import blogs from "@images/blogs.png";
import college from "@images/college.png";
import covid from "@images/covid.png";
import store from "@images/mk_store.png";
import projects from "@jsons/projects.json";
import Link from "next/link";

const ProjectCard = () => {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center py-20"
        id="projects"
      >
        <h2 className="text-5xl">Projects</h2>
        <hr className="h-1.5 w-8 bg-primary-400 rounded my-8" />
        <p className="text-center text-xl leading-7 w-full text-gray-600 dark:text-primary-300 px-4">
          Here you will find some of the personal and clients projects that I
          created with each project <br /> containing its own case study
        </p>
      </div>
      {projects.map(({ title, description, link }) => (
        <div
          key={title}
          className="flex max-sm:flex-col max-sm:text-center justify-between items-center gap-10 px-20 py-10"
        >
          <div className="flex flex-col gap-3">
            <h4 className="text-bold text-xl">{title}</h4>
            <h5 className="text-lg font-normal text-primary-600 dark:text-primary-300">{description}</h5>
          </div>
          <Link
            href={link}
            className="bg-primary-400 px-10 py-3 uppercase border text-white tracking-widest hover:shadow-2xl transition-all delay-100 hover:border-primary-400"
            target="_blank"
          >
            View Project
          </Link>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
