'use client';

import { cn } from '@repo/utils/ui';
import MenuItem, { MenuItemProps } from './MenuItem';
import { useId } from 'react';
import { uuid } from '@repo/utils/common';
export interface MenuProps {
  items?: MenuItemProps[];
  className?: string;
  menuItemClassName?: string;
  onItemClick?: () => void;
}

const Menu = ({
  items = [],
  className,
  menuItemClassName,
  onItemClick,
}: MenuProps) => {
  const menuId = useId();

  if (!items?.length) {
    return null;
  }

  return (
    <div
      className={cn(
        'py-3 min-w-48 rounded-md shadow-lg bg-white dark:bg-text-dark-02',
        className
      )}
      role="menu"
      aria-orientation="vertical"
      aria-labelledby={menuId}
    >
      {items.map((item) => (
        <MenuItem
          key={`menuItem-${uuid()}`}
          className={menuItemClassName}
          {...item}
        />
      ))}
    </div>
  );
};

export default Menu;
