const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

interface MovieResponse {
  results: Array<{
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
  }>;
  total_pages: number;
  total_results: number;
}

export const searchMovies = async (query: string, page: number = 1): Promise<MovieResponse> => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}&language=ru-RU&page=${page}`,
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${API_KEY}`
        }
      }
    );
    const data = await response.json();
    console.log('API Response:', data);
    if (!response.ok) {
      throw new Error(data.status_message || 'API request failed');
    }
    return data;
  } catch (error) {
    console.error('Search movies error:', error);
    throw error;
  }
};

export const getPopularMovies = async (page: number = 1): Promise<MovieResponse> => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular?language=ru-RU&page=${page}`,
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${API_KEY}`
        }
      }
    );
    const data = await response.json();
    console.log('API Response:', data);
    if (!response.ok) {
      throw new Error(data.status_message || 'API request failed');
    }
    return data;
  } catch (error) {
    console.error('Get popular movies error:', error);
    throw error;
  }
};
