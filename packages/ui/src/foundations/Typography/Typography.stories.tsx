import type { Meta, StoryObj } from '@storybook/react';
import { Fragment } from 'react';
import Typography from './Typography';

const meta = {
  title: 'Foundation/Typography',
  component: Fragment,
} satisfies Meta<typeof Fragment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return <Typography />;
  },
};
