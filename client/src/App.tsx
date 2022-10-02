import React from 'react';

import { StepsType } from 'types';
import 'App.css';

import Step1 from 'components/step1/step1';
import Step2 from 'components/step2/step2';
import Steps from 'components/steps/steps';
import Step3 from 'components/step3/step3';
import Step4 from 'components/step4/step4';
import Provider from 'context/onBoardingContext';

const stepItems: StepsType = [
  {
    title: '1',
    content: Step1,
  },
  {
    title: '2',
    content: Step2,
  },
  {
    title: '3',
    content: Step3,
  },
  {
    title: '4',
    content: Step4,
  },
];

const App = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <main className="container">
      <h1 className="text-center text-3xl font-semibold mb-16">Eden</h1>
      <Provider>
        <Steps
          steps={stepItems}
          activeStep={activeIndex}
          onChange={setActiveIndex}
        />
      </Provider>
    </main>
  );
};

export default App;
