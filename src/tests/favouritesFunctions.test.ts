import {
  addFilmToFavourites,
  isFilmFavourite,
  removeFilmFromFavourites,
} from '../favouritesFunctions';

describe('isFilmFavourite', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('film Id is in localStorage', () => {
    const favourites = ['1', '2', '3'];
    localStorage.setItem('favouriteFilms', JSON.stringify(favourites));

    expect(isFilmFavourite('2')).toBe(true);
  });

  test('film Id is not in localStorage, localStorage is empty', () => {
    const filmId = '1';
    expect(isFilmFavourite(filmId)).toBe(false);
  });
});

describe('addFilmToFavourites', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('adds a film to localStorage', () => {
    localStorage.setItem('favouriteFilms', JSON.stringify(['1']));

    addFilmToFavourites('2');

    const favourites = JSON.parse(
      localStorage.getItem('favouriteFilms') || '[]',
    );
    expect(favourites).toContain('1');
    expect(favourites).toContain('2');
  });
});

describe('removeFilmFromFavourites', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('removes a film from localStorage', () => {
    localStorage.setItem('favouriteFilms', JSON.stringify(['1', '2', '3']));

    removeFilmFromFavourites('1');

    const favourites = JSON.parse(
      localStorage.getItem('favouriteFilms') || '[]',
    );
    expect(favourites).not.toContain('1');
    expect(favourites).toContain('2');
    expect(favourites).toContain('3');
  });
});
