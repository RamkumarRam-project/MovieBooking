
import axios from "axios";
import Logo from "../logo";
import Loading from "../loading";
import React, {  useState,useEffect } from 'react';

function Playing() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const [selectedMovie, setSelectedMovie] = useState(null);

    const handlePopupOpen = (movie) => {
      setSelectedMovie(movie);
    };
  
    const handlePopupClose = () => {
      setSelectedMovie(null);
    };

    const API_KEY = "dc8590b523351030b3156742702ba392"; 
    const API_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
  
    useEffect(() => {
      const fetchMovies = async () => {
        try {
          const response = await axios.get(API_URL);
          setMovies(response.data.results);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching playing movies:", error);
          setLoading(false);
        }
      };
  
      fetchMovies();
    }, []);
  
    if (loading) return <div><Loading/></div>;
    
    return (
      <div>
  
        <Logo/>
  
        <h4 className="text-primary text-center pb-3">Now-Playing</h4>
        <div className="container">
            <div className="row">
          {movies.map((movie) => (
            <div key={movie.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="card-img-top movie-poster"
              />
              <div className="card-body cont-sec-2">
                <h5 className="card-title movie-title">{movie.title}</h5>
             <div className="d-flex cont-sec-1">
                <p className="movie-rating">⭐ {movie.vote_count}</p>
                <p className="movie-release">
                    <i className="fas fa-eye text-primary"></i>
                     {(movie.popularity / 1000).toFixed(1)}K</p>
             </div>
         
                <button
                  className="btn btn-primary btn-sm mt-2"
                  onClick={() => handlePopupOpen(movie)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>

      {/* Popup Modal */}
      {selectedMovie && (
        
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header p-0">
                <h5 className="modal-title">{selectedMovie.title}</h5>
                <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handlePopupClose}
                >
                  Close
                </button>
              </div>
              </div>
              
              
            <div className="row">
            <div className="col-sm-6">
              <div className="modal-body scrollable-content">
                <img
                  src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
                  alt={selectedMovie.title}
                  className="img-fluid rounded mb-3"
                />
                </div>
             </div>

               
                <div className="col-sm-6">
                <table className="table mt-5 mr-3">
                  <tbody>
                    <tr>
                      <th>Language</th>
                      <td>{selectedMovie.original_language}</td>
                    </tr>
                    <tr>
                      <th>Release-Date</th>
                      <td>{selectedMovie.release_date}</td>
                    </tr>
                    <tr>
                      <th>Reviews</th>
                      <td>{selectedMovie.vote_average}</td>
                    </tr>
                  </tbody>
                </table>
                </div>
                
              </div>
              <p className="p-3">{selectedMovie.overview}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


       


export default Playing;