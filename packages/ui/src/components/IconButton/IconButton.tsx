import Image from 'next/image';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export interface ButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

const IconButton = ({
  className,
  children,
  disabled = false,
  ...props
}: ButtonProps) => {
  const baseClasses = 'p-[10px] shadow-md rounded-full button';

  return <button {...props}>{children}</button>;
};

export default IconButton;
