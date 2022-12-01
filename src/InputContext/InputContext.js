import { createContext, useState } from 'react';

const InputContext = createContext();

export function DashboardContext({ children }) {
  const [bill, setBill] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [people, setPeople] = useState(1);
  const [payingBill, setPayingBill] = useState(1);

  const addBill = (e) => {
    setBill(e.target.value);
  };
  const addPercentage = (e) => {
    setPercentage(e.target.value);
  };
  const addPeople = (e) => {
    setPeople(e.target.value);
  };

  const peoplePayingBill = (e) => {
    setPayingBill(e.target.value);
  };

  const resetDashboard = () => {
    setBill(0);
    setPeople(1);
    setPercentage(0);
    setPayingBill(1);
  };
  return (
    <InputContext.Provider
      value={{
        bill,
        percentage,
        people,
        payingBill,
        addBill,
        addPercentage,
        addPeople,
        resetDashboard,
        peoplePayingBill,
      }}
    >
      {children}
    </InputContext.Provider>
  );
}

export default InputContext;
