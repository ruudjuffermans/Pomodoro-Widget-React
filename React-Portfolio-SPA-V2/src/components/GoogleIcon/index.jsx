import styled from "styled-components";


const StyledIcon = styled.span`
    width: 24px;
    height: 24px;
    display: inline-flex;
    align-content: center;
    justify-content: center;
    vertical-align: middle;
    transform: scale(0.6666);
`;

const GoogleIcon = ({size, color, name}) => {
  return (
    <StyledIcon>
        <span class="material-symbols-outlined">
{name}
</span>
</StyledIcon>
  )
}

export default GoogleIcon