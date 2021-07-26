import * as React from "react";
import AboutMe from "../components/AboutMe/AboutMe";
import Layout from "../components/Layout";
import Title from "../components/Title/Title";

const IndexPage = (props) => {
  return (
    <Layout pageTitle="Ivan Smirnov" {...props}>
      <Title />
      <AboutMe />
      {
        // About me (photo, text, social contacts and email)
        // skills (soft, stack, plans)
        // My projectsfrom GitHub
        // contacts (btn mailto)
      }
      <p>Content</p>
    </Layout>
  );
};

export default IndexPage;
