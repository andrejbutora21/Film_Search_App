import './film-rating.css';

interface FilmRatingProps {
  name: string;
  rating: string;
}

export const FilmRating = (props: FilmRatingProps) => {
  return (
    <div className="film-rating">
      <p className="film-rating__name">{props.name}</p>
      <p>{props.rating}</p>
    </div>
  );
};
