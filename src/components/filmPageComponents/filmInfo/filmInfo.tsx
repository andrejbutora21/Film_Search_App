import './film-info.css';
import { FilmFeatureType } from '../../../types';
import { FilmFeature } from '../filmFeature/filmFeature';

interface FilmInfoProps {
  plot: string;
  features: FilmFeatureType[];
}

export const FilmInfo = (props: FilmInfoProps) => {
  return (
    <div className="film-info">
      <p className="film-info__plot">{props.plot}</p>
      <ul className="film-info__list">
        {props.features.map((feature, index) => (
          <li key={index}>
            <FilmFeature feature={feature.feature} details={feature.details} />
          </li>
        ))}
      </ul>
    </div>
  );
};
