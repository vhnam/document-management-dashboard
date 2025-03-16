import { cn } from '@repo/utils/ui';
import Link from 'next/link';
import { PropsWithChildren, ReactNode } from 'react';

export interface SidebarItemProps extends PropsWithChildren {
  active?: boolean;
  icon: ReactNode;
  href?: string;
}

const sidebarItemStateStyle = {
  active:
    'bg-default-brand dark:bg-default-brand text-default-white dark:text-default-white',
  deactivate:
    'bg-default-white dark:bg-text-dark-02 text-text-light-01 dark:text-text-dark-03',
};

const SidebarItem = ({
  active = false,
  children,
  icon,
  href = '#',
}: SidebarItemProps) => {
  return (
    <Link href={href}>
      <button
        className={cn(
          'w-full py-4 px-8 flex items-center gap-[1.125rem] rounded-full',
          sidebarItemStateStyle[active ? 'active' : 'deactivate']
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
    </Link>
  );
};

export default SidebarItem;
