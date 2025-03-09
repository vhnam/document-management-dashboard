import { PropsWithChildren } from 'react';
import { cn } from '../../utils';

export interface DividerProps extends PropsWithChildren {
  className?: string;
}

const Divider = ({ children, className }: DividerProps) => {
  return (
    <div
      className={cn(
        "before:w-full after:w-full flex shrink-0 items-center before:self-center before:border-text-light-02 dark:before:border-text-dark-03 before:border-t before:content-[''] after:self-center after:border-text-light-02 dark:after:border-text-dark-03 after:border-t after:content-['']",
        className
      )}
    >
      {children && (
        <span className="px-4 text-text-light-01 dark:text-text-dark-03 body1">
          {children}
        </span>
      )}
    </div>
  );
};

export default Divider;
