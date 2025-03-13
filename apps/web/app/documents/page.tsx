'use client';

import { sortBy } from '@repo/utils/common';
import { useMemo, useState } from 'react';
import ListItem from '../../src/components/ListItem';
import TopAppBar, { SortField } from '../../src/components/TopAppBar';

// @ts-ignore
import documents from '@repo/mocks/documents';
import { IconButton } from '@repo/ui/components';
import Image from 'next/image';

export interface Document {
  name: string;
  size: number;
  lastUpdated: string;
}

const extractExtension = (name: string) => {
  return name.split('.').pop() ?? '';
};

const getIcon = (extension: string) => {
  switch (extension) {
    case 'fig':
      return '/logo/figma.webp';
    case 'sketch':
      return '/logo/sketch.webp';
    case 'xd':
      return '/logo/xd.webp';
    case 'pdf':
      return '/logo/pdf.webp';
    default:
      return '/logo/other.webp';
  }
};

const DocumentsPage = () => {
  const [isAscending, setIsAscending] = useState(true);

  const sortedDocuments = useMemo(() => {
    const sorted = sortBy(documents.data, 'name');
    return isAscending ? sorted : [...sorted].reverse();
  }, [isAscending]);

  const handleSort = (field: SortField) => {
    setIsAscending(!isAscending);
  };

  if (!Array.isArray(documents.data)) {
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
          name="Documents"
          onSort={handleSort}
          sortField="name"
          isAscending={isAscending}
          totalItems={documents.total}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedDocuments.map((doc: Document) => (
          <ListItem
            key={`${doc.name}-${doc.lastUpdated}`}
            name={doc.name}
            size={`${Math.round(doc.size / 1024)} MB`}
            lastUpdated={new Date(doc.lastUpdated)}
            thumbnail={
              <IconButton className="bg-default-brand/10 pointer-events-none shadow-none min-w-[40px] shrink-0">
                <Image
                  src={getIcon(extractExtension(doc.name))}
                  alt={doc.name}
                  width={24}
                  height={24}
                  className="w-6 h-6 object-cover"
                />
              </IconButton>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default DocumentsPage;
