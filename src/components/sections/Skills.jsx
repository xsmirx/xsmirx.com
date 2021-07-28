import React from "react";
import styled from "styled-components";
import StyledSectionTitle from "../../styles/StyledSectionTitle";
import MyLinearProgress from "../eltments/MyLinearProgress";
import StyledSection from "../../styles/StyledSection";

const StyledBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 1vw;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-gap: 3vh;
  }
`;

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;
  h4 {
    margin: 0 0 1vh 0;
  }
  li {
    list-style: "- ";
    list-style-position: inside;
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Skills = () => {
  return (
    <StyledSection>
      <StyledSectionTitle>
        <h2 id="skills">Skills</h2>
      </StyledSectionTitle>
      <StyledBlock>
        <StyledList>
          <h4>Development stack:</h4>
          <ul>
            <li>HTML, CSS</li>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Redux</li>
          </ul>
        </StyledList>
        <StyledList>
          <h4>My soft skills:</h4>
          <MyLinearProgress skill="Proactivity" value={90} />
          <MyLinearProgress skill="Comunication" value={86} />
          <MyLinearProgress skill="Team Player" value={75} />
          <MyLinearProgress skill="Time Menegement" value={70} />
        </StyledList>
      </StyledBlock>
    </StyledSection>
  );
};

export default Skills;
