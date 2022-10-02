import React from 'react';

import type { OnBoardingContextType, FormState } from 'types';
import { UsageScope } from 'types';

const initialFormState = {
  workspaceName: '',
  workspaceUrl: '',
  fullName: '',
  displayName: '',
  usageScope: UsageScope.solo,
};

export const OnBoardingContext = React.createContext<
  OnBoardingContextType | undefined
>(undefined);

interface OnBoardingProviderProps {
  children: React.ReactNode;
}

const Provider: React.FC<OnBoardingProviderProps> = ({ children }) => {
  const [formState, setFormState] = React.useState<FormState>(initialFormState);

  const updateState = (updateValue: Partial<FormState>) => {
    setFormState((prev) => ({
      ...prev,
      ...updateValue,
    }));
  };

  const finishOnBoarding = () => {
    console.log('Finished onboarding', formState);
  };

  const value = React.useMemo(() => {
    return { formState, updateForm: updateState, finishOnBoarding };
  }, [updateState, formState, finishOnBoarding]);

  return (
    <OnBoardingContext.Provider value={value}>
      {children}
    </OnBoardingContext.Provider>
  );
};

export default Provider;
