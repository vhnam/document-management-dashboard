import { formatDateTime, isSame } from "@repo/utils/date";

export const formatLastUpdated = (date: Date): string => {
  if (isSame(date, new Date(), "year")) {
    return formatDateTime(date, "h:mm A MMM D");
  }
  return formatDateTime(date, "h:mm A MMM D YYYY");
};
