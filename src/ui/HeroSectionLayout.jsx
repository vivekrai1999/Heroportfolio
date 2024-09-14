import React from "react";
import styled from "styled-components";
import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";

const StyledHeroLayout = styled.section`
  margin-bottom: 100px;
  margin-top: 125px;
`;

const HomeText = styled.div`
  font-family: "Montserrat", serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(-100px + 80vh);
`;

const Cta = styled.div`
  width: max-content;
`;

const Download = styled.a`
  display: block;
  margin: 30px 0px;
  background-image: linear-gradient(60deg, #96deda 0%, #50c9c3 100%);
  padding: 12px;
  font-size: 12px;
  cursor: pointer;
  height: auto;
  width: auto;
  border-radius: 5px;
  color: var(--color-grey-0);
`;

const Social = styled.div`
  color: #50c9c3;
  display: flex;
  justify-content: space-between;
  font-size: 24px;
`;

const Name = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  line-height: 140%;
  text-transform: uppercase;
`;

const SocialIcon = styled.a``;

function HeroSectionLayout() {
  return (
    <StyledHeroLayout>
      <HomeText>
        <p>Hello, I'm</p>
        <Name>Vivek Rai</Name>
        <p>Web & Android Developer</p>
        <Cta>
          <Download>Download Resume</Download>
          <Social>
            <SocialIcon href="#">
              <FaGithub />
            </SocialIcon>
            <SocialIcon href="#">
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon href="#">
              <FaWhatsapp />
            </SocialIcon>
          </Social>
        </Cta>
      </HomeText>
    </StyledHeroLayout>
  );
}

export default HeroSectionLayout;
