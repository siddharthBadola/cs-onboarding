import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  className = '',
  children,
  ...rest
}) => {
  return (
    <button
      className={`bg-primary-600 p-4 text-white min-w-[150px] max-w-full text-center rounded ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: '',
};

export default Button;
