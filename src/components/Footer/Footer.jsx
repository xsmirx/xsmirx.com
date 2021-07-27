import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  margin: 0 auto;
  padding: 0 3%;
  max-width: 80%;
  height: 55px;
  /* border-top: 2px solid ${(props) => props.theme.linkColor}; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 0.8rem;
  }
`;

const Footer = (props) => {
  const currenFullYeaer = new Date().getFullYear();
  return (
    <StyledFooter>
      <h6>© 2020 - {currenFullYeaer}</h6>
      <h6>
        Built by Ivan Smirnov with{" "}
        <Link
          to="https://www.gatsbyjs.com/"
          target="_blank"
          rel="nofollow noopener"
        >
          Gatsby
        </Link>
      </h6>
    </StyledFooter>
  );
};

export default Footer;
