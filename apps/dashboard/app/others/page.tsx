'use client';

import { IconButton } from '@repo/ui/components';
import ContentManager from '../../src/modules/content-manager';
import Image from 'next/image';
import others from '@repo/mocks/others';
import {
  extractExtension,
  getIcon,
  getRgbDataURL,
} from '../../src/utils/file.utils';

export interface OtherFile {
  name: string;
  size: number;
  lastUpdated: string;
}

const renderThumbnail = (otherFile: OtherFile) => (
  <IconButton className="bg-default-brand/10 pointer-events-none shadow-none min-w-[40px] shrink-0">
    <Image
      src={getIcon(extractExtension(otherFile.name))}
      alt={otherFile.name}
      width={24}
      height={24}
      className="w-6 h-6 object-cover"
      placeholder="blur"
      blurDataURL={getRgbDataURL()}
    />
  </IconButton>
);

const OthersPage = () => {
  return (
    <ContentManager<OtherFile>
      name="Others"
      data={others.data}
      total={others.total}
      renderThumbnail={renderThumbnail}
    />
  );
};

export default OthersPage;
