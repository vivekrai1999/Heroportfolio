import React from "react";
import styled from "styled-components";
import { FaJs, FaAndroid, FaReact } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { DiJqueryLogo } from "react-icons/di";
import { Skill } from "../data/Skill";

const Heading = styled.h2`
  margin: 100px auto;
  font-size: 2.5rem;
  font-weight: 900;
  text-align: center;
  letter-spacing: 1px;
  color: #50c9c3;
`;

const SkillContainer = styled.div`
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

const IconWrapper = styled.div`
  font-size: 4em;
  color: #50c9c3;
`;

const StyledSkillSection = styled.section`
  position: relative;
  margin-bottom: 100px;
`;

function SkillSection() {
  return (
    <StyledSkillSection>
      <Heading>My Skillsets</Heading>
      <SkillContainer>
        {Skill.map((skill) => {
          const IconComponent = skill.icon;
          return (
            <IconWrapper key={skill.name}>
              <IconComponent />
            </IconWrapper>
          );
        })}
      </SkillContainer>
    </StyledSkillSection>
  );
}

export default SkillSection;
