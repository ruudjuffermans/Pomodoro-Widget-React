
import React from 'react'
import PageHeading from '../../../components/PageHeading'
import PageSection from '../../../components/PageSection'
import styled from "styled-components";
import { Link } from 'react-router-dom';

const WritingsCard = styled.a`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 15px;
    border-radius: 5px;
    border: 1px solid #2d2d2d;
    transition: border .2s ease;
    position: relative;
    background-color: #1c1c1c;
    box-shadow: 0 2px 3px #0000003d;

    &:hover {

border: 1px solid #4c4c4c;
 :first-child {
  background: radial-gradient(100% 100% at 0% 0%,hsla(0,0%,100%,.05),transparent);
 }

}

    @media screen and (min-width: 500px) {
    padding: 20px;
}

@media screen and (min-width: 650px) {
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

const CardSubTitle = styled.p`
line-height: 1.5;
    max-width: 500px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
`;
const CardDate = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;

    @media screen and (min-width: 500px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
}
    `;
const CardTitle = styled.h3`
    font-weight: 400;
    line-height: 1.5;
    font-size: 14px;


    @media screen and (min-width: 650px) {
    font-size: 16px;
}
`;



const WritingsGrid = styled.div`
    gap: 10px;
    display: flex;
    flex-direction: column;

@media screen and (min-width: 926px) {
    gap: 10px;
    display: grid;
    grid-template-columns: repeat(2,1fr);
}
`;

const Writings = () => {
  return (
    <PageSection>
    <PageHeading>Some of my Writings</PageHeading>
    <WritingsGrid>
      <WritingsCard>
        <CardGradient></CardGradient>
        <CardTitle>Chat App</CardTitle>
        <CardDate><span>Oct 24, 2023</span> <span>•</span><div class="writings-card-wrapper-minutes"><span>2 min read</span></div></CardDate>
        <CardSubTitle>Chat App</CardSubTitle>
  
      </WritingsCard>
    
        </WritingsGrid>
    </PageSection>
  )
}

export default Writings