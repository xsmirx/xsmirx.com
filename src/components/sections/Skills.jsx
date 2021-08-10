import React from "react";
import styled from "styled-components";
import StyledSectionTitle from "../../styles/StyledSectionTitle";
import MyLinearProgress from "../eltments/MyLinearProgress";
import StyledSection from "../../styles/StyledSection";
import { graphql, useStaticQuery } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

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
  const data = useStaticQuery(graphql`
    {
      mdx(frontmatter: { title: { eq: "Skills" } }) {
        body
        frontmatter {
          Communication
          Proactivity
          Team_Player
          Time_Manegement
        }
      }
    }
  `);
  const softSkills = Object.keys(data.mdx.frontmatter)
    .sort((a, b) => data.mdx.frontmatter[b] - data.mdx.frontmatter[a])
    .map((skill) => {
      let correctSkill = skill;
      if (skill.includes("_")) {
        correctSkill = skill.split("_").join(" ");
      }
      return (
        <MyLinearProgress
          key={skill}
          skill={correctSkill}
          value={data.mdx.frontmatter[skill]}
        />
      );
    });
  return (
    <StyledSection>
      <StyledSectionTitle id="skills">
        <h2>Skills</h2>
      </StyledSectionTitle>
      <StyledBlock>
        <StyledList>
          <h4>Development stack:</h4>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </StyledList>
        <StyledList>
          <h4>My soft skills:</h4>
          {softSkills}
        </StyledList>
      </StyledBlock>
    </StyledSection>
  );
};

export default Skills;
