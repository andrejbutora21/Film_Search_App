import type { Meta, StoryObj } from '@storybook/react';
import '../index.css';

import { SearchBody } from '../components/searchPageComponents/searchBody/searchBody';
import { Router } from 'react-router-dom';

const meta: Meta<typeof SearchBody> = {
  title: 'Search Page Components/SearchBody',
  component: SearchBody,
};

export default meta;

type Story = StoryObj<typeof meta>;

const mockNavigator = {
  createHref: () => '',
  go: () => '',
  push: () => '',
  replace: () => '',
};

export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  args: {
    films: [
      {
        title: 'Avengers',
        year: '2012',
        poster: 'https://placehold.co/600x400',
        id: '1',
      },
      {
        title: 'Avengers: Age of Ultron',
        year: '2015',
        poster: 'https://placehold.co/600x400',
        id: '2',
      },
      {
        title: 'Avengers: Infinity War',
        year: '2018',
        poster: 'https://placehold.co/600x400',
        id: '3',
      },
    ],
  },
  decorators: [
    (Story) => (
      <Router location={'/'} navigator={mockNavigator}>
        <Story />
      </Router>
    ),
  ],
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
  args: {
    films: [
      {
        title: 'Avengers',
        year: '2012',
        poster: 'https://placehold.co/600x400',
        id: '1',
      },
      {
        title: 'Avengers: Age of Ultron',
        year: '2015',
        poster: 'https://placehold.co/600x400',
        id: '2',
      },
      {
        title: 'Avengers: Infinity War',
        year: '2018',
        poster: 'https://placehold.co/600x400',
        id: '3',
      },
    ],
  },
  decorators: [
    (Story) => (
      <Router location={'/'} navigator={mockNavigator}>
        <Story />
      </Router>
    ),
  ],
};
