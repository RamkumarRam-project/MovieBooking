import React, { useState, useEffect } from "react";
import axios from "axios";

const TamilMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "YOUR_API_KEY"; 
  const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=ta-IN&region=IN&sort_by=popularity.desc`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(API_URL);
        setMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Tamil movies:", error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <div>Loading Tamil movies...</div>;

  return (
    <div>
      <h1>Tamil Movies</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
            <h3>{movie.title}</h3>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <p>Rating: {movie.vote_average} / 10</p>
            <p>Release Date: {movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TamilMovies;
