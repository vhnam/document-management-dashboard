import { IconButton, OptionIcon } from '@repo/ui/components';
import Image from 'next/image';
import { formatLastUpdated } from '../../utils/date.utils';
import { ReactNode } from 'react';

export interface ListItemProps {
  name: string;
  size: string;
  lastUpdated: Date;
  thumbnail: ReactNode;
}

const ListItem = ({ name, size, lastUpdated, thumbnail }: ListItemProps) => {
  return (
    <div className="flex items-center justify-between gap-2 bg-default-white dark:bg-text-dark-02 rounded-xl pl-4 py-4 cursor-pointer">
      <div className="flex items-center gap-4 min-w-0 flex-1">
        {thumbnail}
        <div className="flex flex-col gap-1 min-w-0 flex-1 overflow-hidden">
          <p className="subtitle2 text-text-light-01 dark:text-text-dark-03 truncate max-w-full">
            {name}
          </p>
          <p className="body2 text-text-light-01/70 dark:text-text-dark-03/70 truncate">
            {size} - {formatLastUpdated(lastUpdated)}
          </p>
        </div>
      </div>
      <IconButton className="shadow-none shrink-0">
        <OptionIcon />
      </IconButton>
    </div>
  );
};

export default ListItem;
