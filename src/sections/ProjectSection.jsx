import React from "react";
import ProjectCardLayout from "../ui/ProjectCardLayout";
import { Projects } from "../data/Projects";
import styled from "styled-components";

const Heading = styled.h2`
  margin: 100px auto;
  font-size: 2.5rem;
  font-weight: 900;
  text-align: center;
  letter-spacing: 1px;
  color: #50c9c3;
`;

function ProjectSection() {
  return (
    <section>
      <Heading>Projects</Heading>
      {Projects.map((data) => {
        return <ProjectCardLayout key={data.id} data={data} />;
      })}
    </section>
  );
}

export default ProjectSection;
