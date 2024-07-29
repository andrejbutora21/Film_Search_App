import { FilmButtonType } from '../../../types';
import { FilmButton } from '../filmButton/filmButton';
import './search-body.css';

interface SearchBodyProps {
  setFilmId: (title: string) => void;
  films: FilmButtonType[];
}

export const SearchBody = (props: SearchBodyProps) => {
  return (
    <div className="search-body">
      <ul className="search-body__list">
        {props.films.map((film, index) => (
          <li key={index}>
            <FilmButton
              setFilmId={props.setFilmId}
              title={film.title}
              year={film.year}
              poster={film.poster}
              id={film.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
