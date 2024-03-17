import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SideBar from "../components/SideBar";
import Header from "../components/Header";

const Page = styled.div`
  display: flex;
  min-height: 100vh;
`;
const SideBarSlot = styled.div`

`;

const MainSection = styled.div`
  flex: 1;
  position: relative;
  background-color: green;
`;

const HeadingSlot = styled.div`
height: 100px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 16px;
  margin: 0 24px;
height: calc(100vh - 100px);
`;





const WebAppLayout = () => {
  return (
    <Page>
      <SideBarSlot><SideBar /></SideBarSlot>
      <MainSection>

      <HeadingSlot><Header /></HeadingSlot>
      <GridContainer>
        <Outlet />
      </GridContainer>
      </MainSection>
    </Page>
  );
};

export default WebAppLayout;
