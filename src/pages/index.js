import * as React from "react";
import Layout from "../components/Layout";
import Title from "../components/Title/Title";

const IndexPage = () => {
  return (
    <Layout pageTitle="Ivan Smirnov">
      <Title />
      <p>Content</p>
    </Layout>
  );
};

export default IndexPage;
