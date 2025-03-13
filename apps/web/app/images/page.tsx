'use client';

import images from '@repo/mocks/images';
import ContentManager from '../../src/modules/content-manager';
import { IconButton } from '@repo/ui/components';
import NextImage from 'next/image';

export interface Image {
  name: string;
  size: number;
  lastUpdated: string;
  link: string;
}

const renderThumbnail = (image: Image) => (
  <NextImage
    src={image.link}
    width={60}
    height={60}
    alt={image.name}
    className="rounded-full size-[3.75rem] object-cover"
  />
);

const ImagesPage = () => {
  return (
    <ContentManager<Image>
      name="Images"
      data={images.data}
      total={images.total}
      renderThumbnail={renderThumbnail}
    />
  );
};

export default ImagesPage;
