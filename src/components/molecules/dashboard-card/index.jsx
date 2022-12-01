import React, { useContext, useEffect, useState } from 'react';
import InputContext from '../../../InputContext/InputContext';
import Button from '../../atoms/Button';
import { BottomItem, CardDigits, Divider, Header, Wrapper } from './styles';

const DashboardCard = () => {
  const { bill, percentage, people, resetDashboard, payingBill } =
    useContext(InputContext);
  const [totalBll, setTotalBill] = useState(0);
  const [tipPerP, setTipPerP] = useState(0);
  const [totalTip, setTotalTip] = useState(0);
  const [amountPerP, setAmountPerP] = useState(0);

  useEffect(() => {
    setTotalBill(bill);
    const tipCalc = (totalBll * percentage) / 100;

    if (people > 1) {
      const perHead = tipCalc / people;
      setTipPerP(perHead);
    } else {
      const perHead = tipCalc / 1;
      setTipPerP(perHead);
    }

    if (payingBill > 1) {
      const eachPayingPerson = totalBll / payingBill;
      setAmountPerP(eachPayingPerson);
    } else {
      const eachPayingPerson = totalBll / 1;
      setAmountPerP(eachPayingPerson);
    }

    setTotalTip(tipCalc);
  }, [bill, percentage, people, totalBll, payingBill]);

  return (
    <Wrapper>
      <Header>Tip p/person</Header>
      <CardDigits>{`$${tipPerP.toLocaleString(undefined, {
        minimumFractionDigits: 2,
      })}`}</CardDigits>
      <Divider />
      <BottomItem>
        <div className="value-digit">
          <p className="tip-header">Total bill</p>
          <p className="tip-value">{`$${bill.toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })}`}</p>
        </div>
        <div className="value-digit">
          <p className="tip-header">Total tip</p>
          <p className="tip-value">{`$${totalTip.toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })}`}</p>
        </div>
      </BottomItem>
      <Header>Bill p/person</Header>
      <CardDigits>{`$${amountPerP.toLocaleString(undefined, {
        minimumFractionDigits: 2,
      })}`}</CardDigits>
      <Button
        text="Reset"
        className="reset-btn"
        onClick={() => resetDashboard()}
      />
    </Wrapper>
  );
};

export default DashboardCard;
