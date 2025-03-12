import { cn } from '@repo/utils/ui';
import { PropsWithChildren } from 'react';

export interface IconWrapperProps extends PropsWithChildren {
  backgroundColor: string;
}

const IconWrapper = ({ children, backgroundColor }: IconWrapperProps) => (
  <div
    className={cn(
      'size-16 rounded-full flex items-center justify-center',
      backgroundColor
    )}
  >
    {children}
  </div>
);

export default IconWrapper;
