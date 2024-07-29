import type { Meta, StoryObj } from '@storybook/react';
import '../index.css';

import { FilmFeature } from '../components/filmPageComponents/filmFeature/filmFeature';

const meta: Meta<typeof FilmFeature> = {
  title: 'Film Page Components/FilmFeature',
  component: FilmFeature,
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
    feature: 'Director',
    details: 'Joss Whedon',
  },
};
