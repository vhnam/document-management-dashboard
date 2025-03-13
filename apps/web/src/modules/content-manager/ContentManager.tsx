import { cn } from '@repo/utils/ui';
import { useContentManager } from './useContentManager';
import ListItem from '../../components/ListItem';
import { formatFileSize } from '../../utils/file.utils';
import GridItem from '../../components/GridItem';
import TopAppBar from '../../components/TopAppBar';

export interface BaseContent {
  name: string;
  size: number;
  lastUpdated: string;
}

export interface Document extends BaseContent {
  extension: string;
}

export interface Image extends BaseContent {
  link: string;
}

export type ViewMode = 'list' | 'grid';

export interface ContentManagerProps<T extends BaseContent> {
  name: string;
  data: T[];
  total: number;
  renderThumbnail: (item: T) => React.ReactNode;
  defaultView?: ViewMode;
}

function ContentManager<T extends BaseContent>({
  name,
  data,
  total,
  renderThumbnail,
  defaultView = 'list',
}: ContentManagerProps<T>) {
  const { isAscending, view, sortedItems, handleSort, handleViewChange } =
    useContentManager(data, defaultView);

  if (!Array.isArray(data)) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-text-light-01 dark:text-text-dark-03">
          Error loading {name.toLowerCase()}
        </p>
      </div>
    );
  }

  const renderListItem = (item: T) => {
    return (
      <ListItem
        key={`${item.name}-${item.lastUpdated}`}
        name={item.name}
        size={formatFileSize(item.size)}
        lastUpdated={new Date(item.lastUpdated)}
        thumbnail={renderThumbnail(item)}
      />
    );
  };

  const renderGridItem = (item: T) => {
    return (
      <GridItem
        key={`${item.name}-${item.lastUpdated}`}
        name={item.name}
        size={formatFileSize(item.size)}
        lastUpdated={new Date(item.lastUpdated)}
        thumbnail={renderThumbnail(item)}
      />
    );
  };

  const renderItem = (item: T) => {
    return view === 'list' ? renderListItem(item) : renderGridItem(item);
  };

  return (
    <div className="min-h-screen">
      <div className="mb-9">
        <TopAppBar
          name={name}
          view={view}
          onSort={handleSort}
          sortField="name"
          isAscending={isAscending}
          totalItems={total}
          onViewChange={handleViewChange}
        />
      </div>
      <div
        className={cn(
          'grid grid-cols-4 gap-6',
          view === 'list' && 'grid-cols-2'
        )}
      >
        {sortedItems.map((item: T) => renderItem(item))}
      </div>
    </div>
  );
}

export default ContentManager;
