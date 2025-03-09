import type { Meta, StoryObj } from '@storybook/react';
import TextField, { TextFieldProps } from './TextField';

const meta = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<TextFieldProps>;

export default meta;
type Story = StoryObj<TextFieldProps>;

export const Default: Story = {
  args: {
    id: 'login__username__textfield',
    label: 'Username',
    name: 'username',
    placeholder: 'Enter your username',
    className: 'w-[20rem]',
  },
};
