import React from "react";
import styled from "styled-components";
import HeaderLink from "../../../styles/HeaderLink";

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.background};
  position: fixed;
  width: 100%;
  height: 55px;
  left: 0;
  top: 0;

  z-index: 1;
`;

const StyledDiv = styled.div`
  width: 90vw;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 40px;
  padding: 0 3%;
`;

const links = [
  { name: "About Me", link: "#about-me" },
  { name: "Skills", link: "#skills" },
  // { name: "My projects", link: "#my-projects" },
  { name: "Contacts", link: "#contacts" },
];

const MonitorHeader = () => {
  const headerLinks = links.map(({ name, link }) => {
    return (
      <HeaderLink key={name} to={link}>
        {name}
      </HeaderLink>
    );
  });
  return (
    <StyledHeader>
      <StyledDiv>{headerLinks}</StyledDiv>
    </StyledHeader>
  );
};

export default MonitorHeader;
