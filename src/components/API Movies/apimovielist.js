import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../logo";
import Loading from "../loading";
import axios from "axios";




const ApiMovieList = ({ api ,titles}) => {
 
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const Navigate =useNavigate();
  const handleNavigate = (path) => {
    Navigate(path);
   
  };
  
  const API_KEY = "dc8590b523351030b3156742702ba392"; 
  const BASE_URL = "https://api.themoviedb.org/3/";


  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const API_URL = `${BASE_URL}${api}?api_key=${API_KEY}`;
        const response = await axios.get(API_URL);
        setMovies(response.data.results || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, [api]); 

  if(loading)return <Loading LoadName="RAM CINEMAS"/>

  
  return (
    <div>

      <Logo/>
      <h4 className="text-primary text-center pb-3">{titles}</h4>
        <div className="container">
            <div className="row">
          {movies.map((movie) => (
            
            <div key={movie.id} className="col-sm-6 col-md-4 col-lg-3 mb-4 api-fetch-page">
            <div className="card">
              <img
                 src={
                 
                  movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "https://via.placeholder.com/500x750?text=No+Image"
                  
                }
                alt={movie.title}
                className="card-img-top movie-poster"
              />
              <div className="card-body cont-sec-2">
                <h5 className="card-title movie-title">{movie.title}</h5>
             <div className="d-flex cont-sec-1">
                
                
                     <p className="movie-rating">⭐ {movie.vote_average} | 👍 
                      {movie.vote_count}</p>
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

export default ApiMovieList;
