import { SearchBody } from '../../searchPageComponents/searchBody/searchBody';
import { SearchHeader } from '../../searchPageComponents/searchHeader/searchHeader';
import './search-page.css';
import { Paging } from '../../searchPageComponents/paging/paging';
import { usePaginatedFilms } from '../../../hooks/useFilms';
import useLocalStorage from 'use-local-storage';
import { getFavouritesFilms } from '../../../favouritesFunctions';

interface SearchPageProps {
  setFilmId: (title: string) => void;
}

export const SearchPage = (props: SearchPageProps) => {
  const [favouritesFilmsPage, setFavouritesFilmsPage] = useLocalStorage(
    'favouritesFilmsPage',
    false,
  );
  const [searchTitle, setSearchTitle] = useLocalStorage('searchTitle', '');
  const [currentPage, setCurrentPage] = useLocalStorage('currentPage', 1);
  const { data, error, isFetching } = usePaginatedFilms(
    currentPage.toString(),
    searchTitle,
  );
  const favouriteFilms = getFavouritesFilms(searchTitle);

  const changeFavourites = () => {
    setFavouritesFilmsPage(!favouritesFilmsPage);
  };

  const isMessage =
    data?.Error === 'Too many results.' ||
    data?.Error === 'Movie not found!' ||
    (searchTitle === '' && !favouritesFilmsPage);

  const renderMessage = () => {
    if (searchTitle === '' && !favouritesFilmsPage) {
      return (
        <div className="search-page__message">
          Type something in searchbar to search for films.
        </div>
      );
    }

    if (
      searchTitle === '' &&
      favouritesFilmsPage &&
      favouriteFilms.length === 0
    ) {
      return <div className="search-page__message">No favourite films.</div>;
    }

    if (
      searchTitle !== '' &&
      favouritesFilmsPage &&
      favouriteFilms.length === 0
    ) {
      return (
        <div className="search-page__message">
          No favourite films matching your search.
        </div>
      );
    }

    if (data?.Error === 'Too many results.') {
      return (
        <div className="search-page__message">
          Too many results. Try to be more precise.
        </div>
      );
    }

    if (data?.Error === 'Movie not found!') {
      return (
        <div className="search-page__message">
          Movie not found! The movie <strong>{searchTitle}</strong> does not
          exist.
        </div>
      );
    }

    return null;
  };

  const renderFilms = () => {
    if ((isMessage && !favouritesFilmsPage) || isFetching || error) {
      return null;
    }

    const films = favouritesFilmsPage
      ? favouriteFilms?.map((film: any) => film.data)
      : data?.Search;

    return (
      <div className="search-page__body">
        <SearchBody
          setFilmId={props.setFilmId}
          films={
            films?.map((film: any) => ({
              title: film?.Title || '',
              year: film?.Year || '',
              poster: film?.Poster || '',
              id: film?.imdbID || '',
            })) || []
          }
        />
      </div>
    );
  };

  const renderPaging = () => {
    if (isMessage || isFetching || favouritesFilmsPage || error) {
      return null;
    }

    const totalPages = () => {
      return data?.totalResults % 10 === 0
        ? data?.totalResults / 10
        : Math.floor(data?.totalResults / 10) + 1;
    };

    return (
      <div className="search-page__paging">
        <Paging
          currentPage={currentPage}
          totalPages={totalPages()}
          setCurrentPage={setCurrentPage}
        />
      </div>
    );
  };

  return (
    <div className="search-page">
      <header>
        <SearchHeader
          setCurrentPage={setCurrentPage}
          favouritesFilmsPage={favouritesFilmsPage}
          setFavorites={changeFavourites}
          defaultValue={searchTitle}
          setSearchTitle={setSearchTitle}
        />
      </header>
      {renderMessage()}
      {renderFilms()}
      {renderPaging()}
    </div>
  );
};
