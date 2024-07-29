import type { Meta, StoryObj } from '@storybook/react';
import '../index.css';

import { Paging } from '../components/searchPageComponents/paging/paging';

const meta: Meta<typeof Paging> = {
  title: 'Search Page Components/Paging',
  component: Paging,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  args: {
    currentPage: 1,
    totalPages: 10,
    setCurrentPage: (_page: number) => {},
  },
};
