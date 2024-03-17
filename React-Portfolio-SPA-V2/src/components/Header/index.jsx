import styled from "styled-components";


const Wrapper = styled.div`
  padding-top: 40px;
  color: white;
  margin-left: 24px;
  margin-right: 24px;
`;

const Content = styled.div`
  height: 40px;
  background-color: pink;
  align-items: center;
  display: flex;
`;

const Header = () => {
  return (
    <Wrapper>
      <Content>
        header
      </Content>
    </Wrapper>
  )
}

export default Header