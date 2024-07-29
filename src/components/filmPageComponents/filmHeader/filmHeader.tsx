import './film-header.css';
import heartRegular from '../../../assets/icons/heart-regular.svg';
import heartSolid from '../../../assets/icons/heart-solid.svg';
import arrowLeftSolid from '../../../assets/icons/arrow-left-solid.svg';
import { Link } from 'react-router-dom';
import {
  addFilmToFavourites,
  removeFilmFromFavourites,
  isFilmFavourite,
} from '../../../favouritesFunctions';
import { useEffect, useState } from 'react';

export interface FilmHeaderProps {
  title: string;
  year: string;
  poster: string;
  id: string;
}

export const FilmHeader = (props: FilmHeaderProps) => {
  const [favourite, setFavourite] = useState(false);
  useEffect(() => {
    setFavourite(isFilmFavourite(props.id));
  }, [props.id]);

  const changeFavourite = () => {
    if (favourite) {
      removeFilmFromFavourites(props.id);
    } else {
      addFilmToFavourites(props.id);
    }
    setFavourite(!favourite);
  };

  return (
    <header className="film-header">
      <img className="film-header__poster" src={props.poster} alt="" />
      <div className="film-header__content">
        <Link to="/" className="icon arrow-icon">
          <img
            src={arrowLeftSolid}
            alt={'Back'}
            className="icon arrow-icon film-arrow-icon"
          />
        </Link>
        <div className="film-header__text">
          <h1>{props.title}</h1>
          <p>{props.year}</p>
        </div>
        <button
          className="heart-icon-button icon heart-icon"
          onClick={changeFavourite}
        >
          {favourite ? (
            <img
              src={heartSolid}
              alt={'Favourite'}
              className="icon heart-icon film-heart-icon"
            />
          ) : (
            <img
              src={heartRegular}
              alt={'Not favourite'}
              className="icon heart-icon film-heart-icon"
            />
          )}
        </button>
        <div className="film-header__spacer"></div>
      </div>
    </header>
  );
};
