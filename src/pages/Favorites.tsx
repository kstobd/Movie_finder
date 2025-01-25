import React, { useState, useEffect } from "react";
import { Button } from "../components/button";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const removeFromFavorites = (movieId: number) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter(
        (movie) => movie.id !== movieId
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  return (
    <div>
      <h1>Избранное</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {favorites.map((movie) => (
          <div
            key={movie.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "https://via.placeholder.com/500x750"
              }
              alt={movie.title}
              style={{ width: "100%", height: "auto" }}
            />
            <div style={{ padding: "10px" }}>
              <h3 style={{ margin: "0 0 5px 0" }}>{movie.title}</h3>
              <p style={{ margin: "0", color: "#666" }}>
                {movie.release_date?.split("-")[0]}
              </p>
              <p style={{ margin: "0", color: "#666" }}>
                Rating: {movie.vote_average}
              </p>
              <Button
                label="Удалить из избранного"
                onClick={() => removeFromFavorites(movie.id)}
                color="red"
                size="small"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
