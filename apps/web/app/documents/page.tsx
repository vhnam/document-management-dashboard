import { CategoryIcon, IconButton, ListIcon } from '@repo/ui/components';
import { cn } from '@repo/ui/utils';

const DocumentsPage = () => {
  return (
    <div>
      <h1 className="h1 text-text-light-01 dark:text-text-dark-03">
        Documents
      </h1>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="body1">Total:</span>
          &nbsp;
          <span className="h5">12GB</span>
        </div>

        <div className="flex items-center gap-5">
          <IconButton
            className={cn('bg-default-white dark:bg-text-dark-02 size-11 p-0')}
          >
            <ListIcon
              width={22}
              height={22}
              className={cn('text-text-light-01 dark:text-text-dark-03')}
            />
          </IconButton>

          <IconButton
            className={cn('bg-default-white dark:bg-text-dark-02 size-11 p-0')}
          >
            <CategoryIcon
              width={22}
              height={22}
              className={cn('text-text-light-01 dark:text-text-dark-03')}
            />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default DocumentsPage;
