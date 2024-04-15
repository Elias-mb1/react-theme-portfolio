import React from "react";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import Theme_Toggle from "./ThemeButton";

const Home = () => {
  return (
    <>
      <Theme_Toggle />
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export default Home;
