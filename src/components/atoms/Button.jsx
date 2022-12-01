import React from 'react';
import styled from 'styled-components';

const Button = ({ text, className, onClick }) => {
  return (
    <ButtonTag className={className} onClick={onClick}>
      {text}
    </ButtonTag>
  );
};

export default Button;

const ButtonTag = styled.button`
  width: 100%;
  padding: 1.2rem;
  border: none;
  background-color: #e6eff1;
  color: #56b3c8;
  font-size: 1.6rem;
  border-radius: 0.8rem;
  font-weight: 900;
  cursor: pointer;
`;
