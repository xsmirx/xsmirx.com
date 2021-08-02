import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import { SocialIcon } from "react-social-icons";

const StyledSocialLinks = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  gap: 2vw;
  margin: 5vh 0 0 0;
  a {
    &::after,
    ::before {
      content: none;
    }
  }
`;

const ContactButtons = ({ justifyContent }) => {
  const { mdx } = useStaticQuery(graphql`
    {
      mdx(slug: { eq: "Contacts" }) {
        frontmatter {
          github
          twitter
          linkedin
          telegram
          email
        }
      }
    }
  `);

  const SocialLinks = Object.keys(mdx.frontmatter).map((linkName) => {
    return <SocialIcon url={mdx.frontmatter[linkName]} />;
  });
  return (
    <StyledSocialLinks justifyContent={justifyContent || "center"}>
      {SocialLinks}
    </StyledSocialLinks>
  );
};

export default ContactButtons;
