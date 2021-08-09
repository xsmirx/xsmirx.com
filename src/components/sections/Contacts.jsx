import React from "react";
import StyledSectionTitle from "../../styles/StyledSectionTitle";
import StyledSection from "../../styles/StyledSection";
import styled from "styled-components";
import ContactButtons from "../Contacts/ContactButtons";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql, useStaticQuery } from "gatsby";

const StyledBlock = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Contacts = () => {
  const { mdx } = useStaticQuery(graphql`
    {
      mdx(slug: { eq: "Contacts" }) {
        body
      }
    }
  `);
  return (
    <StyledSection>
      <StyledSectionTitle id={"contacts"}>
        <h2>Contacts</h2>
      </StyledSectionTitle>
      <StyledBlock>
        <MDXRenderer>{mdx.body}</MDXRenderer>
        <ContactButtons />
      </StyledBlock>
    </StyledSection>
  );
};

export default Contacts;
