import { useSingleFilm } from './hooks/useFilms';

export const addFilmToFavourites = (filmId: string) => {
  const favourites = JSON.parse(localStorage.getItem('favouriteFilms') || '[]');

  if (!favourites.includes(filmId)) {
    favourites.push(filmId);
    localStorage.setItem('favouriteFilms', JSON.stringify(favourites));
  }
};

export const removeFilmFromFavourites = (filmId: string) => {
  const favourites = JSON.parse(localStorage.getItem('favouriteFilms') || '[]');

  if (favourites.includes(filmId)) {
    const newFavourites = favourites.filter((id: string) => id !== filmId);
    localStorage.setItem('favouriteFilms', JSON.stringify(newFavourites));
  }
};

export const getFavouritesFilms = (title: string) => {
  const favourites = JSON.parse(localStorage.getItem('favouriteFilms') || '[]');

  if (title === '') {
    return favourites.map((filmId: string) => useSingleFilm(filmId));
  }
  const lowerCaseTitle = title.toLowerCase();

  const favouriteFilms = favourites?.map((filmId: string) =>
    useSingleFilm(filmId),
  );
  const filteredFilms = favouriteFilms?.filter((film: any) =>
    film?.data?.Title?.toLowerCase()?.includes(lowerCaseTitle),
  );

  return filteredFilms;
};

export const isFilmFavourite = (filmId: string) => {
  const favourites = JSON.parse(localStorage.getItem('favouriteFilms') || '[]');
  return favourites?.includes(filmId);
};
