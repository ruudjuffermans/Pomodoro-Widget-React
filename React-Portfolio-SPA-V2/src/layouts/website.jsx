import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";


const Page = styled.div`
  min-height: 100vh;
  margin: 0 104px;
`;


const GridContainer = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 16px;
`;

const WebsiteLayout = () => {
  return (
    <>
    {/* <GridContainer> */}
      <Outlet />
    {/* </GridContainer> */}
    </>
  );
};

export default WebsiteLayout;
