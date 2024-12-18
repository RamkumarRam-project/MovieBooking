import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../loading";
import TamilMoviesSearch from "./searchapi";

const IndianMovies = ({ languages = ["hi", "te", "kn", "ml", "bn", "mr", "gu", "pa"] }) => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]); // Movies after applying search filter
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // Search term input

  const API_KEY = "dc8590b523351030b3156742702ba392";
  const API_URL = `https://api.themoviedb.org/3/discover/movie`;

  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };

  const fetchIndianMovies = async () => {
    const totalMovies = 15000;
    const moviesPerPage = 20;
    const pagesPerLanguage = Math.ceil(totalMovies / languages.length / moviesPerPage);
    const allMovies = [];
    setLoading(true);

    try {
      for (const lang of languages) {
        let currentPage = 1;
        while (currentPage <= pagesPerLanguage) {
          const response = await fetch(
            `${API_URL}?api_key=${API_KEY}&with_original_language=${lang}&sort_by=popularity.desc&page=${currentPage}`
          );

          if (!response.ok) {
            throw new Error(`Failed to fetch movies for language: ${lang}`);
          }

          const data = await response.json();

          allMovies.push(...data.results);

          if (allMovies.length >= totalMovies) break;

          currentPage++;
        }

        if (allMovies.length >= totalMovies) break;
      }

      setMovies(allMovies.slice(0, totalMovies)); 
      setFilteredMovies(allMovies.slice(0, totalMovies)); // Set initial filtered list
    } catch (err) {
      setError(err.message || "Something went wrong while fetching movies.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIndianMovies();
  }, []); // Fetch movies on component mount

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    // Filter movies based on title matching the search term
    const filtered = movies.filter((movie) =>
      movie.title?.toLowerCase().includes(value)
    );
    setFilteredMovies(filtered);
  };

  return (
    <div>
      <h4 className="text-primary text-center pb-3 mt-2">All-Indian Movies</h4>

      {/* Search Input */}
      
      <TamilMoviesSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
      />

      {loading && <p className="text-center"><Loading LoadName="RAM-All-Ind" /></p>}
      {error && <p className="text-center text-danger">{error}</p>}

      <div className="container">
        <div className="row">
          {filteredMovies.map((movie) => (
            <div key={movie.id} className="col-sm-6 col-md-4 col-lg-3 mb-4 api-fetch-page">
              <div className="card">
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : "images/imdb.webp"
                  }
                  alt={movie.title}
                  className="card-img-top movie-poster"
                />
                <div className="card-body cont-sec-2">
                  <h5 className="card-title movie-title">{movie.title}</h5>
                  <div className="d-flex cont-sec-1">
                    <p className="movie-rating">
                      <i className="far fa-comment comment-up"></i> {movie.vote_average} |
                      <i className="far fa-thumbs-up comment-ups"></i> {movie.vote_count}
                    </p>
                  </div>
                  <button
                    className="btn btn-primary btn-sm mt-2"
                    onClick={() => handleNavigate(`/movie/${movie.id}`)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}

          {!loading && filteredMovies.length === 0 && (
            <div className="text-center w-100 mt-3">
              <p>No movies found for{searchTerm}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IndianMovies;
