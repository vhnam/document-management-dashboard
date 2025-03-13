'use client';

import documents from '@repo/mocks/documents';
import images from '@repo/mocks/images';
import { sum, sumBy } from '@repo/utils/common';

import { formatFileSize } from '../../../utils/system.utils';
import GaugeChart from './GaugeChart';

interface StorageDetails {
  used: number;
  total: number;
}

const usedStorage = sum([
  sumBy(documents.data, 'size'),
  sumBy(images.data, 'size'),
]);

const AvailableStorage = () => {
  const storageDetails: StorageDetails = {
    used: usedStorage,
    total: 20 * 1024 * 1024,
  };

  const percentage = Math.round(
    (storageDetails.used / storageDetails.total) * 100
  );

  return (
    <div className="flex flex-col gap-4 p-4 bg-default-brand rounded-[1.25rem]">
      <div className="flex items-center gap-4">
        <GaugeChart percentage={percentage} />
        <div>
          <strong className="h3 text-default-white">Available Storage</strong>
          <p className="subtitle1 text-default-white">
            {formatFileSize(storageDetails.used)} /{' '}
            {formatFileSize(storageDetails.total)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AvailableStorage;
