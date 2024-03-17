import styled from "styled-components";


const Section = styled.div`
    margin-bottom: 40px;

    @media screen and (min-width: 650px) {
      margin-bottom: 50px;
    }

`;


const PageSection = ({children}) => {
  return (
    <Section>{children}</Section>
  )
}

export default PageSection