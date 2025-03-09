import type { Meta, StoryObj } from '@storybook/react';
import PasswordField, { PasswordFieldProps } from './PasswordField';

const meta = {
  title: 'Components/PasswordField',
  component: PasswordField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<PasswordFieldProps>;

export default meta;
type Story = StoryObj<PasswordFieldProps>;

export const Default: Story = {
  args: {
    id: 'login__username__passwordField',
    label: 'Password',
    name: 'password',
    placeholder: 'Enter Password',
    className: 'w-[20rem]',
  },
};
