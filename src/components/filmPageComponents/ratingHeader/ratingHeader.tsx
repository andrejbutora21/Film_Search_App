import './rating-header.css';

interface RatingHeaderProps {
  score: string;
}

export const RatingHeader = (props: RatingHeaderProps) => {
  return (
    <div className="rating-header">
      <h2>Rating</h2>
      <p>Score: {props.score}</p>
    </div>
  );
};
