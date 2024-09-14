import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import logo from "../assets/images/footer-logo.png";

const StyledFooter = styled.footer`
  width: 100%;
  padding: 20px;
  background-image: linear-gradient(60deg, #96deda 0%, #50c9c3 100%);
`;

const FooterInner = styled.main`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const Link = styled.a`
  font-size: 12px;
  cursor: pointer;
`;

const ProfileLogo = styled.img`
  width: 100px;
  height: 100px;
  opacity: 0.7;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--color-grey-0);
`;

const FooterHeading = styled.h3`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: unset;
`;

const FooterEnd = styled.p`
  text-align: center;
  color: var(--color-grey-0);
  font-size: 12px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-top: 20px;
  font-size: 20px;
  gap: 20px;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

function FooterSection() {
  return (
    <StyledFooter>
      <FooterInner>
        {/* <ImageContainer>
          <ProfileLogo src={logo} />
        </ImageContainer> */}
        <FooterColumn>
          <FooterHeading>Quick Links</FooterHeading>
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Skills</Link>
          <Link>Projects</Link>
        </FooterColumn>
        <FooterColumn>
          <FooterHeading>Contact Info</FooterHeading>
          <Link>+91-7340553117</Link>
          <Link>vivek.rai.2807@gmail.com</Link>
          <Link>Kota, Rajasthan, India-324005</Link>
          <IconContainer>
            <IoMail />
            <FaGithub />
            <FaLinkedin />
            <FaWhatsapp />
          </IconContainer>
        </FooterColumn>
      </FooterInner>
      <FooterEnd>Created with ❤️ by Vivek Rai</FooterEnd>
    </StyledFooter>
  );
}

export default FooterSection;
