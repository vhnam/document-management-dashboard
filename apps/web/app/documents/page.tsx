'use client';

import documents from '@repo/mocks/documents';
import { IconButton } from '@repo/ui/components';
import Image from 'next/image';
import ContentManager from '../../src/modules/content-manager';

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

const renderThumbnail = (doc: Document) => (
  <IconButton className="bg-default-brand/10 pointer-events-none shadow-none min-w-[40px] shrink-0">
    <Image
      src={getIcon(extractExtension(doc.name))}
      alt={doc.name}
      width={24}
      height={24}
      className="w-6 h-6 object-cover"
    />
  </IconButton>
);

const DocumentsPage = () => {
  return (
    <ContentManager<Document>
      name="Documents"
      data={documents.data}
      total={documents.total}
      renderThumbnail={renderThumbnail}
    />
  );
};

export default DocumentsPage;
