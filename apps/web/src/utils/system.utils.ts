import { sumBy } from '@repo/utils/common';

export const calculateTotalSize = (items: { size: number }[]) => {
  return sumBy(items, 'size');
};

/**
 * Converts bytes to the most appropriate unit (Bytes, KB, MB, GB)
 * @param bytes - The size in bytes
 * @param decimals - Number of decimal places to round to (default: 2)
 * @returns Formatted string with the appropriate unit
 */
export const formatFileSize = (bytes: number, decimals = 2): string => {
  if (bytes === 0) {
    return '0 Bytes';
  }

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
};

/**
 * Converts a file size string to bytes
 * @param sizeString - String in format "1.5 MB" or "500 KB"
 * @returns Size in bytes
 */
export const parseFileSize = (sizeString: string): number => {
  const units = {
    B: 1,
    KB: 1024,
    MB: 1024 * 1024,
    GB: 1024 * 1024 * 1024,
    TB: 1024 * 1024 * 1024 * 1024,
  };

  const match = sizeString.match(/^([\d.]+)\s*([A-Za-z]+)$/);
  if (!match) {
    throw new Error('Invalid file size format');
  }

  const [, sizeStr, unit] = match;
  if (!unit || !sizeStr) {
    throw new Error('Invalid unit or size');
  }

  const unitKey = unit.toUpperCase() as keyof typeof units;
  const multiplier = units[unitKey];
  if (!multiplier) {
    throw new Error('Invalid unit');
  }

  return parseFloat(sizeStr) * multiplier;
};
