import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./loading";
import TamilMoviesSearch from "./API Movies/searchapi";

const TamilMovies = () => {
  const [movies, setMovies] = useState([]); // Complete list of movies
  const [filteredMovies, setFilteredMovies] = useState([]); // Movies filtered by search
  const [searchTerm, setSearchTerm] = useState(""); // Search term input
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Track loading state

  const totalMovies = 4000; // Target number of movies
  const moviesPerPage = 20; // TMDb returns 20 movies per page
  const totalPages = Math.ceil(totalMovies / moviesPerPage); // Number of pages to fetch

  const API_KEY = "dc8590b523351030b3156742702ba392";
  const API_URL = `https://api.themoviedb.org/3/discover/movie`;

  const navigate = useNavigate();

  // Navigate to movie details
  const handleNavigate = (path) => {
    navigate(path);
  };

  // Fetch Tamil movies by page
  const fetchTamilMovies = async (page) => {
    try {
      const response = await fetch(
        `${API_URL}?api_key=${API_KEY}&with_original_language=ta&sort_by=popularity.desc&page=${page}`
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch Tamil movies (Page: ${page}).`);
      }
      const data = await response.json();
      return data.results || [];
    } catch (err) {
      throw new Error(err.message || "Something went wrong.");
    }
  };

  // Fetch all Tamil movies across multiple pages
  const fetchAllTamilMovies = async () => {
    setLoading(true);
    setError("");
    const allMovies = [];
    try {
      for (let page = 1; page <= totalPages; page++) {
        const moviesFromPage = await fetchTamilMovies(page);
        allMovies.push(...moviesFromPage);

        // Stop fetching if we've reached the desired number of movies
        if (allMovies.length >= totalMovies) break;
      }
      setMovies(allMovies.slice(0, totalMovies));
      setFilteredMovies(allMovies.slice(0, totalMovies)); // Initialize filtered list
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  // Search input handler
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    // Filter movies based on title matching the search term
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(value)
    );
    setFilteredMovies(filtered);
  };

  useEffect(() => {
    fetchAllTamilMovies();
  }, []);

  return (
    <div>
      <h4 className="text-primary text-center mt-5">Tamil Movies</h4>

         <TamilMoviesSearch 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
      />
      {/* Loading and Error Messages */}
      {loading && (
        <p className="text-center">
          <Loading LoadName="RAM-Tamil-Movies" />
        </p>
      )}
      {error && <p className="text-center text-danger">{error}</p>}

      {/* Movie Grid */}
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
                      <i className="far fa-comment comment-up"></i>{movie.vote_average}|
                      <i className="far fa-thumbs-up comment-ups"></i>{movie.vote_count}
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
        </div>
      </div>
      

    </div>
  );
};

export default TamilMovies;
