'use client';

import documents from '@repo/mocks/documents';
import { IconButton } from '@repo/ui/components';
import Image from 'next/image';
import ContentManager from '../../src/modules/content-manager';
import {
  extractExtension,
  getIcon,
  getRgbDataURL,
} from '../../src/utils/file.utils';

export interface Document {
  name: string;
  size: number;
  lastUpdated: string;
}

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
