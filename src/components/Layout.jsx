import React from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import MainContainer from "../styles/MainContainer";
import theme from "../styles/theme";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = ({ pageTitle, children, autor, ...props }) => {
  return (
    <ThemeProvider theme={theme.primary}>
      <GlobalStyle />
      <Helmet title={pageTitle} />
      <Header />
      <MainContainer>{children}</MainContainer>
      <Footer autor={autor} />
    </ThemeProvider>
  );
};

export default Layout;
