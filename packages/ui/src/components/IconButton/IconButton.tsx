import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '../../utils';

export interface IconButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

const IconButton = ({
  className,
  children,
  disabled = false,
  ...props
}: IconButtonProps) => {
  const baseClasses =
    'p-4 shadow-02 flex items-center justify-center rounded-full text-text-light-01 dark:text-text-dark-03';

  return (
    <button className={cn(baseClasses, className)} {...props}>
      {children}
    </button>
  );
};

export default IconButton;
