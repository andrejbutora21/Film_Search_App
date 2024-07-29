import type { Meta, StoryObj } from '@storybook/react';
import '../index.css';

import { FilmHeader } from '../components/filmPageComponents/filmHeader/filmHeader';
import { Router } from 'react-router-dom';

const meta: Meta<typeof FilmHeader> = {
  title: 'Film Page Components/FilmHeader',
  component: FilmHeader,
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
    title: 'Avengers',
    year: '2012',
    poster: 'https://placehold.co/600x400',
    id: '1',
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
    title: 'Avengers',
    year: '2012',
    poster: 'https://placehold.co/600x400',
    id: '1',
  },
  decorators: [
    (Story) => (
      <Router location={'/'} navigator={mockNavigator}>
        <Story />
      </Router>
    ),
  ],
};
