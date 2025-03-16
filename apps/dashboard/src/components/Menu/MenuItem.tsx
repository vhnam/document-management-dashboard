import { cn } from '@repo/utils/ui';
import Link from 'next/link';
import { MouseEvent, KeyboardEvent, PropsWithChildren } from 'react';

export interface MenuItemProps extends PropsWithChildren {
  className?: string;
  href?: string;
  isPlainDiv?: boolean;
  onClick?: (
    e: MouseEvent<HTMLButtonElement | HTMLAnchorElement | HTMLDivElement>
  ) => void;
}

const MenuItem = ({
  children,
  className,
  href,
  isPlainDiv,
  onClick,
}: MenuItemProps) => {
  const commonClasses = cn(
    'block w-full text-left px-5 py-4 subtitle2 text-text-light-01 dark:text-text-dark-03',
    className
  );

  const handleKeyDown = (
    e: KeyboardEvent<HTMLDivElement | HTMLButtonElement | HTMLAnchorElement>
  ) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.(
        e as unknown as MouseEvent<
          HTMLDivElement | HTMLButtonElement | HTMLAnchorElement
        >
      );
    }
  };

  if (isPlainDiv) {
    return (
      <div
        className={commonClasses}
        role="menuitem"
        onClick={onClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {children}
      </div>
    );
  }

  return (
    <>
      {href ? (
        <Link
          href={href}
          className={commonClasses}
          role="menuitem"
          onClick={onClick}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {children}
        </Link>
      ) : (
        <button
          onClick={onClick}
          onKeyDown={handleKeyDown}
          className={commonClasses}
          role="menuitem"
        >
          {children}
        </button>
      )}
    </>
  );
};

export default MenuItem;
