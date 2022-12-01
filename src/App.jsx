import styled from 'styled-components';
import { COLORS } from './constants/color';

export const Wrapper = styled.div`
  margin: 5rem auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 785px) {
    max-width: 75rem;
  }
`;

export const CalculatorContainer = styled.div`
  width: 100%;
  background-color: ${COLORS.white};
  border-radius: 1rem;
  padding: 1.8rem;
  margin-top: 1.5rem;

  @media only screen and (min-width: 550px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
