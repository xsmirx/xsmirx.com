import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import StyledSection from "../../styles/StyledSection";
import StyledSectionTitle from "../../styles/StyledSectionTitle";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const StyledBlock = styled.div`
  display: grid;
  column-gap: 20px;
  grid-template-columns: 3fr 5fr;
  grid-template-rows: 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    row-gap: 2vh;
  }
`;

const StyledBlockForImage = styled.div`
  padding: 10px 0;
  text-align: center;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const StyledTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
  p {
    text-align: justify;
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const AboutMe = () => {
  const data = useStaticQuery(graphql`
    {
      mdx(frontmatter: { title: { eq: "About Me" } }) {
        body
      }
    }
  `);
  return (
    <StyledSection>
      <StyledSectionTitle>
        <h2 id={"about-me"}>About Me</h2>
      </StyledSectionTitle>

      <StyledBlock>
        <StyledBlockForImage>
          <StaticImage
            src="./../../images/photo.jpg"
            alt="my photo"
            placeholder="blurred"
            imgStyle={{ borderRadius: "4px" }}
            height={370}
          />
        </StyledBlockForImage>
        <StyledTextBlock>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </StyledTextBlock>
      </StyledBlock>
    </StyledSection>
  );
};

export default AboutMe;
