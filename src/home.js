import React from "react";
import Intro from "./components/home page/intro/intro";
import Skills from "./components/home page/skills/skills";
import Works from "./components/home page/works/works";
import Kontak from "./components/home page/kontak/kontak";


const Home = () => {
  return (
    <div className="Home">
      <Intro />
      <Works />
      <Skills />
      <Kontak />
    </div>
  );
};

export default Home;