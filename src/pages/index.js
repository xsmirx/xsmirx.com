import * as React from "react";
import AboutMe from "../components/AboutMe/AboutMe";
import Contacts from "../components/Contacts/Contacts";
import Layout from "../components/Layout";
import MyPropjects from "../components/MyProjects/MyProjects";
import Skills from "../components/Skills/Skills";
import Title from "../components/Title/Title";

const IndexPage = (props) => {
  return (
    <Layout pageTitle="Ivan Smirnov" {...props}>
      <Title />
      <AboutMe />
      <Skills />
      <MyPropjects />
      <Contacts />
      {
        // About me (photo, text, social contacts and email)
        // skills (soft, stack, plans)
        // My projectsfrom GitHub
        // contacts (btn mailto)
      }
    </Layout>
  );
};

export default IndexPage;
