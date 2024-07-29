import type { Meta, StoryObj } from '@storybook/react';
import '../index.css';

import { Ratings } from '../components/filmPageComponents/ratings/ratings';

const meta: Meta<typeof Ratings> = {
  title: 'Film Page Components/Ratings',
  component: Ratings,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  args: {
    ratings: [
      {
        name: 'IMDb',
        rating: '8.5/10',
      },
      {
        name: 'Rotten Tomatoes',
        rating: '95%',
      },
      {
        name: 'Metacritic',
        rating: '85/100',
      },
    ],
  },
};
