import React from 'react';

interface ErrorStripProps extends React.AllHTMLAttributes<HTMLDivElement> {
  error: string;
}

const ErrorStrip: React.FC<ErrorStripProps> = ({
  error,
  className,
  ...rest
}) => {
  return (
    <div
      className={`text-base font-semibold self-center text-red-600 p-4 rounded border text-center border-red-600 border-b-4 ${className}`}
      {...rest}
    >
      {error}
    </div>
  );
};

export default ErrorStrip;
