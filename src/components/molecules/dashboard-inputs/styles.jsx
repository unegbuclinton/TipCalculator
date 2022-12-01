import styled from 'styled-components';
import { COLORS } from '../../../constants/color';

export const Container = styled.div`
  .preview-btn {
    background-color: ${COLORS['maximum-blue']};
    color: ${COLORS['alice-blue']};
    transition: 0.2s ease-in-out;
    &:hover {
      transform: scale(0.9);
      transition: 0.2s ease-in-out;
    }
  }
  @media only screen and (min-width: 550px) {
    width: 50%;
  }
`;

export const InputContainer = styled.div`
  margin-bottom: 1.5rem;

  .span-styles {
    top: 4px;
  }
`;

export const Label = styled.label`
  font-size: 1.2rem;
  font-weight: 700;
  margin-left: 0.2rem;
`;
