import React, { useRef } from "react";
import styled from "styled-components";
import { FaCode, FaJs, FaAndroid, FaReact } from "react-icons/fa";

const StyledInterestCardLayout = styled.div`
  flex: 1 1 200px;
  margin: 10px;
  max-width: 300px;
  height: 300px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  text-align: center;
  box-shadow: var(--shadow-md);
  background-color: var(--color-grey-0);
  border-radius: 10px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    flex: 1 1 100%;
    margin: 20px auto;
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
    z-index: 99;
  }
`;

const CardIcon = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-image: linear-gradient(60deg, #96deda 0%, #50c9c3 100%);
  color: var(--color-grey-0);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
`;

const CardTitle = styled.h3`
  font-weight: normal;
  color: #50c9c3;
`;

const CardDescription = styled.p`
  font-size: 14px;
`;

function InterestCardLayout({ data }) {
  const { name, icon, description } = data;
  const cardRef = useRef();

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    let x = e.pageX - e.target.offsetLeft;
    let y = e.pageY - e.target.offsetTop;
    card.style.setProperty("--x-coordinate", `${x}px`);
    card.style.setProperty("--y-coordinate", `${y}px`);
  };

  const IconContainer = icon;
  return (
    <StyledInterestCardLayout ref={cardRef} onMouseMove={handleMouseMove}>
      <CardIcon>
        <IconContainer />
      </CardIcon>
      <CardTitle>{name}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </StyledInterestCardLayout>
  );
}

export default InterestCardLayout;
