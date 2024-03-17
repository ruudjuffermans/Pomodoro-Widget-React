import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
    padding: 0;

}

h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.colors.white};
}

.material-symbols-outlined {
  width: inherit;
  height: inherit;
vertical-align: middle;
}

.hero-stars {
  top: -1px;
    width: 100%;
    max-width: 1400px;
    position: absolute;
}
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    background-color: ${props => props.theme.colors.black};
    color: #212529;
    letter-spacing: 1px;
    font-weight: 300;
    color:  ${props => props.theme.colors.text};
    transition: all .2s ease;

  }

  a{
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  // You can add more global styles here, for other tags or classes
`;

export default GlobalStyle;
