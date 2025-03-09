import { InputHTMLAttributes } from 'react';
import cn from 'clsx';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

const Checkbox = ({ label, className, id, ...props }: CheckboxProps) => {
  const baseClasses = cn(
    'w-6 h-6 accent-default-brand bg-transparent border-text-light-02 rounded',
    className
  );

  return (
    <div className="flex items-center gap-3">
      <input id={id} type="checkbox" className={baseClasses} {...props} />
      <label
        htmlFor={id}
        className="body2 text-text-light-01 dark:text-text-dark-03 cursor-pointer select-none"
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
