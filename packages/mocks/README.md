# @repo/mocks

A collection of mock data and utilities for testing and development.

## Installation

```bash
pnpm add @repo/mocks
```

## Usage

```typescript
import { mockUsers, mockDocuments, generateMockId, createMockTimestamp } from '@repo/mocks';

// Use mock users
console.log(mockUsers);

// Use mock documents
console.log(mockDocuments);

// Generate a mock ID
const newId = generateMockId();

// Create a mock timestamp
const timestamp = createMockTimestamp();
```

## Available Mocks

### Users
- `MockUser` interface
- `mockUsers` array of sample users

### Documents
- `MockDocument` interface
- `mockDocuments` array of sample documents

### Utility Functions
- `generateMockId()`: Generates a random string ID
- `createMockTimestamp()`: Creates an ISO string timestamp

## Development

```bash
# Build the package
pnpm build

# Run in development mode with watch
pnpm dev

# Lint the code
pnpm lint

# Clean build artifacts
pnpm clean
``` 