import React from "react";
import HeroSection from "../sections/HeroSection";
import InterestSection from "../sections/InterestSection";
import AboutSection from "../sections/AboutSection";
import SkillSection from "../sections/SkillSection";
import ProjectSection from "../sections/ProjectSection";
import FooterSection from "../sections/FooterSection";
import styled from "styled-components";
import NavBar from "../components/navbar/NavBar";

const SectionsContainer = styled.main`
  width: 80%;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 50px;
  min-height: calc(-125px + 100vh);
`;

function AppLayout() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <SectionsContainer>
        <HeroSection />
        <InterestSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
      </SectionsContainer>
      <FooterSection />
    </>
  );
}

export default AppLayout;
