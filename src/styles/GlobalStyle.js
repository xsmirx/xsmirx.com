import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    width: 100%;
    scroll-behavior: smooth;
  }
  body {
    height: 100%;
    width: 100%;
    background-color: ${(props) => props?.theme?.background || "white"};
    color: ${(props) => props?.theme?.bodyColor || "black"};
  }
  h1, h2, h3, h4, h5, h6, a {
    color: ${(props) => props?.theme?.headerColor || "black"};
  }
  a {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0.3vh;
      background-color: ${(props) => props.theme.linkColor};
      z-index: -1;
      }
  }
  h1 {
    font-size: clamp(2.4rem, 8vw, 4.8rem);
    position: relative;
    display: inline-block;
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: clamp(0.3rem, 2vw, 1rem);
      bottom: clamp(5px, 10%, 10px);
      left: 0;
      border-radius: 3px;
      background-color: ${(props) => props?.theme?.linkColor || "blue"};
      z-index: -1;
    }
  }
  h2 {
    position: relative;
    display: inline-block;
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 0.3rem;
      bottom: 4px;
      left: 0;
      background-color: ${(props) => props?.theme?.linkColor || "blue"};
      z-index: -1;
    }
  }
  #___gatsby {
    height: 100%;
    width: 100%;
  }
  #gatsby-focus-wrapper {
    height: 100%;
    width: 100%;
  }
`;

export default GlobalStyle;
