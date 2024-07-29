import './film-feature.css';

interface FilmFeatureProps {
  feature: string;
  details: string;
}

export const FilmFeature = (props: FilmFeatureProps) => {
  return (
    <div className="film-feature">
      <p className="film-feature__feature">{props.feature}:</p>
      <p className="film-feature__details">{props.details}</p>
    </div>
  );
};
