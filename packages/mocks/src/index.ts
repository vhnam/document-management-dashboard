import generateDocumentMockData from "./documents.js";
import generateImageMockData from "./images.js";

Promise.all([generateDocumentMockData(100), generateImageMockData(100)]);
