import type { Meta, StoryObj } from '@storybook/react';
import { DashboardIcon } from '../Icons';
import IconButton, { IconButtonProps } from './IconButton';

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<IconButtonProps>;

export default meta;
type Story = StoryObj<IconButtonProps>;

export const Example = {
  render: () => (
    <IconButton>
      <DashboardIcon />
    </IconButton>
  ),
};
