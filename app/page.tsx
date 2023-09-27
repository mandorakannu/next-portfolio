import { Navigation } from "@shared_ui/navigation/Navigation";
import Contact from "@ui/layouts/Contact";
import Main from "@ui/layouts/Main";

export default function Home() {
  return (
    <>
      <Navigation /> {/* This is the navigation component */}
      <Main /> {/* This is the main component */}
      <Contact /> {/* This is the contact component */}
    </>
  );
}
