
import React from 'react'
import PageHeading from '../../../components/PageHeading'
import PageSection from '../../../components/PageSection'
import styled from "styled-components";
import { Link } from 'react-router-dom';

const ProjectCard = styled.a`
position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    padding: 18px;
    border-radius: 5px;
    border: 1px solid #2d2d2d;
    transition: border .2s ease;
    font-size: 14px;
    height: 150px;
    background-color: #1c1c1c;
    box-shadow: 0 2px 3px #0000003d;

    &:hover {

border: 1px solid #4c4c4c;
 :first-child {
  background: radial-gradient(100% 100% at 0% 0%,hsla(0,0%,100%,.05),transparent);
 }

}

    @media screen and (min-width: 495px) {
    padding: 30px;
    align-items: center;
}

@media screen and (min-width: 650px) {
      height: 200px;
    font-size: 16px;
}


`;

const CardGradient = styled.div`
    top: 0;
    left: 0;
    width: 150px;
    height: 200px;
    position: absolute;
    background: radial-gradient(100% 100% at 0% 0%,hsla(0,0%,100%,.03),transparent);
    transition: all .1s ease-in;

`;

const CardActions = styled.div`
    gap: 30px;
    display: flex;
    align-self: flex-end;

    @media screen and (min-width: 650px) {
    gap: 30px;
    display: flex;
    align-self: flex-end;
}
* {

  font-size: 18px;
  transition: color .2s ease;
}

@media screen and (min-width: 650px) { * {
    font-size: 20px;
}
}
`;

const CardTitle = styled.h3`
font-weight: 400;
    margin-top: -100px;
    text-transform: uppercase;
    font-size: 14px;

    @media screen and (min-width: 495px) {
    margin-top: -40px;
}

    @media screen and (min-width: 650px) {
    font-size: 16px;
}
`;

const CardKeyWords = styled.div`
    display: flex;
    align-self: center;
    gap: 15px;

    @media screen and (min-width: 540px) {
    display: flex;
    gap: 30px;
}

@media screen and (min-width: 495px) {
    display: flex;
    gap: 15px;
}

@media screen and (min-width: 460px) {
    align-self: inherit;
}

`;



const ProjectGrid = styled.div`
    gap: 10px;
    display: flex;
    flex-direction: column;

@media screen and (min-width: 926px) {
    gap: 10px;
    display: grid;
    grid-template-columns: repeat(2,1fr);
}
`;

const Projects = () => {
  return (
    <PageSection>

    <PageHeading>Projects</PageHeading>
    <ProjectGrid>
      <ProjectCard>
        <CardGradient></CardGradient>
        <CardActions>
          <Link>
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></Link>
        <Link><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></Link>
        </CardActions>
        <CardTitle>Chat App</CardTitle>
        <CardKeyWords></CardKeyWords>
      </ProjectCard>
      <ProjectCard>
        <CardGradient></CardGradient>
        <CardActions>
          <Link to={"/"}>
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></Link>
        <Link><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></Link>
        </CardActions>
        <CardTitle>Chat App</CardTitle>
        <CardKeyWords></CardKeyWords>
      </ProjectCard>
      <ProjectCard>
        <CardGradient></CardGradient>
        <CardActions>
          <Link>
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></Link>
        <Link><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></Link>
        </CardActions>
        <CardTitle>Chat App</CardTitle>
        <CardKeyWords>
          <span>hello</span>
          <span>hello</span>
          <span>hello</span>
        </CardKeyWords>
      </ProjectCard>
    </ProjectGrid>

    </PageSection>
  )
}

export default Projects