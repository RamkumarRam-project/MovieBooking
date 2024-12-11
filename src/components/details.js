// import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
 import datas from './Movies.json'
import Logo from './logo';

function Details(){
    const { id } = useParams();
    const movie = datas.find((m) => m.id === parseInt(id)); // Find the movie by ID

    if (!movie) {
      return <p>Movie not found</p>;
    }
    // If no movie is found with the provided `id`, display a message
    // const[datas,setDatas]=useState();
    // useEffect(()=>{
    //     fetch(`https://backend-crud-one.vercel.app/product/${_id}`)
    //     .then(response=>response.json())
    //     .then(datas=>setDatas(datas))
    //     .catch(error=>console.error('Error:,error',error));
    //  },[_id]);

    
   return(
    <>
      <Logo/>

     <div className="container mt-5 details-container">
  <div className="row g-4 align-items-center">
    {/* Left Column: Movie Image */}
    <div className="col-sm-12 col-md-6">
      <div className="movie-image-container shadow-lg rounded">
        <img
          src={movie.image}
          alt={movie.name}
          className="img-fluid rounded"
          style={{
            width: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </div>

    {/* Right Column: Movie Details */}
    <div className="col-sm-12 col-md-6">
      <div className="details-content p-4 shadow rounded">
        <h2 className="movie-title text-primary">
          {movie.title} ({movie.releaseYear})
        </h2>
        <h5 className="title-sec text-muted">
          Starring: {movie.hero} & {movie.heroine}
        </h5>
        <p className="mt-3">
          <span className="fw-bold">About:</span> {movie.description}
        </p>
        <div className="movie-info mt-4">
          <h6>
            <span className="text-danger">Budget:</span> {movie.budget}
          </h6>
          <h6>
            <span className="text-danger">Release Date:</span> {movie.releaseDate}
          </h6>
          <h6>
            <span className="text-danger">Director:</span> {movie.director}
          </h6>
        </div>
        <button
          className="btn btn-primary mt-4 px-5"
          style={{
            fontWeight: "bold",
            borderRadius: "30px",
          }}
        >
          Book Now
        </button>
      </div>
    </div>
  </div>
</div>

   
                    
    </>
   )
}

export default Details;