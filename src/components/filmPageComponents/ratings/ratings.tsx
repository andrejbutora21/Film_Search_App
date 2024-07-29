import './ratings.css';
import { FilmRatingType } from '../../../types';
import { FilmRating } from '../filmRating/filmRating';

interface RatingsProps {
  ratings: FilmRatingType[];
}

export const Ratings = (props: RatingsProps) => {
  return (
    <div className="ratings">
      <ul className="ratings__list">
        {props.ratings.map((rating, index) => (
          <li key={index}>
            <FilmRating name={rating.name} rating={rating.rating} />
          </li>
        ))}
      </ul>
    </div>
  );
};
