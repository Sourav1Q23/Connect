import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/side/Sidebar";
import Feed from "../../components/feed/Feed";
import Right from "../../components/right/Right";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Right />
      </div>
    </>
  );
};

export default Home;
