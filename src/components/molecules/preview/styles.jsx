import styled from 'styled-components';
import { COLORS } from '../../../constants/color';

export const Wrapper = styled.div`
  width: 25rem;
  background-color: #ffff;
  border-radius: 0.8rem;
  padding: 1.5rem 2.5rem;
  color: ${COLORS['maximum-blue']};

  @media only screen and (min-width: 550px) {
    width: 50rem;
  }
`;

export const Header = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 2.5rem;
  text-align: center;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  border-bottom: ${COLORS['alice-blue']};
  padding-bottom: 1.5rem;
`;

export const ContentHeader = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
`;

export const ContentText = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
`;
