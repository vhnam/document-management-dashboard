import * as fs from 'fs';
import { faker } from '@faker-js/faker';
import { maxBy } from '@repo/utils/common';

const fileExtensions = ['.vid', '.audi', '.mp3', '.mp4'];

const generateMedia = () => {
  const fileName = faker.book.title();
  const fileExtension = faker.helpers.arrayElement(fileExtensions);
  const fileSize = faker.number.int({
    min: 1,
    max: 20,
  });
  const lastUpdated = faker.date.recent({ days: 30 });

  return {
    lastUpdated,
    name: `${fileName}${fileExtension}`,
    size: fileSize * 1000 * 1000, // in MB
  };
};

const generateMediaMockData = (maxMedias: number) => {
  const mockMedias = Array.from(Array(maxMedias).keys()).map(() =>
    generateMedia()
  );

  // Create dist directory if it doesn't exist
  if (!fs.existsSync('./dist')) {
    fs.mkdirSync('./dist', { recursive: true });
  }

  fs.writeFile(
    './dist/medias.json',
    JSON.stringify(
      {
        data: mockMedias,
        total: mockMedias.length,
        lastUpdated: maxBy(mockMedias, 'lastUpdated')?.lastUpdated,
      },
      null,
      2
    ),
    (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('Successfully wrote Media file');
      }
    }
  );
};

export default generateMediaMockData;
