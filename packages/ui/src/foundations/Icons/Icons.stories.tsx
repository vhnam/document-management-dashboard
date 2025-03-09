import type { Meta, StoryObj } from '@storybook/react';
import { Fragment } from 'react';
import Icons from './Icons';

const meta = {
  title: 'Foundation/Icons',
  component: Fragment,
} satisfies Meta<typeof Fragment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return <Icons />;
  },
};
