import React from 'react'
import Intro from "./components/home page/intro/intro";
import Skills from "./components/home page/skills/skills";
import Works from "./components/home page/works/works";
// import Form from './components/home page/form/form';

const Home = () => {
  return (
    <div className="Home">
      <Intro/>
      <Skills/>
      <Works/>
      {/* <Form/> */}
    </div>
  )
}

export default Home