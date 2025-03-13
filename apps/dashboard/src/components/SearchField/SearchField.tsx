import { SearchIcon } from '@repo/ui/components';
import { cn } from '@repo/utils/ui';
import { InputHTMLAttributes } from 'react';

export interface SearchFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {}

const SearchField = ({ className, ...props }: SearchFieldProps) => {
  return (
    <div
      className={cn(
        'bg-default-white dark:bg-text-dark-01 rounded-full p-4 shadow-03',
        className
      )}
    >
      <div className="flex items-center gap-2">
        <SearchIcon className="text-text-light-01 dark:text-text-dark-03" />
        <input
          type="text"
          className="w-[calc(100%-1rem)] body2 text-text-light-01 placeholder:text-text-light-02/50 dark:text-text-dark-03 dark:placeholder:text-text-dark-03/30 bg-transparent focus:outline-none"
          {...props}
        />
      </div>
    </div>
  );
};

export default SearchField;
