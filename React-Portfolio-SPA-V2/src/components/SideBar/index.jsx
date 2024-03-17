import { useState } from "react";
import styled from "styled-components";
import GoogleIcon from "../GoogleIcon";
import SideBarLink from "./SidebarLink";


const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
  background-color: #131524;
  color: #b6b6b6;
  padding: 44px 0;
  width: ${props => props.collapse ? "80px":"240px"};
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
  font-size: 16px;
  letter-spacing: 2px;
  color: #fff;
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
  font-size: 14px;
  font-weight: 200;
  line-height: 1;
  height: 16px;
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 4px;
`;

const SectionText = styled.span`
  margin-left: 8px;
  height: 16px;
  min-height: 16px;
  content: "";
`;

const SectionItem = styled.div`
  width: 100%;
  height: 40px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 4px;
  background-color: #1b1c3a;
`;

const SideBarCardSlot = styled.div`
  content: "";
  width: 100%;
  height: 208px;

  margin-bottom: 48px;
  margin-top: 48px;
`;

const SideBarCard = styled.div`
  content: "";
  width: 100%;
  height: 100%;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #1b1c3a;
`;

const Divider = styled.div`
  border-bottom: 1px solid grey;
  margin-top: 16px;
  margin-bottom: 16px;
`;





const SideBar = () => {
    const [collapse, setCollapse] = useState(false)
  return (
    <Wrapper collapse={collapse}>
        <LogoItem>

        <Logo/>
        {!collapse &&
        <LogoText>WebApp</LogoText>
            }

        </LogoItem>
        <Search/>
        <Section>
        <SectionTitle>{!collapse && "Section"}</SectionTitle>
<SideBarLink collapse={collapse} title={"buttons"} to={"/buttons"} icon={"radio_button_checked"} />
<SideBarLink collapse={collapse} title={"inputs"} to={"/inputs"} icon={"radio_button_checked"} />
<SideBarLink collapse={collapse} title={"typography"} to={"/typography"} icon={"radio_button_checked"} />
   
        </Section>
        <Section>
        <SectionTitle>{!collapse && "Section"}</SectionTitle>
        <SideBarLink collapse={collapse} title={"buttons"} to={"/buttons"} icon={"radio_button_checked"} />
<SideBarLink collapse={collapse} title={"inputs"} to={"/inputs"} icon={"radio_button_checked"} />
<SideBarLink collapse={collapse} title={"typography"} to={"/typography"} icon={"radio_button_checked"} />
        </Section>

        <SideBarCardSlot>
        {!collapse &&
        <SideBarCard>
            card
            </SideBarCard>
}
            </SideBarCardSlot>
        <SectionItem>            <GoogleIcon name={"settings"}/>
        {!collapse &&
<SectionText>
        Settings
</SectionText>
}
</SectionItem>
        <SectionItem>            <GoogleIcon name={"help"}/>
        {!collapse &&
<SectionText>
        Help
</SectionText>
}</SectionItem>
        <Divider />
        <SectionItem onClick={() => setCollapse(!collapse)}>
            <GoogleIcon name={collapse ? "left_panel_open" : "left_panel_close"}/>
            {!collapse &&
            
<SectionText>
        Collapse
</SectionText>
}
   
        </SectionItem>
        </Wrapper>
  )
}

export default SideBar