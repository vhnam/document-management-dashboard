import dayjs from 'dayjs';

export const formatDateTime = (date: Date, template?: string) =>
  dayjs(date).format(template);

export const isSame = (date: Date, compare: Date, unit: dayjs.OpUnitType) =>
  dayjs(date).isSame(compare, unit);
