import React from 'react';
import { CalculatorContainer, Wrapper } from './App.jsx';
import DashboardCard from './components/molecules/dashboard-card/index.jsx';
import DashboardInputs from './components/molecules/dashboard-inputs/index.jsx';
import { DPIConLogo } from './icons/index.jsx';
import { DashboardContext } from './InputContext/InputContext.js';

const App = () => {
  return (
    <Wrapper>
      <DPIConLogo />
      <DashboardContext>
        <CalculatorContainer>
          <DashboardCard />
          <DashboardInputs />
        </CalculatorContainer>
      </DashboardContext>
    </Wrapper>
  );
};

export default App;
