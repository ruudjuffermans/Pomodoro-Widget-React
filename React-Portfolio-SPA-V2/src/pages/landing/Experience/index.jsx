
import React from 'react'
import PageHeading from '../../../components/PageHeading'
import PageSection from '../../../components/PageSection'
import styled from "styled-components";

const ExperienceTitle = styled.h2`
    font-size: 16px;
    margin-bottom: 10px;
    font-weight: 600;

`;



const ExperienceDate = styled.div`
    font-size: 14px;
    line-height: 1.5;
    width: 225px;
    padding-right: 5px;
    margin-bottom: 10px;
    font-style: italic;
    `;
const ExperienceItem = styled.div`
margin-bottom: 20px;

@media screen and (min-width: 970px){
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
`;

const ExperienceText = styled.p`
    font-size: 14px;
    line-height: 1.6;
    max-width: 1100px;
`;
const ExperienceTechnologies = styled.div`
gap: 7px;
display: flex;
align-items: center;
flex-wrap: wrap;
margin-top: 15px;
padding-bottom: 15px;
`;

const ExperienceTechnology = styled.span`
font-size: 12px;
color: ${props => props.theme.colors.primary};
border: 1px solid ${props => props.theme.colors.primary};
padding: 3px 6px;
border-radius: 2px;
background-color: #40cf8f0f;

@media screen and (min-width: 650px) {
    font-size: 13px;
    padding: 5px 6px;
}
`;

const Experience = () => {
  return (
    <PageSection>

    <PageHeading>Experience</PageHeading>
    <ExperienceItem>
      <ExperienceDate>Sep 2023 - Feb 2024</ExperienceDate>
      <div>

      <ExperienceTitle>Boval Assurantien B.V. - Data Engineer</ExperienceTitle>
      <ExperienceText>Worked on developing chatbot solutions to help digitize societies around the world, using AI technologies such as ChatGPT to enhance services in cities. I focused on creating user interfaces and backend APIs, utilizing a range of technologies with the goal of contributing to global digital transformation. To ensure our platforms were strong and worked well, I implemented comprehensive testing with Cypress. I also used Insomnia for effective API testing, which helped make our development process smoother and our products more reliable. Experienced in Scrum, I effectively managed tasks and collaborated with the team to meet our goals.</ExperienceText>
    <ExperienceTechnologies>
    <ExperienceTechnology>123</ExperienceTechnology>
    <ExperienceTechnology>123</ExperienceTechnology>
    <ExperienceTechnology>123</ExperienceTechnology>
    <ExperienceTechnology>123</ExperienceTechnology>
    <ExperienceTechnology>123</ExperienceTechnology>
    <ExperienceTechnology>123</ExperienceTechnology>
    </ExperienceTechnologies>
      </div>
    </ExperienceItem>
    <ExperienceItem>
    <ExperienceDate>Sep 2023 - Feb 2024</ExperienceDate>
    <div>

      <ExperienceTitle>Dealblock Labs - Blockchain Developer</ExperienceTitle>
      <ExperienceText>Worked on developing chatbot solutions to help digitize societies around the world, using AI technologies such as ChatGPT to enhance services in cities. I focused on creating user interfaces and backend APIs, utilizing a range of technologies with the goal of contributing to global digital transformation. To ensure our platforms were strong and worked well, I implemented comprehensive testing with Cypress. I also used Insomnia for effective API testing, which helped make our development process smoother and our products more reliable. Experienced in Scrum, I effectively managed tasks and collaborated with the team to meet our goals.</ExperienceText>
    <ExperienceTechnologies>
    <ExperienceTechnology>123</ExperienceTechnology>
    <ExperienceTechnology>123</ExperienceTechnology>
    <ExperienceTechnology>123</ExperienceTechnology>
    <ExperienceTechnology>123</ExperienceTechnology>
    <ExperienceTechnology>123</ExperienceTechnology>
    <ExperienceTechnology>123</ExperienceTechnology>
    </ExperienceTechnologies>
    </div>
    </ExperienceItem>
    </PageSection>
  )
}

export default Experience