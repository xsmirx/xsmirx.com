import { Link } from "gatsby";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import BurgerIcon from "../../icons/CloseIcon";

const StyledHeader = styled.div`
  position: fixed;
  background-color: ${(props) => props.theme.background};
  width: 100vw;
  height: 100vh;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10vh;
  padding: 15vh 0 0 0;
  transition: all 0.3s ease-out;
  transform: ${(props) =>
    props.isOpen ? "translate(0)" : "translate(0px, 10vh)"};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
`;

const StyledButton = styled.button`
  position: fixed;
  bottom: 5vh;
  right: 5vw;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.linkColor};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  border: none;
  svg {
    color: ${(props) => props.theme.background};
    width: 45%;
    height: 45%;
  }
`;

const links = [
  { name: "About Me", link: "#about-me" },
  { name: "Skills", link: "#skills" },
  { name: "My projects", link: "#my-projects" },
  { name: "Contacts", link: "#contacts" },
];

const MobileHeader = () => {
  let [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const headerLinks = links.map(({ name, link }) => {
    return (
      <Link key={name} to={link} onClick={() => setIsOpen(false)}>
        {name}
      </Link>
    );
  });
  return (
    <>
      <StyledHeader isOpen={isOpen}>{headerLinks}</StyledHeader>
      <StyledButton onClick={toggleMenu}>
        <BurgerIcon />
      </StyledButton>
    </>
  );
};

export default MobileHeader;
