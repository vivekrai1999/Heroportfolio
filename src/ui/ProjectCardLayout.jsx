import React, { useRef, useState } from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";

const StyledProjectCardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 170px 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  margin-bottom: 80px;
`;

const ProjectDetail = styled.div`
  position: relative;
  min-height: 400px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  grid-area: 1 / 1 / auto / 3;
  padding: 50px;

  @media (max-width: 1000px) {
    min-height: unset;
    grid-column: 1 / 4;
    grid-row: unset;
    padding: 30px;
  }

  &::before {
    content: "";
    position: absolute;
    top: var(--y-coordinate);
    left: var(--x-coordinate);
    transform: translate(-50%, -50%);
    background: radial-gradient(#04d9ff, transparent, transparent);
    width: 700px;
    height: 700px;
    opacity: 0;
    transition: 0.5s, top 0s, left 0s;
  }

  &:hover:before {
    opacity: 1;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 1.5px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.9);
  }

  * {
    position: relative;
    z-index: 1;
    cursor: default;
  }
`;

const ProjectPreview = styled.div`
  background-color: var(--color-grey-50);
  position: relative;
  right: -20px;
  border-radius: 10px;
  grid-area: 1 / 2 / auto / 4;
  overflow: hidden;
  display: flex;
  align-items: center;
  box-shadow: var(--shadow-md);
  padding: 20px;

  @media (max-width: 1000px) {
    right: 0px;
    grid-column: 1 / 4;
    margin-bottom: 20px;
  }
`;

const ProjectDetailContainer = styled.div`
  width: 75%;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const Heading = styled.h2`
  margin-bottom: 25px;
  color: var(--color-grey-700);
`;

const Paragraph = styled.p`
  min-height: 80px;
  line-height: 170%;
  font-size: 16px;
  color: var(--color-grey-700);

  @media (max-width: 1000px) {
    min-height: unset;
  }
`;

const Links = styled.div`
  margin: 60px 0 0;
  display: flex;
  align-items: center;

  @media (max-width: 1000px) {
    margin: 40px 0 0;
  }
`;

const Button = styled.a`
  margin-right: 10px;
  border-radius: 50px;
  padding: 12px 18px;
  height: auto;
  width: auto;
  font-size: 12px;
  cursor: pointer;
  background-image: linear-gradient(60deg, #96deda 0%, #50c9c3 100%);
  color: var(--color-grey-0);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  transition: all ease-in 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ArrowIcon = styled(MdArrowOutward)`
  font-size: 15px;
  cursor: pointer;
`;

const GithubIcon = styled.a`
  background-image: linear-gradient(60deg, #96deda 0%, #50c9c3 100%);
  color: var(--color-grey-0);
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 100%;
  cursor: pointer;
  transition: all ease-in 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const StyledGithub = styled(FaGithub)`
  font-size: 18px;
  cursor: pointer;
`;

const TechnologyDetails = styled.div`
  display: flex;
  margin: 20px 0 0;
  flex-wrap: wrap;
  gap: 10px;
`;

const Technology = styled.a`
  border-radius: 50px;
  padding: 6px 14px;
  font-size: 12px;
  cursor: pointer;
  background-image: linear-gradient(60deg, #96deda 0%, #50c9c3 100%);
  color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SwiperImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

function ProjectCardLayout({ data }) {
  const cardRef = useRef();
  const { name, description, liveLink, githubLink, techStack, projectImages } = data;

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    let x = e.pageX - e.target.offsetLeft;
    let y = e.pageY - e.target.offsetTop;
    card.style.setProperty("--x-coordinate", `${x}px`);
    card.style.setProperty("--y-coordinate", `${y}px`);
  };

  return (
    <StyledProjectCardLayout>
      <ProjectDetail ref={cardRef} onMouseMove={handleMouseMove}>
        <ProjectDetailContainer>
          <Heading>{name}</Heading>
          <Paragraph>{description}</Paragraph>
          <TechnologyDetails>
            {techStack.map((tech) => (
              <Technology key={tech}>{tech}</Technology>
            ))}
          </TechnologyDetails>
          <Links>
            <Button href={liveLink}>
              Live
              <ArrowIcon />
            </Button>
            <GithubIcon href={githubLink}>
              <StyledGithub />
            </GithubIcon>
          </Links>
        </ProjectDetailContainer>
      </ProjectDetail>
      <ProjectPreview>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {projectImages.map((image, index) => (
            <StyledSwiperSlide key={index}>
              <SwiperImage src={image} />
            </StyledSwiperSlide>
          ))}
        </Swiper>
      </ProjectPreview>
    </StyledProjectCardLayout>
  );
}

export default ProjectCardLayout;
