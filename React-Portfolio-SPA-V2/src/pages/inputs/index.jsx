import styled from "styled-components";
import Button from "../../components/Buttons";
import InputField from "../../components/Inputs/InputField";

const PageTitle = styled.div`
font-size: 48px;
font-weight: 800;
`;

const PageSubTitle = styled.div`
font-size: 32px;
font-weight: 800;
`;


const Wrapper = styled.div`
  min-height: 100%;
  margin: 0 0px;
  grid-column: span 12;
`;


const InputsPage = () => {
  return (
      <Wrapper>
        <PageTitle>Inputs</PageTitle>
        <PageSubTitle>InputFields</PageSubTitle>
    <InputField text={"click"} size="small"/>
    <Button text={"click"} size="medium" />
    <Button text={"click"} size="large" />

    <PageSubTitle>Types</PageSubTitle>
    <Button type={"primary"} text={"click"} />
    <Button type={"secondary"} text={"click"}  />
    <Button type={"tertiary"} text={"click"}  />
    <Button type={"quaternary"} text={"click"}  />
    </Wrapper>
  )
}

export default InputsPage