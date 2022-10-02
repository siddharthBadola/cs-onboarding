import React from 'react';

import type { StepProps } from 'types';
import useOnBoardingContext from 'hooks/useOnBoardingContext';

import CheckIcon from 'assets/icons/checkIcon';
import Button from 'components/button/button';

const Step4: React.FC<StepProps> = () => {
  const {
    formState: { fullName },
    finishOnBoarding,
  } = useOnBoardingContext();
  return (
    <div className="w-max flex flex-col items-center mx-auto">
      <CheckIcon className="w-24 h-24 text-primary-600 mb-6" />
      <h2 className="title mb-2">
        Congratulations,
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        {fullName}!
      </h2>
      <p className="body-light">
        You have completed onboarding, you can start using the Eden!
      </p>
      <Button
        onClick={() => finishOnBoarding()}
        className="w-full max-w-full mt-4"
      >
        Launch Eden
      </Button>
    </div>
  );
};

export default Step4;
