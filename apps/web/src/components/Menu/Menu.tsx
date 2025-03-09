import { cn } from '@repo/ui/utils';
import { PropsWithChildren, ReactNode } from 'react';

export interface MenuProps extends PropsWithChildren {
  active?: boolean;
  icon: ReactNode;
}

const menuStateStyle = {
  active:
    'bg-default-brand dark:bg-default-brand text-default-white dark:text-default-white',
  deactivate:
    'bg-default-white dark:bg-text-dark-02 text-text-light-01 dark:text-text-dark-03',
};

const Menu = ({ active = false, children, icon }: MenuProps) => {
  return (
    <button
      className={cn(
        'w-full py-4 px-8 flex items-center gap-[1.125rem] rounded-full',
        menuStateStyle[active ? 'active' : 'deactivate']
      )}
    >
      <span
        className={
          active
            ? 'text-default-white'
            : 'text-text-light-01/30 dark:text-text-dark-03/30'
        }
      >
        {icon}
      </span>
      {children}
    </button>
  );
};

export default Menu;
