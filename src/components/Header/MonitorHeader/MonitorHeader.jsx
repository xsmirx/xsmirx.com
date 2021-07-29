import React from "react";
import styled from "styled-components";
import HeaderLink from "../../../styles/HeaderLink";

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.background};
  position: fixed;
  width: 90vw;
  height: 55px;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 40px;
  padding: 0 3%;
  z-index: 1;
`;

const links = [
  { name: "About Me", link: "#about-me" },
  { name: "Skills", link: "#skills" },
  { name: "My projects", link: "#my-projects" },
  { name: "Contacts", link: "#contacts" },
];

const MonitorHeader = () => {
  const headerLinks = links.map(({ name, link }) => {
    return (
      <HeaderLink id={name} to={link}>
        {name}
      </HeaderLink>
    );
  });
  return <StyledHeader>{headerLinks}</StyledHeader>;
};

export default MonitorHeader;
