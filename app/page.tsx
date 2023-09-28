import { Navigation } from "@shared_ui/navigation/Navigation";
import ScrollToTop from "@ui/ScrollToTop";
import Contact from "@ui/layouts/Contact";
import Main from "@ui/layouts/Main";
import ProjectCard from "@ui/layouts/Projects";

export default function Home() {
  return (
    <>
      <Navigation /> {/* This is the navigation component */}
      <Main /> {/* This is the main component */}
      <ProjectCard /> {/* This is the project card component */}
      {/* This is the project card component */}
      <Contact /> {/* This is the contact component */}
      <ScrollToTop /> {/* This is the scroll to top component */}
    </>
  );
}
