import React from 'react';

import type { StepProps } from 'types';
import useOnBoardingContext from 'hooks/useOnBoardingContext';

import Input from 'components/formInputs/input';
import StepLayout from 'layout/stepLayout';
import Button from 'components/button/button';
import ErrorStrip from 'components/errorStrip/errorStrip';

const Step2: React.FC<StepProps> = ({ next }) => {
  const [error, setError] = React.useState<null | string>(null);

  const { updateForm } = useOnBoardingContext();

  const workspaceNameInputRef = React.useRef<HTMLInputElement>(null);
  const workspaceUrlInputRef = React.useRef<HTMLInputElement>(null);

  const checkError = () => {
    const workspaceNameInput = workspaceNameInputRef.current;

    let tempError: string | null = null;

    if (!workspaceNameInput || !workspaceNameInput.value.trim()) {
      tempError = 'Please Provide valid workspace name';
    }

    return tempError;
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const tempError = checkError();

    if (!tempError) {
      updateForm({
        workspaceName: workspaceNameInputRef.current?.value.trim(),
        workspaceUrl: workspaceUrlInputRef.current?.value.trim(),
      });
      next?.();
    } else {
      setError(tempError);
    }
  };
  return (
    <StepLayout
      title="Let's set up a home for all your work"
      subTitle="You can always create another workspace later"
    >
      {error && <ErrorStrip error={error} />}
      <form
        className="p-4 w-full max-w-[400px] mx-auto mt-6"
        onSubmit={formSubmitHandler}
      >
        <Input
          label="Workspace Name"
          placeholder="Eden"
          name="workspace"
          id="workspace"
          wrapperClass="mb-4"
          ref={workspaceNameInputRef}
        />
        <Input
          label="Workspace URL"
          placeholder="Example"
          name="workspaceUrl"
          id="workspaceUrl"
          prepenElement="www/eden.com/"
          optional
          ref={workspaceUrlInputRef}
        />
        <Button type="submit" className="w-full max-w-full mt-10">
          Create Workspace
        </Button>
      </form>
    </StepLayout>
  );
};

export default Step2;
