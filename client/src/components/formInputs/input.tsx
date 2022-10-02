import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  optional?: boolean;
  wrapperClass?: string;
  prepenElement?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      type = 'text',
      id,
      name,
      optional,
      className = '',
      wrapperClass = '',
      prepenElement,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={`flex flex-col ${wrapperClass}`}>
        {label && (
          <label htmlFor={id || name} className="body mb-2">
            {label}
            {optional && (
              <span className="body-light"> &nbsp; ( optional )</span>
            )}
          </label>
        )}
        <div className="flex border-[#F4F6F9] rounded-sm form-input p-0 focus-within:outline focus-within:outline-2 focus-within:outline-blue-600 focus-within:outline-offset-1">
          {prepenElement && (
            <div className="input-prepend bg-gray-100 flex items-center px-3 text-gray-600 font-semibold">
              {prepenElement}
            </div>
          )}
          <input
            type={type}
            id={id || name}
            name={name}
            className={`border-none focus:outline-none focus:shadow-none flex-1 p-3 ${className}`}
            style={{ boxShadow: 'none' }}
            ref={ref}
            {...rest}
          />
        </div>
      </div>
    );
  }
);

Input.defaultProps = {
  label: '',
  optional: false,
  wrapperClass: '',
  prepenElement: null,
};

export default Input;
