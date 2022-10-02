/* eslint no-unused-vars: 0 */
import React from 'react';

export type StepHeaderItemType = { title?: string; onClick?: () => void };

export interface StepProps {
  next?: () => void;
}

type StepType = {
  title?: string;
  content: React.ReactNode | React.FC<StepProps>;
};

export type StepsType = StepType[];

// eslint-disable-next-line
export enum UsageScope {
  solo = 'solo',
  team = 'team',
}

export type FormState = {
  workspaceName: string;
  workspaceUrl: string;
  fullName: string;
  displayName: string;
  usageScope: `${UsageScope}`;
};

export interface SVGProps extends React.SVGAttributes<SVGElement> {}

export type OnBoardingContextType = {
  formState: FormState;
  updateForm: (state: Partial<FormState>) => void;
  finishOnBoarding: () => void;
};
