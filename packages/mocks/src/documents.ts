import * as fs from 'fs';
import { faker } from '@faker-js/faker';
import { maxBy } from '@repo/utils/common';

const fileExtensions = ['fig', 'sketch', 'xd', 'pdf'];

const generateDocument = () => {
  const fileExtension = faker.helpers.arrayElement(fileExtensions);
  const fileName = faker.system.commonFileName(fileExtension);
  const fileSize = faker.number.int({
    min: 1,
    max: 100,
  });
  const lastUpdated = faker.date.recent({ days: 30 });

  return {
    lastUpdated,
    name: fileName,
    size: fileSize * 1000 * 1000, // in MB
  };
};

const generateDocumentMockData = (maxDocuments: number) => {
  const mockDocuments = Array.from(Array(maxDocuments).keys()).map(() =>
    generateDocument()
  );

  // Create dist directory if it doesn't exist
  if (!fs.existsSync('./dist')) {
    fs.mkdirSync('./dist', { recursive: true });
  }

  fs.writeFile(
    './dist/documents.json',
    JSON.stringify(
      {
        data: mockDocuments,
        total: mockDocuments.length,
        lastUpdated: maxBy(mockDocuments, 'lastUpdated')?.lastUpdated,
      },
      null,
      2
    ),
    (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('Successfully wrote Document file');
      }
    }
  );
};

export default generateDocumentMockData;
