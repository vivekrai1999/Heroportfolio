import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import { IoIosSunny } from "react-icons/io";
import { FiMoon, FiSun } from "react-icons/fi";

const StyledNavBar = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadoow-lg);
  z-index: 1000;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavInner = styled.ul`
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  max-width: 35px;
`;

const MainNav = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
  font-size: 14px;
  color: #50c9c3;
`;

const MainNavElement = styled.li`
  text-align: center;
  display: flex;
  align-items: center;
  transition: color 0.5s;

  &:hover {
    color: var(--color-grey-900);
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  transition: all 0.5s;
`;

function NavBar() {
  const [isDark, setIsDark] = useState(false);

  const handleThemeToggle = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <StyledNavBar>
      <NavInner>
        <a href="">
          <Logo src={logo} />
        </a>
        <nav>
          <MainNav>
            <MainNavElement>
              <a href="#">Home</a>
            </MainNavElement>
            <MainNavElement>
              <a href="#">About Me</a>
            </MainNavElement>
            <MainNavElement>
              <a href="#">Skills</a>
            </MainNavElement>
            <MainNavElement>
              <a href="#">Projects</a>
            </MainNavElement>
            <MainNavElement>
              <IconContainer onClick={handleThemeToggle}>{isDark ? <FiMoon /> : <FiSun />}</IconContainer>
            </MainNavElement>
          </MainNav>
        </nav>
      </NavInner>
    </StyledNavBar>
  );
}

export default NavBar;
