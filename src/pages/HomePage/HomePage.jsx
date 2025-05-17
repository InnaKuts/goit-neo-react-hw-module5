import { useState, useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import { getTrendingMovies } from "../../services/apiService";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const trendingMovies = await getTrendingMovies();
        setMovies(trendingMovies);
      } catch {
        setError("Failed to fetch trending movies. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Trending Movies</h1>

      {isLoading && <Loader />}

      {error && (
        <div className={styles.error}>
          <p>{error}</p>
        </div>
      )}

      {!isLoading && !error && movies.length > 0 && (
        <MovieList movies={movies} />
      )}

      {!isLoading && !error && movies.length === 0 && (
        <div className={styles.noMovies}>
          <p>No trending movies found. Please try again later.</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
