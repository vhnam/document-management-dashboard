import { InputHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils';

export interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  type?: 'email' | 'text' | 'password';
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
}

const TextField = ({
  className,
  endAdornment,
  id,
  label,
  startAdornment,
  type = 'text',
  ...props
}: TextFieldProps) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-2 bg-text-default-white dark:bg-text-dark-02 rounded-md p-4 shadow-01',
        className
      )}
    >
      <label
        htmlFor={id}
        className="body2 text-text-light-01 dark:text-text-dark-03"
      >
        {label}
      </label>
      <div className="flex items-center gap-3 justify-between">
        {startAdornment}
        <input
          id={id}
          type={type}
          className="w-[calc(100%-1rem)] subtitle2 text-text-light-01 placeholder:text-text-light-02/50 dark:text-text-dark-03 dark:placeholder:text-text-dark-03/30 bg-transparent focus:outline-none"
          {...props}
        />
        {endAdornment}
      </div>
    </div>
  );
};

export default TextField;
