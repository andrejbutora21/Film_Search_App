import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './layout.css';
import { SearchPage } from '../pages/searchPage/searchPage';
import { FilmPage } from '../pages/filmPage/filmPage';
import { useSingleFilm } from '../../hooks/useFilms';
import { ApiRatingType } from '../../types';
import useLocalStorage from 'use-local-storage';
import { NotFoundPage } from '../pages/notFoundPage/notFoundPage';
('../../types');

export const Layout = () => {
  const [filmId, setFilmId] = useLocalStorage('filmId', '');
  const { data } = useSingleFilm(filmId);

  const filmData = {
    poster: data?.Poster || 'https://placehold.co/600x400',
    title: data?.Title || '-',
    year: data?.Year || '-',
    score: data?.imdbRating || '-',
    id: data?.imdbID || '-',
    info: {
      plot: data?.Plot || '-',
      features: [
        { feature: 'Runtime', details: data?.Runtime || '-' },
        { feature: 'Released', details: data?.Released || '-' },
        { feature: 'Genre', details: data?.Genre || '-' },
        { feature: 'Language', details: data?.Language || '-' },
        { feature: 'Country', details: data?.Country || '-' },
        { feature: 'Director', details: data?.Director || '-' },
        { feature: 'Writer', details: data?.Writer || '-' },
        { feature: 'Actors', details: data?.Actors || '-' },
      ],
    },
    ratings:
      data?.Ratings?.map((rating: ApiRatingType) => ({
        name: rating.Source,
        rating: rating.Value,
      })) || [],
  };

  return (
    <div className="layout">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchPage setFilmId={setFilmId} />} />
          <Route
            path="/film"
            element={
              <FilmPage
                poster={filmData.poster}
                title={filmData.title}
                year={filmData.year}
                score={filmData.score}
                id={filmData.id}
                info={filmData.info}
                ratings={filmData.ratings}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
