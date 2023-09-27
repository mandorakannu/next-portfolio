import { memo } from "react";
import { IoDiamondOutline as Diamond } from "react-icons/io5";
import { BiCodeAlt as Code, BiLaptop as Laptop } from "react-icons/bi";
import Language from "@shared_ui/Language";

function About() {
  return (
    <>
      <section
        className="bg-teal-500 text-white px-5 py-20"
        id="about"
        aria-label="About me section"
        role="region"
      >
        <div className="flex flex-col justify-center items-center h-screen gap-10">
          <h3 className="text-4xl text-center">Hi! I&apos;m Kannu Mandora</h3>
          <p className="w-4/5 mx-auto text-lg">
            I&apos;m a Full Stack [MERN STACK] Web Developer building the
            Front-end of Websites and Web Applications that leads to the success
            of the overall product. Check out some of my work in the Projects
            section.
          </p>
          <p className="w-4/5 mx-auto text-lg">
            I also like sharing content related to the stuff that I have learned
            over the years in Web Development so it can help other people of the
            Dev Community. Feel free to Connect or Follow me on my Linkedin
            where I post useful content related to Web Development and
            Programming
          </p>
          <p className="w-4/5 mx-auto text-lg">
            I&apos;m open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don&apos;t hesitate to contact me.
          </p>
        </div>
      </section>
      <section id="skills" className="py-40">
        <h3 className="text-4xl text-center mb-20">Skills Section</h3>
        <div className="flex flex-col md:flex-row justify-evenly items-center gap-6 px-5">
          <div className="flex flex-col justify-center items-center gap-5 border-2 border-gray-300 m-4 p-6">
            <Diamond className="text-5xl text-teal-400" />
            <span className="text-3xl">Design</span>
            <p>
              Successful online projects start with good design. It establishes
              a solid foundation for future development and allows for long term
              growth.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 border-2 border-gray-300 m-4 p-6">
            <Code className="text-5xl text-teal-500" />
            <span className="text-3xl">Development</span>
            <p>
              I can code my own designs or even use the customer&apos;s design
              as base. My focus is to generate clean code that&apos;s well
              structured for reliability.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 border-2 border-gray-300 m-4 p-6">
            <Laptop className="text-5xl text-teal-400" />
            <span className="text-3xl">SEO</span>
            <p>
              I can setup your project to use SEO principles which will push
              your project to the first page on search engines and save you ads
              money.
            </p>
          </div>
        </div>
      </section>
      <Language />
    </>
  );
}

export default memo(About);
