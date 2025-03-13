import * as fs from 'fs';
import { faker } from '@faker-js/faker';

const fileExtensions = ['fig', 'sketch', 'xd', 'pdf'];

const generateDocument = () => {
  const fileName = faker.system.fileName();
  const fileExtension = faker.helpers.arrayElement(fileExtensions);
  const fileSize = faker.number.int({
    min: 1,
    max: 100,
  });
  const lastUpdated = faker.date.recent({ days: 30 });

  return {
    name: `${fileName}.${fileExtension}`,
    size: fileSize * 1000, // in KB
    lastUpdated,
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

export default generateDocumentMockData;
