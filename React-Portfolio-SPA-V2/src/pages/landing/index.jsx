import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import About from "./About";
import SkillSet from "./SkillSet";
import Experience from "./Experience";
import Projects from "./Projects";
import Writings from "./Writings";

import styled from "styled-components";
import Navigation from "../../components/Navigation";

const Main = styled.div`
    margin: -120px auto 0;
    max-width: 1300px;
    padding: 25px;

    @media screen and (min-width: 650px) {
    margin-top: -60px;
}

    @media screen and (min-width: 800px) {
    margin-top: 0;
}
`;


const LandingPage = () => {
  const [isAtTop, setIsAtTop] = useState(window.pageYOffset >= 50);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.pageYOffset >= 50);
    };
  
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
  
    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <Navigation isAtTop={isAtTop} />
      <Hero />
      <Main>

      <About />
      <SkillSet />
      <Experience />
      <Projects />
      <Writings />
      </Main>
    </>
  );
};

export default LandingPage;
