import type { Meta, StoryObj } from '@storybook/react';
import '../index.css';

import { RatingHeader } from '../components/filmPageComponents/ratingHeader/ratingHeader';

const meta: Meta<typeof RatingHeader> = {
  title: 'Film Page Components/RatingHeader',
  component: RatingHeader,
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
    score: '8.5/10',
  },
};
