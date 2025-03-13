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

  const k = 1000;
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
    KB: 1000,
    MB: 1000 * 1000,
    GB: 1000 * 1000 * 1000,
    TB: 1000 * 1000 * 1000 * 1000,
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

const keyStr =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

type RGBColor = {
  red: number;
  green: number;
  blue: number;
};

export const getRgbDataURL = (color?: RGBColor) => {
  const rgbColor = color ?? {
    red: 114,
    green: 136,
    blue: 250,
  };
  return `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, rgbColor.red, rgbColor.green) + triplet(rgbColor.blue, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;
};

export const getIcon = (extension: string) => {
  switch (extension) {
    case 'fig':
      return '/logo/figma.webp';
    case 'sketch':
      return '/logo/sketch.webp';
    case 'xd':
      return '/logo/xd.webp';
    case 'pdf':
      return '/logo/pdf.webp';
    case 'mp3':
      return '/logo/music.webp';
    case 'mp4':
      return '/logo/audio.webp';
    case 'audi':
      return '/logo/voice.webp';
    case 'vid':
      return '/logo/vid.webp';
    default:
      return '/logo/other.webp';
  }
};

export const extractExtension = (name: string) => {
  return name.split('.').pop() ?? '';
};
