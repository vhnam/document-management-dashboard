import { cn } from '@repo/utils/ui';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { useMemo } from 'react';

export type ButtonVariant = 'primary' | 'ghost';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  endAdornment?: ReactNode;
  startAdornment?: ReactNode;
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
  children,
  className,
  disabled = false,
  endAdornment,
  startAdornment,
  variant = 'primary',
  ...props
}: ButtonProps) => {
  const baseClasses =
    'py-[10px] px-[18px] shadow-02 rounded-full button flex gap-2 items-center';

  const baseVariant = useMemo(
    () => (disabled ? 'disabled' : variant),
    [disabled, variant]
  );

  const content = (
    <>
      {startAdornment}
      {children}
      {endAdornment}
    </>
  );

  return (
    <button
      {...props}
      className={cn(baseClasses, buttonVariantStyles[baseVariant], className)}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;
