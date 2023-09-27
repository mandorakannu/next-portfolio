import { Navigation } from "@shared_ui/navigation/Navigation";
import Contact from "@ui/layouts/Contact";
import Main from "@ui/layouts/Main";
import ProjectCard from "@ui/layouts/Projects";


export default function Home() {
  const project = {
    title: "My Awesome Project",
    description: "This is a description of my awesome project.",
  };
  return (
    <>
      <Navigation /> {/* This is the navigation component */}
      <Main /> {/* This is the main component */}
      <ProjectCard
        title={project.title}
        description={project.description}
      />{" "}
      {/* This is the project card component */}
      <Contact /> {/* This is the contact component */}
    </>
  );
}
