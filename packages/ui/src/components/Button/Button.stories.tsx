import type { Meta, StoryObj } from '@storybook/react';
import { DropdownIcon, UploadIcon } from '../Icons';
import Button, { ButtonProps } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const DisabledPrimary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    disabled: true,
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
};

export const DisabledGhost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
    disabled: true,
  },
};

export const StartAdornment: Story = {
  args: {
    children: 'Upload',
    startAdornment: <UploadIcon className="text-white-default" />,
    variant: 'primary',
  },
};

export const EndAdornment: Story = {
  args: {
    children: 'Select',
    endAdornment: <DropdownIcon className="text-white-default" />,
    variant: 'primary',
  },
};
