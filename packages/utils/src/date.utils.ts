import dayjs from 'dayjs';

export const format = (date: Date, template?: string) =>
  dayjs(date).format(template);
