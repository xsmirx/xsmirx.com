import React from "react";
import { Helmet } from "react-helmet";

const Layout = ({ pageTitle, children }) => {
  return (
    <main>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      {children}
    </main>
  );
};

export default Layout;
