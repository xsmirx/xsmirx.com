import React from "react";
import styled from "styled-components";
import resume from "./../../content/resume.pdf";

const StyledButton = styled.a.attrs((props) => ({
  href: props.href,
  target: "_blank",
  rel: "nofollow",
}))`
  display: inline-block;
  border: 2px solid ${(props) => props.theme.linkColor};
  border-radius: 5px;
  padding: 5px 10px;
  transition: all 0.3s ease;

  &::after,
  &::before {
    content: none;
  }

  &:hover {
    color: white;
    background-color: ${(props) => props.theme.linkColor};
    transition: all 0.3s ease;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ResumeButton = () => {
  return <StyledButton href={resume}>My resume</StyledButton>;
};

export default ResumeButton;
