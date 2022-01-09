import React from "react";
import Layout from "../components/Layout";
import { returnSpecificMetaData } from "../utils/pagesMetaData";

const Home = () => {
  const { title, description } = returnSpecificMetaData("home");
  return (
    <Layout title={title} description={description}>
      <h1>Hello Home</h1>
    </Layout>
  );
};

export default Home;
