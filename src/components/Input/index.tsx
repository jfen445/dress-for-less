import React from "react";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  type: string;
  name: string;
  id: string;
  pattern?: string;
  required?: boolean;
  value?: string;
  readonly?: boolean;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  autoComplete?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  name,
  id,
  pattern,
  required,
  value,
  readonly,
  className,
  disabled,
  placeholder,
  autoComplete,
  ...props
}) => {
  return (
    <input
      value={value}
      type={type}
      name={name}
      id={id}
      pattern={pattern ?? "(.*?)"}
      required={required ?? false}
      readOnly={readonly ?? false}
      disabled={disabled ?? false}
      placeholder={placeholder}
      autoComplete={autoComplete}
      className={`${className} border border-rose-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
      {...props}
    />
  );
};

export default Input;
