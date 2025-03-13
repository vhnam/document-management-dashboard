import * as fs from 'fs';
import { faker } from '@faker-js/faker';

const generateImage = () => {
  const fileName = faker.company.name();
  const fileExtension = '.jpg';
  const fileSize = faker.number.int({
    min: 1,
    max: 100,
  });
  const lastUpdated = faker.date.recent({ days: 30 });
  const link = faker.image.urlPicsumPhotos();

  return {
    name: `${fileName}${fileExtension}`,
    lastUpdated,
    link,
    size: fileSize,
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
      },
      null,
      2
    ),
    (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('Successfully wrote file');
      }
    }
  );
};

export default generateImageMockData;
