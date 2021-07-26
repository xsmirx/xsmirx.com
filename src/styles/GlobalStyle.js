import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    width: 100%;
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
