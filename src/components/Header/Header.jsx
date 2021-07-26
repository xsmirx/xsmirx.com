import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  height: 55px;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  padding: 0 3%;
`;

const StyledLink = styled(Link)`
  color: black;
  &:hover {
    color: blue;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledLink to="#portfolio">Portfolio</StyledLink>
      <Link to="#aboutme">About Me</Link>
      <Link to="#contacts">Contacts</Link>
    </StyledHeader>
  );
};

export default Header;
