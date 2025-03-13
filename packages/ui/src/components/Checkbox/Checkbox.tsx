import { cn } from '@repo/utils/ui';
import type { InputHTMLAttributes } from 'react';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Checkbox = ({ label, className, id, ...props }: CheckboxProps) => {
  const baseClasses = cn(
    'peer size-6 appearance-none rounded-sm border border-text-light-02 dark:border-text-dark-03 accent-default-brand checked:appearance-auto',
    className
  );

  const inputElement = (
    <input id={id} type="checkbox" className={baseClasses} {...props} />
  );

  if (!label) {
    return inputElement;
  }

  return (
    <div className="flex items-center gap-3">
      {inputElement}
      <label
        htmlFor={id}
        className="body2 text-text-light-01 dark:text-text-dark-03 cursor-pointer select-none"
      >
        {label}
      </label>
    </div>
  );
};
