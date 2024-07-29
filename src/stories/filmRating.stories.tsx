import type { Meta, StoryObj } from '@storybook/react';
import '../index.css';

import { FilmRating } from '../components/filmPageComponents/filmRating/filmRating';

const meta: Meta<typeof FilmRating> = {
  title: 'Film Page Components/FilmRating',
  component: FilmRating,
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
    name: 'Internet Movie Database',
    rating: '8.0/10',
  },
};
