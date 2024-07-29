import type { Meta, StoryObj } from '@storybook/react';
import '../index.css';

import { FilmInfo } from '../components/filmPageComponents/filmInfo/filmInfo';

const meta: Meta<typeof FilmInfo> = {
  title: 'Film Page Components/FilmInfo',
  component: FilmInfo,
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
    plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    features: [
      { feature: 'Runtime', details: '143 min' },
      { feature: 'Released', details: '04 May 2012' },
      { feature: 'Genre', details: 'Action, Adventure, Sci-Fi' },
      { feature: 'Language', details: 'English, Russian, Hindi' },
      { feature: 'Country', details: 'USA' },
      { feature: 'Director', details: 'Joss Whedon' },
      { feature: 'Writer', details: 'Joss Whedon, Zak Penn' },
      {
        feature: 'Actors',
        details: 'Robert Downey Jr., Chris Evans, Scarlett Johansson',
      },
    ],
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
  args: {
    plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    features: [
      { feature: 'Runtime', details: '143 min' },
      { feature: 'Released', details: '04 May 2012' },
      { feature: 'Genre', details: 'Action, Adventure, Sci-Fi' },
      { feature: 'Language', details: 'English, Russian, Hindi' },
      { feature: 'Country', details: 'USA' },
      { feature: 'Director', details: 'Joss Whedon' },
      { feature: 'Writer', details: 'Joss Whedon, Zak Penn' },
      {
        feature: 'Actors',
        details: 'Robert Downey Jr., Chris Evans, Scarlett Johansson',
      },
    ],
  },
};
