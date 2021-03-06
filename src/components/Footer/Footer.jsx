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

const Footer = ({ autor }) => {
  const currenFullYeaer = new Date().getFullYear();
  return (
    <StyledFooter>
      <h6>© 2020 - {currenFullYeaer}</h6>
      <h6>
        {`Built by ${autor} with `}
        <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">
          Gatsby
        </a>
      </h6>
    </StyledFooter>
  );
};

export default Footer;
