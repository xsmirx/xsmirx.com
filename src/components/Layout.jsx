import React from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import MainContainer from "../styles/MainContainer";
import theme from "../styles/theme";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = ({ pageTitle, children }) => {
  return (
    <ThemeProvider theme={theme.primary}>
      <GlobalStyle />
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      {/* <Header /> */}
      <MainContainer>{children}</MainContainer>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
