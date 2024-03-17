import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  box-sizing: border-box;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 6px;

  &:focus {
    border-color: ${props => props.theme.colors.success};
    outline: none;
  }

  // You can add more styles based on props
  font-size: ${props => props.theme.fontSize.medium};

  // Example of conditional styling based on a prop
  background-color: ${props => props.error ? props.theme.colors.danger : 'white'};
`;

const InputField = ({ error, ...props }) => {
  return <StyledInput error={error} {...props} />;
};

export default InputField;
