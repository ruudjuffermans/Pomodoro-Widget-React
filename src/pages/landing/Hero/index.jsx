import styled from "styled-components";
import gradient from "../../../assets/gradient-625d94e6.webp"

const HeroTitle = styled.h1`
    z-index: 1;
    display: flex;
    flex-direction: column;
    font-weight: 400;
    font-size: 75px;
    margin-bottom: 20px;

    :first-child {
      background: -webkit-linear-gradient(#fff,#a5a5a5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
    
    :last-child {
      background: -webkit-linear-gradient(#58ffb4,#289061);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }

    @media screen and (max-width: 1024px){
    font-size: 60px;
}

@media screen and (max-width: 680px) {
  font-size: 40px;
}

`;



const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    `;
const StyledGradient = styled.img`
    top: 0;
    width: 100%;
    max-width: 1200px;
    position: absolute;
`;


const HeroDescription = styled.p`
    max-width: 750px;
    line-height: 1.8;
    font-size: 20px;

    @media screen and (max-width: 1024px) {

    max-width: 700px;
}

@media screen and (max-width: 680px) {



    max-width: 450px;
    font-size: 15px;
}
`;

const Wrapper = styled.div`
  -webkit-user-select: none;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
  background: linear-gradient(
    180deg,
    black,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.9),
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.1),
    ${props => props.theme.colors.black}
  );
`;

const Hero = () => {
  return (
    <Wrapper>
      <svg
        class="hero-stars"
        xmlns="http://www.w3.org/2000/svg"
        width="1680"
        height="730"
        viewBox="0 0 1680 730"
        fill="none"
      >
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(0.873077 0.487583 -0.78755 0.61625 429.154 175.316)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(0.994947 -0.100399 0.322552 0.946552 263.797 71.2188)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(0.994947 -0.100399 0.322552 0.946552 440 282.121)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(0.994947 -0.100399 0.322552 0.946552 410.404 338.926)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(0.994947 -0.100399 0.322552 0.946552 576 145.121)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(0.061383 -0.998114 0.99741 0.07192 961.715 604.32)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(0.322553 0.946552 -0.994947 0.100399 544.891 280.938)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(0.322553 0.946552 -0.994947 0.100399 1245.01 314.668)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(0.322553 0.946552 -0.994947 0.100399 989.111 172.809)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(0.322553 0.946552 -0.994947 0.100399 974.557 162.211)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(0.322553 0.946552 -0.994947 0.100399 861.078 260.352)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(-0.322553 -0.946552 0.994947 -0.100399 814.387 514.258)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(-0.322553 -0.946552 0.994947 -0.100399 995.66 552.828)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(-0.322553 -0.946552 0.994947 -0.100399 1154.39 545.258)"
          fill="white"
        ></circle>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 280.908 307.363)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 601.275 539.539)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 250.141 326.566)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 1553.78 554.305)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 322.141 513.363)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 1504.14 366.363)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 1140.55 485.527)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 108.141 433.363)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 1285.14 263.363)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 1372.09 492.215)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 630.725 434.363)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 696.141 281.363)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 1343.31 263.105)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 320.141 360.363)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 1086.54 295.914)"
          fill="white"
        ></ellipse>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(-0.958827 0.28399 -0.613701 -0.789538 1308.95 468.746)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(-0.958827 0.28399 -0.613701 -0.789538 1327.66 447.223)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(-0.958827 0.28399 -0.613701 -0.789538 1469.98 192.406)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(-0.958827 0.28399 -0.613701 -0.789538 586.887 448.488)"
          fill="white"
        ></circle>
      </svg>
      <StyledGradient src={gradient} />
      <HeroContent>
        <HeroTitle>
        <span>Hello. I'm Ruud.</span>
        <span>A Data Engineer.</span>
        </HeroTitle>
        <HeroDescription>
I'm passionate about designing and managing data architectures that are scalable, efficient, and that meet the organization's analytical needs.
        </HeroDescription>
      </HeroContent>
    </Wrapper>
  );
};

export default Hero;
