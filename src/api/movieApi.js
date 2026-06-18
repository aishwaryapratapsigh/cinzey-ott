import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/trending/movie/week`, {
      params: { api_key: API_KEY }
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
