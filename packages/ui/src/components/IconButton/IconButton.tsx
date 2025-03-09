import cn from 'clsx';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

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
    'p-4 shadow-md rounded-full dark:bg-default-white/10 text-text-light-01 dark:text-text-dark-03';

  return (
    <button className={cn(baseClasses)} {...props}>
      {children}
    </button>
  );
};

export default IconButton;
