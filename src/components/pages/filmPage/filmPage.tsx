import { FilmHeader } from '../../filmPageComponents/filmHeader/filmHeader';
import { FilmInfo } from '../../filmPageComponents/filmInfo/filmInfo';
import { RatingHeader } from '../../filmPageComponents/ratingHeader/ratingHeader';
import { Ratings } from '../../filmPageComponents/ratings/ratings';
import './film-page.css';

interface FilmPageProps {
  poster: string;
  title: string;
  year: string;
  score: string;
  id: string;
  info: {
    plot: string;
    features: {
      feature: string;
      details: string;
    }[];
  };
  ratings: {
    name: string;
    rating: string;
  }[];
}

export const FilmPage = (props: FilmPageProps) => {
  return (
    <div className="film-page">
      <header>
        <FilmHeader
          poster={props.poster}
          title={props.title}
          year={props.year}
          id={props.id}
        />
      </header>
      <div className="film-page__info">
        <FilmInfo plot={props.info.plot} features={props.info.features} />
      </div>
      <div className="film-page__rating-header">
        <RatingHeader score={props.score} />
      </div>
      <div className="film-page__ratings">
        <Ratings ratings={props.ratings} />
      </div>
    </div>
  );
};
