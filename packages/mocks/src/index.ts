import generateDocumentMockData from './documents.js';
import generateImageMockData from './images.js';
import generateMediaMockData from './medias.js';
import generateOtherFileMockData from './others.js';

Promise.all([
  generateDocumentMockData(100),
  generateImageMockData(100),
  generateMediaMockData(100),
  generateOtherFileMockData(100),
]);
