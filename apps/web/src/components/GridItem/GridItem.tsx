import { ReactNode } from 'react';
import { formatLastUpdated } from '../../utils/date.utils';
import { IconButton, OptionIcon } from '@repo/ui/components';

export interface GridItemProps {
  name: string;
  size: string;
  lastUpdated: Date;
  thumbnail: ReactNode;
}

const GridItem = ({ name, size, lastUpdated, thumbnail }: GridItemProps) => {
  return (
    <div className="bg-default-white dark:bg-text-dark-02 rounded-xl p-4">
      <div className="flex justify-between mb-6">
        <div>{thumbnail}</div>
        <div className="flex flex-col items-end gap-1">
          <IconButton className="shadow-none shrink-0 -mr-4">
            <OptionIcon />
          </IconButton>
          <p className="body2 text-text-light-01/70 dark:text-text-dark-03/70 truncate">
            {size}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-1 min-w-0 flex-1 overflow-hidden">
        <p className="subtitle2 text-text-light-01 dark:text-text-dark-03 truncate max-w-full">
          {name}
        </p>
        <p className="body2 text-text-light-01/70 dark:text-text-dark-03/70 truncate">
          {formatLastUpdated(lastUpdated)}
        </p>
      </div>
    </div>
  );
};

export default GridItem;
