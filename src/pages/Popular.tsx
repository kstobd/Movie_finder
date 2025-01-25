import React, { useState, useEffect } from "react";
import { Button } from "../components/button";
import { useNavigate } from "react-router-dom";
import { getPopularMovies } from "../api/api";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

const Popular: React.FC = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchPopularMovies = async (page: number) => {
    setLoading(true);
    setError(null);
    try {
      const response = await getPopularMovies(page);
      setMovies(response.results);
      setTotalPages(response.total_pages);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPopularMovies(page);
  }, [page]);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div>
      <h1>Popular Page</h1>
      <p>These are the popular movies right now.</p>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
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
          color="blue"
          size="medium"
          disabled={page === 1}
        />
        <span>
          Страница {page} из {totalPages}
        </span>
        <Button
          label="Следующая страница"
          onClick={handleNextPage}
          color="blue"
          size="medium"
          disabled={page === totalPages}
        />
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button label="Go Home" onClick={() => navigate("/")} size="large" />
      </div>
    </div>
  );
};

export default Popular;
