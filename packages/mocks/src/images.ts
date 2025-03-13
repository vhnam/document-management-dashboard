import * as fs from 'fs';
import { faker } from '@faker-js/faker';
import { maxBy } from '@repo/utils/common';

const generateImage = () => {
  const fileName = faker.company.name();
  const fileExtension = '.jpg';
  const fileSize = faker.number.int({
    min: 1,
    max: 10,
  });
  const lastUpdated = faker.date.recent({ days: 30 });
  const link = faker.image.urlPicsumPhotos();

  return {
    lastUpdated,
    link,
    name: `${fileName}${fileExtension}`,
    size: fileSize * 1000 * 1000, // in MB
  };
};

const generateImageMockData = (maxImages: number) => {
  const mockImages = Array.from(Array(maxImages).keys()).map(() =>
    generateImage()
  );

  // Create dist directory if it doesn't exist
  if (!fs.existsSync('./dist')) {
    fs.mkdirSync('./dist', { recursive: true });
  }

  fs.writeFile(
    './dist/images.json',
    JSON.stringify(
      {
        data: mockImages,
        total: mockImages.length,
        lastUpdated: maxBy(mockImages, 'lastUpdated')?.lastUpdated,
      },
      null,
      2
    ),
    (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('Successfully wrote Image file');
      }
    }
  );
};

export default generateImageMockData;
