import React from 'react';

import { StepProps, UsageScope } from 'types';
import useOnBoardingContext from 'hooks/useOnBoardingContext';

import StepLayout from 'layout/stepLayout';
import Button from 'components/button/button';
import TeamIcon from 'assets/icons/teamIcon';
import SoloIcon from 'assets/icons/soloIcon';

const radioItems = [
  {
    title: 'Form Myself',
    icon: SoloIcon,
    content: 'Write better. Think more clearly. Stay organised',
    name: 'solor',
    value: UsageScope.solo,
  },
  {
    title: 'With my Team',
    icon: TeamIcon,
    content: 'Wikis, docs, tasks & projects, all in one place',
    value: UsageScope.team,
    name: 'team',
  },
];

const Step3: React.FC<StepProps> = ({ next }) => {
  const [usageScope, setUsageScope] = React.useState(UsageScope.solo);

  const { updateForm } = useOnBoardingContext();

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateForm({ usageScope });
    next?.();
  };
  return (
    <StepLayout
      title="How are you planning to use Eden"
      subTitle="We'll stramline your setup experience accordingly."
    >
      <form
        className="p-4 w-full max-w-[500px] mx-auto mt-6"
        onSubmit={formSubmitHandler}
      >
        <div className="flex gap-5 flex-wrap ">
          {radioItems.map(({ icon: Icon, content, title, name, value }) => (
            <label
              htmlFor={name}
              className={`solo border px-5 py-7 min-w-[200px] rounded flex-1 ${
                value === usageScope
                  ? 'border-primary-600 text-primary-600'
                  : 'text-black border-gray-400'
              }`}
              key={value}
            >
              <Icon />
              <h3 className="font-semibold mt-5 body mb-3">{title}</h3>
              <p className="subTitle-light">{content}</p>
              <input
                type="radio"
                name={name}
                id={name}
                value={value}
                className="hidden"
                checked={value === usageScope}
                onChange={() => setUsageScope(value)}
              />
            </label>
          ))}

          <label htmlFor="solo">
            <input
              type="radio"
              name="solo"
              id="solo"
              value="solo"
              className="hidden"
            />
          </label>
        </div>
        <Button type="submit" className="w-full max-w-full mt-10">
          Create Workspace
        </Button>
      </form>
    </StepLayout>
  );
};

export default Step3;
