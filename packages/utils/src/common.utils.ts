export { default as maxBy } from 'lodash/maxBy';
export { default as round } from 'lodash/round';
export { default as sortBy } from 'lodash/sortBy';
export { default as sum } from 'lodash/sum';
export { default as sumBy } from 'lodash/sumBy';

export const parseNumber = (
  value: string | number,
  numberType: 'float' | 'int' = 'float'
) => {
  try {
    if (numberType === 'float') {
      return parseFloat(value as string);
    }
    return parseInt(value as string);
  } catch (error) {
    return 0;
  }
};
