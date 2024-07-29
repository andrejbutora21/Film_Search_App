import type { Meta, StoryObj } from '@storybook/react';
import '../index.css';

import { FilmPage } from '../components/pages/filmPage/filmPage';
import { Router } from 'react-router-dom';

const meta: Meta<typeof FilmPage> = {
  title: 'Pages/FilmPage',
  component: FilmPage,
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
    score: '8.0',
    info: {
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
    score: '8.0',
    info: {
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
  decorators: [
    (Story) => (
      <Router location={'/'} navigator={mockNavigator}>
        <Story />
      </Router>
    ),
  ],
};
