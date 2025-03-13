import { Divider } from '@repo/ui/components';
import { FolderProps } from './Folder';
import { formatLastUpdated } from '../../utils/date.utils';

const FolderContent = ({
  fileSize,
  name,
  lastUpdated,
}: Omit<FolderProps, 'icon'>) => (
  <div className="absolute inset-0 flex flex-col justify-between text-text-light-01 dark:text-text-dark-03 py-[1.25rem] px-4">
    <p className="text-right h4">{fileSize}GB</p>
    <strong className="text-center block h5">{name}</strong>
    <Divider />
    <div>
      <p className="text-center body1 text-text-light-02 dark:text-text-dark-03">
        Last updated
      </p>
      <p className="text-center body1">{formatLastUpdated(lastUpdated)}</p>
    </div>
  </div>
);

export default FolderContent;
