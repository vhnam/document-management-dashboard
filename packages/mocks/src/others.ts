import * as fs from 'fs';
import { faker } from '@faker-js/faker';
import { maxBy } from '@repo/utils/common';

const fileExtensions = ['.cc', '.ddr', '.dtf'];

const generateOtherFile = () => {
  const fileName = faker.book.title();
  const fileExtension = faker.helpers.arrayElement(fileExtensions);
  const fileSize = faker.number.int({
    min: 1,
    max: 10,
  });
  const lastUpdated = faker.date.recent({ days: 30 });

  return {
    lastUpdated,
    name: `${fileName}${fileExtension}`,
    size: fileSize * 1000 * 1000, // in MB
  };
};

const generateOtherFileMockData = (maxOtherFiles: number) => {
  const mockOtherFiles = Array.from(Array(maxOtherFiles).keys()).map(() =>
    generateOtherFile()
  );

  // Create dist directory if it doesn't exist
  if (!fs.existsSync('./dist')) {
    fs.mkdirSync('./dist', { recursive: true });
  }

  fs.writeFile(
    './dist/others.json',
    JSON.stringify(
      {
        data: mockOtherFiles,
        total: mockOtherFiles.length,
        lastUpdated: maxBy(mockOtherFiles, 'lastUpdated')?.lastUpdated,
      },
      null,
      2
    ),
    (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('Successfully wrote Others file');
      }
    }
  );
};

export default generateOtherFileMockData;
