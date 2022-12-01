import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/color';

const Input = ({ placeholder, type, spanClassName, value, onChange }) => {
  return (
    <InputContainer>
      <Placeholder className={spanClassName}>{placeholder}</Placeholder>
      <InputField type={type} onChange={onChange} value={value} />
    </InputContainer>
  );
};

export default Input;

const InputContainer = styled.div`
  position: relative;
`;
const Placeholder = styled.span`
  position: absolute;
  left: 10px;
  top: 10px;
  color: ${COLORS['maximum-blue']};
`;

const InputField = styled.input`
  text-align: right;
  border: none;
  background-color: ${COLORS['alice-blue']};
  height: 3.4rem;
  width: 100%;
  padding: 1.2rem;
  outline: none;
  border-radius: 0.8rem;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ::-webkit-input-placeholder {
    text-align: left;
  }
`;
