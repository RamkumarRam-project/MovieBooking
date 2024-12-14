import React, { useEffect, useState,useNavigate } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../loading';
//dc8590b523351030b3156742702ba392


function ApiDetails() {
  const { id } = useParams(); // Extract `id` from the URL
  const [data, setData] = useState(null); // To store the movie/TV details
  const [loading, setLoading] = useState(true); // To handle the loading state
  const [error, setError] = useState(null); // To handle errors

  const API_KEY = "dc8590b523351030b3156742702ba392"; 
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        setError(null); // Clear any previous errors

        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
        );

        if (!response.ok) {
          throw new Error(`Movie details could not be retrieved ${response.statusText}`);
        }

        const result = await response.json();
        setData(result); // Store the fetched data
      } catch (error) {
        console.error("Movie details could not be retrieved", error);
        setError(error.message);
      } finally {
        setLoading(false); // Stop the loading state
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <div><Loading LoadName="RAM CINEMAS"/></div>;
  }

  if (error) {
    return (
      <div className='error-msg' style={{ color: 'crimson', fontSize: '25px', textAlign: 'center',marginTop:"20px",height:"100%vh" }}>
        Movie details are currently unavailable. Please check back later!
      </div>
    );
  }
  

  const formatTMDBPopularity = (popularity) => {
    if (popularity >= 1000) {
      return `${(popularity / 1000).toFixed(1)} Core+Views`; // Core (Crore)
    } else if (popularity >= 100) {
      return `${(popularity / 100).toFixed(1)} Core+Views`; 
    } 
    else if (popularity >= 10) {
      return `${(popularity / 10).toFixed(1)} Core+Views`;
     }
    else {
      return popularity.toFixed(1); // Direct value for very small numbers
    }
  };
  
  const formatNumber = (num) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1) + 'M';  // Billions
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';  // Millions
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'core';  // Thousands
    } else {
      return num;  // Less than 1000
    }
  };
  

  return (
    <div className="movie-details-container">
  {data ? (
    <div className="movie-details-content">
      <h1 className="movie-title">{data.title || data.name}</h1>
      <div className="row details-row">
        {/* Poster Section */}
        <div className="col-sm-12 col-lg-6 poster-section">
          <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={data.title || data.name}
            className="movie-poster"
          />
          
        </div>
                           
        {/* Details Section */}
        <div className="col-sm-12 col-md-6 details-section">
        <div className='imdb-btn mt-5'>

        <p className="view-icons">
        👁️
        {formatTMDBPopularity(data.popularity)} 
        </p>
         


            <a   target="_blank" href={`https://www.imdb.com/title/${data.imdb_id}/`}>
            <span className='text-success '>Watch Free</span>
               <i className="fas fa-tv bg-warning  text-white text-center me-2 tv-icon ">
             Watch
            </i>
            
             </a>
             </div>

          <table className="details-table mt-3">
            <tbody>
              <tr>
                <th>Language 📚</th>
                <td>{data.original_language || "Not Available Information"}</td>
              </tr>
              <tr>
                <th>Release Date 📅</th>
                <td>{data.release_date || "Not Available Information"}</td>
              </tr>
              <tr>
                <th>Rating 🌟</th>
                <td>{data.vote_average || "Not Available Information"}</td>
              </tr>
              <tr>
              <th>Revenue 💰</th>
              <td>
             {data.revenue ? 
             `$${data.revenue.toLocaleString()}` 
             : "Not Available Information"}
             </td>
              </tr>

              <tr>
              <th>Runtime ⏱</th>
               <td>
               {data.runtime
               ? `${Math.floor(data.runtime / 60)}h ${data.runtime % 60}m`
              :"Not Available Information"}
                </td>
               </tr>
              <tr>
                <th>Origin Country 🌍 </th>
                <td>{data.origin_country ||"Not Available Information"}</td>
              </tr>
              <tr>
              <th>Budget 💵</th>
             <td>
            {data.budget
            ? formatNumber(data.budget)
            : "Not Available Information"}
            </td>
             </tr>
             <tr>
                <th>Status✅</th>
                <td>{data.status ||"Not Available Information"}</td>
              </tr>
              <tr>
             <th>Production Companies 🎬</th>
             <td>
              {data.production_companies && data.production_companies.length > 0 ? (
             data.production_companies.map((company, index) => (
               <span key={index}>{company.name}{index < data.production_companies.length - 1 ? ", " : ""}</span>
             ))
                  ) : (
               "Not Available Information"
            )}
           </td>
            </tr>
            <tr>
             <th>Production Countries 🌍</th>
             <td>
              {data.production_countries && data.production_countries.length > 0 ? (
             data.production_countries.map((company, index) => (
               <span key={index}>{company.name}{index < data.production_countries.length - 1 ? ", " : ""}</span>
             ))
                  ) : (
              "Not Available Information"
            )}
           </td>
            </tr>
            <tr>
             <th>Movie Exprience 💥</th>
             <td>
              {data.genres && data.genres.length > 0 ? (
             data.genres.map((company, index) => (
               <span key={index}>{company.name}{index < data.genres.length - 1 ? ", " : ""}</span>
             ))
                  ) : (
               "Not Available Information"
            )}
           </td>
            </tr>
            </tbody>
          </table>

         
          <p className="movie-overview">{data.overview || "Overview not available."}</p>
        </div>
      </div>
      
    </div>
  ) : (
    <p className="no-data-message">No data found.</p>
  )}
</div>

  );
}

export default ApiDetails;
