import styled from 'styled-components';
import { COLORS } from '../../../constants/color';

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${COLORS['maximum-blue']};
  border-radius: 0.8rem;
  padding: 2.8rem;
  margin-bottom: 2rem;
  overflow: auto;

  .reset-btn {
    margin-top: 2rem;
    transition: 0.2s ease-in-out;
    &:hover {
      transform: scale(0.9);
      transition: 0.2s ease-in-out;
    }
  }

  @media only screen and (min-width: 550px) {
    width: 48%;
    margin-bottom: 0;
  }
`;

export const Header = styled.header`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  color: ${COLORS['alice-blue']};
`;

export const CardDigits = styled.p`
  font-size: 3.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem 0;
  color: ${COLORS['alice-blue']};
`;

export const Divider = styled.div`
  width: 100%;
  border: 1px solid ${COLORS['alice-blue']};
  margin-top: 1.5rem;
`;

export const BottomItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.5rem 0;

  .value-digit {
    display: flex;
    flex-direction: column;
    align-items: center;

    .tip-header {
      font-weight: 600;
      font-size: 1.6rem;
      margin-bottom: 0.5rem;
      color: ${COLORS['alice-blue']};
    }

    .tip-value {
      font-weight: 900;
      font-size: 1.8rem;
      color: ${COLORS['alice-blue']};
    }
  }
`;
