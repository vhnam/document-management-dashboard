import cn from 'clsx';
import { ButtonHTMLAttributes, PropsWithChildren, useMemo } from 'react';

export type ButtonVariant = 'primary' | 'ghost';

export interface ButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  variant?: ButtonVariant;
}

const buttonVariantStyles = {
  primary:
    'bg-default-brand dark:bg-default-brand text-default-white dark:text-default-white',
  ghost:
    'bg-default-white dark:bg-text-dark-02 text-text-light-01 dark:text-text-dark-03',
  disabled:
    'bg-default-brand/20 dark:bg-default-brand/10 dark:text-default-white/40 shadow-none',
};

const Button = ({
  className,
  children,
  disabled = false,
  variant = 'primary',
  ...props
}: ButtonProps) => {
  const baseClasses = 'py-[10px] px-[18px] shadow-md rounded-full button';

  const baseVariant = useMemo(
    () => (disabled ? 'disabled' : variant),
    [disabled, variant]
  );

  return (
    <button
      {...props}
      className={cn(baseClasses, buttonVariantStyles[baseVariant], className)}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
