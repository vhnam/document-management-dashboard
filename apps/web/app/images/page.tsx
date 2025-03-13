'use client';

import { sortBy } from '@repo/utils/common';
import { useMemo, useState } from 'react';
import ListItem from '../../src/components/ListItem';
import TopAppBar, { SortField } from '../../src/components/TopAppBar';

// @ts-ignore
import images from '@repo/mocks/images';
import NextImage from 'next/image';
import GridItem from '../../src/components/GridItem';
import { formatFileSize } from '../../src/utils/system.utils';
import { cn } from '@repo/utils/ui';

export interface Image {
  name: string;
  size: number;
  lastUpdated: string;
  link: string;
}

const ImagesPage = () => {
  const [isAscending, setIsAscending] = useState(true);
  const [view, setView] = useState<'list' | 'grid'>('grid');

  const sortedImages = useMemo(() => {
    const sorted = sortBy(images.data, 'name');
    return isAscending ? sorted : [...sorted].reverse();
  }, [isAscending]);

  const handleSort = (field: SortField) => {
    setIsAscending(!isAscending);
  };

  const handleViewChange = (view: 'list' | 'grid') => {
    setView(view);
  };

  const renderListItem = (image: Image) => {
    return (
      <ListItem
        key={`${image.name}-${image.lastUpdated}`}
        name={image.name}
        size={formatFileSize(image.size)}
        lastUpdated={new Date(image.lastUpdated)}
        thumbnail={
          <NextImage
            src={image.link}
            width={60}
            height={60}
            alt={image.name}
            className="rounded-full size-[3.75rem] object-cover"
          />
        }
      />
    );
  };

  const renderGridItem = (image: Image) => {
    return (
      <GridItem
        key={`${image.name}-${image.lastUpdated}`}
        name={image.name}
        size={formatFileSize(image.size)}
        lastUpdated={new Date(image.lastUpdated)}
        thumbnail={
          <NextImage
            src={image.link}
            width={60}
            height={60}
            alt={image.name}
            className="rounded-full size-[3.75rem] object-cover"
          />
        }
      />
    );
  };

  const renderItem = (image: Image) => {
    return view === 'list' ? renderListItem(image) : renderGridItem(image);
  };

  if (!Array.isArray(images.data)) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-text-light-01 dark:text-text-dark-03">
          Error loading images
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="mb-9">
        <TopAppBar
          name="Images"
          view={view}
          onSort={handleSort}
          sortField="name"
          isAscending={isAscending}
          totalItems={images.total}
          onViewChange={handleViewChange}
        />
      </div>
      <div
        className={cn(
          'grid grid-cols-4 gap-6',
          view === 'list' && 'grid-cols-2'
        )}
      >
        {sortedImages.map((image: Image) => renderItem(image))}
      </div>
    </div>
  );
};

export default ImagesPage;
