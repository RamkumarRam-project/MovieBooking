import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const IndianMovies = ({ languageCode }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [movieCount, setMovieCount] = useState(0);
  
  const Navigate =useNavigate();
    const handleNavigate = (path) => {
      Navigate(path);
     
    };
  const API_KEY = "dc8590b523351030b3156742702ba392"; 

  
  const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_original_language=${languageCode}&sort_by=popularity.desc`;

  // Fetch Indian language movies
  const fetchIndianMovies = async () => {
    let allMovies = [];
    let currentPage = 1;
    let totalMovies = 0;

    try {
      while (allMovies.length < 150) { // Ensure you get at least 150 movies
        const response = await fetch(`${API_URL}&page=${currentPage}`);
        if (!response.ok) {
          throw new Error("Failed to fetch movies.");
        }

        const data = await response.json();

        // Add movies to the list
        allMovies = [...allMovies, ...data.results];
        if (allMovies.length >= 150) break;

        currentPage++;
      }

      setMovies(allMovies);
      setMovieCount(allMovies.length);
    } catch (err) {
      setError(err.message || "Something went wrong.");
      setMovieCount(0);
    }
  };

  useEffect(() => {
    if (languageCode) {
      fetchIndianMovies();
    }
  }, [languageCode]); // Trigger fetch whenever languageCode changes

  return (
    <div>
      <h4 className="text-primary text-center pb-3">All-Indian</h4>
        <div className="container">
            <div className="row">
          {movies.map((movie) => (
            
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
                <h5 className="card-title movie-title">
                
                {movie.title }
             
             </h5>

             <div className="d-flex cont-sec-1">
                
                
             <p className="movie-rating">
                
             <i className="far fa-comment comment-up" ></i>{movie.vote_average} |
               
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
      </div>
      </div>
    </div>
   
  );
};

export default IndianMovies;
