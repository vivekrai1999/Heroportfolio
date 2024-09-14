import React from "react";
import InterestCardLayout from "../ui/InterestCardLayout";
import styled from "styled-components";
import { Interest } from "../data/Interest";

const IntersetContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Heading = styled.h2`
  margin: 100px auto;
  font-size: 2.5rem;
  font-weight: 900;
  text-align: center;
  letter-spacing: 1px;
  color: #50c9c3;
`;

const StyledInterestSection = styled.section`
  margin-bottom: 100px;
`;

function InterestSection() {
  return (
    <StyledInterestSection>
      <Heading>Things I Love</Heading>
      <IntersetContainer>
        {Interest.map((interest) => (
          <InterestCardLayout key={interest.name} data={interest} />
        ))}
      </IntersetContainer>
    </StyledInterestSection>
  );
}

export default InterestSection;
