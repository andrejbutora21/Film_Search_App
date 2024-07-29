import type { Meta, StoryObj } from '@storybook/react';
import '../index.css';

import { SearchHeader } from '../components/searchPageComponents/searchHeader/searchHeader';

const meta: Meta<typeof SearchHeader> = {
  title: 'Search Page Components/SearchHeader',
  component: SearchHeader,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Favourites: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  args: {
    defaultValue: '',
    favouritesFilmsPage: true,
    setFavorites: () => {},
    setSearchTitle: () => {},
    setCurrentPage: () => {},
  },
};

export const All: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  args: {
    defaultValue: '',
    favouritesFilmsPage: true,
    setFavorites: () => {},
    setSearchTitle: () => {},
    setCurrentPage: () => {},
  },
};
