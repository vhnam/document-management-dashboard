import generateDocumentMockData from './documents.js';
import generateContactMockData from './contacts.js';
import generateImageMockData from './images.js';
import generateMediaMockData from './medias.js';
import generateOtherFileMockData from './others.js';

Promise.all([
  generateContactMockData(20),
  generateDocumentMockData(100),
  generateImageMockData(100),
  generateMediaMockData(100),
  generateOtherFileMockData(100),
]);
