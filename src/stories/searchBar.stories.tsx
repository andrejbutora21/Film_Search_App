import type { Meta, StoryObj } from '@storybook/react';
import '../index.css';

import { SearchBar } from '../components/searchPageComponents/searchBar/searchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'Search Page Components/SearchBar',
  component: SearchBar,
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
    defaultValue: '',
  },
};
