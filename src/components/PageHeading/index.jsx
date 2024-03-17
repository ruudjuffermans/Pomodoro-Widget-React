import styled from "styled-components";


const Heading = styled.h1`
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 20px;

    @media screen and (min-width: 650px) {
        font-size: 22px;
    }

`;


const PageHeading = ({children}) => {
  return (
    <Heading>{children}</Heading>
  )
}

export default PageHeading