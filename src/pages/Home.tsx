import React, { useState, useEffect } from "react";
import { Button } from "../components/button";
import { searchMovies } from "../api/api";
// import styles from "./Home.module.css";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setLoading(true);
    setError(null);
    try {
      const response = await searchMovies(searchQuery, page);
      setMovies(response.results);
      setTotalPages(response.total_pages);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    handleSearch();
  }, [page]);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
      handleSearch();
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      handleSearch();
    }
  };

  return (
    <div>
      <h2>Welcome to the Home Page!</h2>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Введите название фильма"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "300px",
          }}
        />
        <Button
          label={loading ? "Загрузка..." : "Поиск"}
          onClick={handleSearch}
        />
      </div>

      {error && (
        <div style={{ color: "red", marginBottom: "20px" }}>Error: {error}</div>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {movies.map((movie) => (
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
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <Button
          label="Предыдущая страница"
          onClick={handlePrevPage}
          disabled={page === 1}
        />
        <span>
          Страница {page} из {totalPages}
        </span>
        <Button
          label="Следующая страница"
          onClick={handleNextPage}
          disabled={page === totalPages}
        />
      </div>
    </div>
  );
};

export default Home;
