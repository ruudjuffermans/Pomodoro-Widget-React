import { useState } from "react";
import styled, {css} from "styled-components";

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    display: flex;
    z-index: 3;

    margin-top: 15px;
    justify-content: center;
    align-items: center;
    -webkit-user-select: none;
    user-select: none;




    @media screen and (min-width: 690px) {
    margin-top: 30px;
}
`;

const Nav = styled.div`
    display: flex;
    align-items: center;
    border-radius: 30px;
    border: 1px solid transparent;
    transition: all .2s ease;
    position: relative;
    cursor: pointer;

    ${props => props.isAtTop && css`
        
    background: rgba(114,114,114,.3);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 2px solid #404040b5;
    box-shadow: 0 2px 10px #0000001a;
    `
    }


`;


const Slider = styled.div`
    position: absolute;
    left: 5px;
    width: 50px;
    height: 30px;
    border-radius: 30px;
    background: rgba(79,79,79,.25);
    transition: transform .3s cubic-bezier(.34,1.56,.64,1);


    /* /* @media screen and (min-width: 385px) {
    width: 60px;
    transform: translate(70px);
    width: 60px;
}

@media screen and (min-width: 461px) {
    transform: translate(80px);
    left: 8px;
    width: 70px;
    height: 35px;
} */



${props => props.active === "about" && css`
transform: translate(58px);
`}
${props => props.active === "skills" && css`
transform: translate(116px);
`}
${props => props.active === "projects" && css`
transform: translate(172px);
width: 70px;
`}
${props => props.active === "writings" && css`
transform: translate(245px);
width: 70px;
`}
@media screen and (min-width: 690px)  {
    transform: translate(19px);
    width: 70px;
    height: 40px;
    ${props => props.active === "about" && css`
transform: translate(140px);
`}
${props => props.active === "skills" && css`
transform: translate(256px);
`}
${props => props.active === "projects" && css`
transform: translate(372px);
width: 90px;
`}
${props => props.active === "writings" && css`
transform: translate(510px);
width: 95px;
`}
} 
`;

const NavLINK = styled.span`
    cursor: pointer;
    transition: all .2s ease;
    font-size: 13px;
    z-index: 2;
    padding: 15px 5px;
    margin: 0 5px;
    font-weight: 300;

    @media screen and (min-width: 690px)  {
    font-size: 17px;
    padding: 18px 30px;
}
`;



const Navigation = ({isAtTop}) => {
    const [activeNav, setActiveNav] = useState("home")

  return (
    <Wrapper>
    <Nav  isAtTop={isAtTop}>
        <NavLINK  onClick={() => setActiveNav("home")}>Home</NavLINK>
        <NavLINK active={activeNav == "about"} onClick={() => setActiveNav("about")}>About</NavLINK>
        <NavLINK active={activeNav == "skills"} onClick={() => setActiveNav("skills")} >Skills</NavLINK>
        <NavLINK active={activeNav == "projects"} onClick={() => setActiveNav("projects")}>Projects</NavLINK>
        <NavLINK active={activeNav == "writings"} onClick={() => setActiveNav("writings")}>Writings</NavLINK>
        <Slider active={activeNav}></Slider>
    </Nav>
    </Wrapper>
  )
}

export default Navigation