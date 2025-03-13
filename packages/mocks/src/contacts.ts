import * as fs from 'fs';
import { faker } from '@faker-js/faker';

const generateContact = () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email({ firstName, lastName }).toLowerCase();
  const avatar = faker.image.avatar();

  return {
    avatar,
    name: `${firstName} ${lastName}`,
    email,
  };
};

const generateContactMockData = (maxContacts: number) => {
  const mockContacts = Array.from(Array(maxContacts).keys()).map(() =>
    generateContact()
  );

  // Create dist directory if it doesn't exist
  if (!fs.existsSync('./dist')) {
    fs.mkdirSync('./dist', { recursive: true });
  }

  fs.writeFile(
    './dist/contacts.json',
    JSON.stringify(
      {
        data: mockContacts,
        total: mockContacts.length,
        lastUpdated: new Date(),
      },
      null,
      2
    ),
    (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('Successfully wrote Contact file');
      }
    }
  );
};

export default generateContactMockData;
