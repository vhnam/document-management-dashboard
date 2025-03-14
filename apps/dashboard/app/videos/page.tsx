'use client';

import { IconButton } from '@repo/ui/components';
import ContentManager from '../../src/modules/content-manager';
import medias from '@repo/mocks/medias';
import Image from 'next/image';
import {
  extractExtension,
  getIcon,
  getRgbDataURL,
} from '../../src/utils/file.utils';

export interface Media {
  name: string;
  size: number;
  lastUpdated: string;
}

const renderThumbnail = (media: Media) => (
  <IconButton className="bg-default-brand/10 pointer-events-none shadow-none min-w-[40px] shrink-0">
    <Image
      src={getIcon(extractExtension(media.name))}
      alt={media.name}
      width={24}
      height={24}
      className="w-6 h-6 object-cover"
    />
  </IconButton>
);

const VideosPage = () => {
  return (
    <ContentManager<Media>
      name="Video, Audio"
      data={medias.data}
      total={medias.total}
      renderThumbnail={renderThumbnail}
    />
  );
};

export default VideosPage;
