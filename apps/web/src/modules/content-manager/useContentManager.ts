import { useState, useMemo } from 'react';
import { sortBy } from '@repo/utils/common';
import { BaseContent, ViewMode } from './ContentManager';

export interface UseContentManagerResult<T extends BaseContent> {
  isAscending: boolean;
  view: ViewMode;
  sortedItems: T[];
  handleSort: () => void;
  handleViewChange: (view: ViewMode) => void;
}

export function useContentManager<T extends BaseContent>(
  items: T[],
  defaultView: ViewMode = 'grid'
): UseContentManagerResult<T> {
  const [isAscending, setIsAscending] = useState(true);
  const [view, setView] = useState<ViewMode>(defaultView);

  const sortedItems = useMemo(() => {
    const sorted = sortBy(items, 'name');
    return isAscending ? sorted : [...sorted].reverse();
  }, [items, isAscending]);

  const handleSort = () => {
    setIsAscending(!isAscending);
  };

  const handleViewChange = (newView: ViewMode) => {
    setView(newView);
  };

  return {
    isAscending,
    view,
    sortedItems,
    handleSort,
    handleViewChange,
  };
}
