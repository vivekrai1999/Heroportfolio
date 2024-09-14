import React from "react";
import styled from "styled-components";

const Heading = styled.h2`
  margin: 100px auto;
  font-size: 2.5rem;
  font-weight: 900;
  text-align: center;
  letter-spacing: 1px;
  color: #50c9c3;
`;

const StyledAboutSection = styled.section`
  margin-bottom: 200px;

  @media (max-width: 768px) {
    position: relative;
  }
`;

const AboutContainer = styled.div`
  position: absolute;
  left: 0px;
  width: 100%;
  min-height: 450px;
  background-image: linear-gradient(60deg, #96deda 0%, #50c9c3 100%);
  transform: skewY(-3deg);
  z-index: -1;
  pointer-events: none;

  @media (max-width: 768px) {
    width: unset;
    height: 90%;
    inset: 100px -16px 0px;
  }
`;

const AboutInfo = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 200px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 120px;
  }
`;

const ImageContainer = styled.div`
  margin-right: 10%;

  @media (max-width: 768px) {
    margin-right: 0px;
    margin-bottom: 30px;
  }
`;

const Image = styled.div`
  width: 230px;
  height: 230px;
  border-radius: 50%;
  border: 5px solid var(--color-grey-0);
  overflow: hidden;
  margin: 0px;
`;

const AboutInfoText = styled.p`
  color: var(--color-grey-0);
  font-size: 16px;
  line-height: 150%;
`;

function AboutSection() {
  return (
    <StyledAboutSection>
      <Heading>About me</Heading>
      <AboutContainer />
      <AboutInfo>
        <ImageContainer>
          <Image>
            <img src="https://avatars.githubusercontent.com/u/96563624?v=4" />
          </Image>
        </ImageContainer>
        <AboutInfoText>
          Hi, I'm Vivek Rai. Motivated computer science postgraduate with a solid academic background and a keen interest in software development and technology. Seeking opportunities to apply theoretical knowledge gained during studies to practical,
          real-world projects. Eager to collaborate with industry professionals, contribute to innovative solutions, and further develop skills in programming, problem-solving, and teamwork. Dedicated to staying updated with the latest technological
          advancements and leveraging them to deliver efficient and impactful software solutions.
        </AboutInfoText>
      </AboutInfo>
    </StyledAboutSection>
  );
}

export default AboutSection;
