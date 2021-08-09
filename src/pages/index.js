import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import AboutMe from "../components/sections/AboutMe";
import Contacts from "../components/sections/Contacts";
// import MyPropjects from "../components/sections/MyProjects";
import Skills from "../components/sections/Skills";
import Title from "../components/sections/Title";

const IndexPage = (props) => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          autor
        }
      }
    }
  `);
  return (
    <Layout
      pageTitle={`${site.siteMetadata.title} | ${site.siteMetadata.description}`}
      autor={site.siteMetadata.autor}
      {...props}
    >
      <Title />
      <AboutMe />
      <Skills />
      {/* <MyPropjects /> */}
      <Contacts />
    </Layout>
  );
};

export default IndexPage;
