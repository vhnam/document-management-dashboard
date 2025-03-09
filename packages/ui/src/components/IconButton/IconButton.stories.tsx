import type { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from './IconButton';
import IconButton from './IconButton';

const meta = {
  title: 'Components/IconButton',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Example = {
  render: () => {
    <IconButton>AHIIH</IconButton>;
  },
};
