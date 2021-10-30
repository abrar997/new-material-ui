import React from "react";
import Divrow from "../Divrow/Divrow";
import Nav from "../Nav/Nav";
import "./Home.css";
import Categ from "../Categ/Categ";
import Services from "../Services/Services";
import BestSelling from "../BestSelling/BestSelling";

const Home = () => {
  return (
    <div className="home">
      <Nav />
      <Divrow />
      <Services />

 <BestSelling />
    </div>
  );
};

export default Home;

