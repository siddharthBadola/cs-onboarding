import React from 'react';

import type { StepProps } from 'types';
import useOnBoardingContext from 'hooks/useOnBoardingContext';

import Input from 'components/formInputs/input';
import StepLayout from 'layout/stepLayout';
import Button from 'components/button/button';
import ErrorStrip from 'components/errorStrip/errorStrip';

const Step1: React.FC<StepProps> = ({ next }) => {
  const [error, setError] = React.useState<null | string>(null);

  const { updateForm } = useOnBoardingContext();

  const fullNameInputRef = React.useRef<HTMLInputElement>(null);
  const displayNameInputRef = React.useRef<HTMLInputElement>(null);

  const checkError = () => {
    const fullNameInput = fullNameInputRef.current;
    const displayNameInput = displayNameInputRef.current;

    let tempError: string | null = null;

    if (!displayNameInput || !displayNameInput.value.trim()) {
      tempError = 'Please Provide valid display name value';
    }

    if (!fullNameInput || !fullNameInput.value.trim()) {
      tempError = 'Please Provide valid full name value.';
    }

    return tempError;
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const tempError = checkError();

    if (!tempError) {
      updateForm({
        displayName: displayNameInputRef.current?.value.trim(),
        fullName: fullNameInputRef.current?.value.trim(),
      });
      next?.();
    } else {
      setError(tempError);
    }
  };
  return (
    <StepLayout
      title="Welcome! First things First"
      subTitle="You can always change them later"
    >
      {error && <ErrorStrip error={error} />}
      <form
        className="p-4 w-full max-w-[400px] mx-auto mt-6"
        onSubmit={formSubmitHandler}
      >
        <Input
          label="Full Name"
          placeholder="Steve Jobs"
          name="fullName"
          id="fullName"
          wrapperClass="mb-4"
          ref={fullNameInputRef}
        />
        <Input
          label="Display Name"
          placeholder="Steve"
          name="displayName"
          id="displayName"
          ref={displayNameInputRef}
        />
        <Button type="submit" className="w-full max-w-full mt-10">
          Create Workspace
        </Button>
      </form>
    </StepLayout>
  );
};

export default Step1;
