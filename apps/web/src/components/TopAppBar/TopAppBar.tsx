import {
  ArrowUpIcon,
  Button,
  CategoryIcon,
  IconButton,
  ListIcon,
} from "@repo/ui/components";
import { cn } from "@repo/utils/ui";

export type SortField = "name";

export interface TopAppBarProps {
  name: string;
  onSort?: (field: SortField) => void;
  sortField?: SortField;
  isAscending?: boolean;
  totalItems?: number;
}

const TopAppBar = ({
  name,
  onSort,
  sortField = "name",
  isAscending = true,
  totalItems = 0,
}: TopAppBarProps) => {
  return (
    <div>
      <h1 className="h1 text-text-light-01 dark:text-text-dark-03">{name}</h1>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="body1">Total:</span>
          &nbsp;
          <span className="h5">{totalItems} items</span>
        </div>

        <div className="flex items-center gap-5">
          <Button
            variant="ghost"
            onClick={() => onSort?.("name")}
            endAdornment={
              <ArrowUpIcon
                width={22}
                height={22}
                className={cn(
                  "text-text-light-01 dark:text-text-dark-03",
                  sortField === "name" && {
                    "rotate-180": !isAscending,
                    "transition-transform duration-200": true,
                  }
                )}
              />
            }
          >
            Name
          </Button>
          <IconButton
            className={cn("bg-default-white dark:bg-text-dark-02 size-11 p-0")}
          >
            <ListIcon
              width={22}
              height={22}
              className={cn("text-text-light-01 dark:text-text-dark-03")}
            />
          </IconButton>

          <IconButton
            className={cn("bg-default-white dark:bg-text-dark-02 size-11 p-0")}
          >
            <CategoryIcon
              width={22}
              height={22}
              className={cn("text-text-light-01 dark:text-text-dark-03")}
            />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default TopAppBar;
