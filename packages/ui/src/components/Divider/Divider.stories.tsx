import type { Meta, StoryObj } from '@storybook/react';
import Divider, { DividerProps } from './Divider';

const meta = {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    // layout: "centered",
  },
  tags: ['autodocs'],
} satisfies Meta<DividerProps>;

export default meta;
type Story = StoryObj<DividerProps>;

export const Default = {
  args: {},
};

export const WithChildren = {
  args: {
    children: 'or',
  },
};
