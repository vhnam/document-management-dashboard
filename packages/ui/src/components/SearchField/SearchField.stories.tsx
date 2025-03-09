import type { Meta, StoryObj } from '@storybook/react';
import SearchField, { SearchFieldProps } from './SearchField';

const meta = {
  title: 'Components/SearchField',
  component: SearchField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<SearchFieldProps>;

export default meta;
type Story = StoryObj<SearchFieldProps>;

export const Default: Story = {
  args: {
    id: 'searchField',
    name: 'search',
    placeholder: 'Search people',
    className: 'w-[20rem]',
  },
};
