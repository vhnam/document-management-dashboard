'use client';

import { round, sortBy } from '@repo/utils/common';
import { useMemo, useState } from 'react';
import ListItem from '../../src/components/ListItem';
import TopAppBar, { SortField } from '../../src/components/TopAppBar';

// @ts-ignore
import images from '@repo/mocks/images';
import NextImage from 'next/image';

export interface Image {
  name: string;
  size: number;
  lastUpdated: string;
  link: string;
}

const DocumentsPage = () => {
  const [isAscending, setIsAscending] = useState(true);

  const sortedImages = useMemo(() => {
    const sorted = sortBy(images.data, 'name');
    return isAscending ? sorted : [...sorted].reverse();
  }, [isAscending]);

  const handleSort = (field: SortField) => {
    setIsAscending(!isAscending);
  };

  if (!Array.isArray(images.data)) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-text-light-01 dark:text-text-dark-03">
          Error loading documents
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="mb-9">
        <TopAppBar
          name="Images"
          onSort={handleSort}
          sortField="name"
          isAscending={isAscending}
          totalItems={images.total}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedImages.map((image: Image) => (
          <ListItem
            key={`${image.name}-${image.lastUpdated}`}
            name={image.name}
            size={`${round(image.size, 2)} KB`}
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
        ))}
      </div>
    </div>
  );
};

export default DocumentsPage;
