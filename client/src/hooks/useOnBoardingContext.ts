import { useContext } from 'react';

import { OnBoardingContext } from 'context/onBoardingContext';

const useOnBoardingContext = () => {
  const value = useContext(OnBoardingContext);

  if (value) {
    return value;
  }
  throw Error('Please use onBoardingContext inside a valid provider');
};

export default useOnBoardingContext;
