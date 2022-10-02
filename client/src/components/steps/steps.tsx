import React from 'react';

import type { StepsType } from 'types';

import StepHeader from './stepHeader/stepHeader';

interface StepProps {
  steps: StepsType;
  activeStep: number;
  onChange: (step: number) => void;
}

const Steps: React.FC<StepProps> = ({ steps, activeStep, onChange }) => {
  const headerItems = React.useMemo(() => {
    return steps.map(({ title }, index) => ({
      title,
      onClick: () => onChange(index),
    }));
  }, [steps, onChange]);

  const next = () => {
    if (activeStep >= steps.length - 1) {
      return;
    }
    onChange(activeStep + 1);
  };

  return (
    <div className="w-full">
      <StepHeader
        items={headerItems}
        activeIndex={activeStep}
        className="mb-24"
      />
      {steps.map(({ content: Content }, index) => {
        if (typeof Content === 'function') {
          // eslint-disable-next-line react/no-array-index-key
          return index === activeStep && <Content key={index} next={next} />;
        }
        return index === activeStep && Content;
      })}
    </div>
  );
};

export default Steps;
