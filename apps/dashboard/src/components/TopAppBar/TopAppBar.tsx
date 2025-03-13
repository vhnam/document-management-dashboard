'use client';

import {
  ArrowUpIcon,
  Button,
  CategoryIcon,
  IconButton,
  ListIcon,
} from '@repo/ui/components';
import { cn } from '@repo/utils/ui';

export type SortField = 'name';

export interface TopAppBarProps {
  isAscending?: boolean;
  name: string;
  sortField?: SortField;
  totalItems?: number;
  view?: 'list' | 'grid';
  onSort?: (field: SortField) => void;
  onViewChange?: (view: 'list' | 'grid') => void;
}

const TopAppBar = ({
  isAscending = true,
  name,
  sortField = 'name',
  totalItems = 0,
  view = 'list',
  onSort,
  onViewChange,
}: TopAppBarProps) => {
  return (
    <div>
      <h1 className="h1 text-text-light-01 dark:text-text-dark-03">{name}</h1>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="body1">Total:</span>
          &nbsp;
          <span className="h5">{totalItems} items</span>
        </div>

        <div className="flex items-center gap-5">
          <Button
            variant="ghost"
            onClick={() => onSort?.('name')}
            endAdornment={
              <ArrowUpIcon
                width={22}
                height={22}
                className={cn(
                  'text-text-light-01 dark:text-text-dark-03',
                  sortField === 'name' && {
                    'rotate-180': !isAscending,
                    'transition-transform duration-200': true,
                  }
                )}
              />
            }
          >
            Name
          </Button>
          <IconButton
            className={cn(
              'bg-default-white dark:bg-text-dark-02 size-11 p-0',
              view === 'list' && 'bg-default-brand dark:bg-default-brand'
            )}
            onClick={() => onViewChange?.('list')}
          >
            <ListIcon
              width={22}
              height={22}
              className={cn(
                'text-text-light-01 dark:text-text-dark-03/50',
                view === 'list' &&
                  'text-default-white dark:text-text-default-white'
              )}
            />
          </IconButton>

          <IconButton
            className={cn(
              'bg-default-white dark:bg-text-dark-02 size-11 p-0',
              view === 'grid' && 'bg-default-brand dark:bg-default-brand'
            )}
            onClick={() => onViewChange?.('grid')}
          >
            <CategoryIcon
              width={22}
              height={22}
              className={cn(
                'text-text-light-01 dark:text-text-dark-03/50',
                view === 'grid' &&
                  'text-default-white dark:text-text-default-white'
              )}
            />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default TopAppBar;
