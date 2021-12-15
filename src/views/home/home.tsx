import React from "react";
import Layout from "../../layouts/layout";
import "../../App.css";
import SearchSection from "../../components/search-section/searchSection";
import MainSection from "../../components/main-section/mainSection";
import SideSection from "../../components/side-section/sideSection";

export interface IHomeProps {}

const Home = (props: IHomeProps) => {
  return (
    <>
      <Layout>
        <SearchSection />
        <div className="d(flex)">
          <SideSection />
          <MainSection />
        </div>
      </Layout>
    </>
  );
};

export default Home;
