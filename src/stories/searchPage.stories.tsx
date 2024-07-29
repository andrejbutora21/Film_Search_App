import type { Meta, StoryObj } from '@storybook/react';
import '../index.css';

import { SearchPage } from '../components/pages/searchPage/searchPage';
import { Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const meta: Meta<typeof SearchPage> = {
  title: 'Pages/SearchPage',
  component: SearchPage,
};

export default meta;

type Story = StoryObj<typeof meta>;

const mockNavigator = {
  createHref: () => '',
  go: () => '',
  push: () => '',
  replace: () => '',
};

const queryClient = new QueryClient();

export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  decorators: [
    (Story) => (
      <Router location={'/'} navigator={mockNavigator}>
        <Story />
      </Router>
    ),
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
  decorators: [
    (Story) => (
      <Router location={'/'} navigator={mockNavigator}>
        <Story />
      </Router>
    ),
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
};
