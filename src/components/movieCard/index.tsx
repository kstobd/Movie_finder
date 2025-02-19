import React from "react";
import { Button } from "../button";
import styles from "./MovieCard.module.css";

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
    <div className={styles["movie-card"]}>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : `http://dummyimage.com/500x750&text=${movie.title}`
        }
        alt={movie.title}
        className={styles["movie-card-image"]}
      />
      <div className={styles["movie-card-content"]}>
        <h3 className={styles["movie-card-title"]}>{movie.title}</h3>
        <p className={styles["movie-card-release-date"]}>
          {movie.release_date?.split("-")[0]}
        </p>
        <p className={styles["movie-card-rating"]}>
          Rating: {movie.vote_average}
        </p>
        {isFavorite ? (
          <Button
            className={styles["movie-card-favorite-button"]}
            label="Удалить из избранного"
            onClick={() => onRemoveFromFavorites(movie.id)}
            color="red"
            size="small"
          />
        ) : (
          <Button
            className={styles["movie-card-favorite-button"]}
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
