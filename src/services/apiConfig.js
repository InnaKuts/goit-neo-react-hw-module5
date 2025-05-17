export const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5N2NmMGRlNTM0ZmZmMjZlZGE1N2U1ZjE4YWE2ZjFmYSIsIm5iZiI6MTc0NzQ2OTQwNi4wMiwic3ViIjoiNjgyODQ0NWVmNWNiZjFkODYxZTI0MTU0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.eUDyYsNBXo-6mt8Iv4W16nAA_KzjoJ1jUfWMizULNmE";
export const BASE_URL = "https://api.themoviedb.org/3";
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const ENDPOINTS = {
  TRENDING: "/trending/movie/day",
  SEARCH: "/search/movie",
  MOVIE_DETAILS: "/movie",
  MOVIE_CREDITS: "/credits",
  MOVIE_REVIEWS: "/reviews",
};

export const API_CONFIG = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  },
  params: {
    language: "en-US",
    include_adult: false,
  },
};
