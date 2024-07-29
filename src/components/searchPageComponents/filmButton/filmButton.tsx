import { Link } from 'react-router-dom';
import './film-button.css';

interface FilmButtonProps {
  setFilmId: (title: string) => void;
  title: string;
  year: string;
  poster: string;
  id: string;
}

export const FilmButton = (props: FilmButtonProps) => {
  const setFilmId = () => {
    props.setFilmId(props.id);
  };

  return (
    <Link to="/film">
      <button className="film-button" onClick={setFilmId}>
        <div className="film-button__info">
          <p className="film-button__title">{props.title}</p>
          <p className="film-button__year">{props.year}</p>
        </div>
        <div className="film-button__poster">
          <img src={props.poster} alt="image" />
        </div>
      </button>
    </Link>
  );
};
