import styled, { css } from 'styled-components';
import GoogleIcon from '../GoogleIcon';

// Styled component for the button
const StyledButton = styled.button`
  transition: background-color 0.3s ease;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  line-height: 1;

  &:hover {
    background-color: ${props => props.theme.colors.success};
  }
  &:active {
    background-color: ${props => props.theme.colors.secondary};
  }
  &:disabled {
    background-color: ${props => props.theme.colors.grey};
  }
  /* loading */

  /* Size styles */
  ${props => {
    switch (props.size) {
      case 'small':
        return css`
          padding: 6px 16px;
          font-weight: 700;
          font-size: 12px;
        `;
      case 'large':
        return css`
          padding: 14px 24px;
          font-weight: 700;
          font-size: 16px;
        `;
      default:
        // Medium size as default
        return css`
          padding: 8px 16px;
          font-weight: 700;
          font-size: 14px;
        `;
    }
  }}

  /* Hierarchical styles */
  ${props => {
    switch (props.type) {
      case 'primary':
        return css`
          background-color: ${props => props.theme.colors.primary};
          color: white;
        `;
      case 'secondary':
        return css`
          background-color: ${props => props.theme.colors.primary};
          color: white;
        `;
      case 'tertiary':
        return css`
          background-color: ${props => props.theme.colors.primary};
          color: white;
        `;
      case 'quaternary':
        return css`
          background-color: ${props => props.theme.colors.primary};
          color: white;
        `;
      default:
        return css``;
    }
  }}
`;

// React component
const Button = ({ type = 'primary', size = 'small', text, icon=undefined, children, ...props }) => {
  return (
    <StyledButton type={type} size={size} {...props}>
      <GoogleIcon name="settings" />
      <div>

      {text}
      </div>
    </StyledButton>
  );
};

export default Button;