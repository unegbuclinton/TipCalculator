import React, { useContext } from 'react';
import InputContext from '../../../InputContext/InputContext';
import {
  ContentHeader,
  ContentText,
  ContentWrapper,
  Header,
  Wrapper,
} from './styles';

const PreviewComponenet = () => {
  const { bill, percentage, people } = useContext(InputContext);

  const tipCalc = (bill * percentage) / 100;

  const perHead = tipCalc / people;

  return (
    <Wrapper>
      <Header>Preview </Header>
      <ContentWrapper>
        <ContentHeader>Total Bill</ContentHeader>
        <ContentText>
          {bill.toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })}
        </ContentText>
      </ContentWrapper>

      <ContentWrapper>
        <ContentHeader>Bill per Person</ContentHeader>
        <ContentText>
          {perHead.toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })}
        </ContentText>
      </ContentWrapper>

      <ContentWrapper>
        <ContentHeader>Total Tip</ContentHeader>
        <ContentText>
          {tipCalc.toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })}
        </ContentText>
      </ContentWrapper>

      <ContentWrapper>
        <ContentHeader>Tip per Person</ContentHeader>
        <ContentText>
          {perHead.toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })}
        </ContentText>
      </ContentWrapper>
    </Wrapper>
  );
};

export default PreviewComponenet;
