// filepath: /Users/kst_obд/Учеба/МТУСИ/4 курс/UI UX/my_app/src/components/movieCard/index.tsx
import React from "react";
import { Button } from "../button";
import "./MovieCard.css";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

interface MovieCardProps {
  movie: Movie;
  isFavorite: boolean;
  onAddToFavorites: (movie: Movie) => void;
  onRemoveFromFavorites: (movieId: number) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  isFavorite,
  onAddToFavorites,
  onRemoveFromFavorites,
}) => {
  return (
    <div className="movie-card">
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : `http://dummyimage.com/500x750&text=${movie.title}`
        }
        alt={movie.title}
      />
      <div className="movie-card-content">
        <h3 className="movie-card-title">{movie.title}</h3>
        <p className="movie-card-release-date">
          {movie.release_date?.split("-")[0]}
        </p>
        <p className="movie-card-rating">Rating: {movie.vote_average}</p>
        {isFavorite ? (
          <Button
            className="movie-card-favorite-button"
            label="Удалить из избранного"
            onClick={() => onRemoveFromFavorites(movie.id)}
            color="red"
            size="small"
          />
        ) : (
          <Button
            className="movie-card-favorite-button"
            label="Добавить в избранное"
            onClick={() => onAddToFavorites(movie)}
            color="green"
            size="small"
          />
        )}
      </div>
    </div>
  );
};

export default MovieCard;
