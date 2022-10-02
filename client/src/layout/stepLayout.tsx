import React from 'react';

interface StepLayoutProps {
  title: string;
  subTitle?: string;
  children: React.ReactNode;
}

const StepLayout: React.FC<StepLayoutProps> = ({
  title,
  subTitle,
  children,
}) => {
  return (
    <div className="flex flex-col">
      <h2 className="title max-w-full overflow-hidden whitespace-nowrap text-ellipsis text-center mb-3">
        {title}
      </h2>
      {subTitle && <h3 className="body-light text-center mb-4">{subTitle}</h3>}
      {children}
    </div>
  );
};

StepLayout.defaultProps = {
  subTitle: '',
};

export default StepLayout;
