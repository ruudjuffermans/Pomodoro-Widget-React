import { useState } from "react";
import styled from "styled-components";
import GoogleIcon from "../../GoogleIcon";
import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
  background-color: #131524;
  color: white;
  padding: 44px 0;
  width: ${(props) => (props.collapse ? "240px" : "80px")};
  width: 240px;
`;

const LogoItem = styled.div`
  height: 32px;
  width: 100%;
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 16px;
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Logo = styled.span`
  content: "";
  width: 32px;
  height: 32px;
  display: inline-block;

  background-color: #fff;
`;

const LogoText = styled.span`
  font-size: 18px;
`;

const Search = styled.div`
  content: "";
  width: 32px;
  height: 32px;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 32px;
  background-color: #fff;
`;

const Section = styled.div`
  margin-bottom: 24px;
`;

const SectionTitle = styled.div`
  font-size: 16px;
  line-height: 1;
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 4px;
`;

const SectionText = styled.span`
  margin-left: 8px;
`;

const SectionItem = styled.div`
  width: 100%;
  height: 40px;
  padding-left: 28px;
  padding-right: 28px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 4px;
  background-color: #1b1c3a;
`;

const SideBarLink = ({ to, title, icon, collapse }) => {
  return (
    <NavLink   className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  } to={to}>
      <SectionItem>
        <GoogleIcon name={icon} />
        {!collapse &&
        <SectionText>{title}</SectionText>
        }
      </SectionItem>
    </NavLink>
  );
};

export default SideBarLink;
