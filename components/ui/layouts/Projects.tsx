import React from "react";
import projects from "@jsons/projects.json";
import Link from "next/link";

const ProjectCard = () => {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center py-20 dark:bg-main dark:text-white"
        id="projects"
      >
        <h2 className="text-5xl">Projects</h2>
        <hr className="h-1.5 w-8 bg-primary-400 rounded my-8" />
        <p className="text-center text-xl leading-7 w-full text-gray-600 dark:text-primary-300 px-4">
          Here you will find some of the personal and clients projects that I
          created with each project <br /> containing its own case study
        </p>
      </div>

      <section className="flex flex-row flex-wrap justify-around items-center gap-10 px-20 pt-10 pb-20 dark:bg-main">
        {projects.map(({ title, description, link, github }) => (
          <div
            key={title}
            className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
          >
            <div className="px-6 py-4">
              <h2 className="text-xl font-bold text-gray-800">{title}</h2>
              <p className="mt-2 text-gray-600">{description}</p>
            </div>
            <div className="px-6 py-4 flex items-center justify-between">
              {link && (
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 font-semibold"
                >
                  Live Demo
                </Link>
              )}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 font-semibold"
                >
                  GitHub Repo
                </a>
              )}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ProjectCard;
